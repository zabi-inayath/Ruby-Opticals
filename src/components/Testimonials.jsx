const testimonials = [
  {
    text: "Excellent service and professional guidance from the optometrist. He thoroughly checked my power and explained lens types.",
    name: "A. Rahman",
    date: "2 weeks ago",
    rating: 5,
  },
  {
    text: "Best optical store in Dindigul with genuine brands and outstanding after-sales alignment support. Been coming here for over 10 years.",
    name: "Rajesh Kumar",
    date: "1 month ago",
    rating: 5,
  },
  {
    text: "Very friendly team and precise computerised eye testing facilities. My whole family gets progressive glasses from here.",
    name: "Meenakshi S.",
    date: "3 months ago",
    rating: 5,
  },
  {
    text: "Mr. Khalif Ahamed is very knowledgeable. He helped me select high-index thin lenses for my high power. Superb service.",
    name: "Syed Ibrahim",
    date: "4 months ago",
    rating: 5,
  },
  {
    text: "Trusted by our family for three generations. The frame collections are premium and pricing is honest. Highly recommended.",
    name: "Ganesan P.",
    date: "6 months ago",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold-500 fill-gold-500" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle-premium">Client Testimonials</span>
          <h2 className="section-title-premium mt-2">
            Trusted by Generations
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mt-4 text-base sm:text-lg">
            Hear what our long-term clients say about three decades of clinical commitment and eyewear support.
          </p>

          {/* Upgraded Google Rating Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-50 border border-slate-200/80 rounded-3xl p-5 md:px-8 md:py-4 mt-8 shadow-sm">
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="text-left leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black text-navy-900">4.9</span>
                  <span className="text-xs text-slate-400 font-bold">/ 5.0</span>
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Google Review Rating</p>
              </div>
            </div>
            
            <div className="h-px w-8 sm:h-8 sm:w-px bg-slate-200" />

            <div className="flex items-center gap-2">
              <StarRating count={5} />
              <span className="text-xs text-slate-500 font-semibold">(180+ Reviews)</span>
            </div>

            <div className="h-px w-8 sm:h-8 sm:w-px bg-slate-200" />

            <a
              href="https://g.page/r/CRVAJMu96p0NEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ruby-700 font-bold hover:text-ruby-800 transition-colors uppercase tracking-wider flex items-center gap-1"
            >
              Write Review
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:border-ruby-200 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-5">
                  <StarRating count={t.rating} />
                  <span className="text-[10px] text-slate-400 font-semibold">{t.date}</span>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-ruby-50 border border-ruby-100 flex items-center justify-center text-ruby-700">
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-navy-900 flex items-center gap-1">
                    {t.name}
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708.522L4.5 7.07l-3.093.45a.75.75 0 00-.415 1.279l2.238 2.182-.528 3.08a.75.75 0 001.088.791L6 13.347l2.71 1.425a.75.75 0 001.088-.79l-.528-3.081 2.238-2.182a.75.75 0 00-.415-1.279l-3.093-.45L7.44 3.977a.75.75 0 00-.708-.522z" clipRule="evenodd"/>
                    </svg>
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom review CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://g.page/r/CRVAJMu96p0NEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium-outline shadow-sm"
          >
            Share Your Experience on Google
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

