import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-silver-100 mb-2">
            {title}
          </h2>
          <div className="flex items-center justify-center">
            <div className="h-[1px] w-16 bg-accent-blue"></div>
            <div className="mx-3">
              <div className="w-2 h-2 rounded-full bg-accent-pink"></div>
            </div>
            <div className="h-[1px] w-16 bg-accent-purple"></div>
          </div>
        </motion.div>
        
        {children}
      </div>
    </section>
  );
};

export default Section;