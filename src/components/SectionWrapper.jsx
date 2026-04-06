import { motion } from 'framer-motion'

export default function SectionWrapper({ id, title, children, className = '', bgImage }) {
  return (
    <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
      {bgImage && (
        <>
          {/* Background image — fades in on enter, out on exit, soft edges via mask */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bgImage})`,
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.40 }}
            viewport={{ once: false, margin: '-8%' }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />
          {/* Dark overlay for text readability */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-background/70"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
            }}
          />
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-text mb-2">{title}</h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </motion.div>
        {children}
      </div>
    </section>
  )
}
