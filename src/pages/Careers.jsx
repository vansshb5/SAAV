import heroImg from "../assets/careers/hero.png";
import whyImg from "../assets/careers/why.png";
import workImg from "../assets/careers/work.png";

const Careers = () => {
  return (
    <main className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative pt-28 pb-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="relative max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Careers at SAAV Consulting
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            Join a technology consulting firm focused on delivering thoughtful,
            practical IT, Data, Cloud, and Artificial Intelligence solutions.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 pt-16">

          {/* WHY SAAV */}
          <div className="bg-white border border-slate-200 rounded-xl p-10 md:p-14 mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium mb-6">
                Why Build Your Career at SAAV
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                At SAAV Consulting, our people are central to how we work.
                We provide an environment where professionals can develop
                practical skills, contribute to meaningful projects, and grow
                alongside experienced consultants and engineers.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li>— Enterprise-scale IT, Cloud, Data & AI initiatives</li>
                <li>— Exposure to real consulting and delivery environments</li>
                <li>— Strong emphasis on learning and mentoring</li>
                <li>— Collaborative, respectful, and inclusive culture</li>
              </ul>
            </div>

            <img
              src={whyImg}
              alt="Consulting team collaboration"
              className="rounded-lg border border-slate-200 w-full"
            />
          </div>

          {/* WHAT YOU'LL WORK ON */}
          <div className="mb-20 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
            <img
              src={workImg}
              alt="IT and AI systems architecture"
              className="rounded-lg border border-slate-200 w-full"
            />

            <div>
              <h2 className="text-3xl font-medium mb-6">
                What You’ll Work On
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our teams support organizations as they modernize technology
                platforms, adopt data-driven approaches, and apply intelligent
                systems across their operations.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li>— Cloud platforms, infrastructure, and architecture</li>
                <li>— Data engineering, analytics, and reporting systems</li>
                <li>— AI and machine learning applications</li>
                <li>— Enterprise software development and integration</li>
              </ul>
            </div>
          </div>

          {/* APPLICATION FORM */}
          <div className="bg-white border border-slate-200 rounded-xl p-10 md:p-14 max-w-4xl">
            <h2 className="text-3xl font-medium mb-4">
              Submit Your Application
            </h2>
            <p className="text-slate-600 mb-10">
              We welcome applications from professionals interested in working
              across technology, consulting, and delivery roles.
            </p>

           <form className="space-y-6">
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">
      Full Name
    </label>
    <input
      type="text"
      required
      className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">
      Email Address
    </label>
    <input
      type="email"
      required
      className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">
      Role of Interest
    </label>
    <select
      required
      className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm bg-white"
    >
      <option value="">Select a role</option>
      <option>IT Consultant</option>
      <option>Cloud Architect</option>
      <option>Data Engineer</option>
      <option>AI / ML Engineer</option>
      <option>Business Analyst</option>
      <option>Other</option>
    </select>
  </div>

  {/* RESUME UPLOAD */}
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">
      Upload Resume (PDF / DOC)
    </label>
    <input
      type="file"
      accept=".pdf,.doc,.docx"
      required
      className="w-full text-sm"
    />
  </div>

  <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-md">
    Submit Application
  </button>
</form>

          </div>

        </div>
      </section>

      <footer className="text-center text-sm text-slate-500 pb-10">
        © 2025 SAAV Consulting. All rights reserved.
      </footer>

    </main>
  );
};

export default Careers;
