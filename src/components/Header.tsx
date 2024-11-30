import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      className="bg-black/50 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.h1 
          className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Ankita Gulati
        </motion.h1>
        <div className="flex space-x-6">
          <motion.a 
            href="mailto:ankitagulatiwork@gmail.com" 
            className="text-gray-400 hover:text-purple-400 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <Mail className="h-6 w-6" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/ankita-gulati17/" 
            className="text-gray-400 hover:text-purple-400 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a 
            href="https://github.com/ankitagulati17" 
            className="text-gray-400 hover:text-purple-400 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <Github className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}