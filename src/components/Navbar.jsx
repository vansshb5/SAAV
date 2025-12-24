import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    
    { label: "Contact", to: "/contact" },
  ];

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
          onClick={() => setIsOpen(false)}
        >
          SAAV
        </NavLink>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-12 text-base lg:text-lg font-medium text-slate-200">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-white" : "text-slate-300"
                  } group-hover:text-white`
                }
              >
                {link.label}
              </NavLink>

              {/* underline animation */}
              <span
                className="
                  absolute -bottom-1 left-0 h-[2px]
                  bg-secondary
                  transition-all duration-300
                  w-0 group-hover:w-full
                "
              />
            </li>
          ))}
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
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block transition ${
                      isActive ? "text-secondary" : "text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
