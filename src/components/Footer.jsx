const Footer = () => {
  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-white tracking-wide">
            SAAV
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed">
            We help businesses transform through modern technology,
            scalable systems, and strategic engineering solutions.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">
            Company
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/ourcompany" className="hover:text-white transition">
                Our Company
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-white transition">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">
            Services
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/industries" className="hover:text-white transition">
                Industries
              </a>
            </li>
            <li>
              <a href="/capabilities" className="hover:text-white transition">
                Capabilities
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} SAAV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
