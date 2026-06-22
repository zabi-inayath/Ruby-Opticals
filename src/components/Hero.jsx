import heroImage from "../assets/hero_opticals.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32"
    >
      {/* Background gradient & ambient lighting */}
      <div className="absolute inset-0 bg-[#040712]" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-ruby-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-ruby-800/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-left space-y-8 animate-fade-in-up">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/10 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2.5 rounded-full shadow-glass-dark">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse-glow" />
              Established 1991 · Dindigul
            </div>

            {/* Main headings */}
            <div className="space-y-4">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[1.08] tracking-tight">
                Refined Vision.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ruby-400 via-ruby-500 to-gold-400 font-extrabold">
                  Trusted Care.
                </span>
              </h1>
              <p className="text-ruby-300 font-display italic text-lg sm:text-xl font-medium tracking-wide">
                "Clear Vision. Trusted Care Since 1991."
              </p>
            </div>

            {/* Paragraph description */}
            <p className="text-slate-400 max-w-xl text-base sm:text-lg leading-relaxed font-light">
              Over three decades of premium optometry expertise, designer eyewear collections, and personalized contact lens consultations — tailored to generations of families.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#appointment"
                className="btn-premium-primary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Eye Test
              </a>
              <a
                href="https://wa.me/918903684848"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-emerald-600/30 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Chat
              </a>
              <a
                href="#products"
                className="btn-premium-dark-outline group"
              >
                Explore Collections
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Stats list */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { num: "34+", label: "Years Trust" },
                { num: "10K+", label: "Clients Served" },
                { num: "13+", label: "Luxury Brands" },
              ].map((s) => (
                <div key={s.label} className="space-y-1">
                  <p className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{s.num}</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-none">{s.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 flex justify-center items-center relative animate-float-slow">
            
            {/* Visual Glassmorphic glow behind image */}
            <div className="absolute w-72 h-72 bg-ruby-700/20 rounded-full blur-[80px] -z-10" />
            
            {/* Main Image frame wrapper */}
            <div className="relative p-3 bg-white/5 backdrop-blur-sm border border-white/15 rounded-[32px] overflow-hidden shadow-2xl">
              
              {/* Overlay elements */}
              <div className="absolute top-6 left-6 z-20 glass-card-dark rounded-2xl px-4 py-3 border border-white/10 shadow-lg flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ruby-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ruby-500"></span>
                </span>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Premium Collections Available</span>
              </div>
              
              <div className="absolute bottom-6 right-6 z-20 glass-card-dark rounded-2xl px-4 py-3 border border-white/10 shadow-lg flex items-center gap-3">
                <div className="text-right">
                  <p className="text-[10px] text-white/50 leading-none">Optical Lenses by</p>
                  <p className="text-xs font-bold text-white">ZEISS, Essilor, Nikon</p>
                </div>
              </div>

              {/* Eyeglasses Image */}
              <img
                src={heroImage}
                alt="Premium designer eyewear"
                className="w-full max-w-[400px] h-auto object-cover rounded-[24px] shadow-inner"
              />
            </div>
            
          </div>
        </div>
      </div>

      {/* Scroll cue indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30 cursor-pointer group hover:text-white/60 transition-colors">
        <span className="text-[9px] font-bold tracking-[0.25em] uppercase">Scroll to Discover</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
