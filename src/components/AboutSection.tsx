import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code2, Database, Sparkles } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI & ML" },
  { icon: Database, label: "Data Systems" },
  { icon: Code2, label: "Full-Stack" },
  { icon: Sparkles, label: "GenAI" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 section-glow">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a Machine Learning Engineer and GenAI Developer with a strong background in AI, MLOps, Data Analytics,
            and Full-Stack Development. I specialize in building AI-powered applications — from financial assistants and
            job matching platforms to deepfake detection systems, Web3 platforms, and intelligent automation tools.
            I'm passionate about creating systems that are not only technically sound but also deliver real-world impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className="glow-card rounded-xl p-6 flex flex-col items-center gap-3 border border-border"
            >
              <h.icon className="text-primary" size={28} />
              <span className="font-display text-sm font-medium">{h.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
