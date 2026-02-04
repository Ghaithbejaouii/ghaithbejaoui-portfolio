import React from "react";

const About = () => {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "5rem 10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "5rem",
        flexWrap: window.innerWidth <= 968 ? "wrap" : "nowrap",
      }}
    >
      {/* Partie gauche - Services avec timeline */}
      <div style={{ flex: "1", minWidth: "300px" }}>
        {/* Service 1 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          {/* Timeline verticale */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: "4px",
                height: "60px",
                backgroundColor: "#27A6B7",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#27A6B7",
              }}
            />
            <div
              style={{
                width: "4px",
                height: "60px",
                backgroundColor: "#27A6B7",
              }}
            />
          </div>

          {/* Icône et texte */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div
              style={{
                width: "70px",
                height: "70px",
                border: "2px solid #27A6B7",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              💻
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1a1a2e",
                margin: 0,
              }}
            >
              Développement Web
            </h3>
          </div>
        </div>

        {/* Service 2 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          {/* Timeline verticale */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: "4px",
                height: "60px",
                backgroundColor: "#27A6B7",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#27A6B7",
              }}
            />
            <div
              style={{
                width: "4px",
                height: "60px",
                backgroundColor: "#27A6B7",
              }}
            />
          </div>

          {/* Icône et texte */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div
              style={{
                width: "70px",
                height: "70px",
                border: "2px solid #27A6B7",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              📱
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1a1a2e",
                margin: 0,
              }}
            >
              Développement Mobile
            </h3>
          </div>
        </div>

        {/* Service 3 */}
         <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            position: "relative",
          }}
        >
          {/* Timeline verticale */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: "4px",
                height: "60px",
                backgroundColor: "#27A6B7",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#27A6B7",
              }}
            />
          </div>

          {/* Icône et texte */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div
              style={{
                width: "70px",
                height: "70px",
                border: "2px solid #27A6B7",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="#1a1a2e"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1a1a2e",
                margin: 0,
              }}
            >
              GitHub
            </h3>
          </div>
        </div>
      </div>

      {/* Partie droite - À propos et statistiques */}
      <div style={{ flex: "1", minWidth: "300px" }}>
        <h2
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            color: "#1a1a2e",
            marginBottom: "2rem",
          }}
        >
          À propos de moi
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "3rem",
          }}
        >
          J’ai étudié pendant trois ans à l’ISET, où j’ai obtenu une licence en développement des systèmes d’information. Grâce à ce parcours, j’ai appris à aimer le processus de création à partir de zéro. Par la suite, cela m’a naturellement conduit vers le développement logiciel, car ce domaine correspond parfaitement à mon goût pour l’apprentissage continu et la création de solutions.
        </p>

        {/* Statistiques */}
        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "0.5rem",
  }}
>
  {/* Stat 1 */}
  <div>
    <h3
      style={{
        fontSize: "3rem",
        fontWeight: "700",
        color: "#27A6B7",
        margin: 0,
      }}
    >
      4 <span style={{ color: "#ff6b6b" }}>+</span>
    </h3>
    <p
      style={{
        fontSize: "1rem",
        color: "#777",
        marginTop: "0.5rem",
      }}
    >
      Projets réalisés
    </p>
  </div>

  {/* Stat 2 */}
  <div>
    <h3
      style={{
        fontSize: "3rem",
        fontWeight: "700",
        color: "#27A6B7",
        margin: 0,
      }}
    >
      1 <span style={{ color: "#ff6b6b" }}>+</span>
    </h3>
    <p
      style={{
        fontSize: "1rem",
        color: "#777",
        marginTop: "0.5rem",
      }}
    >
      Années d'expérience
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
