import useScrollReveal from "../hooks/useScrollReveal";
import PrinciplesSwitcher from "../components/PrinciplesSwitcher";

const About = () => {
  // 🔹 Hooks MUST be here
  const [introRef, introVisible] = useScrollReveal();
  const [whoRef, whoVisible] = useScrollReveal();
  const [valuesRef, valuesVisible] = useScrollReveal();
  const [approachRef, approachVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();

  return (
    <section
      id="about"
      className="bg-[#020617] text-slate-300 pt-32 pb-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* INTRO */}
        <div
          ref={introRef}
          className={`max-w-3xl mb-24 reveal ${
            introVisible ? "reveal-active" : ""
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            About Us
          </h1>
          <p className="text-lg leading-relaxed text-slate-400">
            We are a technology consulting firm focused on helping organizations
            design, build, and scale reliable digital systems.
          </p>
        </div>

        {/* WHO WE ARE */}
        <div
          ref={whoRef}
          className={`grid md:grid-cols-2 gap-20 mb-28 reveal ${
            whoVisible ? "reveal-active" : ""
          }`}
        >
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Who We Are
            </h2>
            <p className="leading-relaxed text-slate-400">
              SAAV is a modern technology consultancy working at the intersection
              of engineering, data, and cloud platforms. We partner with teams
              that value clarity, quality, and long-term thinking.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What We Do
            </h2>
            <p className="leading-relaxed text-slate-400">
              We help organizations translate business goals into scalable
              architectures and well-engineered software systems that perform
              reliably in production.
            </p>
          </div>
        </div>

        {/* VALUES */}
     <div className="mb-28">
  

  <PrinciplesSwitcher />
</div>

        {/* APPROACH */}
        <div
          ref={approachRef}
          className={`mb-28 max-w-4xl reveal ${
            approachVisible ? "reveal-active" : ""
          }`}
        >
          <h2 className="text-2xl font-semibold text-white mb-8">
            Our Approach
          </h2>

          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p>
              We begin by understanding your business context, technical
              constraints, and long-term objectives.
            </p>
            <p>
              Our team designs architectures that balance performance,
              scalability, and operational simplicity, validating decisions
              early to reduce risk.
            </p>
            <p>
              We deliver incrementally, ensuring systems are production-ready
              and adaptable to future needs.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div
          ref={statsRef}
          className={`grid md:grid-cols-4 gap-12 border-t border-white/10 pt-16 text-center reveal ${
            statsVisible ? "reveal-active" : ""
          }`}
        >
          {[
            { value: "10+", label: "Years of Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Focus" },
            { value: "24/7", label: "Engineering Mindset" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="text-sm text-slate-400 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
