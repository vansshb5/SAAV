const Contact = () => {
  return (
    <main className="bg-slate-50 text-slate-900">

      {/* PAGE INTRO */}
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Get in touch with SAAV. Consulting to discuss technology solutions,
            consulting engagements, or career opportunities. Our team will
            respond promptly.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* FORM */}
          <div className="bg-white border border-slate-200 rounded-xl p-10">
            <h2 className="text-2xl font-medium mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  required
                  className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-md transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-2xl font-medium mb-6">
              Contact Information
            </h2>

            <ul className="space-y-4 text-slate-600">
              <li>
                <strong>Email:</strong> contact@saavconsulting.com
              </li>
              <li>
                <strong>Careers:</strong> careers@saavconsulting.com
              </li>
              <li>
                <strong>Working Model:</strong> Remote & Client Locations
              </li>
            </ul>

            <p className="mt-8 text-slate-600 leading-relaxed">
              SAAV. Consulting works with organizations globally through a
              flexible engagement model, supporting both remote collaboration
              and on-site delivery when required.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Contact;
