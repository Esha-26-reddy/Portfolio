import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="section-container">
      {/* Section Title */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {/* Main About Card */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am a dedicated Computer Science Engineering student at Anurag University, Hyderabad,
            with a strong passion for Full Stack Development and AI/ML. Currently maintaining
            a CGPA of 9.2, I combine academic excellence with hands-on experience in building scalable
            web applications and AI-powered solutions.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My expertise spans across modern web technologies including React.js, Node.js, and MongoDB,
            along with AI/ML frameworks such as YOLO, OpenCV, and LangChain. I have experience developing
            production-ready applications ranging from AI-powered platforms to computer vision models
            focused on real-world problem solving.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Beyond technical skills, I actively take up leadership responsibilities and collaborative
            roles in technical communities. I enjoy learning new technologies, solving challenging
            problems, and contributing to innovative projects that create meaningful impact.
          </p>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[
            { value: "9.2", label: "Current CGPA" },
            { value: "200+", label: "LeetCode Problems Solved" },
            { value: "5+", label: "Participated in Hackathons" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="card text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent mb-2">
                {item.value}
              </div>
              <div className="text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
