import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "5rem 10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* En-tête */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2
          style={{
            fontSize: "4rem",
            fontWeight: "700",
            color: "#1a1a2e",
            marginBottom: "1rem",
          }}
        >
          Me Contacter
        </h2>

        {/* Ligne décorative */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div style={{ width: "2px", height: "60px", backgroundColor: "#27A6B7" }} />
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#ff6b6b",
            }}
          />
        </div>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#666",
            marginTop: "2rem",
            maxWidth: "700px",
            lineHeight: "1.8",
          }}
        >
          N'hésitez pas à me contacter pour toute question ou opportunité de collaboration. 
          Je suis toujours ouvert à discuter de nouveaux projets !
        </p>
      </div>

      {/* Cartes d'informations de contact */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "repeat(3, 1fr)",
          gap: "2rem",
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "4rem",
        }}
      >
        {/* Email */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2.5rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "16px",
            border: "2px solid transparent",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = "#27A6B7";
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(39, 166, 183, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = "transparent";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "#27A6B7",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.5rem",
              marginBottom: "1.5rem",
            }}
          >
            📧
          </div>
          <h4
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              color: "#1a1a2e",
              marginBottom: "0.8rem",
            }}
          >
            Email
          </h4>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              textAlign: "center",
              wordBreak: "break-word",
            }}
          >
            ghaithbejaoui03@gmail.com
          </p>
        </div>

        {/* Téléphone */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2.5rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "16px",
            border: "2px solid transparent",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = "#27A6B7";
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(39, 166, 183, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = "transparent";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "#27A6B7",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.5rem",
              marginBottom: "1.5rem",
            }}
          >
            📱
          </div>
          <h4
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              color: "#1a1a2e",
              marginBottom: "0.8rem",
            }}
          >
            Téléphone
          </h4>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              textAlign: "center",
            }}
          >
            +216 25 988 362
          </p>
        </div>

        {/* Localisation */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2.5rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "16px",
            border: "2px solid transparent",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = "#27A6B7";
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(39, 166, 183, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = "transparent";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "#27A6B7",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.5rem",
              marginBottom: "1.5rem",
            }}
          >
            📍
          </div>
          <h4
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              color: "#1a1a2e",
              marginBottom: "0.8rem",
            }}
          >
            Localisation
          </h4>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              textAlign: "center",
            }}
          >
            Tunis, Tunisie
          </p>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div style={{ textAlign: "center" }}>
        <h3
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            color: "#1a1a2e",
            marginBottom: "2rem",
          }}
        >
          Suivez-moi
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ghaith-bejaoui-03a9392a6/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: "#27A6B7",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#1f8a98";
              e.currentTarget.style.transform = "translateY(-8px) scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#27A6B7";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            {/* SVG LinkedIn */}
            <svg width="35" height="35" viewBox="0 0 24 24" fill="white">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ghaithbejaouii"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: "#27A6B7",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#1f8a98";
              e.currentTarget.style.transform = "translateY(-8px) scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#27A6B7";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            {/* SVG GitHub */}
            <svg width="35" height="35" viewBox="0 0 24 24" fill="white">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
