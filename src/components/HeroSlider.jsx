import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import heroAI from "../assets/home/hero-ai.png";
import heroCloud from "../assets/home/hero-cloud.png";
import heroPeople from "../assets/home/hero-people.png";

const slides = [
  {
    title: "IT & AI Solutions",
    subtitle: "Building intelligent systems for modern digital environments",
    image: heroAI,
  },
  {
    title: "Cloud & Digital Platforms",
    subtitle: "Scalable, secure infrastructure for real-world applications",
    image: heroCloud,
  },
  {
    title: "Opportunities for People",
    subtitle: "Learn, work, and grow in IT and artificial intelligence",
    image: heroPeople,
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms]
            ${index === current ? "opacity-30" : "opacity-0"}
          `}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1
          key={slides[current].title}
          className="text-4xl md:text-6xl font-semibold mb-6 animate-slideFade"
        >
          {slides[current].title}
        </h1>

        <p className="text-xl text-slate-300 mb-10 animate-slideFade">
          {slides[current].subtitle}
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/industries"
            className="px-6 py-3 bg-white text-black rounded-md font-medium hover:opacity-90 transition"
          >
            Explore Industries
          </Link>
          <Link
            to="/capabilities"
            className="px-6 py-3 border border-white/30 rounded-md font-medium hover:bg-white/10 transition"
          >
            View Capabilities
          </Link>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 flex gap-3 z-10">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300
              ${i === current ? "bg-white w-4" : "bg-white/40"}
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
