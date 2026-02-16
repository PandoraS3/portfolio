import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "C/C++"]
  },
  {
    title: "Frameworks",
    skills: ["React", "Angular", "Node.js", "Flutter", "Spring Boot"]
  },
  {
    title: "Databases",
    skills: ["SQL", "MongoDB", "MariaDB", "PostgreSQL"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Jenkins", "Azure"]
  },
  {
    title: "Design",
    skills: ["Figma", "Adobe XD", "Photoshop"]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="skills" style={{ padding: "120px 60px", background: "#050810" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        
        {/* Titre plus grand */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          style={{ marginBottom: "80px" }}
        >
          <h2 style={{ fontSize: "4rem", color: "#fff", fontWeight: "900", marginBottom: "15px", letterSpacing: "-1px" }}>
            Skills & Technologien
          </h2>
          <p style={{ color: "#7a8193", fontSize: "1.4rem", fontWeight: "300" }}>
            Expertise & Technical Stack
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
            gap: "40px" 
          }}
        >
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                padding: "45px",
                borderRadius: "35px",
                border: "1px solid rgba(255, 255, 255, 0.07)",
                backdropFilter: "blur(15px)"
              }}
            >
              <h3 style={{ 
                color: "#b4ff00", 
                fontSize: "1.8rem", 
                marginBottom: "30px", 
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span style={{ width: "8px", height: "8px", background: "#b4ff00", borderRadius: "50%" }}></span>
                {cat.title}
              </h3>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                {cat.skills.map((skill, sIdx) => (
                  <motion.span 
                    key={sIdx}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(180, 255, 0, 0.2)", borderColor: "#b4ff00" }}
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      color: "#fff",
                      padding: "12px 24px", // Badge plus large
                      borderRadius: "18px",
                      fontSize: "1.1rem", // Texte plus grand
                      fontWeight: "500",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}