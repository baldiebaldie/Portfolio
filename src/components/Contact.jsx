import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SectionWrapper from './SectionWrapper'

const EMAIL = 'bbaldie04@gmail.com'

const links = [
  {
    label: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/baldiebaldie',
    description: 'Check out my code',
  },
  {
    label: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/bryan-baldie/',
    description: 'Connect with me',
  },
  {
    label: 'Email',
    icon: FaEnvelope,
    href: null,
    description: 'Send me a message',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleEmailClick = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <SectionWrapper id="contact" title="Get in Touch" className="bg-surface/30">
      <p className="text-muted max-w-md mb-10 text-lg">
        I'm always open to new opportunities, collaborations, or just a chat.
        Feel free to reach out through any of the channels below.
      </p>
      <div className="relative flex flex-col sm:flex-row gap-4">
        {links.map((link, i) => {
          const Icon = link.icon
          const isEmail = link.label === 'Email'

          const sharedClass =
            'flex items-center gap-4 bg-surface border border-surface-2 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 rounded-xl px-6 py-4 transition-all duration-200 group cursor-pointer'

          const content = (
            <>
              <Icon
                size={24}
                className="text-muted group-hover:text-accent transition-colors duration-200"
              />
              <div>
                <p className="text-text font-medium group-hover:text-accent transition-colors duration-200">
                  {link.label}
                </p>
                <p className="text-muted text-sm">{link.description}</p>
              </div>
            </>
          )

          return isEmail ? (
            <div key={link.label} className="relative">
              <motion.button
                onClick={handleEmailClick}
                className={sharedClass + ' w-full'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {content}
              </motion.button>
              <AnimatePresence>
                {copied && (
                  <motion.div
                    key="copied"
                    className="absolute inset-0 flex items-center justify-center rounded-xl bg-surface/90 backdrop-blur-sm pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm text-accent font-mono">email copied to clipboard</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={sharedClass}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {content}
            </motion.a>
          )
        })}

      </div>
    </SectionWrapper>
  )
}
