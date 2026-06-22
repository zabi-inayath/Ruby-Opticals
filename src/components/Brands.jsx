const frameBrands = [
  "Ray-Ban", "Oakley", "Boss", "Silhouette", "MontBlanc",
  "Carrera", "Tommy Hilfiger", "Calvin Klein", "David Beckham",
  "Vogue Eyewear", "Fossil", "Puma", "Lacoste",
];

const lensBrands = ["ZEISS", "Essilor", "Nikon", "Hoya", "Nova"];

const contactBrands = ["Bausch + Lomb", "Alcon", "Johnson & Johnson", "CooperVision"];

export default function Brands() {
  return (
    <section id="brands" className="py-24 md:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle-premium">Authorized Partner</span>
          <h2 className="section-title-premium mt-2">
            Premium Brands Available
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mt-4 text-base sm:text-lg">
            We source directly from certified distributors, guaranteeing authenticity and full manufacturing support.
          </p>
        </div>

        {/* Frames & Sunglasses */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              Designer Frames & Sunglasses
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {frameBrands.map((b) => (
              <div
                key={b}
                className="bg-white border border-slate-200/80 text-navy-950 font-bold text-sm tracking-wide uppercase px-6 py-4 rounded-2xl shadow-sm hover:border-ruby-300 hover:shadow-premium-glow hover:-translate-y-0.5 transition-all duration-300 text-center flex items-center justify-center min-h-[64px]"
              >
                {b}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Lens Brands */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-glass-light flex flex-col justify-between group hover:shadow-md transition-shadow duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-ruby-50 border border-ruby-100 rounded-xl flex items-center justify-center text-ruby-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeWidth={1.5}/>
                    <circle cx="12" cy="12" r="4" strokeWidth={1.5}/>
                  </svg>
                </div>
                <h3 className="font-display font-extrabold text-lg text-navy-900 tracking-wide">Ophthalmic Lenses</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {lensBrands.map((b) => (
                  <span
                    key={b}
                    className="bg-slate-50 text-slate-800 font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-xl border border-slate-100 transition-colors group-hover:border-ruby-200"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="mt-8 text-xs text-slate-500 leading-relaxed font-medium">
              We prescribe optical lenses featuring anti-reflective, blue-cut, and smart tint coatings, sourced from globally certified laboratories.
            </p>
          </div>

          {/* Contact Lens Brands */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-glass-light flex flex-col justify-between group hover:shadow-md transition-shadow duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"/>
                    <circle cx="12" cy="12" r="3" strokeWidth={1.5}/>
                  </svg>
                </div>
                <h3 className="font-display font-extrabold text-lg text-navy-900 tracking-wide">Contact Lenses</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {contactBrands.map((b) => (
                  <span
                    key={b}
                    className="bg-slate-50 text-slate-800 font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-xl border border-slate-100 transition-colors group-hover:border-blue-200"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="mt-8 text-xs text-slate-500 leading-relaxed font-medium">
              Daily and monthly disposables, toric fits for astigmatism, and custom cosmetic lenses, maintained at temperature-controlled clinic rooms.
            </p>
          </div>
        </div>

        {/* Genuine products checknote banner */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-800 font-bold bg-emerald-50 border border-emerald-100 px-6 py-3 rounded-full shadow-sm">
            <svg className="w-4.5 h-4.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Authorized stockist for 100% genuine frames, contact lenses, and prescription coatings.
          </p>
        </div>

      </div>
    </section>
  );
}

