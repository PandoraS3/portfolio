import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 60px", background: "#050810" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        
        {/* TITRE HARMONISÉ */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          style={{ marginBottom: "80px" }}
        >
          <h2 style={{ fontSize: "4rem", color: "#fff", fontWeight: "900", marginBottom: "15px", letterSpacing: "-1px" }}>
            Über mich
          </h2>
          <p style={{ color: "#7a8193", fontSize: "1.4rem", fontWeight: "300" }}>
            Informatik-Masterstudentin mit Fokus auf Data Science & Softwareentwicklung.
          </p>
        </motion.div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1.2fr 1fr", 
          gap: "40px" 
        }}>
          
          {/* PROFIL & VISION (GAUCHE) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={cardStyle}
          >
            <h3 style={h3Style}>Profil & Vision</h3>
            <p style={pStyle}>
              Ich bin eine leidenschaftliche Informatikerin, die sich an der Schnittstelle von 
              <strong> Data Science</strong> und <strong>moderner Softwareentwicklung</strong> bewegt. 
              Mein Ziel ist es, komplexe Daten in intelligente Lösungen zu verwandeln und 
              robuste, skalierbare Anwendungen zu entwickeln.
            </p>
            <p style={{ ...pStyle, marginTop: "20px" }}>
              Durch meine Erfahrung mit Cloud-nativen ERP-Systemen und autonomer Robotik bringe 
              ich ein tiefes Verständnis für Full-Stack-Entwicklung und maschinelles Lernen mit. 
              Ich suche eine Werkstudentenstelle, um meine Kenntnisse in realen Projekten zu 
              vertiefen und innovative IT-Lösungen mitzugestalten.
            </p>
          </motion.div>

          {/* FORMATION & INFO CLÉS (DROITE) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* EDUCATION */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              style={{ ...cardStyle, padding: "35px" }}
            >
              <h3 style={h3Style}>Akademischer Weg</h3>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ color: "#b4ff00", fontSize: "1.1rem" }}>Master: Data Science & Software Engineering</h4>
                <p style={{ color: "#7a8193", fontSize: "0.95rem" }}>Ostfalia Hochschule (Wolfenbüttel) | 2025 – Heute</p>
              </div>
              <div>
                <h4 style={{ color: "#fff", fontSize: "1.1rem" }}>Bachelor: Software Engineering</h4>
                <p style={{ color: "#7a8193", fontSize: "0.95rem" }}>IUT Douala (Kamerun) | 2021 – 2023</p>
              </div>
            </motion.div>

            {/* LANGUAGES & SOFT SKILLS */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              style={{ ...cardStyle, padding: "35px" }}
            >
              <h3 style={h3Style}>Sprachen & Soft Skills</h3>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "15px" }}>
                <span style={tagStyle}>Deutsch (C1)</span>
                <span style={tagStyle}>Französisch (C2)</span>
                <span style={tagStyle}>Englisch (B2)</span>
              </div>
              <p style={{ color: "#a0a5b1", fontSize: "1rem" }}>
                Teamfähigkeit • Strukturiertes Arbeiten • Kreativität • Problemlösungskompetenz
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// STYLES RÉUTILISABLES
const cardStyle = {
  background: "rgba(255, 255, 255, 0.02)",
  padding: "50px",
  borderRadius: "35px",
  border: "1px solid rgba(255, 255, 255, 0.07)",
  backdropFilter: "blur(15px)",
};

const h3Style = {
  color: "#b4ff00",
  fontSize: "1.8rem",
  marginBottom: "25px",
  fontWeight: "700"
};

const pStyle = {
  fontSize: "1.15rem",
  lineHeight: "1.8",
  color: "#a0a5b1",
  fontWeight: "300"
};

const tagStyle = {
  background: "rgba(180, 255, 0, 0.1)",
  color: "#b4ff00",
  padding: "6px 15px",
  borderRadius: "50px",
  fontSize: "0.85rem",
  border: "1px solid rgba(180, 255, 0, 0.2)",
  fontWeight: "bold"
};