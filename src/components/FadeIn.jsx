import { motion } from "framer-motion"

export default function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      // On commence un peu plus bas et totalement invisible
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      
      // L'animation se déclenche quand l'élément entre dans l'écran
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      
      // On utilise la courbe "Quintic" pour cette sensation de luxe/douceur
      transition={{ 
        duration: 1.2, 
        delay: delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      
      // L'animation ne se joue qu'une seule fois pour ne pas fatiguer l'utilisateur
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}