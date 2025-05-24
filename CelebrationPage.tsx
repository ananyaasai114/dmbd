import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunMedium, Music, Volume2, VolumeX } from 'lucide-react';

const CelebrationPage: React.FC = () => {
  const [lightsOn, setLightsOn] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [candleLit, setCandleLit] = useState(false);
  const [candleBlown, setCandleBlown] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (lightsOn) {
      timeout = setTimeout(() => {
        setShowCake(true);
        
        setTimeout(() => {
          setCandleLit(true);
        }, 2000);
      }, 2000);
    }
    
    return () => clearTimeout(timeout);
  }, [lightsOn]);

  const handleLightsOn = () => {
    setLightsOn(true);
  };

  const handleBlowCandle = () => {
    if (candleLit && !candleBlown) {
      setCandleBlown(true);
      setTimeout(() => {
        setShowBirthday(true);
      }, 1000);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="relative min-h-screen bg-navy-900 overflow-hidden flex flex-col items-center justify-center">
      <audio 
        ref={audioRef} 
        src="https://www.bensound.com/bensound-music/bensound-happybirthday.mp3" 
        loop 
      />
      
      {!lightsOn && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center z-50"
        >
          <button 
            onClick={handleLightsOn}
            className="bg-navy-800/30 hover:bg-navy-800/50 text-silver-100 p-4 rounded-full transition-colors duration-300"
          >
            <SunMedium className="w-8 h-8" />
          </button>
          <p className="text-silver-300 mt-4 text-sm">Click to turn on the lights</p>
        </motion.div>
      )}
      
      <AnimatePresence>
        {lightsOn && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-navy-900"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute inset-0 pointer-events-none overflow-hidden"
            >
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ 
                    duration: 2 + Math.random() * 3, 
                    repeat: Infinity, 
                    delay: Math.random() * 2 
                  }}
                  className="absolute w-1 h-1 bg-silver-100 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
              
              {candleBlown && (
                <>
                  {Array.from({ length: 100 }).map((_, i) => (
                    <motion.div
                      key={`confetti-${i}`}
                      initial={{ 
                        top: '50%', 
                        left: '50%', 
                        opacity: 1 
                      }}
                      animate={{ 
                        top: `${Math.random() * 100}%`, 
                        left: `${Math.random() * 100}%`, 
                        opacity: 0 
                      }}
                      transition={{ 
                        duration: 3 + Math.random() * 2, 
                        ease: "easeOut" 
                      }}
                      className="absolute w-2 h-2 rounded-sm"
                      style={{
                        backgroundColor: 
                          i % 5 === 0 ? '#4361EE' : 
                          i % 5 === 1 ? '#7209B7' : 
                          i % 5 === 2 ? '#F72585' :
                          i % 5 === 3 ? '#C0C5C1' : '#F7F7F9',
                        transform: `rotate(${Math.random() * 360}deg)`
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              onClick={toggleMusic}
              className="fixed top-6 right-6 z-50 p-3 rounded-full bg-navy-800 hover:bg-navy-700 text-silver-100 transition-colors"
            >
              {isMusicPlaying ? <Volume2 /> : <VolumeX />}
            </motion.button>
          </>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showCake && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, type: "spring" }}
            className="relative z-20"
          >
            <div className="relative w-72 h-48">
              {/* Cake layers */}
              <div className="absolute bottom-0 w-full">
                {/* Bottom layer */}
                <div className="h-16 bg-accent-blue rounded-t-2xl relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-navy-900/30 to-transparent" />
                  <div className="absolute top-0 left-0 w-full h-2 bg-silver-200/20" />
                </div>
                
                {/* Middle layer */}
                <div className="h-12 bg-accent-purple -mt-2 rounded-t-xl relative mx-4">
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-navy-900/30 to-transparent" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-silver-200/20" />
                </div>
                
                {/* Top layer */}
                <div className="h-10 bg-accent-pink -mt-2 rounded-t-lg relative mx-8">
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-navy-900/30 to-transparent" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-silver-200/20" />
                </div>
              </div>

              {/* Candle */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[2.5rem] w-2 h-16">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 w-full h-12 bg-silver-200 rounded-sm">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-silver-300" />
                  </div>
                  
                  <AnimatePresence>
                    {candleLit && !candleBlown && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute -top-6 left-1/2 -translate-x-1/2"
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1], 
                            rotate: [0, 5, -5, 0] 
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            repeatType: "mirror" 
                          }}
                          className="relative"
                        >
                          <div className="absolute w-4 h-6 bg-accent-pink rounded-full blur-sm" />
                          <div className="absolute w-2 h-4 bg-white rounded-full blur-[1px]" style={{ left: '4px', top: '4px' }} />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* "21" on cake */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-silver-100 text-2xl font-bold font-serif tracking-wider">
                <span className="mr-2">2</span>
                <span>1</span>
              </div>
            </div>
            
            {/* Cake plate */}
            <div className="w-80 h-4 bg-silver-300/30 rounded-full mx-auto -mt-2 backdrop-blur-sm" />
            
            {candleLit && !candleBlown && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={handleBlowCandle}
                className="mt-12 bg-navy-800 hover:bg-navy-700 text-silver-100 py-3 px-8 rounded-full transition-colors font-medium"
              >
                Make a Wish & Blow Out Candle
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showBirthday && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex flex-col items-center justify-center text-center z-30 bg-navy-900/90 backdrop-blur-sm"
          >
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-serif font-bold text-silver-100 mb-6"
            >
              Happy Birthday
            </motion.h1>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif text-silver-100 mb-8"
            >
              Adam Nabeel
            </motion.h2>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="max-w-lg px-4"
            >
              <p className="text-xl text-silver-200 mb-2">May your 21st year be filled with</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink text-transparent bg-clip-text">
                endless joy, love, and celestial wonders!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CelebrationPage;