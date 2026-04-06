import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import bgAbout from '../bg-about.jpg'

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-surface/30" bgImage={bgAbout}>
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-muted text-lg leading-relaxed mb-4">
          Hi! I'm Bryan, a passionate software developer with a love for building
          clean, efficient, and user-friendly applications. I enjoy working across
          the full stack, from crafting responsive UIs to designing robust backend
          services.
        </p>
        <p className="text-muted text-lg leading-relaxed">
          When I'm not coding, you'll find me exploring new technologies, contributing
          to open source, or levelling up in my favourite games. I'm always looking
          for opportunities to learn and collaborate on interesting projects.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
