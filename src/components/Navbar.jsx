import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // DESKTOP STATES
  const [servicesOpenDesktop, setServicesOpenDesktop] = useState(false);
  const [companyOpenDesktop, setCompanyOpenDesktop] = useState(false);

  // MOBILE STATES
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const [companyOpenMobile, setCompanyOpenMobile] = useState(false);

  const closeTimeoutRef = useRef(null);

  /* ---------- DESKTOP HANDLERS ---------- */
  const openServicesDesktop = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setCompanyOpenDesktop(false);
    setServicesOpenDesktop(true);
  };

  const openCompanyDesktop = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesOpenDesktop(false);
    setCompanyOpenDesktop(true);
  };

  const closeDesktopMenu = (setter) => {
    closeTimeoutRef.current = setTimeout(() => {
      setter(false);
    }, 500);
  };

  /* ---------- MOBILE ---------- */
  const closeMobileMenu = () => {
    setIsOpen(false);
    setServicesOpenMobile(false);
    setCompanyOpenMobile(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO (BLUE — DO NOT CHANGE) */}
        <NavLink
          to="/"
          className="text-2xl font-semibold text-blue-500"
          onClick={closeMobileMenu}
        >
          SAAV.
        </NavLink>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-12 text-lg font-medium">

          {/* HOME */}
          <li className="relative group">
            <NavLink to="/" className="text-white">
              Home
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />
          </li>

          {/* SERVICES */}
          <li
            className="relative group"
            onMouseEnter={openServicesDesktop}
            onMouseLeave={() => closeDesktopMenu(setServicesOpenDesktop)}
          >
            <NavLink to="/industries" className="text-white">
              Services
            </NavLink>

            <span className="absolute -bottom-1 left-0 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />

            {servicesOpenDesktop && (
              <div
                className="absolute top-full left-0 mt-3 w-56 rounded-xl bg-[#020617] border border-white/10 shadow-2xl"
                onMouseEnter={openServicesDesktop}
                onMouseLeave={() => closeDesktopMenu(setServicesOpenDesktop)}
              >
                <NavLink to="/industries" className="block px-5 py-3 text-slate-200 hover:bg-white/5">
                  Industries
                </NavLink>
                <NavLink to="/capabilities" className="block px-5 py-3 text-slate-200 hover:bg-white/5">
                  Capabilities
                </NavLink>
              </div>
            )}
          </li>

          {/* COMPANY */}
          <li
            className="relative group"
            onMouseEnter={openCompanyDesktop}
            onMouseLeave={() => closeDesktopMenu(setCompanyOpenDesktop)}
          >
            <NavLink to="/ourcompany" className="text-white">
              Company
            </NavLink>

            <span className="absolute -bottom-1 left-0 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />

            {companyOpenDesktop && (
              <div
                className="absolute top-full left-0 mt-3 w-64 rounded-xl bg-[#020617] border border-white/10 shadow-2xl"
                onMouseEnter={openCompanyDesktop}
                onMouseLeave={() => closeDesktopMenu(setCompanyOpenDesktop)}
              >
                <NavLink to="/ourcompany#mission" className="block px-5 py-3 text-slate-200 hover:bg-white/5">
                  Our Mission
                </NavLink>
                <NavLink to="/ourcompany#approach" className="block px-5 py-3 text-slate-200 hover:bg-white/5">
                  Our Approach
                </NavLink>
                <NavLink to="/ourcompany#why" className="block px-5 py-3 text-slate-200 hover:bg-white/5">
                  Why Choose SAAV
                </NavLink>
              </div>
            )}
          </li>

          {/* CAREERS */}
          <li className="relative group">
            <NavLink to="/careers" className="text-white">
              Careers
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />
          </li>

          {/* CONTACT */}
          <li className="relative group">
            <NavLink to="/contact" className="text-white">
              Contact
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />
          </li>

        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#020617]/95 backdrop-blur-xl px-6 pb-6">
          <ul className="flex flex-col gap-6 text-lg font-medium text-white mt-4 text-left">

            <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>

            <button
              className="text-left"
              onClick={() => {
                setServicesOpenMobile(!servicesOpenMobile);
                setCompanyOpenMobile(false);
              }}
            >
              Services
            </button>

            {servicesOpenMobile && (
              <div className="ml-4 flex flex-col gap-3 text-slate-300">
                <NavLink to="/industries" onClick={closeMobileMenu}>Industries</NavLink>
                <NavLink to="/capabilities" onClick={closeMobileMenu}>Capabilities</NavLink>
              </div>
            )}

            <button
              className="text-left"
              onClick={() => {
                setCompanyOpenMobile(!companyOpenMobile);
                setServicesOpenMobile(false);
              }}
            >
              Company
            </button>

            {companyOpenMobile && (
              <div className="ml-4 flex flex-col gap-3 text-slate-300">
                <NavLink to="/ourcompany#mission" onClick={closeMobileMenu}>Our Mission</NavLink>
                <NavLink to="/ourcompany#approach" onClick={closeMobileMenu}>Our Approach</NavLink>
                <NavLink to="/ourcompany#why" onClick={closeMobileMenu}>Why Choose SAAV</NavLink>
              </div>
            )}

            <NavLink to="/careers" onClick={closeMobileMenu}>Careers</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>

          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
