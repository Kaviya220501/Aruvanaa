import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";


import hero1 from "../../assets/hero.png";
import hero2 from "../../assets/hero1.png";
import hero3 from "../../assets/hero2.png";
import hero4 from "../../assets/hero3.png";
import hero5 from "../../assets/hero4.png";

const slides = [
  {
    image: hero1,
    heading: (
      <>
        Trade Beyond <span className="text-[#c5a059] italic">Borders.</span>
      </>
    ),
    subtext:
      "Aruvanaa bridges the gap between India's rich agricultural heritage and global markets. We ensure quality, transparency, and trust in every transaction.",
  },
  {
    image: hero2,
    heading: (
      <>
        Farm to <span className="text-[#c5a059] italic">World.</span>
      </>
    ),
    subtext:
      "Direct sourcing from India's finest farms ensures unmatched freshness, authentic quality, and the best value for buyers across the UAE and beyond.",
  },
  {
    image: hero3,
    heading: (
      <>
        Freshness <span className="text-[#c5a059] italic">Delivered.</span>
      </>
    ),
    subtext:
      "From harvest to your doorstep — our end-to-end cold chain and logistics network guarantees every shipment arrives in peak condition.",
  },
  {
    image: hero4,
    heading: (
      <>
        Premium <span className="text-[#c5a059] italic">Commodities.</span>
      </>
    ),
    subtext:
      "Explore 10 licensed categories of food and agricultural products — from premium dates and grains to snack foods and dairy, sourced with precision.",
  },
  {
    image: hero5,
    heading: (
      <>
        Your Trusted <span className="text-[#c5a059] italic">Partner.</span>
      </>
    ),
    subtext:
      "With offices in Erode, India and Dubai, UAE, we provide seamless procurement, customs clearance, and last-mile delivery you can always count on.",
  },
];

const AUTOPLAY_INTERVAL = 4500; 

const HeroSlider = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = slides.length;

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setCurrent((index + total) % total);
      setTimeout(() => setAnimating(false), 600);
    },
    [animating, total]
  );

  const next = useCallback(() => {
    goTo(current + 1, "right");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1, "left");
  }, [current, goTo]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTOPLAY_INTERVAL);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
      resetTimer();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  
  const handleDot = (i: number) => {
    goTo(i, i > current ? "right" : "left");
    resetTimer();
  };

  return (
    <>
      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .slide-enter-right {
          animation: slideInFromRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .slide-enter-left {
          animation: slideInFromLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .text-fade-up {
          animation: fadeSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .text-fade-up-delay {
          animation: fadeSlideUp 0.7s 0.15s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .text-fade-up-delay2 {
          animation: fadeSlideUp 0.7s 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center ${
              i === current
                ? direction === "right"
                  ? "slide-enter-right"
                  : "slide-enter-left"
                : "opacity-0 pointer-events-none"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={i !== current}
          />
        ))}

        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <div className="max-w-3xl text-white">
            <div
              key={`badge-${current}`}
              className="text-fade-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6"
            >
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                Connecting India to the UAE & Beyond
              </span>
            </div>

            <h1
              key={`h1-${current}`}
              className="text-fade-up-delay text-5xl lg:text-7xl font-serif mb-6 leading-tight"
            >
              {slides[current].heading}
            </h1>

            <p
              key={`p-${current}`}
              className="text-fade-up-delay2 text-lg opacity-90 mb-10 leading-relaxed max-w-2xl"
            >
              {slides[current].subtext}
            </p>

            <div className="text-fade-up-delay2 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/products")}
                className="bg-[#c5a059] hover:bg-[#b48e48] text-[#1a3c1a] px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg"
              >
                Explore Commodities <span>→</span>
              </button>
              <button
                onClick={() => navigate("/about")}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold transition-all"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>

       

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-7 h-2.5 bg-[#c5a059]"
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 z-30 h-[3px] bg-[#c5a059]/30 w-full">
          <div
            key={`progress-${current}`}
            className="h-full bg-[#c5a059]"
            style={{
              animation: `slideInFromLeft ${AUTOPLAY_INTERVAL}ms linear forwards`,
            }}
          />
        </div>
      </section>
    </>
  );
};

export default HeroSlider;