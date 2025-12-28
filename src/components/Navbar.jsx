import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Hover handlers with delay ---
  const openServices = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const closeServicesWithDelay = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 1200); // 1.2 seconds delay
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-[#020617]/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }
        ${mounted ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <NavLink
          to="/"
          className="text-2xl font-semibold tracking-wide text-white transition hover:opacity-80"
          onClick={() => {
            setIsOpen(false);
            setServicesOpen(false);
          }}
        >
          SAAV
        </NavLink>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-12 text-base lg:text-lg font-medium text-slate-200">

          {/* Home */}
          <li className="relative group">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive ? "text-white" : "text-slate-300"
                } group-hover:text-white`
              }
            >
              Home
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] bg-secondary w-0 group-hover:w-full transition-all" />
          </li>

    {/* OUR SERVICES (DELAYED + UNDERLINE FIXED) */}
<li
  className="relative group cursor-pointer"
  onMouseEnter={openServices}
  onMouseLeave={closeServicesWithDelay}
>
  <span className="text-slate-300 group-hover:text-white transition-colors">
    Our Services
  </span>

  {/* underline animation */}
  <span
    className="
      absolute -bottom-1 left-0 h-[2px] bg-secondary
      w-0 group-hover:w-full
      transition-all duration-300
    "
  />

  {/* Dropdown */}
  {servicesOpen && (
    <div
      className="absolute left-0 top-full mt-4 w-56
                 rounded-md bg-[#020617]
                 border border-white/10 shadow-xl"
      onMouseEnter={openServices}
      onMouseLeave={closeServicesWithDelay}
    >
      <NavLink
        to="/industries"
        className="block px-5 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
      >
        Industries
      </NavLink>
      <NavLink
        to="/capabilities"
        className="block px-5 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
      >
        Capabilities
      </NavLink>
    </div>
  )}
</li>

          {/* OUR COMPANY */}
          <li className="relative group">
            <NavLink
              to="/ourcompany"
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive ? "text-white" : "text-slate-300"
                } group-hover:text-white`
              }
            >
              Our Company
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] bg-secondary w-0 group-hover:w-full transition-all" />
          </li>

          {/* CONTACT */}
          <li className="relative group">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive ? "text-white" : "text-slate-300"
                } group-hover:text-white`
              }
            >
              Contact
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] bg-secondary w-0 group-hover:w-full transition-all" />
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#020617]/95 backdrop-blur-xl px-6 pb-6">
          <ul className="flex flex-col gap-6 text-white text-lg font-medium mt-4">

            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>

            <button
              className="text-left"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Our Services
            </button>

            {servicesOpen && (
              <div className="ml-4 flex flex-col gap-4 text-base text-slate-300">
                <NavLink to="/industries" onClick={() => setIsOpen(false)}>
                  Industries
                </NavLink>
                <NavLink to="/capabilities" onClick={() => setIsOpen(false)}>
                  Capabilities
                </NavLink>
              </div>
            )}

            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              Our Company
            </NavLink>

            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
