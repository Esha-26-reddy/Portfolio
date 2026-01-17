import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { HiArrowDown } from "react-icons/hi"
import profileImg from "../assets/profile.jpg"

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

      {/* Glow effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10 text-center">

        {/* Profile Image */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden
                          border-4 border-indigo-500/40 shadow-lg
                          hover:shadow-indigo-500/40 transition-shadow duration-300">
            <img
              src={profileImg}
              alt="Esha Reddy Vangala"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
            Esha Reddy Vangala
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Full Stack Developer · AI/ML Enthusiast
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I build scalable web applications and AI-driven solutions using modern
          technologies. Currently pursuing Computer Science Engineering with a
          strong focus on problem solving and real-world development.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="btn-primary"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-secondary"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/Esha-26-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/esha-reddy-vangala-b73086315/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="mailto:eshavangala26@gmail.com"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <FaEnvelope size={26} />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection("about")}
          className="text-gray-400 hover:text-indigo-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <HiArrowDown size={28} />
        </motion.button>

      </div>
    </section>
  )
}

export default Hero
