import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import SectionWrapper from './SectionWrapper'
import bgEducation from '../bg-education.jpg'

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: 'University of South Florida',
    year: 'Aug 2022 – May 2026',
  },
]

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education" bgImage={bgEducation}>
      <div className="flex flex-col gap-4 max-w-2xl">
        {education.map((item, i) => (
          <motion.div
            key={i}
            className="flex gap-5 items-start bg-surface rounded-xl p-6 border border-surface-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <FaGraduationCap className="text-accent" size={18} />
            </div>
            <div>
              <h3 className="text-text font-semibold text-lg">{item.degree}</h3>
              <p className="text-muted mt-0.5">{item.institution}</p>
              <p className="text-accent text-sm font-mono mt-1">{item.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
