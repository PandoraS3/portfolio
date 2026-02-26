import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images
import img1 from "../assets/pepper-robot.jpg";
import img2 from "../assets/ackermann.jpg";
import img3 from "../assets/logistics.jpg";
import img4 from "../assets/ridesharing.jpg";
import img5 from "../assets/climbing-robot.jpg";
import img6 from "../assets/erp-system.jpg";
import img7 from "../assets/turtlebot.jpg";
import img8 from "../assets/web-app.jpg";
import img9 from "../assets/cruise-app.jpg";

// Vidéos
import video1 from "../assets/pepper-demo.mp4";
import video4 from "../assets/ridesharing-demo.mp4";
import video7 from "../assets/turtlebot-demo.mp4";
import video9 from "../assets/cruise-demo.mp4";

const allProjects = [
  { id: 1, title: "Intelligent Library Assistant", desc: "Humanoid Robot (Pepper) assisting visitors using OpenAI API.", longDesc: "• Design and implementation of a social humanoid robot assisting library visitors.\n• Natural language dialogue using OpenAI API.\n• Facial emotion recognition with OpenCV.\n• System orchestration via Node-RED.", tech: ["Python", "OpenAI", "OpenCV", "Linux"], image: img1, video: video1, github: "https://github.com/PandoraS3" },
  { id: 2, title: "Ackermann Steering Simulation", desc: "Mathematical modeling and visualization of vehicle dynamics.", longDesc: "• Mathematical modeling, simulation, and visualization of Ackermann steering.\n• Derivation of steering relationships.\n• Interactive Simulink model.\n• Coupled vehicle control systems.", tech: ["MATLAB", "Simulink", "Control Systems"], image: img2, github: "https://github.com/PandoraS3" },
  { id: 3, title: "Green Logistics Optimization", desc: "Urban delivery optimization using evolutionary algorithms.", longDesc: "• Heuristic route optimization (2-opt).\n• Genetic algorithm for hub location.\n• Multi-objective optimization (cost & CO₂).\n• Simulation with real geospatial data.", tech: ["Python", "Java", "Genetic Algorithms"], image: img3, github: "https://github.com/PandoraS3" },
  { id: 4, title: "Android Ride-Sharing App", desc: "Sustainable commuting platform for student ride-sharing.", longDesc: "• Native Android application.\n• Criteria-based ride search and booking.\n• Real-time chat and profile management.\n• Firebase backend integration.", tech: ["Android", "Firebase", "UX Design"], image: img4, video: video4, github: "https://github.com/PandoraS3" },
  { id: 5, title: "Autonomous Climbing Robot", desc: "Four-legged robot with vision-based motion planning.", longDesc: "• Four-legged autonomous climbing robot.\n• Vision-based route detection.\n• Recursive motion planning.\n• Physics-based simulation in MuJoCo.", tech: ["Python", "OpenCV", "MuJoCo", "Robotics"], image: img5, github: "https://github.com/PandoraS3" },
  { id: 6, title: "Cloud-Native ERP System", desc: "Microservices architecture with Spring Boot and React.", longDesc: "• Cloud-native ERP system (SERP 24).\n• Frontend React & Backend Spring Boot.\n• OAuth2 (Azure Entra ID).\n• Docker and Azure deployment.", tech: ["React", "Spring Boot", "Docker", "Azure"], image: img6, github: "https://github.com/PandoraS3" },
  { id: 7, title: "Autonomous Navigation TurtleBot", desc: "Obstacle detection and avoidance via Machine Learning.", longDesc: "• Autonomous navigation using ML.\n• Real-time obstacle detection.\n• Keras model for navigation decisions.\n• Control logic for robotic movement.", tech: ["Python", "Keras", "OpenAI", "ROS"], image: img7, video: video7, github: "https://github.com/PandoraS3" },
  { id: 8, title: "Web App Registration Management", desc: "System for managing user registration workflows.", longDesc: "• Web system for user registrations.\n• User-friendly interface.\n• Client-side validation.\n• Clean and responsive design.", tech: ["HTML", "CSS", "JavaScript"], image: img8, github: "https://github.com/PandoraS3" },
  { id: 9, title: "Cruise Booking Desktop App", desc: "Desktop application with full CRUD for cruise management.", longDesc: "• Desktop app for cruise bookings.\n• Full CRUD functionality.\n• Graphical interface with Tkinter.\n• SQL database management.", tech: ["Python", "Tkinter", "SQL", "CRUD"], image: img9, video: video9, github: "https://github.com/PandoraS3" }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    
    // Bloquer le scroll de l'arrière-plan quand le modal est ouvert
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const scroll = (ref, direction) => {
    const { current } = ref;
    const scrollAmount = isMobile ? 300 : 430;
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const row1 = allProjects.slice(0, 5);
  const row2 = allProjects.slice(5, 9);

  return (
    <section id="projects" style={{ padding: isMobile ? "60px 0" : "120px 0", background: "#050810", position: "relative" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 60px" }}>
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }} viewport={{ once: true }} style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: isMobile ? "2.5rem" : "4rem", color: "#fff", fontWeight: "900", marginBottom: "15px", letterSpacing: "-1px" }}>Projekte</h2>
          <p style={{ color: "#7a8193", fontSize: isMobile ? "1.1rem" : "1.4rem", fontWeight: "300" }}>Klicken Sie auf ein Projekt, um Details zu sehen.</p>
        </motion.div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "30px" : "60px" }}>
        
        {/* LIGNE 1 */}
        <div style={{ position: "relative" }}>
          {!isMobile && <button onClick={() => scroll(scrollRef1, 'left')} className="arrow-btn" style={{ ...arrowBtnStyle, left: "20px" }}>‹</button>}
          <div className="no-scrollbar" ref={scrollRef1} style={{ ...rowStyle, padding: isMobile ? "10px 20px" : "10px 60px" }}>
            {row1.map((p, i) => (
              <motion.div key={p.id} onClick={() => setSelectedProject(p)} style={{ minWidth: isMobile ? "280px" : "400px", cursor: "pointer" }}>
                <ProjectCard project={p} isMobile={isMobile} />
              </motion.div>
            ))}
          </div>
          {!isMobile && <button onClick={() => scroll(scrollRef1, 'right')} className="arrow-btn" style={{ ...arrowBtnStyle, right: "20px" }}>›</button>}
        </div>

        {/* LIGNE 2 */}
        <div style={{ position: "relative" }}>
          {!isMobile && <button onClick={() => scroll(scrollRef2, 'left')} className="arrow-btn" style={{ ...arrowBtnStyle, left: "20px" }}>‹</button>}
          <div className="no-scrollbar" ref={scrollRef2} style={{ ...rowStyle, padding: isMobile ? "10px 20px" : "10px 60px" }}>
            {row2.map((p, i) => (
              <motion.div key={p.id} onClick={() => setSelectedProject(p)} style={{ minWidth: isMobile ? "280px" : "400px", cursor: "pointer" }}>
                <ProjectCard project={p} isMobile={isMobile} />
              </motion.div>
            ))}
          </div>
          {!isMobile && <button onClick={() => scroll(scrollRef2, 'right')} className="arrow-btn" style={{ ...arrowBtnStyle, right: "20px" }}>›</button>}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} style={modalOverlayStyle}>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 50 }} 
              onClick={(e) => e.stopPropagation()} 
              style={{ ...modalContentStyle, width: isMobile ? "95%" : "100%", padding: isMobile ? "30px 20px" : "50px" }}
            >
              <button onClick={() => setSelectedProject(null)} style={closeBtnStyle}>✕</button>
              <div style={{ ...modalLayoutStyle, gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))" }}>
                <div>
                  <img src={selectedProject.image} alt={selectedProject.title} style={{ ...modalImageStyle, height: isMobile ? "200px" : "300px" }} />
                  <div style={{ marginTop: '25px' }}>
                    <h4 style={{ color: '#b4ff00', marginBottom: '15px' }}>Technologies</h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {selectedProject.tech.map(t => <span key={t} style={tagStyle}>{t}</span>)}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: isMobile ? "1.8rem" : "2.2rem", color: "#fff", marginBottom: "10px", fontWeight: "800" }}>{selectedProject.title}</h3>
                  <p style={{ color: "#b4ff00", fontWeight: "600", marginBottom: "20px", fontSize: "1.1rem" }}>Project Overview</p>
                  <div style={{ color: "#a0a5b1", fontSize: "1.05rem", lineHeight: "1.7" }}>
                    {selectedProject.longDesc.split('\n').map((line, i) => <p key={i} style={{ marginBottom: '10px' }}>{line}</p>)}
                  </div>
                  <div style={{ marginTop: '40px', display: "flex", flexWrap: "wrap", gap: '15px' }}>
                    {selectedProject.video && (
                      <a href={selectedProject.video} target="_blank" rel="noopener noreferrer" style={{ ...primaryLinkStyle, width: isMobile ? "100%" : "auto" }}>
                        Demo Video
                      </a>
                    )}
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" style={{ ...secondaryLinkStyle, width: isMobile ? "100%" : "auto" }}>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .arrow-btn:hover { 
          background: #b4ff00 !important; 
          color: #000 !important;
          box-shadow: 0 0 20px rgba(180, 255, 0, 0.4);
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, isMobile }) {
  return (
    <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "30px", border: "1px solid rgba(255, 255, 255, 0.08)", overflow: "hidden", height: "100%", backdropFilter: "blur(10px)" }}>
      <div style={{ height: isMobile ? "180px" : "200px", overflow: "hidden" }}>
        <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
      </div>
      <div style={{ padding: "25px" }}>
        <h3 style={{ color: "#fff", fontSize: isMobile ? "1.1rem" : "1.3rem", marginBottom: "10px" }}>{project.title}</h3>
        <p style={{ color: "#a0a5b1", fontSize: "0.9rem", lineHeight: "1.5" }}>{project.desc}</p>
      </div>
    </div>
  );
}

// STYLES
const rowStyle = { display: "flex", gap: "30px", overflowX: "auto", scrollbarWidth: "none", scrollBehavior: "smooth" };
const arrowBtnStyle = { position: "absolute", top: "50%", transform: "translateY(-50%)", background: "rgba(5, 8, 16, 0.8)", border: "1px solid #b4ff00", color: "#b4ff00", borderRadius: "50%", width: "50px", height: "50px", fontSize: "2rem", cursor: "pointer", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease", backdropFilter: "blur(5px)" };
const modalOverlayStyle = { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(5, 8, 16, 0.95)", backdropFilter: "blur(20px)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2000, padding: "20px" };
const modalContentStyle = { background: "#050810", borderRadius: "40px", maxWidth: "1000px", maxHeight: "90vh", overflowY: "auto", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", position: "relative" };
const modalLayoutStyle = { display: "grid", gap: "40px", alignItems: "start" };
const modalImageStyle = { width: "100%", borderRadius: "20px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" };
const tagStyle = { background: "rgba(180, 255, 0, 0.1)", color: "#b4ff00", padding: "6px 14px", borderRadius: "50px", fontSize: "0.8rem", fontWeight: "bold", border: "1px solid rgba(180, 255, 0, 0.2)" };
const closeBtnStyle = { position: "absolute", top: "20px", right: "20px", background: "rgba(5, 8, 16, 0.5)", border: "none", color: "#fff", fontSize: "24px", cursor: "pointer", borderRadius: "50%", width: "40px", height: "40px", zIndex: 10 };
const primaryLinkStyle = { background: "#b4ff00", color: "#000", padding: "14px 30px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", textAlign: "center", display: "inline-block" };
const secondaryLinkStyle = { background: "transparent", color: "#fff", padding: "14px 30px", borderRadius: "50px", fontWeight: "bold", border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none", textAlign: "center", display: "inline-block" };