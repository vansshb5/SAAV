import { useState } from "react";

import aiImg from "../assets/industries/ai.png";
import cloudImg from "../assets/industries/cloud.png";
import dataImg from "../assets/industries/data.png";
import softwareImg from "../assets/industries/software.png";
import securityImg from "../assets/industries/security.png";
import publicImg from "../assets/industries/public.png";

const industries = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Development and deployment of AI and machine learning systems, including data pipelines, model integration, and AI-enabled applications used across enterprise and digital platforms.",
    image: aiImg,
  },
  {
    title: "Cloud Computing & IT Infrastructure",
    description:
      "Enterprise IT infrastructure and cloud platforms supporting scalable applications, secure environments, and high-availability systems.",
    image: cloudImg,
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "Data platforms and analytics systems that enable data processing, reporting, and intelligent insights across structured and real-time environments.",
    image: dataImg,
  },
  {
    title: "Software Development & Enterprise Applications",
    description:
      "Design and development of enterprise software, web applications, APIs, and integrations supporting business workflows.",
    image: softwareImg,
  },
  {
    title: "Cybersecurity & IT Operations",
    description:
      "Secure IT environments supported by monitoring, access control, and operational platforms protecting enterprise systems and data.",
    image: securityImg,
  },
  {
    title: "Public Sector & Regulated IT Environments",
    description:
      "IT systems designed for regulated organizations, focusing on compliance, security, and large-scale digital services.",
    image: publicImg,
  },
];

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];

  return (
    <main className="bg-slate-50 text-slate-900">

      {/* PAGE INTRO */}
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Industries & Technology Domains
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            SAAV works across AI and IT-driven domains, delivering technology
            solutions in areas such as artificial intelligence, cloud platforms,
            data engineering, and enterprise systems.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SELECTOR */}
          <ul className="space-y-4">
            {industries.map((industry, index) => (
              <li key={industry.title}>
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left px-5 py-4 rounded-md border
                    transition-all duration-300 ease-out
                    ${
                      activeIndex === index
                        ? "bg-white border-blue-600 text-slate-900 shadow-md scale-[1.02]"
                        : "bg-transparent border-transparent text-slate-600 hover:bg-white hover:border-slate-300 hover:text-slate-900"
                    }
                  `}
                >
                  {industry.title}
                </button>
              </li>
            ))}
          </ul>

          {/* RIGHT CONTENT */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 min-h-[360px] transition-all duration-300">
            <div className="mb-6 overflow-hidden rounded-md">
              <img
                src={activeIndustry.image}
                alt={activeIndustry.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <h2 className="text-2xl font-medium mb-4">
              {activeIndustry.title}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {activeIndustry.description}
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Industries;
