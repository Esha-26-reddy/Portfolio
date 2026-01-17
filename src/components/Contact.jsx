import { useState } from "react"
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("")

    const data = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: "New Contact Message from Portfolio",
      from_name: "Esha Portfolio",
    }
    

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("Message sent successfully! ✅")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("Something went wrong. Please try again ❌")
      }
    } catch (error) {
      setStatus("Error sending message ❌")
    }

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-400" size={24} />,
      label: "Email",
      value: "eshavangala26@gmail.com",
      link: "mailto:eshavangala26@gmail.com",
    },
    {
      icon: <FaPhone className="text-green-400" size={24} />,
      label: "Phone",
      value: "+91-9703688815",
      link: "tel:+919703688815",
    },
    {
      icon: <FaLinkedin className="text-blue-500" size={24} />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/esha-reddy-vangala-b73086315/",
    },
    {
      icon: <FaGithub className="text-gray-300" size={24} />,
      label: "GitHub",
      value: "GitHub Profile",
      link: "https://github.com/Esha-26-reddy",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-400" size={24} />,
      label: "Location",
      value: "Hyderabad, India",
      link: null,
    },
  ]

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  {info.icon}
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <p className="text-gray-400">
              I'm always open to discussing new projects, creative ideas, or
              internship opportunities. Feel free to reach out!
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card">
          <h3 className="text-2xl font-bold text-white mb-6">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
            />

            <textarea
              name="message"
              rows="6"
              required
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center text-sm text-green-400 mt-2">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
