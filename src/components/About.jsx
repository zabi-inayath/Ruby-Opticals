const whyUsList = [
  "More than 34 years of trusted service",
  "Qualified optometry & dispensing expertise",
  "Personalized eyewear consultation",
  "Wide range of premium international brands",
  "Genuine lenses from leading manufacturers",
  "One-year warranty against manufacturing defects",
  "Professional after-sales service",
  "Customer-focused long-term care",
];

const timelineMilestones = [
  {
    year: "1991",
    title: "Foundation of Trust",
    desc: "Established by Haji S. Usman with a vision to deliver premium optical care to the families of Dindigul.",
  },
  {
    year: "2011",
    title: "Next Gen Expertise",
    desc: "Managed by Mr. U. Khalif Ahamed, B.Sc. Optometry, introducing computerised vision testing and premium global brands.",
  },
  {
    year: "Present",
    title: "Three Generations of Care",
    desc: "Recognized as a leading multi-generational eye clinic, serving thousands of loyal families across Tamil Nadu.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-ruby-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-navy-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="section-subtitle-premium">Our Legacy</span>
          <h2 className="section-title-premium mt-2">
            Three Decades of Clear Vision
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
            Since 1991, Ruby Opticals has stood for authenticity, personalized care, and top-tier eyewear brands.
          </p>
        </div>

        {/* Narrative & Timeline Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Narrative and Timeline */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Story text */}
            <div className="relative pl-6 border-l-2 border-ruby-700 space-y-6">
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Founded in <strong className="text-navy-900 font-bold">1991</strong> by{" "}
                <span className="text-navy-900 font-semibold">Haji S. Usman</span>, Ruby Opticals & Contact Lens Clinic
                embarked on a journey to provide Dindigul with optical precision.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Today, under the clinical management of{" "}
                <strong className="text-ruby-800 font-bold">Mr. U. Khalif Ahamed, B.Sc. Optometry</strong>, we combine
                clinical optometric precision with high-end designer eyewear.
              </p>
            </div>

            {/* Historic Timeline */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-extrabold text-navy-900 mb-6">Our Journey</h3>
              <div className="relative border-l border-slate-200 ml-4 pl-8 space-y-8">
                {timelineMilestones.map((m) => (
                  <div key={m.year} className="relative timeline-item">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[40px] top-1.5 timeline-dot" />
                    <div>
                      <span className="inline-block text-xs font-bold text-ruby-700 bg-ruby-50 px-2.5 py-1 rounded-full uppercase tracking-wider mb-1">
                        {m.year}
                      </span>
                      <h4 className="font-semibold text-navy-900 text-base">{m.title}</h4>
                      <p className="text-slate-500 text-sm mt-1 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="bg-slate-50 border-l-4 border-ruby-700 rounded-r-2xl p-6 shadow-sm">
              <p className="font-display italic text-slate-700 text-lg leading-relaxed">
                "Our philosophy is simple: vision is a personal journey. We do not just dispense spectacles; we listen, evaluate, and tailor solutions that enhance how you experience the world."
              </p>
              <footer className="mt-4 text-xs font-bold uppercase tracking-widest text-ruby-700">
                — U. Khalif Ahamed, Optometrist
              </footer>
            </div>

          </div>

          {/* Right Block: Why Us & Working Hours */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Why Us Cards */}
            <div className="glass-card-light rounded-3xl p-8 border border-slate-100">
              <h3 className="font-display text-2xl font-extrabold text-navy-900 mb-6">
                Why Us?
              </h3>
              <ul className="space-y-4">
                {whyUsList.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-ruby-50 border border-ruby-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-ruby-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-slate-700 text-sm sm:text-base leading-snug font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modern Hours Card */}
            <div className="bg-navy-950 text-white rounded-3xl p-8 border border-white/5 relative overflow-hidden shadow-xl">
              <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-ruby-700/10 rounded-full blur-3xl pointer-events-none" />
              
              <p className="text-gold-400 font-bold text-xs tracking-[0.2em] uppercase mb-5">
                Working Hours
              </p>
              
              <div className="space-y-4 text-sm font-medium">
                <div className="flex justify-between items-center border-b border-white/10 pb-3.5">
                  <span className="text-slate-400">Monday – Saturday</span>
                  <span className="font-bold text-white">9:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3.5">
                  <span className="text-slate-400">Sunday</span>
                  <span className="font-bold text-gold-400">10:00 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Public Holidays</span>
                  <span className="text-ruby-400 font-bold bg-ruby-950/50 px-3 py-1 rounded-lg border border-ruby-900/30">
                    Call to confirm
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

