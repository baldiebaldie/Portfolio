import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import interests from '../data/interests'
import bgInterests from '../bg-interests.jpg'

export default function Interests() {
  return (
    <SectionWrapper id="interests" title="Interests" className="bg-surface/30" bgImage={bgInterests}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {interests.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              className="flex flex-col items-center gap-3 p-5 bg-surface rounded-xl border border-surface-2 hover:border-accent/40 transition-colors duration-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
            >
              <Icon size={28} className="text-accent" />
              <span className="text-muted text-sm font-medium">{item.label}</span>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
