import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'Computer Science and Engineering',
      institution: 'Anurag University',
      location: 'Hyderabad',
      duration: '2023 - Present',
      details: 'CGPA: 9.2 (As of 2-2 Semester)',
    },
    {
      degree: 'MPC (Mathematics, Physics, Chemistry)',
      institution: 'Narayana Junior College',
      location: 'Hyderabad',
      duration: '2021 - 2023',
      details: 'Percentage: 91%',
    },
    {
      degree: 'ICSE (Class X)',
      institution: 'Johnson Grammar School',
      location: 'Hyderabad',
      duration: '2020 - 2021',
      details: 'Percentage: 94%',
    },
  ]

  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="card animate-slide-up">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
                <FaGraduationCap className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-lg text-blue-400 mb-2">{edu.institution}</p>
                <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-2">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt />
                    {edu.duration}
                  </span>
                  <span>{edu.location}</span>
                </div>
                <p className="text-gray-300 font-medium">{edu.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
