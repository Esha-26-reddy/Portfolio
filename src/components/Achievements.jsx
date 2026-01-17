import { FaTrophy, FaUsers, FaCode, FaMicrophone } from 'react-icons/fa'

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy className="text-yellow-400" size={32} />,
      title: 'Top 10 in Inter College Hackathon',
      description: 'Tech Hack-3',
    },
    {
      icon: <FaUsers className="text-blue-400" size={32} />,
      title: 'Vice-President & PR Lead',
      description: 'Android Club - Organized and led Android app development sessions for 100+ individuals',
    },
    {
      icon: <FaCode className="text-green-400" size={32} />,
      title: '200+ LeetCode Problems Solved',
      description: 'Consistent problem-solving practice with strong algorithmic skills',
    },
    {
      icon: <FaMicrophone className="text-purple-400" size={32} />,
      title: 'TEDxHyderabad Organizer',
      description: 'Organized event with 10+ speakers and 1000+ attendees',
    },
  ]

  const certifications = [
    'AIML Training Program - IIIT Hyderabad',
    'Fundamentals of MongoDB - MongoDB (Official)',
    'Certified in Introduction to Operating Systems - NPTEL',
    'Certified in Generative AI - Oracle',
    'ServiceNow Virtual Internship Program',
  ]

  return (
    <section id="achievements" className="section-container bg-gray-800/50">
      <h2 className="section-title">Achievements & Certifications</h2>
      
      {/* Achievements */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="card animate-slide-up">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{achievement.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="card text-center animate-slide-up">
              <div className="text-blue-400 mb-2">✓</div>
              <p className="text-gray-300">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
