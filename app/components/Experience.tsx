export default function Experience() {
    const experiences = [
      {
        title: "Data Scientist | AI Engineer",
        company: "Alzahra Laboratory",
        location: "Tehran, Vanak",
        period: "June, 2024 - September, 2024",
        responsibilities: [
          "Research and Study in the Field of Speech Emotion Recognition",
          "Improving the Whisper Model for Fine-Tuning on an Internal Dataset",
          "Speaker Recognition in Speech",
          "Speech-to-Text and Text-to-Speech Conversion"
        ]
      },
      {
        title: "Software Engineer",
        company: "HamrahAvval (MCINEXT)",
        location: "Tehran, Velenjak",
        period: "April, 2023 - May, 2024",
        responsibilities: [
          "Improved speech processing in the search engine (Voice assistant)",
          "Working with audio-to-text and text-to-audio conversion tools",
          "Implemented Restful Api and ensured seamless integration with back-end services",
          "Redesigned the architecture of the search engine, transitioning from a client-side to a server-side model",
          "Worked in an Agile Scrum environment, contributing to sprint planning and daily stand-ups"
        ]
      },
      // Add other experiences here
    ]
  
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company} | {exp.location}</p>
            <p className="text-gray-500 mb-2">{exp.period}</p>
            <ul className="list-disc list-inside">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-700">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    )
  }