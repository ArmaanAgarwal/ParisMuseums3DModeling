import { MUSEUM_NAME } from "@/lib/museumConfig";

export const metadata = {
  title: `Online Museum Structure | ${MUSEUM_NAME}`,
  description: "Learn how this online museum is structured and why it exists on the web.",
};

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="space-y-12">
          <div>
            <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
              How This Online Museum Is Built
            </h1>
            <p className="mb-6 text-xl leading-relaxed text-white/80">
              This museum exists entirely online. Instead of physical spaces, we use web pages, interactive maps, and digital tools to tell the story of human performance.
            </p>
          </div>

          {/* Why Online Matters */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Why Online Matters</h2>
            <p className="mb-4 leading-relaxed text-white/80">
              This museum is online so anyone can visit from anywhere, at any time. You do not need to travel or buy tickets. This matches the theme of the museum itself: performance technology started in exclusive places like research labs and elite training facilities, but it moved into everyday life. This museum does the same thing by being accessible to everyone.
            </p>
            <p className="leading-relaxed text-white/80">
              Being online also lets us show connections between objects that would be in different rooms in a physical museum. You can compare objects from different time periods side by side. You can follow thematic paths that cross levels and zones. The web makes these connections visible in ways a physical space cannot.
            </p>
          </div>

          {/* Main Story Path */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">The Museum Has One Main Story Path</h2>
            <p className="mb-4 leading-relaxed text-white/80">
              The museum is designed like a real visit. You start at the entrance, follow a guided tour that tells the complete story, and you can take side paths for deeper exploration. The guided tour is the main path. It takes you through all three levels in order, explaining how ideas developed from ancient times to the future.
            </p>
            <p className="leading-relaxed text-white/80">
              You can also explore freely. Click zones on maps, browse exhibits, or follow thematic paths. But the tour gives you the complete story first, so you understand how everything connects.
            </p>
          </div>

          {/* Layout of the Museum */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">The Layout of the Museum</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold text-white/90">Home is the entrance</h3>
                <p className="text-white/80">
                  The home page welcomes you and explains what the museum is about. From here you can start the guided tour or explore freely.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white/90">Tour is the main guided visit</h3>
                <p className="text-white/80">
                  The tour takes you through the entire museum step by step. It is like having a guide walk you through each level, explaining what you see and why it matters.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white/90">Map is the interactive floor plan</h3>
                <p className="text-white/80">
                  Each level has a map showing zones. Click zones to see what is inside. The map helps you understand how the level is organized and lets you jump to areas that interest you.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white/90">Exhibits are curated groupings</h3>
                <p className="text-white/80">
                  Exhibits group objects together around a theme. Each exhibit explains why these objects belong together and what story they tell. Exhibits help you understand connections between objects.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white/90">Objects are the detailed artifact pages</h3>
                <p className="text-white/80">
                  Object pages show detailed information about each artifact. You see descriptions, why it matters, what to notice, and connections to other objects. These are like museum labels with more detail.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white/90">Paths are thematic routes</h3>
                <p className="text-white/80">
                  Paths are curated routes that explain why objects belong together. They follow a theme across levels and zones, showing how ideas developed over time.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white/90">Timeline is the big historical ordering tool</h3>
                <p className="text-white/80">
                  The timeline shows all objects in chronological order. Use it to see how ideas developed from ancient times to today. It helps you understand the big picture.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white/90">Glossary helps define terms</h3>
                <p className="text-white/80">
                  The glossary explains technical terms in simple language. If you see a word you do not know, check the glossary for a clear explanation.
                </p>
              </div>
            </div>
          </div>

          {/* Interface Replaces Physical Space */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">How the Interface Replaces Physical Space</h2>
            <p className="mb-4 leading-relaxed text-white/80">
              In a physical museum, you walk through rooms and hallways. Here, you click through pages and interactive elements. Zones work like rooms: they group related content together. When you click a zone, you see what is inside. You can preview objects, read descriptions, and then enter the zone to explore fully.
            </p>
            <p className="mb-4 leading-relaxed text-white/80">
              The interface always shows you where you are. Breadcrumbs at the top show your path: Level, Zone, Exhibit, Object. The tour progress bar shows how far through the tour you are. You can always return to where you started or continue where you left off.
            </p>
            <p className="leading-relaxed text-white/80">
              Interactive elements let you try things instead of just reading. You can adjust sliders to see how measurements work. You can click hotspots to learn about tool parts. You can compare objects side by side. These interactions teach you how performance technology works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
