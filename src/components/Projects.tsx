import FadeSection from "./FadeSection";

const projects = [
  {
    emoji: "🎲",
    title: "Cube Coloring Bruteforce",
    desc: "C#-Programm zur Auszählung aller unterscheidbaren Färbungen eines Würfels unter Rotationssymmetrie, inkl. eigenem 3D-Rotationssystem und BFS-basierter kanonischer Form.",
    link: "https://github.com/ascii-phoenix/cube-coloring-bruteforce",
  },
  {
    emoji: "📱",
    title: "LevelSense",
    desc: ".NET MAUI Cross-Platform-App.",
    link: "https://github.com/ascii-phoenix/LevelSense",
  },
  {
    emoji: "🚕",
    title: "NYC Taxi Fare Prediction",
    desc: "XGBoost-Modell zur Vorhersage von Taxi-Fahrpreisen in New York.",
    link: "https://github.com/ascii-phoenix/NYC-TAXI-FARE",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projekte</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <FadeSection key={p.title}>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="info-card rose"
              style={{ display: "block", textDecoration: "none" }}
            >
              <h3>
                {p.emoji} {p.title}
              </h3>
              <p>{p.desc}</p>
            </a>
          </FadeSection>
        ))}
      </div>
    </section>
  );
}