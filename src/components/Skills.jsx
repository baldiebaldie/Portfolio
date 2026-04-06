import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import skills from '../data/skills'
import bgSkills from '../bg-skills.webp'

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills" bgImage={bgSkills}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            className="bg-surface rounded-xl p-5 border border-surface-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <h3 className="text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-surface-2 text-text text-xs font-medium rounded-full border border-accent/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
