import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch", "LLMs", "LangChain", "NLP", "Computer Vision", "RAG"],
  },
  {
    title: "Data & Analytics",
    skills: ["Python", "Pandas", "SQL", "Power BI", "Microsoft Fabric", "DataBricks", "NumPy"],
  },
  {
    title: "MLOps & Cloud",
    skills: ["Docker", "GitHub Actions", "AWS", "Azure", "CI/CD", "MLflow"],
  },
  {
    title: "Web & Backend",
    skills: ["Node.js", "Streamlit", "FastAPI", "React", "REST APIs", "PostgreSQL"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card rounded-xl p-6 border border-border"
            >
              <h3 className="font-display text-lg font-semibold mb-4 text-primary">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
