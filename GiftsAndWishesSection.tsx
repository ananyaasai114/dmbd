import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gift, Mail, CakeSlice, Heart } from 'lucide-react';
import Section from './Section';

const wishes = [
  {
    id: 1,
    type: 'envelope',
    icon: <Mail className="w-8 h-8" />,
    title: "My Birthday Letter",
    content: "Dear Adam,\n\nAs you turn 21, I want you to know how incredibly special you are to me. Your kindness, intelligence, and humor brighten every day. You've grown into an amazing person with so much to offer the world.\n\nI cherish every moment we spend together, from our deep conversations to our silly jokes. You have a way of making even ordinary days extraordinary.\n\nHappy 21st birthday! May this year bring you all the joy, success, and happiness you deserve.\n\nWith all my love,\nYour Special Someone"
  },
  {
    id: 2,
    type: 'gift',
    icon: <Gift className="w-8 h-8" />,
    title: "21 Reasons I Love You",
    content: "1. Your smile lights up any room\n2. Your intelligence and curiosity\n3. The way you listen intently\n4. Your compassion for others\n5. Your determination to achieve your goals\n6. Your sense of humor\n7. How you always make time for those you care about\n8. Your creativity\n9. The way you see beauty in everything\n10. Your honesty and integrity\n11. Your patience\n12. How you encourage me to be my best self\n13. Your thoughtfulness\n14. The way you remember little details\n15. Your adventurous spirit\n16. How you're always there when I need you\n17. Your passion for what you believe in\n18. The way you make me feel special\n19. Your resilience in difficult times\n20. How you've grown into an amazing person\n21. Everything that makes you uniquely Adam"
  },
  {
    id: 3,
    type: 'gift',
    icon: <Heart className="w-8 h-8" />,
    title: "Birthday Wish",
    content: "On your 21st birthday, I wish for you:\n\nThe courage to chase your dreams\nThe strength to overcome challenges\nThe wisdom to make good choices\nThe joy of meaningful relationships\nThe peace that comes from being true to yourself\nAnd all the happiness your heart can hold\n\nHappy 21st Birthday, Adam!"
  }
];

const GiftsAndWishesSection: React.FC = () => {
  const [openWish, setOpenWish] = useState<number | null>(null);

  const toggleWish = (id: number) => {
    if (openWish === id) {
      setOpenWish(null);
    } else {
      setOpenWish(id);
    }
  };

  return (
    <Section id="gifts-and-wishes" title="Gifts & Wishes">
      <div className="mb-12 max-w-3xl mx-auto text-center">
        <p className="text-silver-200 text-lg md:text-xl leading-relaxed">
          Click on each envelope and gift to reveal special birthday wishes just for you, Adam.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {wishes.map((wish) => (
          <motion.div
            key={wish.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: wish.id * 0.1 }}
            viewport={{ once: true }}
            className={`relative ${openWish === wish.id ? 'z-10' : ''}`}
          >
            <div
              onClick={() => toggleWish(wish.id)}
              className={`cursor-pointer transition-all duration-500 ${
                openWish === wish.id
                  ? 'scale-0 opacity-0'
                  : 'scale-100 opacity-100'
              }`}
            >
              <div className="bg-navy-800 border border-navy-700 rounded-lg p-8 h-64 flex flex-col items-center justify-center text-center hover:border-silver-400 transition-colors duration-300">
                <div className={`mb-4 p-4 rounded-full ${
                  wish.type === 'envelope' ? 'bg-accent-blue/20 text-accent-blue' : 'bg-accent-pink/20 text-accent-pink'
                }`}>
                  {wish.icon}
                </div>
                <h3 className="font-serif text-xl text-silver-100 mb-2">{wish.title}</h3>
                <p className="text-silver-300 text-sm">Click to open</p>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: openWish === wish.id ? 1 : 0,
                opacity: openWish === wish.id ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 right-0 min-h-[20rem] bg-navy-800 border border-silver-400 rounded-lg p-6 shadow-xl"
            >
              <button
                onClick={() => setOpenWish(null)}
                className="absolute top-4 right-4 text-silver-300 hover:text-silver-100"
              >
                ✕
              </button>
              <h3 className="font-serif text-xl text-silver-100 mb-4">{wish.title}</h3>
              <div className="text-silver-200 text-sm whitespace-pre-line h-60 overflow-y-auto pr-2 leading-relaxed">
                {wish.content}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/celebrate">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300"
          >
            <CakeSlice className="w-5 h-5" />
            <span>Celebrate Now</span>
          </motion.button>
        </Link>
      </div>
    </Section>
  );
};

export default GiftsAndWishesSection;