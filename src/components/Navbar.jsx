import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Importation de ton logo Ming
import logoMing from "../assets/favicon.png"; 

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Gestion du responsive pour la barre de navigation
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={navStyle}
    >
      <div style={{ ...containerStyle, padding: isMobile ? "0 20px" : "0 60px" }}>
        
        {/* LOGO + NOM */}
        <div style={logoWrapperStyle}>
          <img 
            src={logoMing} 
            alt="Ming Logo" 
            style={{ width: "35px", height: "35px", borderRadius: "8px" }} 
          />
          <h1 style={{ ...logoStyle, fontSize: isMobile ? "1.1rem" : "1.5rem" }}>
            Milena <span style={{ color: "#b4ff00" }}>{isMobile ? "N." : "Nyami Ngaha"}</span>
          </h1>
        </div>

        {/* LIENS DE NAVIGATION (Cachés ou simplifiés sur très petit mobile) */}
        <div style={{ ...linksContainerStyle, gap: isMobile ? "15px" : "40px" }}>
          {!isMobile && (
            <>
              <a href="#about" style={linkStyle} className="nav-link">Über mich</a>
              <a href="#skills" style={linkStyle} className="nav-link">Skills</a>
              <a href="#projects" style={linkStyle} className="nav-link">Projekte</a>
            </>
          )}
          
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05, backgroundColor: "#b4ff00", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            style={{ ...contactBtnStyle, padding: isMobile ? "8px 15px" : "10px 25px" }}
          >
            Kontakt {isMobile ? "" : "↗"}
          </motion.a>
        </div>
      </div>

      <style>{`
        .nav-link { transition: color 0.3s ease; text-decoration: none; }
        .nav-link:hover { color: #b4ff00 !important; }
      `}</style>
    </motion.nav>
  );
}

// STYLES MIS À JOUR
const navStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
  background: "rgba(5, 8, 16, 0.85)", 
  backdropFilter: "blur(15px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  padding: "15px 0",
};

const containerStyle = {
  maxWidth: "1300px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logoWrapperStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px", // Espace entre le logo et le texte
};

const logoStyle = {
  fontWeight: "900",
  color: "#fff",
  margin: 0,
  letterSpacing: "-1px",
};

const linksContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const linkStyle = {
  color: "#a0a5b1",
  fontSize: "1rem",
  fontWeight: "500",
};

const contactBtnStyle = {
  background: "rgba(180, 255, 0, 0.1)",
  color: "#b4ff00",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "0.9rem",
  border: "1px solid #b4ff00",
  transition: "all 0.3s ease",
};