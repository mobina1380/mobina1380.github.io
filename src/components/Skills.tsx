export default function Skills() {
    // const skillCategories = [
    //   {
    //     category: "Artificial Intelligence & Machine Learning",
    //     skills: [
    //       "Automatic Speech Recognition (ASR)",
    //       "Speech Emotion Recognition (SER)",
    //       "Natural Language Processing (NLP)",
    //       "Deep Learning (CNNs, RNNs, LSTMs)",
    //       "Voice Activity Detection (VAD)",
    //       "Model Evaluation and Tuning",
    //       "Machine Learning Algorithms (SVM, KNN, Decision Trees)",
    //       "Deep Learning for Recommender Systems",
    //       "User Behavior Analysis",
    //       "Personalization Techniques",
    //       "Scalability and Performance Optimization",
    //       "Mathematics, Linear algebra, and Statistics"
    //     ]
    //   },
    //   {
    //     category: "Programming Languages",
    //     skills: ["Python", "JavaScript", "TypeScript"]
    //   },
    //   {
    //     category: "Database",
    //     skills: ["MySQL"]
    //   },
    //   {
    //     category: "Libraries and Frameworks",
    //     skills: ["Pandas", "Scikit-Learn", "TensorFlow", "PyTorch"]
    //   },
    //   {
    //     category: "Tools",
    //     skills: ["Git", "Docker", "Airflow"]
    //   },
    //   {
    //     category: "Development Methodologies",
    //     skills: ["Agile Scrum"]
    //   }
    // ]
  
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        {/* {skillCategories.map((category, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{category.category}</h3>
            <ul className="list-disc list-inside grid grid-cols-2 gap-2">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="text-gray-700">{skill}</li>
              ))}
            </ul>
          </div>
        ))} */}
      </section>
    )
  }