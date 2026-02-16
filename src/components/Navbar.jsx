import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={navStyle}
    >
      <div style={containerStyle}>
        {/* LOGO */}
        <h1 style={logoStyle}>
          Milena <span style={{ color: "#b4ff00" }}> Nyami Ngaha</span>
        </h1>

        {/* LIENS DE NAVIGATION */}
        <div style={linksContainerStyle}>
          <a href="#about" style={linkStyle} className="nav-link">Über mich</a>
          <a href="#skills" style={linkStyle} className="nav-link">Skills</a>
          <a href="#projects" style={linkStyle} className="nav-link">Projekte</a>
          
          {/* BOUTON CONTACT DISTINCT */}
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05, backgroundColor: "#b4ff00", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            style={contactBtnStyle}
          >
            Kontakt ↗
          </motion.a>
        </div>
      </div>

      {/* CSS INTERNE POUR LES HOVERS DES LIENS */}
      <style>{`
        .nav-link {
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #b4ff00 !important;
        }
      `}</style>
    </motion.nav>
  );
}

// STYLES
const navStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
  background: "rgba(5, 8, 16, 0.7)", // Fond très sombre et transparent
  backdropFilter: "blur(15px)",      // Effet de flou "Glassmorphism"
  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  padding: "15px 0",
};

const containerStyle = {
  maxWidth: "1300px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 60px", // Aligné avec le padding de tes sections
};

const logoStyle = {
  fontSize: "1.5rem",
  fontWeight: "900",
  color: "#fff",
  margin: 0,
  letterSpacing: "-1px",
};

const linksContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "40px",
};

const linkStyle = {
  color: "#a0a5b1",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "500",
};

const contactBtnStyle = {
  background: "rgba(180, 255, 0, 0.1)",
  color: "#b4ff00",
  padding: "10px 25px",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "0.9rem",
  border: "1px solid #b4ff00",
  transition: "all 0.3s ease",
};