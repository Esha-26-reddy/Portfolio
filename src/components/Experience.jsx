import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Computer Vision Intern',
      company: 'IIIT Hyderabad',
      supervisor: 'Under Dr. C.K.Raju',
      duration: 'April 2025 - June 2025',
      location: 'Hyderabad, India',
      achievements: [
        'Developed and optimized YOLOv5-based object detection and segmentation models for vehicle detection and classification',
        'Addressed challenges with imbalanced and noisy datasets through advanced preprocessing techniques',
        'Evaluated model performance using mAP (mean Average Precision) and IoU (Intersection over Union) metrics',
        'Gained hands-on experience in data preprocessing, feature extraction, model training, and tuning for real-time computer vision applications',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="card animate-slide-up">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-3">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-400" />
                  {exp.company}
                </span>
                <span className="text-sm">{exp.supervisor}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <FaCalendarAlt className="text-purple-400" />
                <span>{exp.duration}</span>
              </div>
            </div>
            
            <ul className="space-y-2">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
