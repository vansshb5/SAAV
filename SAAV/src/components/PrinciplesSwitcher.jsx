import { useEffect, useRef, useState } from "react";

const principles = [
  {
    id: "clarity",
    title: "Clarity",
    description:
      "We value clear thinking, simple designs, and transparent communication. Every engagement begins with understanding before execution.",
  },
  {
    id: "engineering",
    title: "Engineering Discipline",
    description:
      "We design systems that are maintainable, scalable, and resilient, applying proven engineering practices and thoughtful architecture.",
  },
  {
    id: "partnership",
    title: "Partnership",
    description:
      "We work as long-term collaborators, aligning technology decisions with business strategy rather than short-term delivery.",
  },
  {
    id: "security",
    title: "Security by Design",
    description:
      "Security is embedded into our solutions from day one, ensuring data protection, compliance, and operational trust.",
  },
  {
    id: "scalability",
    title: "Scalability",
    description:
      "We build platforms that grow with your business, supporting increased demand without sacrificing performance or stability.",
  },
  {
    id: "pragmatism",
    title: "Pragmatism",
    description:
      "We focus on solutions that deliver real-world value, balancing innovation with reliability and operational practicality.",
  },
  {
    id: "improvement",
    title: "Continuous Improvement",
    description:
      "We believe technology should evolve continuously through iteration, learning, and measurable outcomes.",
  },
];

const PrinciplesSwitcher = () => {
  const [activeId, setActiveId] = useState(principles[0].id);
  const refs = useRef({});

  // 🔹 Scroll observer to auto-highlight titles
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    Object.values(refs.current).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-24">

      {/* LEFT — STICKY TITLES */}
      <div className="sticky top-32 h-fit">
        <h2 className="text-2xl font-semibold text-white mb-10">
          Our Principles
        </h2>

        <ul className="space-y-6">
          {principles.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                const target = document.getElementById(item.id);
                target?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              className={`
                cursor-pointer
                text-3xl md:text-4xl lg:text-5xl
                font-semibold
                leading-tight
                transition-all duration-300
                ${
                  activeId === item.id
                    ? "bg-gradient-to-r from-red-900 via-red-700 to-red-500 bg-clip-text text-transparent"
                    : "text-slate-400 hover:text-slate-300"
                }
              `}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT — SCROLLING CONTENT */}
      <div className="space-y-40">
        {principles.map((item) => (
          <div
            key={item.id}
            id={item.id}
            ref={(el) => (refs.current[item.id] = el)}
            className="max-w-xl scroll-mt-32"
          >
            <p className="text-lg leading-relaxed text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PrinciplesSwitcher;
