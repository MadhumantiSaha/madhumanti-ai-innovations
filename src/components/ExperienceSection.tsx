import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Users } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "Multiple hackathon participations with award-winning AI and data-driven solutions.",
  },
  {
    icon: Award,
    title: "DP-700 Fabric Certification",
    description: "Microsoft Fabric Analytics Engineer certification — currently in progress.",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description: "Led cross-functional teams in building end-to-end ML pipelines and deploying production AI systems.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Experience & <span className="gradient-text">Achievements</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glow-card rounded-xl p-6 border border-border text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
