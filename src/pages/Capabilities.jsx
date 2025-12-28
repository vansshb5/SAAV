import infraImg from "../assets/capabilities/infrastructure.png";
import dataImg from "../assets/capabilities/data.png";
import opsImg from "../assets/capabilities/operations.png";

const capabilityGroups = [
  {
    title: "IT Infrastructure & Cloud",
    description:
      "Designing, building, and operating scalable IT infrastructure across on-prem, hybrid, and cloud environments to support enterprise workloads and critical systems.",
    image: infraImg,
    items: [
      "Cloud Architecture & Migration",
      "Hybrid & On-Prem Infrastructure",
      "Network & Security Architecture",
      "High Availability & Resilience Design",
    ],
  },
  {
    title: "Data, Platforms & Applications",
    description:
      "Developing and modernizing data platforms and enterprise applications to enable reliable operations, analytics, and digital workflows.",
    image: dataImg,
    items: [
      "Data Platforms & Analytics",
      "Application Modernization",
      "Systems Integration",
      "API & Platform Engineering",
    ],
  },
  {
    title: "Enterprise IT Delivery & Operations",
    description:
      "Providing structured delivery, governance, and operational support to ensure enterprise IT initiatives are executed reliably and sustained over time.",
    image: opsImg,
    items: [
      "Program & IT Delivery Management",
      "IT Operations & Support Models",
      "Monitoring & Operational Analytics",
      "Process Automation & Optimization",
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
            SAAV delivers enterprise IT services across infrastructure, cloud,
            data, and platforms. Our capabilities focus on building, integrating,
            and operating reliable systems that support critical business and
            operational needs.
          </p>
        </section>

        {/* CAPABILITY GROUPS */}
        <section className="grid md:grid-cols-3 gap-8">
          {capabilityGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white/[0.03] border border-white/10 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* IMAGE */}
              <img
                src={group.image}
                alt={group.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-8">
                <h2 className="text-2xl font-medium mb-4">
                  {group.title}
                </h2>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {group.description}
                </p>

                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-slate-300"
                    >
                      {item}
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
