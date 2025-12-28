import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    
    <main className="bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#0f172a] text-white">
<HeroSlider />

      {/* HERO */}
      <section className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
            Building IT & AI Solutions for
            <span className="block">
              Modern Digital Systems
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-12">
            SAAV is an IT and AI-focused technology company working across cloud,
            data, artificial intelligence, and enterprise software. We build
            intelligent systems and create opportunities for people to work on
            real-world technology projects.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              to="/industries"
              className="px-6 py-3 bg-white text-black rounded-md font-medium hover:opacity-90 transition"
            >
              Explore Industries
            </Link>
            <Link
              to="/capabilities"
              className="px-6 py-3 border border-white/20 rounded-md font-medium hover:bg-white/10 transition"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 max-w-3xl">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-medium mb-3">
                AI & Intelligent Systems
              </h3>
              <p className="text-slate-300 leading-relaxed">
                We design and implement artificial intelligence and machine
                learning systems that integrate into applications, platforms,
                and workflows.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-medium mb-3">
                Cloud & IT Platforms
              </h3>
              <p className="text-slate-300 leading-relaxed">
                We build cloud-based and enterprise IT platforms that support
                scalability, security, and reliable digital operations.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-medium mb-3">
                Data & Software Systems
              </h3>
              <p className="text-slate-300 leading-relaxed">
                We develop data platforms and software systems that enable
                analytics, automation, and modern digital services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES & CAPABILITIES LINKS */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-medium mb-4">
              Industries We Work In
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Our work spans AI and IT-driven domains including cloud
              infrastructure, data engineering, software platforms, and
              enterprise technology environments.
            </p>
            <Link
              to="/industries"
              className="underline underline-offset-4 hover:opacity-80"
            >
              View Industries →
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">
              Our Capabilities
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              We provide hands-on IT and AI capabilities across infrastructure,
              platforms, delivery, and operations.
            </p>
            <Link
              to="/capabilities"
              className="underline underline-offset-4 hover:opacity-80"
            >
              View Capabilities →
            </Link>
          </div>
        </div>
      </section>

      {/* PEOPLE & OPPORTUNITIES */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Opportunities for People in IT & AI
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            We believe in creating opportunities for people interested in IT and
            artificial intelligence. Our teams work on real projects involving
            cloud platforms, AI systems, data engineering, and enterprise
            software—helping individuals build skills and experience in modern
            technology environments.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-10 text-center">
            <h3 className="text-2xl font-medium mb-4">
              Get Started with SAAV
            </h3>
            <p className="text-slate-300 mb-6">
              Whether you’re interested in technology solutions or opportunities
              to grow in IT and AI, we’d love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-white text-black rounded-md font-medium hover:opacity-90 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
