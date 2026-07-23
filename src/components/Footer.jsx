const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "Our Optometrist", href: "#optometrist" },
  { label: "Why Buy From Us", href: "#whyus" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ruby-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Brand block */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-ruby-700 flex items-center justify-center shadow-md">
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white">
                  <ellipse cx="16" cy="20" rx="12" ry="8" opacity="0.3"/>
                  <ellipse cx="16" cy="16" rx="10" ry="7"/>
                  <circle cx="16" cy="13" r="4" opacity="0.9"/>
                </svg>
              </div>
              <div className="leading-tight">
                <p className="font-display font-extrabold text-lg tracking-wide">Ruby <span className="text-ruby-500">Opticals</span></p>
                <p className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-bold">& Contact Lens Clinic</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Trusted by families across Dindigul since 1991. We combine clinical optometry with premium designer brands.
            </p>
            <p className="font-display italic text-ruby-400 text-sm">
              "Clear Vision. Trusted Care Since 1991."
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 border-b border-white/10 pb-2.5">
              Quick Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-ruby-400 transition-colors duration-300 font-medium flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ruby-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 border-b border-white/10 pb-2.5">
              Contact & Enquiries
            </p>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="space-y-1">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider">Address</p>
                <p className="leading-relaxed text-slate-300 font-medium">6-E, PNG Building, New Pensioner Street,<br />Dindigul, Tamil Nadu, India</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider">Phone</p>
                  <a href="tel:+918903684848" className="text-ruby-400 font-bold hover:underline">
                    +91 89036 84848
                  </a>
                </div>
                <div className="space-y-1">
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider">Email</p>
                  <a href="mailto:khalifu@gmail.com" className="text-ruby-400 font-bold hover:underline">
                    khalifu@gmail.com
                  </a>
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/5">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider">Clinic Hours</p>
                <p className="text-xs text-slate-300">Mon–Sat: 9:00 AM – 9:00 PM</p>
                <p className="text-xs text-gold-400 font-semibold">Sunday: 10:00 AM – 1:00 PM</p>
              </div>
            </div>

            {/* Quick WhatsApp contact link */}
            <a
              href="https://wa.me/918903684848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600/10 hover:bg-emerald-600 text-emerald-400 hover:text-white font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-xl transition-all duration-300 border border-emerald-500/20 hover:border-transparent"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Consultation
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-500 text-xs font-semibold">
            © {new Date().getFullYear()} Ruby Opticals & Contact Lens Clinic. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-slate-500 text-xs font-semibold">
            <p className="tracking-wider uppercase">
              Established 1991 · Dindigul, Tamil Nadu
            </p>
            <span className="hidden sm:inline text-white/20">|</span>
            <p>
              Developed by <a href="https://ilahtech.in" target="_blank" rel="noopener noreferrer" className="text-ruby-400 hover:text-ruby-300 hover:underline transition-colors font-bold">Ilah Technologies</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
