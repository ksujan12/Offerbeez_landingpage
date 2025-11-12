import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/13920/SM504200.jpg",
      title: "Food",
      description: "Restaurants, cafes, and snacks",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/21189/SM1106409.jpg",
      title: "Fashion",
      description: "Trendy outfits and accessories",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/19731/ER957772.jpg",
      title: "Cosmetics",
      description: "Beauty, skincare, and makeup",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/21359/SM1113443.jpg",
      title: "Ethnic Jewellery",
      description: "Traditional and modern designs",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/19943/SM977590.jpg",
      title: "Fancy Stores",
      description: "Unique decor and gift items",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/16462/SM700592.jpg",
      title: "Grocery",
      description: "Fresh produce and daily essentials",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/21365/SM1113696.jpg",
      title: "Banking / Finance",
      description: "Loans, insurance, and financial services",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/7259/SM176084.jpg",
      title: "Tuitions",
      description: "Home and online tutorials",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/13332/SM468163.jpg",
      title: "Educational Institutions",
      description: "Schools and PU Colleges",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/21173/SM1105797.jpg",
      title: "Healthcare",
      description: "Clinics, hospitals, and wellness centers",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, categories.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 500);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 500);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 500);
  };

  const getVisibleSlides = () => {
    const slides: {
      image: string;
      title: string;
      description: string;
      offset: number;
      index: number;
    }[] = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + categories.length) % categories.length;
      slides.push({ ...categories[index], offset: i, index });
    }
    return slides;
  };

  return (
    <div
      id="categories"
      style={{
        width: "100%",
        padding: "60px 16px",
        background:
          "linear-gradient(to bottom right, #fff0f5, #f3e8ff, #ebf8ff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "8px",
            background: "linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Categories
        </h2>
        <p style={{ color: "#4b5563", fontSize: "18px" }}>
          Discover services around you
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div
        className="carousel-container"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          height: "420px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1200px",
        }}
      >
        <AnimatePresence mode="sync">
          {getVisibleSlides().map((slide) => {
            const offset = slide.offset;
            const isCenter = offset === 0;

            return (
              <motion.div
                key={slide.index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  x: offset * 230,
                  z: -Math.abs(offset) * 120,
                  scale: isCenter ? 1 : 0.85 - Math.abs(offset) * 0.1,
                  opacity: Math.abs(offset) > 1 ? 0.3 : 1,
                  rotateY: offset * -15,
                  filter: isCenter
                    ? "blur(0px) brightness(1)"
                    : "blur(1.5px) brightness(0.8)",
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  cursor: "pointer",
                  width: "300px",
                  height: "400px",
                  transformStyle: "preserve-3d",
                  zIndex: isCenter ? 20 : 10 - Math.abs(offset),
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                }}
                onClick={() => !isCenter && goToSlide(slide.index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
                {isCenter && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      padding: "24px",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
                      color: "white",
                      textAlign: "left",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        marginBottom: "6px",
                        textShadow:
                          "0 0 8px rgba(255,255,255,0.9), 0 0 12px rgba(236,72,153,0.7)",
                      }}
                    >
                      {slide.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#fff",
                        textShadow:
                          "0 0 6px rgba(255,255,255,0.8), 0 0 8px rgba(59,130,246,0.7)",
                      }}
                    >
                      {slide.description}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          style={{
            position: "absolute",
            left: "10px",
            zIndex: 30,
            background: "white",
            color: "#ec4899",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            cursor: "pointer",
          }}
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={goToNext}
          style={{
            position: "absolute",
            right: "10px",
            zIndex: 30,
            background: "white",
            color: "#ec4899",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            cursor: "pointer",
          }}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: index === currentIndex ? "22px" : "10px",
              height: "10px",
              borderRadius: "999px",
              backgroundColor: index === currentIndex ? "#ec4899" : "#f9a8d4",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 1024px) {
            h2 { font-size: 36px !important; }
            .carousel-container { height: 360px !important; margin: 20px 0 !important; }
          }

          @media (max-width: 768px) {
            h2 { font-size: 30px !important; }
            .carousel-container { height: 320px !important; margin: 10px 0 !important; }
            img { border-radius: 16px !important; }
          }

          @media (max-width: 480px) {
            h2 { font-size: 26px !important; }
            p { font-size: 16px !important; }
            .carousel-container { height: 280px !important; margin: 6px 0 !important; }
            button { padding: 8px !important; }
          }
        `}
      </style>
    </div>
  );
}
