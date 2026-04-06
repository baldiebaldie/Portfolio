import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import pfp from '../Pfp.png'

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 bg-background relative overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="font-mono text-accent text-sm tracking-widest mb-3">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-text mb-3 leading-tight">
              Bryan Baldie
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted mb-6">
              Full Stack Developer & ML Engineer
            </h2>
            <p className="text-muted max-w-md mb-8 leading-relaxed">
              CS senior at USF building everything from full-stack web apps to
              machine learning pipelines. Passionate about AI-focused software
              and shipping products people actually use.
            </p>

            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <button
                onClick={() => handleScroll('#projects')}
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors duration-200"
              >
                View Projects
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="px-6 py-3 border border-accent text-accent hover:bg-accent-glow font-medium rounded-lg transition-colors duration-200"
              >
                Get in Touch
              </button>
            </div>

            <div className="flex gap-5 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/baldiebaldie"
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-accent transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/bryan-baldie/"
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:bbaldie04@gmail.com"
                className="text-muted hover:text-accent transition-colors duration-200"
                aria-label="Email"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent shadow-lg shadow-accent/20">
                <img
                  src={pfp}
                  alt="Bryan Baldie"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border border-accent/20 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
