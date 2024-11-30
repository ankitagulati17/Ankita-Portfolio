import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Weather Prediction Model",
    description:
      "Comprehensive performance review of various machine learning algorithms including Naive Bayes, KNN, SVM, Random Forest, Decision Tree, and Logistic Regression.",
    link: "https://github.com/ankitagulati17/Weather-Prediction.git",
    tech: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    title: "Music and Health Survey Dashboard",
    description:
      "Created an interactive Tableau dashboard analyzing the relationship between music preferences and mental health.",
    link: "https://public.tableau.com/app/profile/ankita.gulati/viz/musicdashboard_17197643775240/Dashboard2",
    tech: ["Tableau", "Data Visualization", "Analytics"],
  },
  {
    title: "Power-Bi",
    description:
      "Developed an interactive Power BI dashboard to visualize and analyze weather data for actionable insights.",
    link: "https://github.com/ankitagulati17/Power-Bi",
    tech: ["Power BI", "Data Visualization", "Analytics"],
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-purple-400 hover:text-purple-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
