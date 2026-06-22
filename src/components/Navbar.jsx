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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-glass-light py-3 border-b border-slate-100"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled ? "bg-ruby-700 shadow-md rotate-3 group-hover:rotate-12" : "bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20"
            }`}>
              <svg viewBox="0 0 32 32" className={`w-6 h-6 transition-colors duration-300 ${scrolled ? "fill-white" : "fill-ruby-400"}`} aria-hidden="true">
                <ellipse cx="16" cy="20" rx="12" ry="8" opacity="0.3"/>
                <ellipse cx="16" cy="16" rx="10" ry="7"/>
                <circle cx="16" cy="13" r="4" opacity="0.9"/>
              </svg>
            </div>
            <div className="leading-tight">
              <span className={`font-display font-extrabold text-xl tracking-wide transition-colors ${
                scrolled ? "text-navy-900" : "text-white"
              }`}>
                Ruby <span className="text-ruby-600">Opticals</span>
              </span>
              <p className={`text-[9px] font-bold tracking-[0.25em] uppercase transition-colors ${
                scrolled ? "text-slate-500" : "text-ruby-200"
              }`}>
                & Contact Lens Clinic
              </p>
            </div>
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
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
              scrolled
                ? "text-navy-900 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
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
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl transition-all duration-300 ease-in-out ${
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}>
        <div className="px-4 py-6 space-y-2">
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
    </nav>
  );
}

