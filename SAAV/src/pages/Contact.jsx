const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#020617] text-slate-300 pt-32 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg leading-relaxed text-slate-400">
            We’d be happy to discuss your challenges, answer questions, or explore
            how we can work together.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* FORM */}
          <form className="space-y-8">

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-secondary transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-secondary transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full bg-transparent border-b border-white/20 py-3 text-white resize-none focus:outline-none focus:border-secondary transition"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-black font-medium rounded hover:opacity-90 transition"
            >
              Send Message →
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="space-y-10">

            <div>
              <h3 className="text-white font-semibold mb-2">
                Email
              </h3>
              <p className="text-slate-400">
                contact@saav.com
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">
                Office
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Toranto, Canada<br />
                Serving clients globally
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">
                Working Hours
              </h3>
              <p className="text-slate-400">
                Monday – Friday<br />
                9:00 AM – 6:00 PM CAT
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
