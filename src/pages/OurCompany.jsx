import heroImg from "../assets/company/hero.png";
import techImg from "../assets/company/tech.png";
import peopleImg from "../assets/company/people.png";
import officeImg from "../assets/company/office.png";

const OurCompany = () => {
  return (
    <main className="pt-32 pb-24 bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO / INTRO */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-28">
          <div>
            <p className="uppercase tracking-widest text-slate-400 mb-4">
              Our Company
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold mb-8 leading-tight">
              IT & AI Solutions for
              <span className="block text-white">
                Modern Digital Environments
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              SAAV is an IT and AI-focused technology company building intelligent
              systems, platforms, and applications. We work across cloud, data,
              artificial intelligence, and enterprise software to support modern
              digital operations and innovation.
            </p>
          </div>

          <img
            src={heroImg}
            alt="IT and AI systems"
            className="rounded-xl border border-white/10"
          />
        </section>

        {/* VALUE STRIP */}
        <section className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Technology-Driven",
              text:
                "Our work is centered around real-world IT and AI systems, focusing on scalable architectures, reliable platforms, and production-ready solutions.",
            },
            {
              title: "Hands-On Delivery",
              text:
                "We focus on building and implementing technology solutions, enabling systems that are practical, maintainable, and ready for real usage.",
            },
            {
              title: "Built for Growth",
              text:
                "Our platforms and solutions are designed to evolve, supporting continuous learning, innovation, and long-term technology growth.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-8"
            >
              <h3 className="text-xl font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* WHO WE ARE / HOW WE WORK */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl font-medium mb-6">
              Who We Are
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              We are a team of developers, engineers, data specialists, and AI
              practitioners working across software, cloud infrastructure, and
              intelligent systems. Our focus is on building technology that
              solves real problems and delivers measurable value.
            </p>
          </div>

          <img
            src={techImg}
            alt="Technology and systems"
            className="rounded-xl border border-white/10"
          />
        </section>

        {/* PRINCIPLES */}
        <section className="mb-32">
          <h2 className="text-3xl font-medium mb-12">
            Our Principles
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Practical Innovation",
                text:
                  "We focus on applying AI and IT in practical ways that can be deployed, used, and improved in real environments.",
              },
              {
                title: "Technical Excellence",
                text:
                  "Our solutions are built with strong engineering practices, clean architectures, and attention to performance and reliability.",
              },
              {
                title: "Learning & Growth",
                text:
                  "We believe in continuous learning and creating opportunities for people to grow their skills while working on real technology challenges.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-secondary pl-6"
              >
                <h3 className="text-xl font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PEOPLE */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl font-medium mb-6">
              Our People
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Our people are at the center of everything we do. We bring together
              individuals interested in IT and AI, providing opportunities to
              work on meaningful projects, gain hands-on experience, and grow
              within a collaborative technology-driven environment.
            </p>
          </div>

          <img
            src={peopleImg}
            alt="People working in IT and AI"
            className="rounded-xl border border-white/10"
          />
        </section>

        {/* OFFICES */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-medium mb-6">
              Our Presence
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              SAAV operates with a flexible working model, supporting collaboration
              across locations. Our teams work remotely and in shared spaces,
              enabling access to opportunities and projects regardless of
              geography.
            </p>
          </div>

          <img
            src={officeImg}
            alt="Office and remote collaboration"
            className="rounded-xl border border-white/10"
          />
        </section>

      </div>
    </main>
  );
};

export default OurCompany;
