import React from "react";

const Projects = () => {
const projects = [
  {
    name: "SmartFarm Platform",
    description:
      "Plateforme intelligente dédiée à l’agriculture, permettant le suivi des données météo, la gestion des saisons agricoles et l’aide à la prise de décision pour les agriculteurs.",
    tags: ["React", "Node.js", "Nest.js", "Prisma", "API"],
    image: "🌱",
  },
  {
    name: "Plateforme de gestion des réclamations",
    description:
      "Application web de gestion des réclamations et du service après-vente, avec gestion des utilisateurs, bons d’entrée/sortie, devis et suivi des interventions techniques.",
    tags: ["React", "Node.js", "Nest.js", "Prisma"],
    image: "🛠️",
  },
  {
    name: "Plateforme RH",
    description:
      "Système de gestion des ressources humaines permettant le suivi des employés, l’organisation des données RH et la centralisation des informations administratives.",
    tags: ["React", "Node.js", "Nest.js", "Prisma"],
    image: "👥",
  },
  {
    name: "Portfolio interactif",
    description:
      "Portfolio personnel moderne et responsive mettant en valeur mes compétences, projets et expériences, avec une interface claire et des animations légères.",
    tags: ["React", "Bootstrap"],
    image: "🎨",
  },
];


  return (
    <section
    id="projects"
      style={{
        minHeight: "100vh",
        backgroundColor: "#1a1a2e",
        padding: "5rem 10%",
        color: "white",
      }}
    >
      {/* En-tête */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "5rem",
        }}
      >
        <h2
          style={{
            fontSize: "4rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          Projets
        </h2>
        
        {/* Ligne décorative avec point */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "2px",
              height: "60px",
              backgroundColor: "#27A6B7",
            }}
          />
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#ff6b6b",
            }}
          />
        </div>
      </div>

      {/* Grille de projets */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : window.innerWidth <= 1200 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
          gap: "2rem",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#16213e",
              borderRadius: "12px",
              padding: "2rem",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "2px solid transparent",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.borderColor = "#27A6B7";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(39, 166, 183, 0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Icône/Image du projet */}
            <div
              style={{
                fontSize: "4rem",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              {project.image}
            </div>

            {/* Nom du projet */}
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#27A6B7",
              }}
            >
              {project.name}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                color: "#ccc",
                marginBottom: "1.5rem",
              }}
            >
              {project.description}
            </p>

            {/* Tags/Technologies */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: "#27A6B7",
                    color: "white",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "500",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bouton Voir Plus (optionnel) */}
      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
        }}
      >
      </div>
    </section>
  );
};

export default Projects;