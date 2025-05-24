import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import Section from './Section';

// Placeholder images - replace with actual images
const memories = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1251806/pexels-photo-1251806.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Our First Adventure",
    description: "Remember that day we spontaneously decided to explore the city? Your sense of adventure always pushes me to try new things."
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Sunset Conversations",
    description: "I love our deep talks as the sun sets. Your perspective on life always gives me new insights."
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Coffee Shop Study Sessions",
    description: "Even when we're just studying together, you make the mundane special with your presence."
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Birthday Celebration",
    description: "Last year's celebration was special, but this year will be even more memorable."
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Music Festival",
    description: "Dancing with you to our favorite songs is always the highlight of any event."
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Road Trip",
    description: "The journey is always more important than the destination when I'm with you."
  }
];

const ThroughMyLensSection: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);

  const openMemory = (id: number) => {
    setSelectedMemory(id);
  };

  const closeMemory = () => {
    setSelectedMemory(null);
  };

  const navigateMemory = (direction: 'prev' | 'next') => {
    if (selectedMemory === null) return;
    
    const currentIndex = memories.findIndex(memory => memory.id === selectedMemory);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex - 1 < 0 ? memories.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex + 1 >= memories.length ? 0 : currentIndex + 1;
    }
    
    setSelectedMemory(memories[newIndex].id);
  };

  const selectedMemoryData = memories.find(memory => memory.id === selectedMemory);

  return (
    <Section id="through-my-lens" title="Through My Lens">
      <div className="mb-8 max-w-3xl mx-auto text-center">
        <p className="text-silver-200 text-lg md:text-xl leading-relaxed">
          These are the moments I've captured with you, Adam. Each photo holds a special memory that I'll treasure forever.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openMemory(memory.id)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h3 className="text-silver-100 font-serif text-xl mb-1">{memory.title}</h3>
              <p className="text-silver-300 text-sm line-clamp-2">{memory.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedMemory !== null && selectedMemoryData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-navy-900/95 z-50 flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full bg-navy-800 rounded-lg overflow-hidden">
            <button
              onClick={closeMemory}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-navy-900/50 text-silver-100 hover:bg-navy-700/50 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img
                  src={selectedMemoryData.image}
                  alt={selectedMemoryData.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-silver-100 font-serif text-2xl mb-4">{selectedMemoryData.title}</h3>
                  <p className="text-silver-200 leading-relaxed">{selectedMemoryData.description}</p>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => navigateMemory('prev')}
                    className="p-2 rounded-full bg-navy-700 text-silver-100 hover:bg-navy-600 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={() => navigateMemory('next')}
                    className="p-2 rounded-full bg-navy-700 text-silver-100 hover:bg-navy-600 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </Section>
  );
};

export default ThroughMyLensSection;