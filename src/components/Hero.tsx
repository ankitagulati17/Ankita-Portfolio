import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          className="text-left md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Data Science Enthusiast
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            BCA student passionate about transforming data into insights.
            Experienced in Python, machine learning, and data visualization.
          </motion.p>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

            {/* Image container */}
            <motion.div
              className="relative rounded-full overflow-hidden border-2 border-purple-400/50 shadow-2xl shadow-purple-500/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="https://iili.io/FvvFuj4.jpg"
                alt="Ankita Gulati"
                className="w-64 h-64 object-cover"
              />
            </motion.div>

            {/* Background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
