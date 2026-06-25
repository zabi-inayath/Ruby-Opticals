import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "Why Us", href: "#whyus" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  

  return (
    <div className={`fixed w-full z-50 transition-all duration-500 px-4 sm:px-8 ${scrolled ? "top-4" : "top-0"}`}>
      <nav className={`mx-auto w-full transition-all duration-500 ${
        scrolled 
          ? "max-w-6xl bg-white/95 backdrop-blur-md rounded-full shadow-[0_10px_30px_rgba(44,34,32,0.08)] py-2 px-6 sm:px-8 border border-white/60" 
          : "max-w-7xl bg-transparent border-b border-transparent py-6"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <img 
              src="/websitelogo.png" 
              alt="Ruby Opticals Logo" 
              className="w-36 h-auto object-contain rounded-xl transition-transform duration-300 shadow-md" 
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-lg group ${
                  scrolled
                    ? "text-slate-700 hover:text-ruby-700 hover:bg-slate-50"
                    : "text-white/95 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{l.label}</span>
                <span className="absolute bottom-1.5 left-4 right-4 h-[2px] bg-ruby-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href="#appointment"
              className={`ml-4 transition-all duration-300 shadow-sm hover:shadow-premium-glow hover:-translate-y-0.5 font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-xl ${
                scrolled
                  ? "bg-ruby-700 hover:bg-ruby-800 text-white"
                  : "bg-white text-navy-950 hover:bg-ruby-50"
              }`}
            >
              Book Eye Test
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-xl transition-all duration-300 text-ruby-600 hover:bg-ruby-50`}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden -z-10 fixed inset-x-0 top-0 pt-28 pb-8 bg-white/95 backdrop-blur-xl shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
      }`}>
        <div className="px-4 space-y-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-ruby-50 hover:text-ruby-700 transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-ruby-700 hover:bg-ruby-800 text-white font-bold text-sm tracking-wider uppercase py-4 rounded-xl shadow-md transition"
            >
              Book Eye Test
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

