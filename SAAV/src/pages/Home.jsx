import { useEffect, useState } from "react";
import FloatingLines from "./FloatingLines";
import Testimonials from "./Testimonials";
import About from "./About";
const slides = [
  {
    title: "Transforming Businesses with Technology",
    subtitle: "From Strategy to Execution",
  },
  {
    title: "Building Modern Digital Solutions",
    subtitle: "Cloud • Data • Engineering • Innovation",
  },
  {
    title: "Enterprise Technology Consulting",
    subtitle: "Scalable, Secure, Reliable Systems",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // slower = premium feel

    return () => clearInterval(timer);
  }, []);

  return (<>
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020617]"
    >
      {/* Floating Background */}
      <div className="absolute inset-0 z-0">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineDistance={[8, 6, 4]}
          bendRadius={5}
          bendStrength={-0.5}
          interactive
          parallax
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-transparent z-10" />

      {/* SLIDER */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="w-full max-w-5xl overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col items-center text-center"
              >
             <h1 className="
  text-4xl md:text-6xl lg:text-7xl
  font-semibold
  text-white
  leading-tight
  mb-6
  text-shadow-strong
">
  {slide.title}
</h1>

<p className="
  text-base md:text-lg
  text-white/80
  text-shadow-soft
">
  {slide.subtitle}
</p>

                <div className="mt-10 flex justify-center gap-4">
                  <button className="px-6 py-3 bg-secondary text-black font-semibold rounded hover:opacity-90 transition">
                    Get Started
                  </button>

                <a href="/contact"><button className="px-6 py-3 border border-slate-400 text-white rounded hover:bg-white hover:text-black transition">
                    Contact Us
                  </button></a>  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 text-white text-3xl hover:text-secondary transition"
      >
        ❮
      </button>

      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 text-white text-3xl hover:text-secondary transition"
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${current === index ? "bg-secondary" : "bg-slate-500"
              }`}
          />
        ))}
      </div>
    </section>
    <About compact/>
    <Testimonials compact/>
    </>
  );
};

export default Home;
