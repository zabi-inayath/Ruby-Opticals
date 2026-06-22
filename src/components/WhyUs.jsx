const reasons = [
  {
    num: "01",
    title: "Clinical Accuracy First",
    desc: "Every single prescription is physically verified and dispense parameters measured by an optometrist rather than automated online assumptions.",
  },
  {
    num: "02",
    title: "Precision Parameters",
    desc: "We measure optical centers, vertex distances, pantoscopic tilt, and fitting heights for perfect alignment and visual comfort.",
  },
  {
    num: "03",
    title: "Tailored Consultations",
    desc: "Lenses recommended based on screen time, workspace positioning, high-glare driving, and lifestyle compatibility.",
  },
  {
    num: "04",
    title: "Try & Feel In-Store",
    desc: "Physically verify frame weights, temple lengths, bridge sizing, and receive professional cosmetic recommendations.",
  },
  {
    num: "05",
    title: "Authentic Distributors",
    desc: "100% verified authentic frames and lenses sourced from authorized supply lines with official manufacturer warranty.",
  },
  {
    num: "06",
    title: "Instant Alignments",
    desc: "Need loose nose-pads replaced or frames aligned? Walk in for on-the-spot adjustments, cleanings, and maintenance.",
  },
  {
    num: "07",
    title: "Generational Care",
    desc: "Generations of families in Dindigul rely on Ruby Opticals because we prioritize long-term vision checkups and honest care.",
  },
  {
    num: "08",
    title: "After-Sales Services",
    desc: "Full assistance for coating complaints, lens replacements, and general adjustments, ensuring peace of mind long after sale.",
  },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="py-24 md:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="section-subtitle-premium">The Ruby Advantage</span>
          <h2 className="section-title-premium mt-2">
            Why Choose Ruby Opticals?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
            Eyewear is a personalized medical device. Professional optometry checks outperform online retail models.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((r) => (
            <div
              key={r.num}
              className="bg-white rounded-3xl border border-slate-100 p-8 shadow-glass-light hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-ruby-600 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Pillar Number */}
              <p className="font-display text-5xl font-black text-ruby-100 group-hover:text-ruby-200 transition-colors duration-300 mb-4">
                {r.num}
              </p>
              
              {/* Pillar Title */}
              <h3 className="font-display font-extrabold text-navy-900 text-base leading-snug mb-3">
                {r.title}
              </h3>
              
              {/* Pillar Description */}
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic bottom callout banner */}
        <div className="mt-16 bg-white border border-slate-200/80 rounded-[32px] p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ruby-50/20 to-transparent pointer-events-none" />
          
          <div className="text-center mb-8 relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-navy-900">
              The Professional Distinction
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Clinical precision that internet retail models cannot emulate.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {[
              "Professional Eye Examinations", "Accurate Focal Measurements", 
              "Verified Prescription Lenses", "Authorized Brand Stockist", 
              "Personalized Lifestyle Fittings", "On-the-spot Alignments", 
              "Full Warranty Protection", "Trusted Care Since 1991"
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 bg-ruby-50 text-ruby-900 text-xs font-bold uppercase tracking-wider px-4.5 py-2.5 rounded-xl border border-ruby-100/50 shadow-sm hover:border-ruby-200 transition-all cursor-default"
              >
                <svg className="w-3.5 h-3.5 text-ruby-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
          
          <p className="text-center mt-10 font-display italic text-ruby-800 text-lg md:text-xl font-medium relative z-10">
            "Because Better Vision Deserves Better Clinical Care."
          </p>
        </div>

      </div>
    </section>
  );
}

