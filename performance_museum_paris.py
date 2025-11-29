"""
Performance Museum Paris - Comprehensive Blender Scene Generator
A modern museum celebrating the intersection of Technology, Innovation, and Sports
Fully integrated into a Parisian context with the Seine and Eiffel Tower

Author: Generated for ParisMuseums3DModeling Project
"""

import bpy
import math
import random
from mathutils import Vector

# ============================================================================
# CONFIGURATION
# ============================================================================

MUSEUM_CENTER = Vector((0, 0, 0))
MUSEUM_SCALE = 1.0

# Building dimensions
MAIN_BUILDING_WIDTH = 80
MAIN_BUILDING_DEPTH = 50
MAIN_BUILDING_HEIGHT = 25
ARCHIVE_WING_WIDTH = 30
ARCHIVE_WING_DEPTH = 40
ARCHIVE_WING_HEIGHT = 18

# Paris context positioning
SEINE_Y_OFFSET = 80  # Seine river position (in front of museum)
EIFFEL_Y_OFFSET = 180  # Eiffel Tower across the Seine
CITY_RADIUS = 300

# ============================================================================
# UTILITY FUNCTIONS
# ============================================================================

def clear_scene():
    """Remove all objects from the scene"""
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)
    
    # Clear orphan data
    for block in bpy.data.meshes:
        if block.users == 0:
            bpy.data.meshes.remove(block)
    for block in bpy.data.materials:
        if block.users == 0:
            bpy.data.materials.remove(block)
    for block in bpy.data.collections:
        if block.users == 0:
            bpy.data.collections.remove(block)

def create_collection(name, parent=None):
    """Create a new collection and link it to parent or scene"""
    collection = bpy.data.collections.new(name)
    if parent:
        parent.children.link(collection)
    else:
        bpy.context.scene.collection.children.link(collection)
    return collection

def link_to_collection(obj, collection):
    """Link object to a specific collection"""
    collection.objects.link(obj)
    if obj.name in bpy.context.scene.collection.objects:
        bpy.context.scene.collection.objects.unlink(obj)

def create_material(name, color, alpha=1.0, metallic=0.0, roughness=0.5, emission=0.0):
    """Create a principled BSDF material"""
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    
    # Clear default nodes
    for node in nodes:
        nodes.remove(node)
    
    # Create nodes
    output = nodes.new('ShaderNodeOutputMaterial')
    output.location = (300, 0)
    
    principled = nodes.new('ShaderNodeBsdfPrincipled')
    principled.location = (0, 0)
    principled.inputs['Base Color'].default_value = (*color, 1.0)
    principled.inputs['Metallic'].default_value = metallic
    principled.inputs['Roughness'].default_value = roughness
    principled.inputs['Alpha'].default_value = alpha
    
    if emission > 0:
        principled.inputs['Emission Strength'].default_value = emission
        principled.inputs['Emission Color'].default_value = (*color, 1.0)
    
    links.new(principled.outputs['BSDF'], output.inputs['Surface'])
    
    if alpha < 1.0:
        mat.blend_method = 'BLEND'
        # Note: shadow_method removed for Blender 4.x compatibility
    
    return mat

def add_cube(name, location, dimensions, material=None, collection=None):
    """Create a cube with specified parameters"""
    bpy.ops.mesh.primitive_cube_add(location=location)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = (dimensions[0]/2, dimensions[1]/2, dimensions[2]/2)
    bpy.ops.object.transform_apply(scale=True)
    
    if material:
        obj.data.materials.append(material)
    if collection:
        link_to_collection(obj, collection)
    
    return obj

def add_cylinder(name, location, radius, depth, material=None, collection=None, vertices=32):
    """Create a cylinder with specified parameters"""
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=vertices,
        radius=radius,
        depth=depth,
        location=location
    )
    obj = bpy.context.active_object
    obj.name = name
    
    if material:
        obj.data.materials.append(material)
    if collection:
        link_to_collection(obj, collection)
    
    return obj

def add_plane(name, location, size, material=None, collection=None):
    """Create a plane with specified parameters"""
    bpy.ops.mesh.primitive_plane_add(size=size, location=location)
    obj = bpy.context.active_object
    obj.name = name
    
    if material:
        obj.data.materials.append(material)
    if collection:
        link_to_collection(obj, collection)
    
    return obj

def add_text(name, text, location, size=1.0, extrude=0.1, material=None, collection=None):
    """Create 3D text"""
    bpy.ops.object.text_add(location=location)
    obj = bpy.context.active_object
    obj.name = name
    obj.data.body = text
    obj.data.size = size
    obj.data.extrude = extrude
    obj.data.align_x = 'CENTER'
    obj.data.align_y = 'CENTER'
    
    if material:
        obj.data.materials.append(material)
    if collection:
        link_to_collection(obj, collection)
    
    return obj

# ============================================================================
# MATERIALS LIBRARY
# ============================================================================

class Materials:
    """Central materials management"""
    
    @staticmethod
    def create_all():
        """Create all materials used in the scene"""
        materials = {}
        
        # Glass materials
        materials['glass_main'] = create_material(
            'Glass_Main', (0.7, 0.85, 0.95), alpha=0.25, metallic=0.0, roughness=0.05
        )
        materials['glass_tinted'] = create_material(
            'Glass_Tinted', (0.3, 0.5, 0.7), alpha=0.4, metallic=0.1, roughness=0.1
        )
        materials['glass_clear'] = create_material(
            'Glass_Clear', (0.9, 0.95, 1.0), alpha=0.15, metallic=0.0, roughness=0.02
        )
        
        # Metal materials
        materials['steel_brushed'] = create_material(
            'Steel_Brushed', (0.7, 0.72, 0.75), metallic=0.9, roughness=0.3
        )
        materials['steel_polished'] = create_material(
            'Steel_Polished', (0.85, 0.87, 0.9), metallic=0.95, roughness=0.1
        )
        materials['copper_accent'] = create_material(
            'Copper_Accent', (0.72, 0.45, 0.2), metallic=0.85, roughness=0.25
        )
        materials['gold_accent'] = create_material(
            'Gold_Accent', (0.83, 0.68, 0.21), metallic=0.9, roughness=0.2
        )
        materials['eiffel_iron'] = create_material(
            'Eiffel_Iron', (0.35, 0.30, 0.25), metallic=0.7, roughness=0.6
        )
        
        # Concrete and stone
        materials['concrete_smooth'] = create_material(
            'Concrete_Smooth', (0.65, 0.63, 0.60), roughness=0.7
        )
        materials['concrete_raw'] = create_material(
            'Concrete_Raw', (0.55, 0.53, 0.50), roughness=0.85
        )
        materials['limestone'] = create_material(
            'Limestone', (0.9, 0.87, 0.8), roughness=0.6
        )
        materials['marble_white'] = create_material(
            'Marble_White', (0.95, 0.93, 0.90), metallic=0.1, roughness=0.2
        )
        materials['marble_black'] = create_material(
            'Marble_Black', (0.1, 0.1, 0.12), metallic=0.15, roughness=0.15
        )
        
        # Brick
        materials['brick_red'] = create_material(
            'Brick_Red', (0.55, 0.25, 0.18), roughness=0.8
        )
        materials['brick_dark'] = create_material(
            'Brick_Dark', (0.35, 0.2, 0.15), roughness=0.85
        )
        
        # Wood
        materials['wood_oak'] = create_material(
            'Wood_Oak', (0.45, 0.3, 0.15), roughness=0.6
        )
        materials['wood_walnut'] = create_material(
            'Wood_Walnut', (0.3, 0.18, 0.1), roughness=0.5
        )
        
        # Floor materials
        materials['floor_polished'] = create_material(
            'Floor_Polished', (0.25, 0.25, 0.28), metallic=0.3, roughness=0.15
        )
        materials['floor_concrete'] = create_material(
            'Floor_Concrete', (0.5, 0.48, 0.45), roughness=0.75
        )
        materials['terrazzo'] = create_material(
            'Terrazzo', (0.85, 0.82, 0.78), metallic=0.1, roughness=0.25
        )
        
        # Water
        materials['water_seine'] = create_material(
            'Water_Seine', (0.15, 0.3, 0.35), alpha=0.7, metallic=0.2, roughness=0.1
        )
        
        # Vegetation
        materials['grass'] = create_material(
            'Grass', (0.2, 0.4, 0.15), roughness=0.9
        )
        materials['tree_bark'] = create_material(
            'Tree_Bark', (0.25, 0.18, 0.1), roughness=0.95
        )
        materials['tree_foliage'] = create_material(
            'Tree_Foliage', (0.15, 0.35, 0.12), roughness=0.85
        )
        
        # Tech/Sports accent colors
        materials['tech_blue'] = create_material(
            'Tech_Blue', (0.0, 0.5, 0.9), metallic=0.5, roughness=0.3, emission=0.3
        )
        materials['tech_cyan'] = create_material(
            'Tech_Cyan', (0.0, 0.8, 0.85), metallic=0.4, roughness=0.2, emission=0.4
        )
        materials['sports_orange'] = create_material(
            'Sports_Orange', (0.95, 0.45, 0.1), roughness=0.4, emission=0.2
        )
        materials['sports_red'] = create_material(
            'Sports_Red', (0.85, 0.15, 0.1), roughness=0.35, emission=0.15
        )
        
        # Display/Panel materials
        materials['panel_white'] = create_material(
            'Panel_White', (0.95, 0.95, 0.95), roughness=0.4
        )
        materials['panel_dark'] = create_material(
            'Panel_Dark', (0.15, 0.15, 0.18), roughness=0.3
        )
        materials['screen_glow'] = create_material(
            'Screen_Glow', (0.2, 0.6, 0.9), emission=2.0
        )
        materials['led_strip'] = create_material(
            'LED_Strip', (0.9, 0.95, 1.0), emission=5.0
        )
        
        # Human figure
        materials['human_abstract'] = create_material(
            'Human_Abstract', (0.3, 0.3, 0.35), metallic=0.2, roughness=0.6
        )
        
        # Paris buildings
        materials['paris_cream'] = create_material(
            'Paris_Cream', (0.92, 0.88, 0.8), roughness=0.7
        )
        materials['paris_grey'] = create_material(
            'Paris_Grey', (0.6, 0.58, 0.55), roughness=0.75
        )
        materials['zinc_roof'] = create_material(
            'Zinc_Roof', (0.5, 0.52, 0.55), metallic=0.6, roughness=0.4
        )
        
        # Asphalt/Roads
        materials['asphalt'] = create_material(
            'Asphalt', (0.2, 0.2, 0.22), roughness=0.9
        )
        materials['cobblestone'] = create_material(
            'Cobblestone', (0.45, 0.42, 0.4), roughness=0.85
        )
        
        return materials

# ============================================================================
# MAIN MUSEUM BUILDING - Modern Glass Architecture
# ============================================================================

def build_main_museum(materials, collection):
    """Build the main modern glass museum building"""
    museum_col = create_collection("Main_Museum", collection)
    
    cx, cy, cz = MUSEUM_CENTER
    
    # === FOUNDATION AND GROUND FLOOR ===
    
    # Main foundation platform (raised)
    foundation = add_cube(
        "Foundation_Platform",
        (cx, cy, cz + 0.5),
        (MAIN_BUILDING_WIDTH + 10, MAIN_BUILDING_DEPTH + 10, 1),
        materials['concrete_smooth'],
        museum_col
    )
    
    # Ground floor slab
    ground_slab = add_cube(
        "Ground_Floor_Slab",
        (cx, cy, cz + 1.25),
        (MAIN_BUILDING_WIDTH, MAIN_BUILDING_DEPTH, 0.5),
        materials['terrazzo'],
        museum_col
    )
    
    # === STRUCTURAL STEEL FRAME ===
    
    # Main vertical columns (steel frame)
    column_positions = [
        (-35, -20), (-35, 0), (-35, 20),
        (-15, -20), (-15, 0), (-15, 20),
        (15, -20), (15, 0), (15, 20),
        (35, -20), (35, 0), (35, 20),
    ]
    
    for i, (px, py) in enumerate(column_positions):
        col = add_cube(
            f"Steel_Column_{i}",
            (cx + px, cy + py, cz + 13),
            (1.2, 1.2, 24),
            materials['steel_brushed'],
            museum_col
        )
    
    # Horizontal beams connecting columns
    beam_heights = [8, 16, 24]
    for h in beam_heights:
        # X-direction beams
        for py in [-20, 0, 20]:
            beam = add_cube(
                f"Beam_X_{h}_{py}",
                (cx, cy + py, cz + h),
                (72, 0.8, 0.8),
                materials['steel_brushed'],
                museum_col
            )
        
        # Y-direction beams
        for px in [-35, -15, 15, 35]:
            beam = add_cube(
                f"Beam_Y_{h}_{px}",
                (cx + px, cy, cz + h),
                (0.8, 42, 0.8),
                materials['steel_brushed'],
                museum_col
            )
    
    # === GLASS FACADE ===
    
    # Front glass wall (with entrance cutout)
    front_glass_left = add_cube(
        "Front_Glass_Left",
        (cx - 25, cy - 25, cz + 12.5),
        (30, 0.3, 23),
        materials['glass_main'],
        museum_col
    )
    
    front_glass_right = add_cube(
        "Front_Glass_Right",
        (cx + 25, cy - 25, cz + 12.5),
        (30, 0.3, 23),
        materials['glass_main'],
        museum_col
    )
    
    # Front glass above entrance
    front_glass_top = add_cube(
        "Front_Glass_Top",
        (cx, cy - 25, cz + 20),
        (20, 0.3, 8),
        materials['glass_main'],
        museum_col
    )
    
    # Side glass walls
    for side, sx in [("Left", -40), ("Right", 40)]:
        glass = add_cube(
            f"{side}_Glass_Wall",
            (cx + sx, cy, cz + 12.5),
            (0.3, 50, 23),
            materials['glass_main'],
            museum_col
        )
    
    # Back glass wall
    back_glass = add_cube(
        "Back_Glass_Wall",
        (cx, cy + 25, cz + 12.5),
        (80, 0.3, 23),
        materials['glass_tinted'],
        museum_col
    )
    
    # === ROOF STRUCTURE ===
    
    # Main roof - modern angular design
    roof_main = add_cube(
        "Roof_Main",
        (cx, cy, cz + 25.5),
        (82, 52, 1),
        materials['steel_polished'],
        museum_col
    )
    
    # Roof skylight frames
    for i in range(-2, 3):
        skylight_frame = add_cube(
            f"Skylight_Frame_{i}",
            (cx + i * 15, cy, cz + 26),
            (12, 40, 0.3),
            materials['steel_brushed'],
            museum_col
        )
        skylight_glass = add_cube(
            f"Skylight_Glass_{i}",
            (cx + i * 15, cy, cz + 26.2),
            (10, 38, 0.2),
            materials['glass_clear'],
            museum_col
        )
    
    # === FLOOR PLATES ===
    
    # Second floor
    floor_2 = add_cube(
        "Floor_2",
        (cx, cy, cz + 8),
        (76, 46, 0.4),
        materials['floor_polished'],
        museum_col
    )
    
    # Third floor (mezzanine style - with central void)
    floor_3_left = add_cube(
        "Floor_3_Left",
        (cx - 22, cy, cz + 16),
        (32, 46, 0.4),
        materials['floor_polished'],
        museum_col
    )
    
    floor_3_right = add_cube(
        "Floor_3_Right",
        (cx + 22, cy, cz + 16),
        (32, 46, 0.4),
        materials['floor_polished'],
        museum_col
    )
    
    floor_3_back = add_cube(
        "Floor_3_Back",
        (cx, cy + 15, cz + 16),
        (12, 16, 0.4),
        materials['floor_polished'],
        museum_col
    )
    
    # === CENTRAL ATRIUM ===
    
    # Glass atrium walls
    atrium_glass_front = add_cube(
        "Atrium_Glass_Front",
        (cx, cy - 7, cz + 12),
        (15, 0.2, 8),
        materials['glass_clear'],
        museum_col
    )
    
    atrium_glass_left = add_cube(
        "Atrium_Glass_Left",
        (cx - 7.5, cy, cz + 12),
        (0.2, 14, 8),
        materials['glass_clear'],
        museum_col
    )
    
    atrium_glass_right = add_cube(
        "Atrium_Glass_Right",
        (cx + 7.5, cy, cz + 12),
        (0.2, 14, 8),
        materials['glass_clear'],
        museum_col
    )
    
    # === ENTRANCE CANOPY ===
    
    # Modern angular canopy
    canopy = add_cube(
        "Entrance_Canopy",
        (cx, cy - 30, cz + 6),
        (25, 12, 0.4),
        materials['steel_polished'],
        museum_col
    )
    
    # Canopy support columns
    for px in [-10, 10]:
        canopy_col = add_cylinder(
            f"Canopy_Column_{px}",
            (cx + px, cy - 32, cz + 3),
            0.3, 6,
            materials['steel_brushed'],
            museum_col
        )
    
    # === LED ACCENT STRIPS ===
    
    # Horizontal LED strips on facade
    for h in [3, 12, 21]:
        led = add_cube(
            f"LED_Strip_H_{h}",
            (cx, cy - 25.2, cz + h),
            (78, 0.1, 0.15),
            materials['led_strip'],
            museum_col
        )
    
    # Vertical LED strips at corners
    for px in [-39.5, 39.5]:
        led = add_cube(
            f"LED_Strip_V_{px}",
            (cx + px, cy - 24.5, cz + 12.5),
            (0.15, 0.1, 23),
            materials['led_strip'],
            museum_col
        )
    
    return museum_col

# ============================================================================
# ARCHIVE WING - Brick Building
# ============================================================================

def build_archive_wing(materials, collection):
    """Build the archive wing with brick facade"""
    archive_col = create_collection("Archive_Wing", collection)
    
    cx, cy, cz = MUSEUM_CENTER
    ax = cx + 55  # Position to the right of main building
    
    # === MAIN STRUCTURE ===
    
    # Foundation
    foundation = add_cube(
        "Archive_Foundation",
        (ax, cy, cz + 0.25),
        (ARCHIVE_WING_WIDTH + 4, ARCHIVE_WING_DEPTH + 4, 0.5),
        materials['concrete_raw'],
        archive_col
    )
    
    # Main walls - brick exterior
    # Front wall
    front_wall = add_cube(
        "Archive_Front_Wall",
        (ax, cy - 20, cz + 9),
        (ARCHIVE_WING_WIDTH, 1.5, ARCHIVE_WING_HEIGHT),
        materials['brick_red'],
        archive_col
    )
    
    # Back wall
    back_wall = add_cube(
        "Archive_Back_Wall",
        (ax, cy + 20, cz + 9),
        (ARCHIVE_WING_WIDTH, 1.5, ARCHIVE_WING_HEIGHT),
        materials['brick_red'],
        archive_col
    )
    
    # Side walls
    right_wall = add_cube(
        "Archive_Right_Wall",
        (ax + 15, cy, cz + 9),
        (1.5, ARCHIVE_WING_DEPTH - 1.5, ARCHIVE_WING_HEIGHT),
        materials['brick_red'],
        archive_col
    )
    
    left_wall = add_cube(
        "Archive_Left_Wall",
        (ax - 15, cy, cz + 9),
        (1.5, ARCHIVE_WING_DEPTH - 1.5, ARCHIVE_WING_HEIGHT),
        materials['brick_dark'],
        archive_col
    )
    
    # === WINDOWS ===
    
    # Front windows (arched style suggested by rectangular approximation)
    window_positions = [-8, 0, 8]
    for i, wx in enumerate(window_positions):
        # Window frame
        frame = add_cube(
            f"Archive_Window_Frame_{i}",
            (ax + wx, cy - 20.5, cz + 10),
            (4, 0.5, 8),
            materials['steel_brushed'],
            archive_col
        )
        # Window glass
        glass = add_cube(
            f"Archive_Window_Glass_{i}",
            (ax + wx, cy - 20.3, cz + 10),
            (3.5, 0.2, 7),
            materials['glass_tinted'],
            archive_col
        )
    
    # === ROOF ===
    
    # Pitched roof simulation with angled panels
    roof_left = add_cube(
        "Archive_Roof_Left",
        (ax - 7.5, cy, cz + 18.5),
        (16, ARCHIVE_WING_DEPTH + 2, 0.6),
        materials['zinc_roof'],
        archive_col
    )
    roof_left.rotation_euler = (0, math.radians(15), 0)
    
    roof_right = add_cube(
        "Archive_Roof_Right",
        (ax + 7.5, cy, cz + 18.5),
        (16, ARCHIVE_WING_DEPTH + 2, 0.6),
        materials['zinc_roof'],
        archive_col
    )
    roof_right.rotation_euler = (0, math.radians(-15), 0)
    
    # === INTERIOR FLOORS ===
    
    # Ground floor
    ground_floor = add_cube(
        "Archive_Ground_Floor",
        (ax, cy, cz + 0.75),
        (28, 38, 0.3),
        materials['wood_oak'],
        archive_col
    )
    
    # Second floor
    second_floor = add_cube(
        "Archive_Second_Floor",
        (ax, cy, cz + 9),
        (28, 38, 0.3),
        materials['wood_oak'],
        archive_col
    )
    
    # === DECORATIVE BRICK DETAILS ===
    
    # Brick cornices
    for h in [4.5, 13.5]:
        cornice = add_cube(
            f"Brick_Cornice_{h}",
            (ax, cy - 20.8, cz + h),
            (ARCHIVE_WING_WIDTH + 1, 0.6, 0.4),
            materials['brick_dark'],
            archive_col
        )
    
    # === CONNECTION TO MAIN BUILDING ===
    
    # Glass corridor connecting to main museum
    corridor = add_cube(
        "Connection_Corridor",
        (cx + 47.5, cy, cz + 5),
        (15, 6, 8),
        materials['glass_main'],
        archive_col
    )
    
    corridor_floor = add_cube(
        "Corridor_Floor",
        (cx + 47.5, cy, cz + 1.2),
        (15, 5.5, 0.4),
        materials['terrazzo'],
        archive_col
    )
    
    return archive_col

# ============================================================================
# SPIRAL STAIRCASE
# ============================================================================

def build_spiral_staircase(materials, collection):
    """Build an elegant spiral staircase"""
    stair_col = create_collection("Spiral_Staircase", collection)
    
    cx, cy, cz = MUSEUM_CENTER
    sx, sy = cx + 25, cy + 10  # Position in museum
    
    # Central column
    central_col = add_cylinder(
        "Stair_Central_Column",
        (sx, sy, cz + 12),
        0.4, 22,
        materials['steel_polished'],
        stair_col
    )
    
    # Spiral steps
    num_steps = 36
    step_height = 0.5
    radius = 3
    
    for i in range(num_steps):
        angle = math.radians(i * 30)
        step_x = sx + math.cos(angle) * radius * 0.5
        step_y = sy + math.sin(angle) * radius * 0.5
        step_z = cz + 1.5 + i * step_height
        
        # Step tread
        bpy.ops.mesh.primitive_cube_add(location=(step_x, step_y, step_z))
        step = bpy.context.active_object
        step.name = f"Spiral_Step_{i}"
        step.scale = (radius, 0.4, 0.1)
        step.rotation_euler = (0, 0, angle)
        bpy.ops.object.transform_apply(scale=True, rotation=True)
        step.data.materials.append(materials['steel_brushed'])
        link_to_collection(step, stair_col)
        
        # Railing post
        if i % 3 == 0:
            post_x = sx + math.cos(angle) * (radius + 0.3)
            post_y = sy + math.sin(angle) * (radius + 0.3)
            post = add_cylinder(
                f"Stair_Post_{i}",
                (post_x, post_y, step_z + 0.5),
                0.05, 1,
                materials['steel_polished'],
                stair_col
            )
    
    # Handrail (simplified as a series of segments)
    for i in range(num_steps - 1):
        angle1 = math.radians(i * 30)
        angle2 = math.radians((i + 1) * 30)
        
        x1 = sx + math.cos(angle1) * (radius + 0.3)
        y1 = sy + math.sin(angle1) * (radius + 0.3)
        z1 = cz + 2.5 + i * step_height
        
        x2 = sx + math.cos(angle2) * (radius + 0.3)
        y2 = sy + math.sin(angle2) * (radius + 0.3)
        z2 = cz + 2.5 + (i + 1) * step_height
        
        # Simplified handrail segment
        mid_x = (x1 + x2) / 2
        mid_y = (y1 + y2) / 2
        mid_z = (z1 + z2) / 2
        
        rail = add_cylinder(
            f"Handrail_Segment_{i}",
            (mid_x, mid_y, mid_z),
            0.04, 0.8,
            materials['gold_accent'],
            stair_col
        )
        rail.rotation_euler = (
            math.atan2(z2 - z1, math.sqrt((x2-x1)**2 + (y2-y1)**2)),
            0,
            angle1 + math.radians(15)
        )
    
    return stair_col

# ============================================================================
# MODERN ELEVATOR
# ============================================================================

def build_elevator(materials, collection):
    """Build a modern glass elevator"""
    elev_col = create_collection("Elevator", collection)
    
    cx, cy, cz = MUSEUM_CENTER
    ex, ey = cx - 25, cy + 10  # Position
    
    # Elevator shaft structure
    shaft_frame = []
    for px, py in [(-1.5, -1.5), (-1.5, 1.5), (1.5, -1.5), (1.5, 1.5)]:
        post = add_cube(
            f"Elevator_Post_{px}_{py}",
            (ex + px, ey + py, cz + 12),
            (0.3, 0.3, 22),
            materials['steel_polished'],
            elev_col
        )
    
    # Glass shaft walls
    for side, pos, dim in [
        ("Front", (ex, ey - 1.6, cz + 12), (3, 0.1, 22)),
        ("Back", (ex, ey + 1.6, cz + 12), (3, 0.1, 22)),
        ("Left", (ex - 1.6, ey, cz + 12), (0.1, 3, 22)),
        ("Right", (ex + 1.6, ey, cz + 12), (0.1, 3, 22)),
    ]:
        glass = add_cube(
            f"Elevator_Glass_{side}",
            pos, dim,
            materials['glass_clear'],
            elev_col
        )
    
    # Elevator cab
    cab_floor = add_cube(
        "Elevator_Cab_Floor",
        (ex, ey, cz + 8),
        (2.8, 2.8, 0.15),
        materials['floor_polished'],
        elev_col
    )
    
    cab_ceiling = add_cube(
        "Elevator_Cab_Ceiling",
        (ex, ey, cz + 11),
        (2.8, 2.8, 0.1),
        materials['steel_brushed'],
        elev_col
    )
    
    # Cab walls (partial glass)
    for side, pos, dim in [
        ("Back", (ex, ey + 1.35, cz + 9.5), (2.7, 0.1, 2.8)),
        ("Left", (ex - 1.35, ey, cz + 9.5), (0.1, 2.7, 2.8)),
        ("Right", (ex + 1.35, ey, cz + 9.5), (0.1, 2.7, 2.8)),
    ]:
        wall = add_cube(
            f"Cab_Wall_{side}",
            pos, dim,
            materials['glass_tinted'],
            elev_col
        )
    
    # LED lighting in cab
    cab_led = add_cube(
        "Cab_LED_Ring",
        (ex, ey, cz + 10.9),
        (2.5, 2.5, 0.05),
        materials['led_strip'],
        elev_col
    )
    
    # Control panel
    panel = add_cube(
        "Elevator_Panel",
        (ex + 1.3, ey, cz + 9.5),
        (0.05, 0.4, 0.8),
        materials['panel_dark'],
        elev_col
    )
    
    return elev_col

# ============================================================================
# EXHIBITION GALLERIES - Sports & Technology Theme
# ============================================================================

def build_exhibition_galleries(materials, collection):
    """Build exhibition spaces with sports and technology themed displays"""
    gallery_col = create_collection("Galleries", collection)
    
    cx, cy, cz = MUSEUM_CENTER
    
    # === GROUND FLOOR EXHIBITIONS ===
    
    # Reception desk
    desk = add_cube(
        "Reception_Desk",
        (cx, cy - 18, cz + 2),
        (8, 2, 1.2),
        materials['marble_black'],
        gallery_col
    )
    
    desk_top = add_cube(
        "Reception_Desk_Top",
        (cx, cy - 18, cz + 2.7),
        (8.5, 2.5, 0.1),
        materials['marble_white'],
        gallery_col
    )
    
    # Tech showcase pedestals (ground floor)
    pedestal_positions = [
        (-25, -10), (-25, 5), (-15, -10), (-15, 5),
        (15, -10), (15, 5), (25, -10), (25, 5)
    ]
    
    for i, (px, py) in enumerate(pedestal_positions):
        # Pedestal base
        ped = add_cube(
            f"Tech_Pedestal_{i}",
            (cx + px, cy + py, cz + 2),
            (2, 2, 2.5),
            materials['concrete_smooth'],
            gallery_col
        )
        
        # Display object (abstract tech form)
        if i % 2 == 0:
            display = add_cylinder(
                f"Tech_Display_{i}",
                (cx + px, cy + py, cz + 4),
                0.6, 1.5,
                materials['tech_blue'],
                gallery_col
            )
        else:
            bpy.ops.mesh.primitive_uv_sphere_add(
                radius=0.7,
                location=(cx + px, cy + py, cz + 4)
            )
            display = bpy.context.active_object
            display.name = f"Tech_Display_{i}"
            display.data.materials.append(materials['tech_cyan'])
            link_to_collection(display, gallery_col)
        
        # Spotlight for each display
        light_data = bpy.data.lights.new(name=f"Spot_Light_{i}", type='SPOT')
        light_data.energy = 100
        light_data.spot_size = math.radians(30)
        light = bpy.data.objects.new(name=f"Spot_Light_{i}", object_data=light_data)
        light.location = (cx + px, cy + py, cz + 7)
        light.rotation_euler = (0, 0, 0)
        link_to_collection(light, gallery_col)
    
    # === SPORTS HALL (Second Floor) ===
    
    # Large sports artifacts display
    sports_positions = [
        (-30, -15), (-30, 0), (-30, 15),
        (30, -15), (30, 0), (30, 15)
    ]
    
    for i, (px, py) in enumerate(sports_positions):
        # Display case
        case = add_cube(
            f"Sports_Case_{i}",
            (cx + px, cy + py, cz + 9.5),
            (4, 4, 3),
            materials['glass_clear'],
            gallery_col
        )
        
        # Display base
        base = add_cube(
            f"Sports_Base_{i}",
            (cx + px, cy + py, cz + 8.3),
            (3.5, 3.5, 0.3),
            materials['sports_orange'],
            gallery_col
        )
    
    # === INFORMATION PANELS ===
    
    # Wall-mounted info panels
    panel_config = [
        # Ground floor panels (front wall)
        ((-30, -24, 4), (6, 0.1, 4), 0),
        ((-18, -24, 4), (6, 0.1, 4), 0),
        ((18, -24, 4), (6, 0.1, 4), 0),
        ((30, -24, 4), (6, 0.1, 4), 0),
        # Side wall panels
        ((-39, -10, 4), (0.1, 6, 4), 90),
        ((-39, 10, 4), (0.1, 6, 4), 90),
        ((39, -10, 4), (0.1, 6, 4), 90),
        ((39, 10, 4), (0.1, 6, 4), 90),
    ]
    
    for i, (pos, dim, rot) in enumerate(panel_config):
        # Panel background
        panel = add_cube(
            f"Info_Panel_{i}",
            (cx + pos[0], cy + pos[1], cz + pos[2]),
            dim,
            materials['panel_white'],
            gallery_col
        )
        
        # Panel header strip
        header = add_cube(
            f"Panel_Header_{i}",
            (cx + pos[0], cy + pos[1], cz + pos[2] + 1.8),
            (dim[0] if dim[0] > 1 else 0.1, dim[1] if dim[1] > 1 else 5.8, 0.3),
            materials['tech_blue'],
            gallery_col
        )
    
    # === INTERACTIVE SCREENS ===
    
    screen_positions = [
        (-10, -5), (10, -5), (-10, 10), (10, 10)
    ]
    
    for i, (px, py) in enumerate(screen_positions):
        # Screen frame
        frame = add_cube(
            f"Screen_Frame_{i}",
            (cx + px, cy + py, cz + 4.5),
            (3.2, 0.3, 2.2),
            materials['steel_brushed'],
            gallery_col
        )
        
        # Screen display
        screen = add_cube(
            f"Screen_Display_{i}",
            (cx + px, cy + py - 0.2, cz + 4.5),
            (3, 0.1, 2),
            materials['screen_glow'],
            gallery_col
        )
        
        # Screen stand
        stand = add_cylinder(
            f"Screen_Stand_{i}",
            (cx + px, cy + py, cz + 2.5),
            0.15, 3,
            materials['steel_brushed'],
            gallery_col
        )
    
    # === WAYFINDING SIGNAGE ===
    
    # Main entrance sign
    entrance_sign = add_text(
        "Entrance_Sign",
        "PERFORMANCE MUSEUM",
        (cx, cy - 28, cz + 8),
        size=1.5,
        extrude=0.15,
        material=materials['steel_polished'],
        collection=gallery_col
    )
    entrance_sign.rotation_euler = (math.radians(90), 0, 0)
    
    # Floor directory signs
    floor_signs = [
        ("Ground Floor: Technology Innovation", (cx - 35, cy - 15, cz + 3)),
        ("Level 2: Sports Excellence", (cx - 35, cy - 15, cz + 11)),
        ("Level 3: Future of Performance", (cx - 35, cy - 15, cz + 19)),
    ]
    
    for text, pos in floor_signs:
        sign = add_text(
            f"Floor_Sign_{text[:10]}",
            text,
            pos,
            size=0.4,
            extrude=0.05,
            material=materials['panel_dark'],
            collection=gallery_col
        )
        sign.rotation_euler = (math.radians(90), 0, math.radians(90))
    
    return gallery_col

# ============================================================================
# ARCHIVE WING INTERIOR - Artifacts
# ============================================================================

def build_archive_interior(materials, collection):
    """Build interior displays for the archive wing"""
    archive_int_col = create_collection("Archive_Interior", collection)
    
    cx, cy, cz = MUSEUM_CENTER
    ax = cx + 55
    
    # === ARTIFACT SHELVING UNITS ===
    
    shelf_positions = [
        (-10, -12), (-10, 0), (-10, 12),
        (10, -12), (10, 0), (10, 12)
    ]
    
    for i, (px, py) in enumerate(shelf_positions):
        # Tall shelving unit
        unit = add_cube(
            f"Archive_Shelf_Unit_{i}",
            (ax + px, cy + py, cz + 4),
            (4, 1.5, 7),
            materials['wood_walnut'],
            archive_int_col
        )
        
        # Individual shelves
        for h in [1.5, 3.5, 5.5]:
            shelf = add_cube(
                f"Archive_Shelf_{i}_{h}",
                (ax + px, cy + py - 0.1, cz + h),
                (3.8, 1.6, 0.1),
                materials['wood_oak'],
                archive_int_col
            )
            
            # Artifact on shelf (varied objects)
            if random.random() > 0.3:
                artifact_type = random.choice(['box', 'cylinder', 'sphere'])
                if artifact_type == 'box':
                    art = add_cube(
                        f"Artifact_{i}_{h}",
                        (ax + px + random.uniform(-1, 1), cy + py - 0.5, cz + h + 0.4),
                        (0.6, 0.4, 0.8),
                        materials['copper_accent'],
                        archive_int_col
                    )
                elif artifact_type == 'cylinder':
                    art = add_cylinder(
                        f"Artifact_{i}_{h}",
                        (ax + px + random.uniform(-1, 1), cy + py - 0.5, cz + h + 0.3),
                        0.25, 0.6,
                        materials['gold_accent'],
                        archive_int_col
                    )
                else:
                    bpy.ops.mesh.primitive_uv_sphere_add(
                        radius=0.3,
                        location=(ax + px + random.uniform(-1, 1), cy + py - 0.5, cz + h + 0.4)
                    )
                    art = bpy.context.active_object
                    art.name = f"Artifact_{i}_{h}"
                    art.data.materials.append(materials['sports_red'])
                    link_to_collection(art, archive_int_col)
    
    # === ARCHIVE DISPLAY CASES ===
    
    for i in range(3):
        # Central display cases
        case = add_cube(
            f"Archive_Display_Case_{i}",
            (ax, cy - 10 + i * 10, cz + 2.5),
            (3, 3, 4),
            materials['glass_clear'],
            archive_int_col
        )
        
        case_base = add_cube(
            f"Archive_Case_Base_{i}",
            (ax, cy - 10 + i * 10, cz + 0.9),
            (3.2, 3.2, 0.3),
            materials['marble_black'],
            archive_int_col
        )
    
    # === ARCHIVE READING TABLES ===
    
    table_positions = [(-6, 0), (6, 0)]
    for i, (px, py) in enumerate(table_positions):
        table = add_cube(
            f"Reading_Table_{i}",
            (ax + px, cy + py, cz + 10),
            (4, 2, 0.1),
            materials['wood_oak'],
            archive_int_col
        )
        
        # Table legs
        for lx, ly in [(-1.8, -0.8), (-1.8, 0.8), (1.8, -0.8), (1.8, 0.8)]:
            leg = add_cube(
                f"Table_Leg_{i}_{lx}_{ly}",
                (ax + px + lx, cy + py + ly, cz + 9.5),
                (0.1, 0.1, 1),
                materials['steel_brushed'],
                archive_int_col
            )
    
    return archive_int_col

# ============================================================================
# ABSTRACT HUMAN FIGURES
# ============================================================================

def build_human_figures(materials, collection):
    """Create abstract human figures throughout the museum"""
    human_col = create_collection("Human_Figures", collection)
    
    cx, cy, cz = MUSEUM_CENTER
    
    # Figure positions (location, rotation_z)
    figure_configs = [
        # Ground floor - near reception
        ((cx - 3, cy - 15, cz + 1.5), 0.2),
        ((cx + 5, cy - 16, cz + 1.5), -0.3),
        # Ground floor - viewing exhibits
        ((cx - 20, cy - 8, cz + 1.5), 0),
        ((cx + 22, cy + 3, cz + 1.5), 3.14),
        ((cx - 18, cy + 6, cz + 1.5), 1.57),
        # Near spiral staircase
        ((cx + 22, cy + 10, cz + 1.5), -1.0),
        # Second floor
        ((cx - 28, cy - 12, cz + 9), 0.5),
        ((cx + 30, cy + 2, cz + 9), 2.5),
        ((cx - 25, cy + 10, cz + 9), 1.2),
        # Third floor
        ((cx - 20, cy - 5, cz + 17), 0),
        ((cx + 18, cy + 8, cz + 17), -2.0),
        # Archive wing
        ((cx + 52, cy - 5, cz + 1.5), 1.57),
        ((cx + 58, cy + 8, cz + 1.5), -0.8),
        ((cx + 55, cy + 3, cz + 10), 0.3),
    ]
    
    for i, (pos, rot_z) in enumerate(figure_configs):
        # Body (torso)
        body = add_cylinder(
            f"Human_Body_{i}",
            (pos[0], pos[1], pos[2] + 0.5),
            0.2, 1.0,
            materials['human_abstract'],
            human_col
        )
        body.rotation_euler = (0, 0, rot_z)
        
        # Head
        bpy.ops.mesh.primitive_uv_sphere_add(
            radius=0.18,
            location=(pos[0], pos[1], pos[2] + 1.2)
        )
        head = bpy.context.active_object
        head.name = f"Human_Head_{i}"
        head.data.materials.append(materials['human_abstract'])
        link_to_collection(head, human_col)
        
        # Legs (simplified)
        for offset in [-0.1, 0.1]:
            leg = add_cylinder(
                f"Human_Leg_{i}_{offset}",
                (pos[0] + offset * math.cos(rot_z), pos[1] + offset * math.sin(rot_z), pos[2] - 0.3),
                0.08, 0.6,
                materials['human_abstract'],
                human_col
            )
    
    return human_col

# ============================================================================
# SEINE RIVER AND QUAYS
# ============================================================================

def build_seine_river(materials, collection):
    """Build the Seine river with quays and boats"""
    seine_col = create_collection("Seine_River", collection)
    
    cx, cy, cz = MUSEUM_CENTER
    sy = cy + SEINE_Y_OFFSET
    
    # === RIVER WATER ===
    
    river = add_cube(
        "Seine_Water",
        (cx, sy, cz - 2),
        (400, 35, 4),
        materials['water_seine'],
        seine_col
    )
    
    # === QUAYS (Stone embankments) ===
    
    # Museum side quay (closer)
    quay_museum = add_cube(
        "Quay_Museum_Side",
        (cx, sy - 20, cz - 0.5),
        (420, 8, 3),
        materials['limestone'],
        seine_col
    )
    
    # Eiffel side quay (far side)
    quay_eiffel = add_cube(
        "Quay_Eiffel_Side",
        (cx, sy + 20, cz - 0.5),
        (420, 8, 3),
        materials['limestone'],
        seine_col
    )
    
    # Quay walking paths
    path_museum = add_cube(
        "Quay_Path_Museum",
        (cx, sy - 22, cz + 1.2),
        (400, 4, 0.3),
        materials['cobblestone'],
        seine_col
    )
    
    path_eiffel = add_cube(
        "Quay_Path_Eiffel",
        (cx, sy + 22, cz + 1.2),
        (400, 4, 0.3),
        materials['cobblestone'],
        seine_col
    )
    
    # === BRIDGES ===
    
    # Main pedestrian bridge
    bridge = add_cube(
        "Pedestrian_Bridge",
        (cx - 60, sy, cz + 3),
        (12, 50, 0.8),
        materials['steel_brushed'],
        seine_col
    )
    
    # Bridge railings
    for side in [-5.5, 5.5]:
        railing = add_cube(
            f"Bridge_Railing_{side}",
            (cx - 60 + side, sy, cz + 4.5),
            (0.3, 50, 2),
            materials['steel_polished'],
            seine_col
        )
    
    # Second bridge (vehicular - wider)
    bridge2 = add_cube(
        "Road_Bridge",
        (cx + 80, sy, cz + 4),
        (20, 55, 1.2),
        materials['concrete_smooth'],
        seine_col
    )
    
    # === BOATS ===
    
    boat_positions = [
        (cx - 30, sy, cz - 0.5, 0),
        (cx + 40, sy + 5, cz - 0.5, 0.1),
        (cx + 100, sy - 3, cz - 0.5, -0.05),
    ]
    
    for i, (bx, by, bz, rot) in enumerate(boat_positions):
        # Boat hull
        hull = add_cube(
            f"Boat_Hull_{i}",
            (bx, by, bz),
            (15, 4, 1.5),
            materials['wood_walnut'],
            seine_col
        )
        hull.rotation_euler = (0, 0, rot)
        
        # Boat cabin
        cabin = add_cube(
            f"Boat_Cabin_{i}",
            (bx - 2, by, bz + 1.5),
            (8, 3, 2),
            materials['panel_white'],
            seine_col
        )
        cabin.rotation_euler = (0, 0, rot)
        
        # Boat windows
        for wx in [-3, -1, 1, 3]:
            window = add_cube(
                f"Boat_Window_{i}_{wx}",
                (bx - 2 + wx, by - 1.6, bz + 1.8),
                (1.2, 0.1, 1),
                materials['glass_tinted'],
                seine_col
            )
            window.rotation_euler = (0, 0, rot)
    
    # === QUAY LAMPPOSTS ===
    
    lamppost_x_positions = range(-180, 200, 30)
    for lx in lamppost_x_positions:
        for side, ly in [("Museum", sy - 24), ("Eiffel", sy + 24)]:
            # Post
            post = add_cylinder(
                f"Lamppost_{side}_{lx}",
                (cx + lx, ly, cz + 3),
                0.1, 5,
                materials['eiffel_iron'],
                seine_col
            )
            
            # Lamp head
            lamp = add_cube(
                f"Lamp_{side}_{lx}",
                (cx + lx, ly, cz + 5.8),
                (0.4, 0.4, 0.6),
                materials['led_strip'],
                seine_col
            )
    
    return seine_col

# ============================================================================
# EIFFEL TOWER
# ============================================================================

def build_eiffel_tower(materials, collection):
    """Build a detailed Eiffel Tower"""
    eiffel_col = create_collection("Eiffel_Tower", collection)
    
    cx, cy, cz = MUSEUM_CENTER
    ex, ey = cx, cy + EIFFEL_Y_OFFSET
    
    tower_height = 120
    base_width = 40
    
    # === FOUR MAIN LEGS ===
    
    leg_positions = [
        (-base_width/2, -base_width/2),
        (-base_width/2, base_width/2),
        (base_width/2, -base_width/2),
        (base_width/2, base_width/2)
    ]
    
    # Lower section (ground to first platform)
    for i, (lx, ly) in enumerate(leg_positions):
        # Main leg structure (tapered)
        for section in range(5):
            h_start = section * 8
            h_end = h_start + 8
            width_factor = 1 - (section * 0.15)
            
            leg = add_cube(
                f"Leg_Lower_{i}_{section}",
                (ex + lx * width_factor, ey + ly * width_factor, cz + h_start + 4),
                (3 * width_factor, 3 * width_factor, 8),
                materials['eiffel_iron'],
                eiffel_col
            )
    
    # First platform (at 40m scale)
    platform_1 = add_cube(
        "Platform_1",
        (ex, ey, cz + 40),
        (35, 35, 2),
        materials['eiffel_iron'],
        eiffel_col
    )
    
    # Cross bracing for first section
    for i in range(4):
        angle = math.radians(i * 90 + 45)
        for h in [10, 20, 30]:
            brace = add_cube(
                f"Brace_Lower_{i}_{h}",
                (ex + math.cos(angle) * 15, ey + math.sin(angle) * 15, cz + h),
                (25, 0.8, 0.8),
                materials['eiffel_iron'],
                eiffel_col
            )
            brace.rotation_euler = (0, 0, angle)
    
    # Middle section
    for i, (lx, ly) in enumerate(leg_positions):
        leg = add_cube(
            f"Leg_Middle_{i}",
            (ex + lx * 0.3, ey + ly * 0.3, cz + 55),
            (2.5, 2.5, 28),
            materials['eiffel_iron'],
            eiffel_col
        )
    
    # Second platform
    platform_2 = add_cube(
        "Platform_2",
        (ex, ey, cz + 70),
        (20, 20, 2),
        materials['eiffel_iron'],
        eiffel_col
    )
    
    # Upper section (narrowing to top)
    upper_tower = add_cube(
        "Upper_Tower",
        (ex, ey, cz + 90),
        (8, 8, 38),
        materials['eiffel_iron'],
        eiffel_col
    )
    
    # Top platform
    platform_top = add_cube(
        "Platform_Top",
        (ex, ey, cz + 105),
        (10, 10, 1.5),
        materials['eiffel_iron'],
        eiffel_col
    )
    
    # Antenna/Spire
    spire = add_cylinder(
        "Spire",
        (ex, ey, cz + 115),
        0.5, 20,
        materials['steel_polished'],
        eiffel_col
    )
    
    # === DECORATIVE ARCHES ===
    
    # Arches at base (simplified as curved forms)
    for angle in [0, 90, 180, 270]:
        arch_x = ex + math.cos(math.radians(angle)) * 18
        arch_y = ey + math.sin(math.radians(angle)) * 18
        
        arch = add_cube(
            f"Arch_{angle}",
            (arch_x, arch_y, cz + 12),
            (15, 2, 8),
            materials['eiffel_iron'],
            eiffel_col
        )
        arch.rotation_euler = (0, 0, math.radians(angle))
    
    # === LIGHTING ON TOWER ===
    
    light_heights = [42, 72, 107]
    for h in light_heights:
        light_data = bpy.data.lights.new(name=f"Eiffel_Light_{h}", type='POINT')
        light_data.energy = 5000
        light_data.color = (1.0, 0.9, 0.7)
        light = bpy.data.objects.new(name=f"Eiffel_Light_{h}", object_data=light_data)
        light.location = (ex, ey, cz + h)
        link_to_collection(light, eiffel_col)
    
    return eiffel_col

# ============================================================================
# PARIS CITYSCAPE
# ============================================================================

def build_paris_cityscape(materials, collection):
    """Build surrounding Parisian buildings and streets"""
    city_col = create_collection("Paris_Cityscape", collection)
    
    cx, cy, cz = MUSEUM_CENTER
    
    # === HAUSSMANN-STYLE BUILDINGS ===
    
    building_configs = [
        # Left side of museum
        ((-80, -20), (25, 20, 22)),
        ((-80, 15), (25, 25, 25)),
        ((-80, 50), (25, 22, 20)),
        # Right side (behind archive)
        ((100, -15), (20, 18, 18)),
        ((100, 15), (20, 22, 20)),
        ((100, 45), (20, 20, 22)),
        # Behind museum (before Seine)
        ((-40, 55), (30, 15, 18)),
        ((0, 60), (35, 12, 20)),
        ((50, 55), (25, 15, 16)),
        # Across the Seine
        ((-100, 130), (30, 25, 25)),
        ((-50, 135), (35, 20, 22)),
        ((40, 130), (28, 22, 20)),
        ((100, 135), (32, 25, 24)),
        # Far background
        ((-150, 200), (40, 30, 28)),
        ((-80, 210), (35, 25, 30)),
        ((30, 205), (45, 28, 26)),
        ((120, 200), (38, 30, 24)),
    ]
    
    for i, ((bx, by), (w, d, h)) in enumerate(building_configs):
        # Main building volume
        building = add_cube(
            f"Paris_Building_{i}",
            (cx + bx, cy + by, cz + h/2),
            (w, d, h),
            materials['paris_cream'],
            city_col
        )
        
        # Mansard roof
        roof = add_cube(
            f"Paris_Roof_{i}",
            (cx + bx, cy + by, cz + h + 2),
            (w - 2, d - 2, 4),
            materials['zinc_roof'],
            city_col
        )
        
        # Window rows
        floors = int(h / 4)
        windows_per_floor = int(w / 5)
        
        for floor in range(floors):
            for win in range(windows_per_floor):
                wx = bx - w/2 + 3 + win * 5
                wz = 3 + floor * 4
                
                # Window frame
                window = add_cube(
                    f"Window_{i}_{floor}_{win}",
                    (cx + wx, cy + by - d/2 - 0.1, cz + wz),
                    (2, 0.2, 2.5),
                    materials['glass_tinted'],
                    city_col
                )
    
    # === STREETS ===
    
    # Main street in front of museum
    main_street = add_cube(
        "Main_Street",
        (cx, cy - 45, cz + 0.1),
        (200, 12, 0.2),
        materials['asphalt'],
        city_col
    )
    
    # Side street
    side_street = add_cube(
        "Side_Street",
        (cx - 65, cy, cz + 0.1),
        (12, 100, 0.2),
        materials['asphalt'],
        city_col
    )
    
    # Sidewalks
    sidewalk_front = add_cube(
        "Sidewalk_Front",
        (cx, cy - 38, cz + 0.2),
        (200, 4, 0.15),
        materials['cobblestone'],
        city_col
    )
    
    # === TREES ===
    
    tree_positions = [
        # Along front sidewalk
        (-50, -38), (-30, -38), (-10, -38), (10, -38), (30, -38), (50, -38),
        # Along quay
        (-80, 60), (-40, 60), (0, 60), (40, 60), (80, 60),
    ]
    
    for i, (tx, ty) in enumerate(tree_positions):
        # Tree trunk
        trunk = add_cylinder(
            f"Tree_Trunk_{i}",
            (cx + tx, cy + ty, cz + 3),
            0.3, 6,
            materials['tree_bark'],
            city_col
        )
        
        # Tree canopy (sphere)
        bpy.ops.mesh.primitive_uv_sphere_add(
            radius=3,
            location=(cx + tx, cy + ty, cz + 8)
        )
        canopy = bpy.context.active_object
        canopy.name = f"Tree_Canopy_{i}"
        canopy.data.materials.append(materials['tree_foliage'])
        link_to_collection(canopy, city_col)
    
    return city_col

# ============================================================================
# FRONT GARDENS AND WALKWAYS
# ============================================================================

def build_front_gardens(materials, collection):
    """Build the front garden area with walkways"""
    garden_col = create_collection("Front_Gardens", collection)
    
    cx, cy, cz = MUSEUM_CENTER
    
    # === MAIN GARDEN AREA ===
    
    # Large lawn area
    lawn = add_cube(
        "Main_Lawn",
        (cx, cy - 50, cz + 0.1),
        (60, 30, 0.2),
        materials['grass'],
        garden_col
    )
    
    # Secondary lawn areas
    lawn_left = add_cube(
        "Lawn_Left",
        (cx - 45, cy - 45, cz + 0.1),
        (25, 20, 0.2),
        materials['grass'],
        garden_col
    )
    
    lawn_right = add_cube(
        "Lawn_Right",
        (cx + 45, cy - 45, cz + 0.1),
        (25, 20, 0.2),
        materials['grass'],
        garden_col
    )
    
    # === WALKWAYS ===
    
    # Main entrance path
    main_path = add_cube(
        "Main_Path",
        (cx, cy - 45, cz + 0.15),
        (8, 25, 0.15),
        materials['terrazzo'],
        garden_col
    )
    
    # Curved path (approximated with segments)
    path_segments = [
        ((-15, -40), (10, 4)),
        ((-25, -45), (8, 4)),
        ((-30, -52), (6, 8)),
        ((15, -40), (10, 4)),
        ((25, -45), (8, 4)),
        ((30, -52), (6, 8)),
    ]
    
    for i, ((px, py), (w, d)) in enumerate(path_segments):
        path = add_cube(
            f"Garden_Path_{i}",
            (cx + px, cy + py, cz + 0.15),
            (w, d, 0.15),
            materials['cobblestone'],
            garden_col
        )
    
    # === DECORATIVE PLANTERS ===
    
    planter_positions = [
        (-20, -35), (20, -35), (-20, -55), (20, -55),
        (-35, -45), (35, -45)
    ]
    
    for i, (px, py) in enumerate(planter_positions):
        # Planter box
        planter = add_cube(
            f"Planter_{i}",
            (cx + px, cy + py, cz + 0.5),
            (3, 3, 1),
            materials['concrete_smooth'],
            garden_col
        )
        
        # Soil
        soil = add_cube(
            f"Soil_{i}",
            (cx + px, cy + py, cz + 0.9),
            (2.8, 2.8, 0.2),
            materials['tree_bark'],
            garden_col
        )
        
        # Small bush/plant
        bpy.ops.mesh.primitive_uv_sphere_add(
            radius=1.2,
            location=(cx + px, cy + py, cz + 2)
        )
        bush = bpy.context.active_object
        bush.name = f"Bush_{i}"
        bush.data.materials.append(materials['tree_foliage'])
        link_to_collection(bush, garden_col)
    
    # === BENCHES ===
    
    bench_positions = [
        ((-25, -50), 0),
        ((25, -50), 0),
        ((-40, -35), 90),
        ((40, -35), 90),
    ]
    
    for i, ((bx, by), rot) in enumerate(bench_positions):
        # Bench seat
        seat = add_cube(
            f"Bench_Seat_{i}",
            (cx + bx, cy + by, cz + 0.6),
            (3, 0.8, 0.15),
            materials['wood_oak'],
            garden_col
        )
        seat.rotation_euler = (0, 0, math.radians(rot))
        
        # Bench back
        back = add_cube(
            f"Bench_Back_{i}",
            (cx + bx, cy + by + 0.3, cz + 1.1),
            (3, 0.1, 0.8),
            materials['wood_oak'],
            garden_col
        )
        back.rotation_euler = (0, 0, math.radians(rot))
        
        # Bench legs
        for lx in [-1.2, 1.2]:
            leg = add_cube(
                f"Bench_Leg_{i}_{lx}",
                (cx + bx + lx, cy + by, cz + 0.3),
                (0.15, 0.8, 0.6),
                materials['steel_brushed'],
                garden_col
            )
            leg.rotation_euler = (0, 0, math.radians(rot))
    
    # === WATER FEATURE ===
    
    # Reflecting pool
    pool_base = add_cube(
        "Reflecting_Pool_Base",
        (cx, cy - 60, cz + 0.2),
        (15, 8, 0.4),
        materials['concrete_smooth'],
        garden_col
    )
    
    pool_water = add_cube(
        "Reflecting_Pool_Water",
        (cx, cy - 60, cz + 0.35),
        (14, 7, 0.3),
        materials['water_seine'],
        garden_col
    )
    
    return garden_col

# ============================================================================
# LIGHTING SETUP
# ============================================================================

def setup_lighting(collection):
    """Create comprehensive lighting for the scene"""
    light_col = create_collection("Lighting", collection)
    
    cx, cy, cz = MUSEUM_CENTER
    
    # === SUN LIGHT (Main) ===
    
    sun_data = bpy.data.lights.new(name="Sun_Main", type='SUN')
    sun_data.energy = 5
    sun_data.color = (1.0, 0.95, 0.9)
    sun = bpy.data.objects.new(name="Sun_Main", object_data=sun_data)
    sun.location = (cx + 100, cy - 50, cz + 150)
    sun.rotation_euler = (math.radians(45), math.radians(15), math.radians(30))
    link_to_collection(sun, light_col)
    
    # === HDRI-STYLE AMBIENT (using area lights) ===
    
    # Sky fill (blue tint from above)
    sky_data = bpy.data.lights.new(name="Sky_Fill", type='AREA')
    sky_data.energy = 2000
    sky_data.color = (0.8, 0.9, 1.0)
    sky_data.size = 200
    sky = bpy.data.objects.new(name="Sky_Fill", object_data=sky_data)
    sky.location = (cx, cy, cz + 100)
    sky.rotation_euler = (math.radians(180), 0, 0)
    link_to_collection(sky, light_col)
    
    # Ground bounce
    bounce_data = bpy.data.lights.new(name="Ground_Bounce", type='AREA')
    bounce_data.energy = 500
    bounce_data.color = (0.95, 0.92, 0.85)
    bounce_data.size = 150
    bounce = bpy.data.objects.new(name="Ground_Bounce", object_data=bounce_data)
    bounce.location = (cx, cy, cz - 5)
    link_to_collection(bounce, light_col)
    
    # === MUSEUM INTERIOR LIGHTS ===
    
    # Main gallery lights
    interior_positions = [
        (0, -10, 20), (-20, 0, 20), (20, 0, 20),
        (-20, -15, 12), (20, -15, 12), (0, 10, 12),
    ]
    
    for i, (lx, ly, lz) in enumerate(interior_positions):
        light_data = bpy.data.lights.new(name=f"Gallery_Light_{i}", type='AREA')
        light_data.energy = 800
        light_data.color = (1.0, 0.98, 0.95)
        light_data.size = 5
        light = bpy.data.objects.new(name=f"Gallery_Light_{i}", object_data=light_data)
        light.location = (cx + lx, cy + ly, cz + lz)
        light.rotation_euler = (math.radians(180), 0, 0)
        link_to_collection(light, light_col)
    
    # === ACCENT LIGHTS ===
    
    # Entrance canopy light
    canopy_light_data = bpy.data.lights.new(name="Canopy_Light", type='AREA')
    canopy_light_data.energy = 400
    canopy_light_data.color = (0.9, 0.95, 1.0)
    canopy_light_data.size = 8
    canopy_light = bpy.data.objects.new(name="Canopy_Light", object_data=canopy_light_data)
    canopy_light.location = (cx, cy - 30, cz + 5.5)
    canopy_light.rotation_euler = (math.radians(180), 0, 0)
    link_to_collection(canopy_light, light_col)
    
    # Archive wing lights
    archive_light_data = bpy.data.lights.new(name="Archive_Light", type='AREA')
    archive_light_data.energy = 600
    archive_light_data.color = (1.0, 0.95, 0.85)
    archive_light_data.size = 6
    archive_light = bpy.data.objects.new(name="Archive_Light", object_data=archive_light_data)
    archive_light.location = (cx + 55, cy, cz + 15)
    archive_light.rotation_euler = (math.radians(180), 0, 0)
    link_to_collection(archive_light, light_col)
    
    return light_col

# ============================================================================
# CAMERA SETUP
# ============================================================================

def setup_camera(collection):
    """Set up the main camera"""
    cam_col = create_collection("Camera", collection)
    
    cx, cy, cz = MUSEUM_CENTER
    
    # Main camera
    cam_data = bpy.data.cameras.new(name="Main_Camera")
    cam_data.lens = 35
    cam_data.clip_end = 1000
    
    camera = bpy.data.objects.new(name="Main_Camera", object_data=cam_data)
    camera.location = (cx - 80, cy - 100, cz + 40)
    camera.rotation_euler = (math.radians(70), 0, math.radians(-30))
    link_to_collection(camera, cam_col)
    
    # Set as active camera
    bpy.context.scene.camera = camera
    
    # Alternate camera - aerial view
    cam_data_2 = bpy.data.cameras.new(name="Aerial_Camera")
    cam_data_2.lens = 24
    cam_data_2.clip_end = 1500
    
    camera_2 = bpy.data.objects.new(name="Aerial_Camera", object_data=cam_data_2)
    camera_2.location = (cx, cy + 50, cz + 200)
    camera_2.rotation_euler = (math.radians(30), 0, math.radians(180))
    link_to_collection(camera_2, cam_col)
    
    # Interior camera
    cam_data_3 = bpy.data.cameras.new(name="Interior_Camera")
    cam_data_3.lens = 24
    
    camera_3 = bpy.data.objects.new(name="Interior_Camera", object_data=cam_data_3)
    camera_3.location = (cx - 10, cy - 15, cz + 5)
    camera_3.rotation_euler = (math.radians(85), 0, math.radians(-20))
    link_to_collection(camera_3, cam_col)
    
    return cam_col

# ============================================================================
# RENDER SETTINGS
# ============================================================================

def setup_render_settings():
    """Configure render settings for high-quality output"""
    scene = bpy.context.scene
    
    # Render engine
    scene.render.engine = 'CYCLES'
    scene.cycles.device = 'GPU'
    scene.cycles.samples = 256
    scene.cycles.preview_samples = 64
    
    # Resolution
    scene.render.resolution_x = 1920
    scene.render.resolution_y = 1080
    scene.render.resolution_percentage = 100
    
    # Film
    scene.render.film_transparent = False
    scene.cycles.film_transparent_glass = True
    
    # Color management
    scene.view_settings.view_transform = 'Filmic'
    scene.view_settings.look = 'Medium High Contrast'
    scene.view_settings.exposure = 0.5
    
    # World background
    world = bpy.data.worlds.get("World")
    if world is None:
        world = bpy.data.worlds.new("World")
    scene.world = world
    
    world.use_nodes = True
    nodes = world.node_tree.nodes
    links = world.node_tree.links
    
    # Clear existing
    for node in nodes:
        nodes.remove(node)
    
    # Create sky gradient
    output = nodes.new('ShaderNodeOutputWorld')
    output.location = (300, 0)
    
    background = nodes.new('ShaderNodeBackground')
    background.location = (0, 0)
    
    gradient = nodes.new('ShaderNodeTexGradient')
    gradient.gradient_type = 'SPHERICAL'
    gradient.location = (-400, 0)
    
    mapping = nodes.new('ShaderNodeMapping')
    mapping.location = (-600, 0)
    mapping.inputs['Rotation'].default_value = (math.radians(90), 0, 0)
    
    tex_coord = nodes.new('ShaderNodeTexCoord')
    tex_coord.location = (-800, 0)
    
    color_ramp = nodes.new('ShaderNodeValToRGB')
    color_ramp.location = (-200, 0)
    color_ramp.color_ramp.elements[0].color = (0.4, 0.6, 0.9, 1)  # Sky blue
    color_ramp.color_ramp.elements[1].color = (0.85, 0.9, 1.0, 1)  # Horizon
    
    links.new(tex_coord.outputs['Generated'], mapping.inputs['Vector'])
    links.new(mapping.outputs['Vector'], gradient.inputs['Vector'])
    links.new(gradient.outputs['Fac'], color_ramp.inputs['Fac'])
    links.new(color_ramp.outputs['Color'], background.inputs['Color'])
    background.inputs['Strength'].default_value = 1.5
    links.new(background.outputs['Background'], output.inputs['Surface'])

# ============================================================================
# MAIN BUILD FUNCTION
# ============================================================================

def build_performance_museum_scene():
    """Main function to build the complete Performance Museum scene"""
    
    print("=" * 60)
    print("PERFORMANCE MUSEUM PARIS - Scene Generation")
    print("=" * 60)
    
    # Clear existing scene
    print("\n[1/12] Clearing scene...")
    clear_scene()
    
    # Create main collection
    main_collection = create_collection("Performance_Museum_Paris")
    
    # Create materials
    print("[2/12] Creating materials...")
    materials = Materials.create_all()
    
    # Build main museum
    print("[3/12] Building main museum structure...")
    build_main_museum(materials, main_collection)
    
    # Build archive wing
    print("[4/12] Building archive wing...")
    build_archive_wing(materials, main_collection)
    
    # Build spiral staircase
    print("[5/12] Building spiral staircase...")
    build_spiral_staircase(materials, main_collection)
    
    # Build elevator
    print("[6/12] Building elevator...")
    build_elevator(materials, main_collection)
    
    # Build exhibition galleries
    print("[7/12] Building exhibition galleries...")
    build_exhibition_galleries(materials, main_collection)
    
    # Build archive interior
    print("[8/12] Building archive interior...")
    build_archive_interior(materials, main_collection)
    
    # Build human figures
    print("[9/12] Adding human figures...")
    build_human_figures(materials, main_collection)
    
    # Build Seine river
    print("[10/12] Building Seine river and quays...")
    build_seine_river(materials, main_collection)
    
    # Build Eiffel Tower
    print("[11/12] Building Eiffel Tower...")
    build_eiffel_tower(materials, main_collection)
    
    # Build Paris cityscape
    print("[12/12] Building Paris cityscape...")
    build_paris_cityscape(materials, main_collection)
    
    # Build front gardens
    print("[13/12] Building front gardens...")
    build_front_gardens(materials, main_collection)
    
    # Setup lighting
    print("[14/12] Setting up lighting...")
    setup_lighting(main_collection)
    
    # Setup camera
    print("[15/12] Setting up cameras...")
    setup_camera(main_collection)
    
    # Setup render settings
    print("[16/12] Configuring render settings...")
    setup_render_settings()
    
    print("\n" + "=" * 60)
    print("SCENE GENERATION COMPLETE!")
    print("=" * 60)
    print("\nThe Performance Museum Paris scene has been created.")
    print("Features included:")
    print("  - Modern glass museum with steel frame structure")
    print("  - Brick archive wing with artifacts")
    print("  - Elegant spiral staircase")
    print("  - Modern glass elevator")
    print("  - Sports & technology themed exhibitions")
    print("  - Information panels and wayfinding signage")
    print("  - Abstract human figures")
    print("  - Seine river with quays and boats")
    print("  - Detailed Eiffel Tower")
    print("  - Parisian buildings and streets")
    print("  - Landscaped gardens and walkways")
    print("  - Professional lighting setup")
    print("  - Multiple camera angles")
    print("\nSwitch cameras using View > Cameras menu")
    print("Render with F12 or Render > Render Image")

# ============================================================================
# BLENDER ADDON REGISTRATION
# ============================================================================

bl_info = {
    "name": "Performance Museum Paris Generator",
    "author": "ParisMuseums3DModeling",
    "version": (1, 0, 0),
    "blender": (3, 0, 0),
    "location": "View3D > Sidebar > Museum",
    "description": "Generate a Performance Museum scene in Paris",
    "category": "Object",
}

class MUSEUM_OT_generate(bpy.types.Operator):
    """Generate the Performance Museum scene"""
    bl_idname = "museum.generate"
    bl_label = "Generate Museum"
    bl_options = {'REGISTER', 'UNDO'}
    
    def execute(self, context):
        build_performance_museum_scene()
        return {'FINISHED'}

class MUSEUM_PT_panel(bpy.types.Panel):
    """Panel for museum generation"""
    bl_label = "Performance Museum"
    bl_idname = "MUSEUM_PT_panel"
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'
    bl_category = 'Museum'
    
    def draw(self, context):
        layout = self.layout
        layout.operator("museum.generate", text="Generate Museum Scene", icon='HOME')
        layout.separator()
        layout.label(text="Features:")
        layout.label(text="• Modern glass museum")
        layout.label(text="• Archive wing")
        layout.label(text="• Seine & Eiffel Tower")
        layout.label(text="• Paris cityscape")
        layout.label(text="• Professional lighting")

def register():
    bpy.utils.register_class(MUSEUM_OT_generate)
    bpy.utils.register_class(MUSEUM_PT_panel)

def unregister():
    bpy.utils.unregister_class(MUSEUM_PT_panel)
    bpy.utils.unregister_class(MUSEUM_OT_generate)

# ============================================================================
# SCRIPT EXECUTION
# ============================================================================

if __name__ == "__main__":
    # When run directly in Blender, build the scene
    build_performance_museum_scene()
