import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Brain, FolderRoot as Football, Music, HandPlatter as Plate, Coffee, Camera } from 'lucide-react';
import Section from './Section';

const images = [
  "/adam1.jpg",
  "/adam2.jpg", 
  "/adam3.jpg"
];

const traits = [
  { icon: <Heart className="w-6 h-6 text-accent-pink" />, title: "Loving", description: "Your caring nature touches everyone around you" },
  { icon: <Star className="w-6 h-6 text-gold-400" />, title: "Brilliant", description: "Your intelligence and creativity shine bright" },
  { icon: <Brain className="w-6 h-6 text-accent-purple" />, title: "Thoughtful", description: "You always consider others in your decisions" },
  { icon: <Coffee className="w-6 h-6 text-accent-blue" />, title: "Passionate", description: "Your enthusiasm for life is contagious" },
  { icon: <Music className="w-6 h-6 text-accent-pink" />, title: "Musical", description: "Your love for music speaks to your soul" },
  { icon: <Camera className="w-6 h-6 text-silver-400" />, title: "Adventurous", description: "Always ready for new experiences" }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.7 }
  })
};

const YouSection: React.FC = () => {
  return (
    <Section id="you" title="You">
      <div className="mb-8 max-w-3xl mx-auto text-center">
        <p className="text-silver-200 text-lg md:text-xl leading-relaxed">
          Adam, you light up every room with your presence. This section celebrates everything that makes you uniquely wonderful.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-silver-100 mb-4">What Makes You Special</h3>
            <p className="text-silver-200 mb-6">
              Adam, from the moment I met you, I knew there was something extraordinary about you. Your kindness, intelligence, and sense of humor have been a constant source of joy in my life. Your ability to see the good in every situation inspires me daily.
            </p>
            <p className="text-silver-200">
              As you turn 21, I want to celebrate not just another year of your life, but everything that makes you who you are — your dreams, your passions, and the countless ways you've touched my heart.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-navy-800/60 backdrop-blur-sm p-4 rounded-lg border border-navy-700"
              >
                <div className="flex items-center mb-2">
                  {trait.icon}
                  <h4 className="ml-2 font-semibold text-silver-100">{trait.title}</h4>
                </div>
                <p className="text-silver-300 text-sm">{trait.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4 h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden row-span-1"
          >
            <img 
              src={images[0]} 
              alt="Adam smiling in a grey sweater" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4 row-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden"
            >
              <img 
                src={images[1]} 
                alt="Adam in a red kurta" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden"
            >
              <img 
                src={images[2]} 
                alt="Adam sitting casually on a bench" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default YouSection;