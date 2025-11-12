import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/21189/16-SM1106402.jpg',
      title: 'Discover Local.',
      subtitle: "India's emerging hyperlocal platform connecting neighbourhood shops and consumers",
    },
    {
      image: 'https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/21319/SM1111450.jpg?date=Tue%20Oct%2028%202025%2014:42:39%20GMT+0530%20(India%20Standard%20Time)',
      title: 'Save Smart.',
      subtitle: 'Find the best deals near you through smart, digital promotions',
    },
    {
      image: 'https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/21156/399-SM1105210.jpg',
      title: 'Grow Together.',
      subtitle: 'A win-win ecosystem where businesses, consumers, and partners thrive',
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-16 h-[70vh] md:h-[80vh] sm:h-[60vh]">
      <div className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF4FA2]/80 via-[#3266CC]/60 to-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Shifted Content Right */}
                <div className="max-w-4xl space-y-8 ml-8 sm:ml-12 md:ml-20 lg:ml-28">
                  
                  {/* Main Headline */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <h1 className="text-white leading-tight drop-shadow-2xl">
                      {slides[currentSlide].title}
                    </h1>
                  </motion.div>

                  {/* Subtitle */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <p className="text-white/90 text-xl md:text-2xl max-w-2xl leading-relaxed drop-shadow-lg">
                      {slides[currentSlide].subtitle}
                    </p>
                  </motion.div>

                  {/* Tagline */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="pt-4"
                  >
                    <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 inline-block shadow-2xl">
                      <p className="text-white/95 text-lg md:text-xl">
                        One Platform Endless Promotions
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 text-white p-3 md:p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 text-white p-3 md:p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? 'w-12 bg-[#EC1E79] shadow-lg shadow-[#EC1E79]/50'
                  : 'w-3 bg-white/50 hover:bg-white/80'
              } h-3`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-24 right-8 w-32 h-32 bg-[#FBBF24]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 left-8 w-40 h-40 bg-[#EC1E79]/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
} 
