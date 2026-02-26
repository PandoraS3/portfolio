import React, { useState, useRef } from "react";
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
  {
    id: 1,
    title: "Intelligent Library Assistant",
    desc: "Humanoid Robot (Pepper) assisting visitors using OpenAI API.",
    longDesc: "• Design and implementation of a social humanoid robot assisting library visitors.\n• Natural language dialogue using OpenAI API for human-like interaction.\n• Facial emotion recognition with OpenCV to adapt robot behavior.\n• Robot motion control (head, arms, navigation) under Linux environments.\n• System orchestration via Node-RED for seamless logic flow.\n• User study with 22 participants using Godspeed questionnaires.",
    tech: ["Python", "OpenAI", "OpenCV", "Linux", "Node-RED", "NAOqi API"],
    image: img1,
    video: video1,
    github: "https://github.com/PandoraS3"
  },
  {
    id: 2,
    title: "Ackermann Steering Simulation",
    desc: "Mathematical modeling and visualization of vehicle dynamics.",
    longDesc: "• Mathematical modeling, simulation, and visualization of Ackermann steering.\n• Derivation of inner and outer wheel steering relationships.\n• Interactive Simulink model with steering angle slider (-30° to +30°).\n• Coupled longitudinal and lateral vehicle control systems.\n• Analysis of dynamic limits (speed, curvature, lateral acceleration).\n• Visualization of trajectories and velocity vectors.",
    tech: ["MATLAB", "Simulink", "Control Systems", "Vehicle Dynamics"],
    image: img2,
    github: "https://github.com/PandoraS3"
  },
  {
    id: 3,
    title: "Green Logistics Optimization",
    desc: "Urban delivery optimization using evolutionary algorithms.",
    longDesc: "• Optimization and comparison of parcel delivery systems in urban environments.\n• Heuristic route optimization (2-opt and neighborhood search).\n• Genetic algorithm for hub location and fleet size planning.\n• Multi-objective optimization (cost minimization and CO₂ reduction).\n• Simulation of 10,000 parcels/day using real geospatial data.",
    tech: ["Python", "Java", "Heuristic Search", "Genetic Algorithms"],
    image: img3,
    github: "https://github.com/PandoraS3"
  },
  {
    id: 4,
    title: "Android Ride-Sharing App",
    desc: "Sustainable commuting platform for student ride-sharing.",
    longDesc: "• Native Android application designed for sustainable student commuting.\n• Criteria-based ride search and booking system.\n• Real-time chat and user profile management.\n• Firebase backend integration and secure authentication.\n• UX design following Lean UX and Nielsen heuristics.",
    tech: ["Android", "Firebase", "Figma", "UX Design"],
    image: img4,
    video: video4,
    github: "https://github.com/PandoraS3"
  },
  {
    id: 5,
    title: "Autonomous Climbing Robot",
    desc: "Four-legged robot with vision-based motion planning.",
    longDesc: "• Development of a four-legged autonomous climbing robot.\n• Vision-based route detection using color sampling and contour analysis.\n• Recursive motion planning under kinematic and stability constraints.\n• Inverse kinematics using Jacobian transpose method.\n• Physics-based simulation in MuJoCo.",
    tech: ["Python", "OpenCV", "MuJoCo", "Robotics", "Motion Planning"],
    image: img5,
    github: "https://github.com/PandoraS3"
  },
  {
    id: 6,
    title: "Cloud-Native ERP System",
    desc: "Microservices architecture with Spring Boot and React.",
    longDesc: "• Design and development of a cloud-native ERP system (SERP 24).\n• Frontend development with React; Backend with Spring Boot.\n• REST APIs (OpenAPI) and OAuth2 (Azure Entra ID).\n• Asynchronous communication with RabbitMQ / Azure Service Bus.\n• CI/CD pipelines, Docker, and Azure deployment.",
    tech: ["React", "Spring Boot", "Docker", "Azure", "RabbitMQ", "PostgreSQL"],
    image: img6,
    github: "https://github.com/PandoraS3"
  },
  {
    id: 7,
    title: "Autonomous Navigation TurtleBot",
    desc: "Obstacle detection and avoidance via Machine Learning.",
    longDesc: "• Team project focused on autonomous navigation using ML.\n• Implementation of obstacle detection and real-time avoidance.\n• Machine learning model for autonomous navigation decisions.\n• Integration of sensors and control logic for robotic movement.",
    tech: ["Python", "Keras", "OpenAI", "Robotics", "ROS"],
    image: img7,
    video: video7,
    github: "https://github.com/PandoraS3"
  },
  {
    id: 8,
    title: "Web App Registration Management",
    desc: "System for managing user registration workflows.",
    longDesc: "• Web-based system for managing user registrations.\n• Development of a user-friendly interface for registration workflows.\n• Client-side validation and efficient data interaction.\n• Clean and responsive design using modern web standards.",
    tech: ["HTML", "CSS", "JavaScript", "Validation"],
    image: img8,
    github: "https://github.com/PandoraS3"
  },
  {
    id: 9,
    title: "Cruise Booking Desktop App",
    desc: "Desktop application with full CRUD for cruise management.",
    longDesc: "• Desktop application for managing cruise bookings.\n• Full CRUD functionality (Create, Read, Update, Delete).\n• Graphical user interface development with Tkinter.\n• Efficient database management and user interaction.",
    tech: ["Python", "Tkinter", "SQL", "CRUD"],
    image: img9,
    video: video9,
    github: "https://github.com/PandoraS3"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const scroll = (ref, direction) => {
    const { current } = ref;
    if (direction === 'left') {
      current.scrollBy({ left: -430, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 430, behavior: 'smooth' });
    }
  };

  const row1 = allProjects.slice(0, 5);
  const row2 = allProjects.slice(5, 9);

  return (
    <section id="projects" style={{ padding: "120px 0", background: "#050810", position: "relative" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 60px" }}>
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }} viewport={{ once: true }} style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "4rem", color: "#fff", fontWeight: "900", marginBottom: "15px", letterSpacing: "-1px" }}>Projekte</h2>
          <p style={{ color: "#7a8193", fontSize: "1.4rem", fontWeight: "300" }}>Klicken Sie auf ein Projekt, um Details zu sehen.</p>
        </motion.div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
        
        {/* LIGNE 1 */}
        <div style={{ position: "relative", group: "true" }}>
          <button onClick={() => scroll(scrollRef1, 'left')} className="arrow-btn" style={{ ...arrowBtnStyle, left: "20px" }}>‹</button>
          <div className="no-scrollbar" ref={scrollRef1} style={rowStyle}>
            {row1.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15, duration: 0.8 }} viewport={{ once: true }} onClick={() => setSelectedProject(p)} style={{ minWidth: "400px", cursor: "pointer" }}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
          <button onClick={() => scroll(scrollRef1, 'right')} className="arrow-btn" style={{ ...arrowBtnStyle, right: "20px" }}>›</button>
        </div>

        {/* LIGNE 2 */}
        <div style={{ position: "relative" }}>
          <button onClick={() => scroll(scrollRef2, 'left')} className="arrow-btn" style={{ ...arrowBtnStyle, left: "20px" }}>‹</button>
          <div className="no-scrollbar" ref={scrollRef2} style={rowStyle}>
            {row2.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15, duration: 0.8 }} viewport={{ once: true }} onClick={() => setSelectedProject(p)} style={{ minWidth: "400px", cursor: "pointer" }}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
          <button onClick={() => scroll(scrollRef2, 'right')} className="arrow-btn" style={{ ...arrowBtnStyle, right: "20px" }}>›</button>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} style={modalOverlayStyle}>
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 50 }} onClick={(e) => e.stopPropagation()} style={modalContentStyle}>
              <button onClick={() => setSelectedProject(null)} style={closeBtnStyle}>✕</button>
              <div style={modalLayoutStyle}>
                <div>
                  <img src={selectedProject.image} alt={selectedProject.title} style={modalImageStyle} />
                  <div style={{ marginTop: '25px' }}>
                    <h4 style={{ color: '#b4ff00', marginBottom: '15px' }}>Technologies</h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {selectedProject.tech.map(t => <span key={t} style={tagStyle}>{t}</span>)}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: "2.2rem", color: "#fff", marginBottom: "10px", fontWeight: "800" }}>{selectedProject.title}</h3>
                  <p style={{ color: "#b4ff00", fontWeight: "600", marginBottom: "20px", fontSize: "1.1rem" }}>Project Overview</p>
                  <div style={{ color: "#a0a5b1", fontSize: "1.05rem", lineHeight: "1.7" }}>
                    {selectedProject.longDesc.split('\n').map((line, i) => <p key={i} style={{ marginBottom: '10px' }}>{line}</p>)}
                  </div>
                  <div style={{ marginTop: '40px', display: "flex", gap: '15px' }}>
                    <a href={selectedProject.video} target="_blank" rel="noopener noreferrer" style={primaryLinkStyle}>
                      Demo Video
                    </a>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" style={secondaryLinkStyle}>
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

function ProjectCard({ project }) {
  return (
    <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "30px", border: "1px solid rgba(255, 255, 255, 0.08)", overflow: "hidden", height: "100%", backdropFilter: "blur(10px)" }}>
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
      </div>
      <div style={{ padding: "25px" }}>
        <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "10px" }}>{project.title}</h3>
        <p style={{ color: "#a0a5b1", fontSize: "0.9rem", lineHeight: "1.5" }}>{project.desc}</p>
      </div>
    </div>
  );
}

// STYLES
const rowStyle = { display: "flex", gap: "30px", overflowX: "auto", padding: "10px 60px", scrollbarWidth: "none", scrollBehavior: "smooth" };
const arrowBtnStyle = { 
  position: "absolute", 
  top: "50%", 
  transform: "translateY(-50%)", 
  background: "rgba(180, 255, 0, 0.1)", 
  border: "1px solid #b4ff00", 
  color: "#b4ff00", 
  borderRadius: "50%", 
  width: "50px", 
  height: "50px", 
  fontSize: "2rem", 
  cursor: "pointer", 
  zIndex: 10, 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center", 
  transition: "all 0.3s ease", 
  backdropFilter: "blur(5px)" 
};
const modalOverlayStyle = { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(20px)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2000, padding: "20px" };
const modalContentStyle = { background: "#0d111c", padding: "50px", borderRadius: "40px", maxWidth: "1000px", width: "100%", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", position: "relative" };
const modalLayoutStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "50px", alignItems: "start" };
const modalImageStyle = { width: "100%", borderRadius: "20px", height: "300px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" };
const tagStyle = { background: "rgba(180, 255, 0, 0.1)", color: "#b4ff00", padding: "6px 14px", borderRadius: "50px", fontSize: "0.8rem", fontWeight: "bold", border: "1px solid rgba(180, 255, 0, 0.2)" };
const closeBtnStyle = { position: "absolute", top: "30px", right: "30px", background: "none", border: "none", color: "#fff", fontSize: "28px", cursor: "pointer" };
const primaryLinkStyle = { background: "#b4ff00", color: "#000", padding: "14px 30px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", textAlign: "center", display: "inline-block" };
const secondaryLinkStyle = { background: "transparent", color: "#fff", padding: "14px 30px", borderRadius: "50px", fontWeight: "bold", border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none", textAlign: "center", display: "inline-block" };