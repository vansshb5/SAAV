import { useState } from "react";

const industries = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Development and deployment of AI and machine learning systems, including data pipelines, model integration, and AI-enabled applications used across enterprise and digital platforms.",
  },
  {
    title: "Cloud Computing & IT Infrastructure",
    description:
      "Enterprise IT infrastructure and cloud platforms supporting scalable applications, secure environments, and high-availability systems across organizations.",
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "Data platforms and analytics systems that enable data processing, reporting, and intelligent insights through structured, unstructured, and real-time data environments.",
  },
  {
    title: "Software Development & Enterprise Applications",
    description:
      "Design and development of enterprise software, web applications, APIs, and system integrations that support business and operational workflows.",
  },
  {
    title: "Cybersecurity & IT Operations",
    description:
      "Secure IT environments supported by monitoring, access control, system operations, and security-focused platforms to protect enterprise systems and data.",
  },
  {
    title: "Public Sector & Regulated IT Environments",
    description:
      "Enterprise IT systems designed for public sector and regulated organizations, focusing on secure platforms, compliance-driven systems, and large-scale digital services.",
  },
];

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="pt-32 pb-24 bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE INTRO */}
        <section className="max-w-4xl mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Industries & Technology Domains
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            SAAV works across AI and IT-driven domains, delivering technology
            solutions in areas such as artificial intelligence, cloud
            infrastructure, data platforms, and enterprise systems.
          </p>
        </section>

        {/* INDUSTRY SELECTOR */}
        <section className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT LIST */}
          <ul className="space-y-3">
            {industries.map((industry, index) => (
              <li key={industry.title}>
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left px-5 py-4 rounded-md transition
                    ${
                      activeIndex === index
                        ? "bg-white/5 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  {industry.title}
                </button>
              </li>
            ))}
          </ul>

          {/* RIGHT CONTENT */}
          <div className="bg-white/[0.03] border border-white/10 rounded-lg p-8 min-h-[220px]">
            <h2 className="text-2xl font-medium mb-4">
              {industries[activeIndex].title}
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {industries[activeIndex].description}
            </p>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Industries;
