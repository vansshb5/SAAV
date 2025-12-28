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
      "Enterprise IT infrastructure and cloud platforms supporting scalable applications, secure environments, and high-availability systems across organizations.",
    image: cloudImg,
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "Data platforms and analytics systems that enable data processing, reporting, and intelligent insights through structured, unstructured, and real-time data environments.",
    image: dataImg,
  },
  {
    title: "Software Development & Enterprise Applications",
    description:
      "Design and development of enterprise software, web applications, APIs, and system integrations that support business and operational workflows.",
    image: softwareImg,
  },
  {
    title: "Cybersecurity & IT Operations",
    description:
      "Secure IT environments supported by monitoring, access control, system operations, and security-focused platforms to protect enterprise systems and data.",
    image: securityImg,
  },
  {
    title: "Public Sector & Regulated IT Environments",
    description:
      "Enterprise IT systems designed for public sector and regulated organizations, focusing on secure platforms, compliance-driven systems, and large-scale digital services.",
    image: publicImg,
  },
];

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];

  return (
    <main className="pt-28 md:pt-32 pb-24 bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* PAGE INTRO */}
        <section className="max-w-4xl mb-16 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            Industries & Technology Domains
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            SAAV works across AI and IT-driven domains, delivering technology
            solutions in areas such as artificial intelligence, cloud
            infrastructure, data platforms, and enterprise systems.
          </p>
        </section>

        {/* INDUSTRY SELECTOR */}
        <section className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">

          {/* MOBILE + DESKTOP LIST */}
          <ul
            className="
              flex md:block
              gap-3 md:gap-4
              overflow-x-auto md:overflow-visible
              pb-2 md:pb-0
              -mx-4 px-4 md:mx-0 md:px-0
            "
          >
            {industries.map((industry, index) => (
              <li key={industry.title} className="min-w-[240px] md:min-w-0">
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left px-4 py-3 md:px-5 md:py-4 rounded-md border
                    transition-all duration-300 ease-out
                    ${
                      activeIndex === index
                        ? "bg-white/5 border-white/30 text-white md:scale-[1.04] shadow-lg"
                        : "text-slate-300 border-transparent hover:bg-white/5 hover:text-white md:hover:scale-[1.03] hover:border-white/20 hover:shadow-md"
                    }
                  `}
                >
                  {industry.title}
                </button>
              </li>
            ))}
          </ul>

          {/* CONTENT */}
          <div className="bg-white/[0.03] border border-white/10 rounded-lg p-6 md:p-8 min-h-[320px] transition-all duration-300">
            <div className="mb-5 overflow-hidden rounded-md">
              <img
                src={activeIndustry.image}
                alt={activeIndustry.title}
                className="w-full h-40 md:h-48 object-cover transition-transform duration-500"
              />
            </div>

            <h2 className="text-xl md:text-2xl font-medium mb-4">
              {activeIndustry.title}
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {activeIndustry.description}
            </p>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Industries;
