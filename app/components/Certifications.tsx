export default function Certifications() {
    const certifications = [
      { name: "Introduction to the telecom industry", link: "https://hamrah.academy/certificate-view/8240?lang=fa&type=pdf" },
      { name: "DevOps Fundamentals", link: "https://hamrah.academy/certificate-view/8239?lang=fa&type=pdf" },
      { name: "Effective communication", link: "https://hamrah.academy/certificate-view/8237?lang=fa&type=pdf" },
      { name: "Time Manage attaining an outstanding", link: "https://hamrah.academy/certificate-view/8238?lang=fa&type=pdf" },
      { name: "Ahmadi Rooshan", link: "https://uploadb.me/l1075lbd8vxb/AhmadiRooshan.pdf.html" },
      { name: "The secretary of the Computer Association and the director of the IT Plus magazine Alzahra", link: "https://uploadb.me/n2soojjl6pv6/anjoman.pdf.html" },
      { name: "Machine Learning Operations", link: "https://uploadb.me/e8s9pova29zo/mlops.png.html" }
    ]
  
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <ul className="grid grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View Certificate
              </a>
            </li>
          ))}
        </ul>
      </section>
    )
  }