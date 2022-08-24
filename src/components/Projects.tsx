interface Project {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  url?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Matter",
    description:
      "A Project Management application to create and monitor projects and their subtasks. Inspired by Jira and Trello.",
    githubUrl: "https://github.com/prateeksonii/matter-t3",
  },
  {
    id: 2,
    title: "Bloggr",
    description:
      "A web application to write blogs in Markdown and share public links with anyone to view your blog.",
    githubUrl: "https://github.com/prateeksonii/bloggr",
  },
];

const Projects = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-head">Featured Projects</h1>
      <div className="grid grid-cols-2 gap-8 w-3/5 mx-auto my-16">
        {projects.map((project) => (
          <div key={project.id} className="border border-neutral-400">
            <div className="bg-neutral-100 text-neutral-900 text-4xl font-head font-bold p-6 grid place-items-center">
              {project.title}
            </div>
            <div className="p-8">
              <div className="text-lg text-neutral-300">
                {project.description}
              </div>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href={project.githubUrl}
                  className="border border-neutral-300 p-3 font-head hover:bg-neutral-300 hover:text-neutral-900 transition-all"
                >
                  View code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
