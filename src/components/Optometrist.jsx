import profileImage from "../assets/optometrist_profile.png";

const expertise = [
  "Comprehensive Eye Examinations",
  "Computerised Vision Testing",
  "Prescription Eyewear Consultation",
  "Progressive Lens Consultation",
  "Occupational & Digital Eye Solutions",
  "Contact Lens Fitting and Training",
  "Frame Customization & Alignment",
  "Premium Ophthalmic Dispensing",
  "Children's Pediatric Eyecare",
  "Reliable After-Sales Servicing",
];

export default function Optometrist() {
  return (
    <section id="optometrist" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container */}
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-ruby-950 rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
          <div className="grid lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Image & Experience Badge */}
            <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full">
              {/* Profile Image */}
              <img
                src={profileImage}
                alt="Optometrist Mr. U. Khalif Ahamed"
                className="w-full h-full object-cover absolute inset-0 filter saturate-105"
              />
              {/* Dark overlay for text readability on top */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-950/20" />
              
              {/* Absolute Experience Badge */}
              <div className="absolute bottom-6 left-6 z-10 glass-card-dark rounded-2xl p-5 border border-white/10 shadow-lg">
                <p className="text-2xl font-extrabold text-gold-400">20+ Years</p>
                <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-0.5">Clinical Practice Experience</p>
              </div>
            </div>

            {/* Right Column: Profile details & Credentials */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-between space-y-8">
              
              {/* Profile Intro */}
              <div className="space-y-6">
                <div>
                  <span className="text-gold-400 font-bold text-xs tracking-[0.25em] uppercase">
                    Clinical Director
                  </span>
                  <h2 className="font-display text-3xl md:text-4.5xl font-black text-white mt-2 leading-tight">
                    Professional Eye Care By Qualified Optometrists
                  </h2>
                </div>

                <div className="border-l-2 border-ruby-600 pl-5 py-1">
                  <h3 className="text-white font-bold text-lg leading-tight">Mr. U. Khalif Ahamed</h3>
                  <p className="text-slate-400 text-xs mt-0.5">B.Sc. Optometry (Clinical Lead & Consultant Optometrist)</p>
                </div>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                  Following the founding principles established in 1991 by Haji S. Usman, Mr. Khalif leads Ruby Opticals with professional clinical excellence, combining correct focal length verification with state-of-the-art dispensing technology.
                </p>

                <blockquote className="border-l border-gold-400/50 pl-4 py-0.5">
                  <p className="text-slate-300 italic text-sm leading-relaxed">
                    "Eyesight is precious. We verify each prescription, verify fitting pupillary parameters, and dispense correct lens coatings matching daily screen usage requirements."
                  </p>
                </blockquote>
              </div>

              {/* Areas of Expertise */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest text-gold-400">Clinical Focus Areas</h4>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {expertise.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-ruby-950 border border-ruby-900 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-ruby-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-slate-300 text-xs sm:text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Booking Link */}
              <div className="pt-6">
                <a
                  href="#appointment"
                  className="btn-premium-gold shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Clinical Eye Test
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

