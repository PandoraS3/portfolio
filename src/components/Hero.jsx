import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../assets/profile.jpg";
import myCV from "../assets/CV_Werstudentstelle_Millena_Nyami.pdf";

export default function Hero() {
  const [showCV, setShowCV] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const transition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] };

  return (
    <section style={{ 
      ...heroSectionStyle, 
      padding: isMobile ? "120px 20px 60px 20px" : "160px 60px 100px 60px",
      gridTemplateColumns: isMobile ? "1fr" : "1.4fr 0.6fr", // On donne plus de place au texte
      textAlign: isMobile ? "center" : "left",
      gap: isMobile ? "40px" : "60px"
    }}>
      
      {/* CÔTÉ GAUCHE : TEXTE ET ACTIONS */}
      <motion.div
        initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transition}
        viewport={{ once: true }}
      >
        {/* Badge avec icône agrandie */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={badgeStyle}>
          <div style={iconWrapperStyle}>
            <div style={dotStyle}></div>
          </div>
          <span style={badgeTextStyle}>MOTIVATION 100% • WERKSTUDENTIN GESUCHT</span>
        </motion.div>

        {/* NOM SUR UNE SEULE LIGNE */}
        <h1 style={{ 
          ...titleStyle, 
          fontSize: isMobile ? "3rem" : "5.5rem",
          whiteSpace: "nowrap" // Empêche le retour à la ligne
        }}>
          Millena <span style={{ color: "#b4ff00" }}>Ngaha.</span>
        </h1>

        <p style={{ 
          ...descriptionStyle, 
          maxWidth: isMobile ? "100%" : "700px",
          margin: isMobile ? "0 auto 30px auto" : "0 0 30px 0" 
        }}>
          Informatik-Masterstudentin an der <strong>Ostfalia Hochschule</strong>, spezialisiert auf 
          <strong> Data Science</strong> & <strong>Softwareentwicklung</strong>. 
          Ich entwickle intelligente Lösungen durch KI, Robotik und Cloud-Systeme.
        </p>

        {/* BOUTONS */}
        <div style={{ ...buttonGroupStyle, flexDirection: isMobile ? "column" : "row" }}>
          <motion.button onClick={() => setShowCV(true)} whileHover={{ scale: 1.05 }} style={primaryBtnStyle}>
            CV Visualisieren
          </motion.button>
          <motion.a href={myCV} download whileHover={{ scale: 1.05 }} style={secondaryBtnStyle}>
            Download PDF ⬇
          </motion.a>
        </div>

        {/* STATS */}
        <div style={{ ...statsContainerStyle, justifyContent: isMobile ? "center" : "flex-start" }}>
          <div style={statBoxStyle}>
            <h3 style={statNumberStyle}>9+</h3>
            <p style={statLabelStyle}>Projekte</p>
          </div>
          <div style={statBoxStyle}>
            <h3 style={statNumberStyle}>C1</h3>
            <p style={statLabelStyle}>Deutsch</p>
          </div>
        </div>
      </motion.div>

      {/* CÔTÉ DROIT : PHOTO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: isMobile ? 0 : 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={transition}
        viewport={{ once: true }}
        style={{ position: "relative", order: isMobile ? -1 : 1 }}
      >
        <div style={glowEffectStyle}></div>
        <img src={profile} alt="Millena Ngaha" style={profileImageStyle} />
      </motion.div>

      {/* MODAL CV */}
      <AnimatePresence>
        {showCV && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowCV(false)} style={modalOverlayStyle}>
            <motion.div initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }} onClick={(e) => e.stopPropagation()} style={modalContentStyle}>
              <div style={modalHeaderStyle}>
                <h3 style={{ margin: 0, color: "#b4ff00" }}>Mein Lebenslauf</h3>
                <button onClick={() => setShowCV(false)} style={closeBtnStyle}>✕</button>
              </div>
              <iframe src={`${myCV}#toolbar=0`} style={iframeStyle} title="CV Preview"></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// STYLES
const heroSectionStyle = { display: "grid", alignItems: "center", background: "#050810", margin: "0 auto" };
const badgeStyle = { display: "inline-flex", alignItems: "center", gap: "12px", background: "rgba(180, 255, 0, 0.1)", padding: "10px 24px", borderRadius: "50px", border: "1px solid #b4ff00", marginBottom: "30px" };
const iconWrapperStyle = { display: "flex", alignItems: "center", justifyContent: "center" };
const dotStyle = { width: "12px", height: "12px", background: "#b4ff00", borderRadius: "50%", boxShadow: "0 0 15px #b4ff00" };
const badgeTextStyle = { color: "#b4ff00", fontWeight: "bold", fontSize: "0.9rem", letterSpacing: "1px" };
const titleStyle = { lineHeight: "1.1", fontWeight: "900", color: "#fff", letterSpacing: "-2px", margin: "0 0 25px 0" };
const descriptionStyle = { color: "#a0a5b1", lineHeight: "1.6", fontWeight: "300", fontSize: "1.25rem" };
const buttonGroupStyle = { display: "flex", gap: "20px", marginTop: "40px" };
const primaryBtnStyle = { background: "#b4ff00", color: "#000", padding: "18px 35px", borderRadius: "50px", fontWeight: "800", fontSize: "1.1rem", border: "none", cursor: "pointer" };
const secondaryBtnStyle = { background: "transparent", color: "#fff", padding: "18px 35px", borderRadius: "50px", fontWeight: "800", textDecoration: "none", fontSize: "1.1rem", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" };
const statsContainerStyle = { display: "flex", gap: "20px", marginTop: "50px" };
const statBoxStyle = { background: "rgba(255, 255, 255, 0.02)", padding: "20px", borderRadius: "25px", border: "1px solid rgba(255, 255, 255, 0.07)", minWidth: "150px" };
const statNumberStyle = { fontSize: "2.2rem", color: "#fff", margin: 0, fontWeight: "800" };
const statLabelStyle = { color: "#7a8193", fontSize: "1rem", margin: "5px 0 0 0" };
const profileImageStyle = { width: "100%", borderRadius: "40px", border: "1px solid rgba(255, 255, 255, 0.1)", position: "relative", zIndex: 2, display: "block", margin: "0 auto" };
const glowEffectStyle = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "120%", height: "120%", background: "radial-gradient(circle, rgba(180, 255, 0, 0.12) 0%, rgba(5, 8, 16, 0) 70%)", zIndex: 1 };
const modalOverlayStyle = { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(20px)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 3000, padding: "20px" };
const modalContentStyle = { background: "#0d111c", padding: "15px", borderRadius: "30px", width: "95%", height: "90%", maxWidth: "1000px", border: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column" };
const modalHeaderStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px", padding: "0 10px" };
const closeBtnStyle = { background: "none", border: "none", color: "#fff", fontSize: "24px", cursor: "pointer" };
const iframeStyle = { width: "100%", height: "100%", borderRadius: "15px", border: "none", background: "white" };