const projects = [
  {
    image: "/banheira-tambore.png",
    title: "Tamboré",
  },

  {
    image: "/alphaville-fachada.png",
    title: "Alphaville",
  },

  {
    image: "/higienopolis-banheiro.png",
    title: "Higienópolis",
  },

  {
    image: "/cozinha-higienopolis.jpg",
    title: "Higienópolis",
  },

  {
    image: "/porta-tambore.png",
    title: "Tamboré",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section">

      {projects.map((project, index) => (

        <article
          className="project-card"
          key={index}
        >

          <img
            src={project.image}
            alt={project.title}
          />

          <span>
            {project.title}
          </span>

        </article>

      ))}

    </section>
  );
}
