import React from "react";
import profilePic from "../assets/image.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <header className="position-relative text-white" style={{
      minHeight: "100vh",
      height: "100vh",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      overflow: "hidden",
    }}>
      {/* Décorations géométriques */}
      <div
        className="position-absolute"
        style={{
          right: "15%",
          top: "20%",
          width: "60px",
          height: "60px",
          border: "3px solid #27A6B7",
          borderRadius: "8px",
          transform: "rotate(45deg)",
          opacity: 0.3,
        }}
      />
      <div
        className="position-absolute"
        style={{
          right: "12%",
          bottom: "25%",
          width: "80px",
          height: "80px",
          border: "3px solid #27A6B7",
          transform: "rotate(15deg)",
          opacity: 0.2,
        }}
      />

      <div className="container h-100 d-flex flex-column flex-lg-row align-items-center justify-content-center py-5">
        {/* Texte */}
        <div className="mb-5 mb-lg-0" style={{ maxWidth: "600px", zIndex: 2 }}>
          <h1 className="display-1 fw-bold mb-3">
            Hello<span style={{ color: "#27A6B7" }}>.</span>
          </h1>

          <div className="d-flex align-items-center gap-3 mb-4">
            <div style={{ width: "60px", height: "2px", backgroundColor: "#27A6B7" }} />
            <h2 className="fs-2 fw-light m-0">Je suis Ghaith</h2>
          </div>

          <h3 className="display-3 fw-bold mb-4" style={{ color: "#27A6B7" }}>
            Développeur Full Stack
          </h3>

          <div className="d-flex flex-wrap gap-3">
            <button
              className="btn"
              style={{
                backgroundColor: "#27A6B7",
                color: "white",
                fontWeight: 600,
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#1f8a98";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#27A6B7";
                e.target.style.transform = "translateY(0)";
              }}
              onClick={scrollToProjects}
            >
              Projets
            </button>

            <button
              className="btn"
              onClick={scrollToAbout}
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid white",
                fontWeight: 600,
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#1a1a2e";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "white";
              }}
            >
              À propos de moi
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="position-relative d-flex justify-content-center align-items-center" style={{ zIndex: 2 }}>
          <div
            className="position-absolute rounded-circle"
            style={{
              width: "250px",
              height: "250px",
              backgroundColor: "#27A6B7",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: -1,
            }}
          />
          <img
            src={profilePic}
            alt="Ghaith Bejaoui"
            className="rounded-circle"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              border: "2px solid white",
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
