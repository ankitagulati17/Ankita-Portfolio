import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  technical: [
    "Python", "HTML/CSS", "JavaScript", "Java", "PHP",
    "Machine Learning", "Data Structures", "Algorithms",
    "Seaborn", "Matplotlib", "Pandas", "NumPy",
    "MySQL", "Excel", "Power BI", "Tableau"
  ],
  soft: [
    "Leadership", "Problem-solving", "Communication",
    "Work Ethic", "Adaptability", "Team Collaboration"
  ]
};

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.technical.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/50"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/50"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}