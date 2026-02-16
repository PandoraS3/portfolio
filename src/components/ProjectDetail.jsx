import { useParams } from "react-router-dom"
import { motion } from "framer-motion"

const projectData = {
  robot: {
    title: "Humanoid Robot Assistant",
    description: `
    Intelligent library assistant using Pepper robot.
    Natural language interaction, emotion recognition,
    motion control and user study with 22 participants.
    `,
    tech: ["Python", "OpenAI API", "OpenCV", "Node-RED"],
  },
  logistics: {
    title: "Green Logistics Optimization",
    description: `
    Multi-objective optimization for last-mile delivery.
    Genetic algorithms and heuristic search for CO₂ reduction.
    `,
    tech: ["Python", "Genetic Algorithms", "Optimization"],
  }
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectData[id]

  if (!project) return <p>Project not found</p>

  return (
    <section>
      <motion.h2 initial={{opacity:0}} animate={{opacity:1}}>
        {project.title}
      </motion.h2>

      <motion.p 
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        className="subtitle"
      >
        {project.description}
      </motion.p>

      <div style={{display:"flex", gap:"12px", flexWrap:"wrap"}}>
        {project.tech.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </section>
  )
}
