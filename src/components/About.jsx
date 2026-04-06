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
          Hi! I'm Bryan, a Senior Computer Science student at the University of
          South Florida with a focus on AI-driven software development. I have a
          strong foundation in full-stack development and machine learning
          workflows, with hands-on experience in JavaScript, Python, C#, C++,
          and SQL.
        </p>
        <p className="text-muted text-lg leading-relaxed">
          I've worked professionally as a Software Engineering Intern at
          ResiCentral, building dynamic front-end interfaces integrated with
          back-end systems. On the ML side, I work with Scikit-Learn, NumPy,
          and Pandas to build and validate models — including a 3D facial
          expression recognition system using Random Forest classification with
          Leave-One-Subject-Out cross-validation. I'm always looking for
          opportunities to bridge software engineering and machine learning.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
