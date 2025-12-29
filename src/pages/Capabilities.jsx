import infraImg from "../assets/capabilities/infrastructure.png";
import dataImg from "../assets/capabilities/data.png";
import opsImg from "../assets/capabilities/operations.png";
import aiImg from "../assets/capabilities/ai.png";

const capabilityGroups = [
  {
    title: "IT Strategy & Transformation",
    description:
      "We partner with organizations to define robust IT strategies that modernize infrastructure, streamline processes, and align technology with business priorities.",
    image: infraImg,
    items: [
      "Technology roadmap development",
      "Enterprise architecture planning",
      "IT governance & risk management",
    ],
  },
  {
    title: "Cloud Consulting & Engineering",
    description:
      "We guide organizations through their cloud journey from strategy through deployment and optimization, enabling scalable, secure, and cost-efficient platforms.",
    image: opsImg,
    items: [
      "Public, private, and hybrid cloud strategies",
      "Cloud architecture & implementation",
      "Migration & modernization services",
    ],
  },
  {
    title: "Data & Analytics",
    description:
      "We help organizations harness data to improve decision-making, operational performance, and competitive advantage through modern data platforms.",
    image: dataImg,
    items: [
      "Data architecture & engineering",
      "Business intelligence & reporting",
      "Data governance & quality frameworks",
    ],
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "From AI strategy to operational deployment, we enable organizations to adopt and scale intelligent solutions that address real business challenges.",
    image: aiImg,
    items: [
      "AI strategy & readiness assessments",
      "Machine learning model development",
      "Intelligent automation & predictive analytics",
    ],
  },
];

const Capabilities = () => {
  return (
    <main className="pt-32 pb-24 bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE INTRO */}
        <section className="max-w-4xl mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Our Capabilities
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            SAAV Consulting delivers technology consulting services across IT
            strategy, cloud engineering, data platforms, and artificial
            intelligence, helping organizations build scalable and sustainable
            digital capabilities.
          </p>
        </section>

        {/* CAPABILITY GROUPS */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilityGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white/[0.03] border border-white/10 rounded-lg overflow-hidden
                         transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* IMAGE */}
              <img
                src={group.image}
                alt={group.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-8">
                <h2 className="text-xl font-medium mb-4">
                  {group.title}
                </h2>

                <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                  {group.description}
                </p>

                <ul className="space-y-2 text-sm">
                  {group.items.map((item) => (
                    <li key={item} className="text-slate-300">
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* CROSS LINK */}
        <section className="mt-24 max-w-4xl">
          <p className="text-slate-300 text-lg">
            These capabilities are applied across the industries we serve. Learn
            more about our industry experience{" "}
            <a
              href="/industries"
              className="text-white underline underline-offset-4 hover:opacity-80"
            >
              here
            </a>
            .
          </p>
        </section>

      </div>
    </main>
  );
};

export default Capabilities;
