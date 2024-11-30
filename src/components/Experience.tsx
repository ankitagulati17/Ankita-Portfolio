import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="border-l-4 border-purple-400 pl-6">
            <h3 className="text-2xl font-semibold text-white">Data Science Intern</h3>
            <p className="text-purple-400 font-medium mt-1">AcmeGrade | 2023</p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• Developed and implemented machine learning models for real-world applications</li>
              <li>• Created interactive data visualizations using Python libraries</li>
              <li>• Performed exploratory data analysis on large datasets</li>
              <li>• Collaborated with team members to optimize model performance</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}