import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="bg-surface border border-surface-2 rounded-xl p-6 flex flex-col gap-4 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex-1">
        <h3 className="text-text font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-0.5 bg-accent/10 text-accent text-xs font-mono rounded-full border border-accent/20"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-1">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-muted hover:text-accent text-sm font-medium transition-colors duration-200"
          >
            <FaGithub size={14} />
            GitHub
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-muted hover:text-accent text-sm font-medium transition-colors duration-200"
          >
            <FaExternalLinkAlt size={12} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}
