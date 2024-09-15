export default function Projects() {
    const projects = [
      { name: "Shaadbin", link: "shaadbin.ir" },
      { name: "Zarebin", link: "zarebin.ir" },
      { name: "Gardeshgari", link: "gardeshgari-mcinex.ir" },
      { name: "Parsa", link: "parsaqa.com" },
      { name: "API Management Dashboard", link: "toobatech.com" }
    ]
  
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul className="grid grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {project.link}
              </a>
            </li>
          ))}
        </ul>
      </section>
    )
  }