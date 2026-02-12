import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Financial Assistant",
    description:
      "An intelligent financial assistant powered by LLMs that helps users analyze market trends, manage portfolios, and make data-driven investment decisions.",
    tags: ["LangChain", "Python", "FastAPI", "React", "OpenAI"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Job Matching Platform",
    description:
      "A smart platform that leverages NLP and ML to match candidates with ideal job opportunities based on skills, experience, and preferences.",
    tags: ["NLP", "TensorFlow", "Node.js", "PostgreSQL", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "Harmful Content Detection System",
    description:
      "A deep learning-based system for detecting harmful and deepfake content across text, images, and video using state-of-the-art models.",
    tags: ["PyTorch", "Computer Vision", "NLP", "Docker", "AWS"],
    github: "#",
    demo: null,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 section-glow">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glow-card rounded-xl border border-border flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] font-medium rounded-md bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
