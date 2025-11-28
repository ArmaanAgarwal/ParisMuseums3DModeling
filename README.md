# ParisMuseums3DModeling

## Performance Museum Paris - Blender Scene Generator

A comprehensive Blender Python script that generates a stunning, modern museum celebrating the intersection of **Technology, Innovation, and Sports**, fully integrated into a Parisian context complete with the Seine River and Eiffel Tower.

![Museum Concept](https://via.placeholder.com/800x400/1a1a2e/00d4ff?text=Performance+Museum+Paris)

---

## 🏛️ Features

### Main Museum Building
- **Modern glass and steel architecture** with geometric precision
- **Multi-level design** with central atrium and skylights
- **LED accent lighting** for contemporary aesthetic
- **Elegant entrance canopy** with supporting columns

### Archive Wing
- **Traditional brick facade** connecting to modern design
- **Pitched zinc roof** with Parisian architectural style
- **Glass corridor** connecting to main building
- **Multiple floors** with historical artifacts displays

### Interior Exhibitions
- **Technology Innovation Gallery** - Interactive displays and tech showcases
- **Sports Excellence Hall** - Display cases with sports artifacts
- **Information Panels** - Wayfinding signage and didactic materials
- **Interactive Screens** - Digital exhibit interfaces

### Vertical Circulation
- **Elegant Spiral Staircase** - Steel and brass with handrails
- **Modern Glass Elevator** - Transparent cab with LED lighting

### Paris Integration
- **Seine River** with detailed quays, lampposts, and boats
- **Eiffel Tower** - Detailed model positioned across the river
- **Haussmann-style Buildings** - Parisian architecture surrounding the museum
- **Streets and Sidewalks** - Complete urban context
- **Front Gardens** - Landscaped paths, planters, benches, and reflecting pool

### Human Figures
- **Abstract visitors** placed throughout the museum
- **Multi-floor population** showing museum activity

### Professional Lighting
- **Sun light** for natural illumination
- **Sky ambient lighting** for soft fill
- **Gallery spotlights** for exhibit highlights
- **Accent lighting** on architectural features
- **Eiffel Tower illumination**

### Multiple Camera Views
- **Main Camera** - Exterior view showing museum and Paris context
- **Aerial Camera** - Bird's eye view of the entire scene
- **Interior Camera** - Inside the museum galleries

---

## 🚀 Installation & Usage

### Requirements
- **Blender 3.0+** (tested on Blender 3.6 LTS and 4.0+)
- Python 3.10+ (included with Blender)

### Quick Start

1. **Open Blender**

2. **Load the Script**
   - Go to `Scripting` workspace (top tabs)
   - Click `Open` and select `performance_museum_paris.py`
   - Press `Run Script` (▶️ button) or `Alt+P`

3. **Wait for Generation**
   - The script will output progress to the System Console
   - Generation takes approximately 10-30 seconds depending on hardware

4. **Explore the Scene**
   - Switch to `Layout` workspace
   - Use `Numpad` keys to navigate (1=Front, 3=Right, 7=Top, 0=Camera)
   - Press `Z` to toggle shading modes (Wireframe, Solid, Material, Rendered)

### Using as an Addon

1. **Install the Addon**
   - Go to `Edit > Preferences > Add-ons`
   - Click `Install...` and select `performance_museum_paris.py`
   - Enable "Performance Museum Paris Generator"

2. **Access the Panel**
   - In 3D Viewport, press `N` to open sidebar
   - Find `Museum` tab
   - Click `Generate Museum Scene`

---

## 📸 Rendering

### Quick Render
- Press `F12` to render with current camera
- Use `View > Cameras` to switch between cameras

### Recommended Settings (Already Configured)
```
Engine: Cycles
Samples: 256
Resolution: 1920x1080
View Transform: Filmic
Look: Medium High Contrast
```

### For Faster Preview
- Switch to `Eevee` render engine
- Reduce samples to 64
- Enable `Screen Space Reflections` for glass

### For High Quality
- Increase samples to 512-1024
- Enable `Denoising` in render settings
- Use GPU rendering if available

---

## 🎨 Customization

### Modify Colors & Materials
Materials are created in the `Materials` class. Edit the `create_all()` method:

```python
# Example: Change tech accent to green
materials['tech_blue'] = create_material(
    'Tech_Blue', (0.0, 0.8, 0.3),  # Changed from blue to green
    metallic=0.5, roughness=0.3, emission=0.3
)
```

### Adjust Building Dimensions
Modify constants at the top of the script:

```python
MAIN_BUILDING_WIDTH = 80   # Increase for wider museum
MAIN_BUILDING_DEPTH = 50   # Increase for deeper museum
MAIN_BUILDING_HEIGHT = 25  # Increase for taller building
```

### Move the Eiffel Tower
```python
EIFFEL_Y_OFFSET = 180  # Increase to move tower further back
```

### Add More Human Figures
Add positions to `figure_configs` in `build_human_figures()`:

```python
figure_configs = [
    # Add new positions
    ((cx + 10, cy + 5, cz + 1.5), 0.5),  # (position, rotation)
    ...
]
```

---

## 🏗️ Scene Structure

The scene is organized into collections for easy management:

```
Performance_Museum_Paris/
├── Main_Museum/
│   ├── Foundation, floors, columns
│   ├── Glass facades
│   ├── Roof and skylights
│   └── LED accents
├── Archive_Wing/
│   ├── Brick walls
│   ├── Windows
│   └── Connection corridor
├── Spiral_Staircase/
├── Elevator/
├── Galleries/
│   ├── Tech pedestals
│   ├── Sports cases
│   ├── Info panels
│   └── Interactive screens
├── Archive_Interior/
├── Human_Figures/
├── Seine_River/
│   ├── Water
│   ├── Quays
│   ├── Bridges
│   └── Boats
├── Eiffel_Tower/
├── Paris_Cityscape/
│   ├── Buildings
│   ├── Streets
│   └── Trees
├── Front_Gardens/
│   ├── Lawns
│   ├── Walkways
│   ├── Planters
│   └── Benches
├── Lighting/
└── Camera/
```

---

## 🎓 Museum Theme: Technology + Sports

The Performance Museum celebrates the intersection of:

### Technology & Innovation
- Modern glass and steel architecture
- LED accent lighting systems
- Interactive digital displays
- Futuristic material choices (metallic blues, cyans)

### Sports & Performance
- Sports artifact display cases
- Orange and red accent colors
- Athletic-inspired exhibition design
- Trophy and equipment showcases

### Architectural Philosophy
- **Transparency**: Glass facades represent openness and innovation
- **Structure**: Steel frame shows technical precision
- **Heritage**: Brick archive wing honors tradition
- **Integration**: Seamlessly fits into Paris context

---

## 📝 Technical Notes

### Performance
- Total objects: ~500-600
- Recommended RAM: 8GB+
- GPU recommended for Cycles rendering

### Coordinate System
- Museum center: (0, 0, 0)
- Y-axis: Points toward Eiffel Tower (North)
- X-axis: Points right (East)
- Z-axis: Points up

### Scale
- 1 Blender unit = 1 meter
- Museum: ~80m x 50m x 25m
- Eiffel Tower: ~120m tall (scaled representation)

---

## 📄 License

This project is created for educational purposes as part of the ParisMuseums3DModeling coursework.

---

## 🤝 Credits

- **Blender Foundation** - 3D software
- **Parisian Architecture** - Design inspiration
- **Modern Museum Design** - Conceptual references

---

*Built with ❤️ using Blender Python API*
