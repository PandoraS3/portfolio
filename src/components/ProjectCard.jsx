import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div style={{
      background: "rgba(255, 255, 255, 0.03)",
      borderRadius: "30px",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      overflow: "hidden",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      backdropFilter: "blur(10px)"
    }}>
      {/* Image du projet */}
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} 
        />
      </div>

      {/* Contenu */}
      <div style={{ padding: "25px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: "12px" }}>{project.title}</h3>
        <p style={{ color: "#a0a5b1", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "20px" }}>
          {project.desc}
        </p>

        {/* Tags Tech */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
          {project.tech.map((t, i) => (
            <span key={i} style={{
              background: "rgba(180, 255, 0, 0.1)",
              color: "#b4ff00",
              padding: "4px 12px",
              borderRadius: "50px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              border: "1px solid rgba(180, 255, 0, 0.2)"
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;