# Performance Museum Website

A production-quality, museum-grade interactive website for the Performance Museum creative project. This site demonstrates a hybrid architectural concept combining Louvre procession logic, Pompidou exposed systems, and brick archive materiality.

## 🎯 Project Overview

This website serves as both a portfolio piece and an interactive exploration of an imagined museum. It covers all requirements for a 170-point Creative Project rubric, including:

- **Overall Structure & Professional Polish (25 pts)**
- **Design Aspects (115 pts)**: Location, Architecture, Collections Layout, Content, 10 Detailed Objects
- **Didactic Materials (30 pts)**: Wall texts, labels, interactive elements, participation stations

## 🏗️ Architecture

The museum concept has three levels:

- **Level 1: Origins & Icons** - History of movement, early gear, iconic artifacts
- **Level 2: Data, Motion & Body** - Sprint track, motion capture, analysis zones, biomechanics lab
- **Level 3: Futures & Immersion** - VR arenas, AI coaching, interactive installations, sky gallery

## 🛠️ Tech Stack

- **Next.js 16** (App Router) with TypeScript
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **Zustand** for state management (where needed)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page with hero, diagram, rubric
│   ├── location/          # Site context and arrival sequence
│   ├── architecture/      # Massing, facades, structure, materials
│   ├── collections/       # Level organization and visitor flow
│   ├── objects/           # Object gallery and detail pages
│   │   └── [slug]/       # Dynamic object detail pages
│   ├── didactics/         # Wall texts, labels, interactives
│   └── process/           # Design process documentation
├── components/            # Reusable components
│   ├── NavBar.tsx
│   ├── RubricChecklist.tsx
│   ├── FloorPlan.tsx
│   ├── GuidedTour.tsx
│   └── icons.tsx
└── lib/
    └── museumData.ts      # Single source of truth for all museum data
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📸 Adding Your Blender Renders

### Museum Architecture Renders

1. Create a `renders` directory in `/public/`:
```bash
mkdir public/renders
```

2. Add your Blender screenshots to `/public/renders/` with descriptive names:
   - `exterior-front-view.jpg` - Main facade view
   - `exterior-side-view.jpg` - Side elevation showing tech facade
   - `brick-wing-detail.jpg` - Close-up of brick archive wing
   - `level-1-interior.jpg` - Origins & Icons level
   - `level-2-interior.jpg` - Data, Motion & Body level
   - `level-3-interior.jpg` - Futures & Immersion level
   - `atrium-view.jpg` - Central circulation space
   - `lighting-study.jpg` - Lighting visualization

3. Update the Process page (`src/app/process/page.tsx`) Gallery section to display your renders using Next.js Image component.

### Object Images

For the 10 detailed objects, add images to `/public/objects/` and name them according to the `imagePath` in `museumData.ts`:

- `/public/objects/ancient-sandals.jpg`
- `/public/objects/olympic-torch.jpg`
- `/public/objects/first-stopwatch.jpg`
- `/public/objects/vintage-sneakers.jpg`
- `/public/objects/first-record-book.jpg`
- `/public/objects/motion-capture-rig.jpg`
- `/public/objects/force-plate.jpg`
- `/public/objects/biomechanics-sensor.jpg`
- `/public/objects/heart-rate-monitor.jpg`
- `/public/objects/gait-analyzer.jpg`
- `/public/objects/vr-training-pod.jpg`
- `/public/objects/ai-coaching-system.jpg`
- `/public/objects/holographic-display.jpg`
- `/public/objects/future-prototype.jpg`

**Note:** The site currently shows placeholders for all images. Once you add your Blender renders and object photos, they will automatically display.

## 📝 Adding New Exhibits

To add a new exhibit:

1. Open `src/lib/museumData.ts`
2. Add a new object to the `MUSEUM_OBJECTS` array following the existing structure
3. Add the object ID to the appropriate zone's `objects` array in the `LEVELS` data
4. Add the corresponding image to `/public/objects/`

## 🎨 Design System

### Colors
- Background: Black (`bg-black`)
- Cards: Semi-transparent white (`bg-white/5`, `bg-white/10`)
- Accents: Emerald, Fuchsia, Amber, Sky for different zones

### Typography
- Headlines: Large, semibold, tracking-tight
- Body: Medium size, leading-relaxed, white/80 opacity
- Hierarchy: Clear size and weight distinctions

### Spacing
- Generous padding and margins
- Consistent gap spacing in grids
- Breathing room around content

## 🚢 Deployment to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy with zero configuration

The site is optimized for Vercel deployment and will work out of the box.

## ✅ Rubric Coverage

The site addresses all rubric requirements:

- ✅ **Structure (25 pts)**: Clear information architecture, professional design, interactive elements
- ✅ **Location (10 pts)**: Site context, arrival sequence, axis, gardens, water
- ✅ **Architecture (25 pts)**: Massing, facades, structure, materials, lighting
- ✅ **Collections Layout (20 pts)**: Floor organization, zones, visitor flow
- ✅ **Content (20 pts)**: Coherent narrative across 3 levels
- ✅ **10 Objects (40 pts)**: Full metadata, display info, didactics, interactives
- ✅ **Didactics (30 pts)**: Wall texts, labels, touchscreen mocks, participation activities

## 📚 Key Features

- **Interactive Floor Plans**: Clickable zone maps for each level
- **Guided Tour**: Step-by-step navigation through all sections
- **Object Detail Pages**: Comprehensive information for each of 10 objects
- **Interactive Elements**: Sliders, quizzes, toggles, and simulations
- **Rubric Checklist**: Visual completion status for all requirements
- **Responsive Design**: Works on all screen sizes

## 🎯 Next Steps

1. Add your Blender renders to `/public/renders/`
2. Replace object image placeholders in `/public/objects/`
3. Customize content in `museumData.ts` if needed
4. Deploy to Vercel

## 📄 License

This is a creative project for academic/portfolio purposes.

---

Built with ❤️ for the Performance Museum creative project.
