import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SectionWrapper from './SectionWrapper'

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
    href: 'mailto:bbaldie04@gmail.com',
    description: 'Send me a message',
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Get in Touch" className="bg-surface/30">
      <p className="text-muted max-w-md mb-10 text-lg">
        I'm always open to new opportunities, collaborations, or just a chat.
        Feel free to reach out through any of the channels below.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        {links.map((link, i) => {
          const Icon = link.icon
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="flex items-center gap-4 bg-surface border border-surface-2 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 rounded-xl px-6 py-4 transition-all duration-200 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
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
            </motion.a>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
