import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Envoi via EmailJS avec tes identifiants
    emailjs.sendForm(
      'service_dce83vn', 
      'template_hsqr1il', // Espace supprimé ici
      form.current, 
      'ZfnfHPIxbwb7tfxHF'
    )
      .then(() => {
          alert("Nachricht erfolgreich gesendet! ✅");
          e.target.reset();
      }, (error) => {
          alert("Fehler beim Senden... ❌");
          console.error("EmailJS Error:", error.text);
      });
  };

  const inputStyle = {
    padding: "20px 25px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.1)",
    background: "rgba(255, 255, 255, 0.02)", color: "#fff", outline: "none",
    fontSize: "1.1rem", width: "100%", transition: "all 0.3s ease",
  };

  return (
    <section id="contact" style={{ padding: "120px 60px", background: "#050810" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.2 }} 
          viewport={{ once: true }} 
          style={{ marginBottom: "80px" }}
        >
          <h2 style={{ fontSize: "4rem", color: "#fff", fontWeight: "900", marginBottom: "15px", letterSpacing: "-1px" }}>Kontakt</h2>
          <p style={{ color: "#7a8193", fontSize: "1.4rem", fontWeight: "300" }}>Bereit für das nächste Projekt? Ich freue mich auf Ihre Nachricht.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "40px", alignItems: "stretch" }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: true }} 
            style={cardStyle}
          >
            <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <input name="user_name" placeholder="Ihr Name" required style={inputStyle} />
                <input name="user_email" type="email" placeholder="Ihre E-Mail" required style={inputStyle} />
              </div>
              <textarea name="message" placeholder="Ihre Nachricht..." rows={6} required style={{ ...inputStyle, resize: "none" }} />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(180, 255, 0, 0.4)" }} 
                  whileTap={{ scale: 0.95 }} 
                  type="submit" 
                  style={btnSubmitStyle}
                >
                  Nachricht senden
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }} 
            viewport={{ once: true }} 
            style={cardStyle}
          >
            <div style={{ fontSize: "1.2rem", lineHeight: "2.2", color: "#fff" }}>
               <h3 style={{ color: "#b4ff00", fontSize: "1.8rem", marginBottom: "30px", fontWeight: "700" }}>Contact Info</h3>
               <p><b>E-Mail:</b> <span style={{ color: "#a0a5b1", marginLeft: "10px" }}>ngahamillena@gmail.com</span></p>
               <p><b>Telefon:</b> <span style={{ color: "#a0a5b1", marginLeft: "10px" }}>+49 15560 118124</span></p>
            </div>
            <div style={{ display: "flex", gap: "15px", marginTop: "40px" }}>
              <motion.a 
                href="https://github.com/PandoraS3" 
                target="_blank" 
                whileHover={{ y: -5, backgroundColor: "#b4ff00", color: "#000" }} 
                style={socialBtnStyle}
              >
                GitHub ↗
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/millena-nyami-ngaha-887822229" 
                target="_blank" 
                whileHover={{ y: -5, backgroundColor: "#b4ff00", color: "#000" }} 
                style={socialBtnStyle}
              >
                LinkedIn ↗
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const cardStyle = { background: "rgba(255, 255, 255, 0.02)", padding: "50px", borderRadius: "35px", border: "1px solid rgba(255, 255, 255, 0.07)", backdropFilter: "blur(15px)" };
const btnSubmitStyle = { background: "#b4ff00", color: "#000", border: "none", padding: "18px 45px", borderRadius: "50px", fontWeight: "800", fontSize: "1.1rem", cursor: "pointer", transition: "all 0.3s ease" };
const socialBtnStyle = { flex: 1, textAlign: "center", textDecoration: "none", color: "#b4ff00", border: "1px solid #b4ff00", padding: "15px", borderRadius: "50px", fontWeight: "700", transition: "all 0.3s ease" };