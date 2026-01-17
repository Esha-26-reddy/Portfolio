import { FaCode, FaLaptopCode, FaRobot, FaTools, FaDatabase, FaGraduationCap } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="text-blue-400" size={24} />,
      skills: ['C++', 'Python'],
    },
    {
      title: 'Web Technologies',
      icon: <FaLaptopCode className="text-purple-400" size={24} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      title: 'Machine Learning & AI',
      icon: <FaRobot className="text-pink-400" size={24} />,
      skills: ['OpenCV', 'YOLO', 'Flask', 'LangChain', 'RAG'],
    },
    {
      title: 'Developer Tools',
      icon: <FaTools className="text-green-400" size={24} />,
      skills: ['GitHub', 'VS Code', 'Google Colab', 'Windows'],
    },
    {
      title: 'Cloud & Databases',
      icon: <FaDatabase className="text-yellow-400" size={24} />,
      skills: ['AWS', 'MongoDB', 'PostgreSQL'],
    },
    {
      title: 'Academic Coursework',
      icon: <FaGraduationCap className="text-indigo-400" size={24} />,
      skills: ['Operating Systems', 'DBMS', 'OOPS', 'SQL', 'Data Structures and Algorithms', 'Computer Networks'],
    },
  ]

  return (
    <section id="skills" className="section-container bg-gray-800/50">
      <h2 className="section-title">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="card animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
