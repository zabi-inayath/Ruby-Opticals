import { useState } from "react";

const categories = [
  {
    id: "frames",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
    ),
    title: "Eyeglass Frames",
    desc: "Find your perfect look from lightweight titanium, rimless designs, and premium designer collections.",
    items: ["Metal Frames", "Full Rim Frames", "Half Rim Frames", "Rimless Frames", "Titanium Frames", "Premium Designer Frames"],
    color: "ruby",
  },
  {
    id: "sunglasses",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" strokeWidth={1.5}/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
      </svg>
    ),
    title: "Sunglasses",
    desc: "Combine absolute UV protection with premium fashion — available in prescription and sports variants.",
    items: ["Polarized Sunglasses", "UV Protection", "Fashion Sunglasses", "Prescription Sunglasses", "Sports Sunglasses"],
    color: "amber",
  },
  {
    id: "contact-lenses",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"/>
        <circle cx="12" cy="12" r="3" strokeWidth={1.5}/>
      </svg>
    ),
    title: "Contact Lenses",
    desc: "Premium daily, monthly, toric, and multifocal contact lenses fitted professionally.",
    items: ["Daily Disposable", "Monthly Disposable", "Toric Lenses", "Multifocal Lenses", "Colored Lenses"],
    color: "blue",
  },
  {
    id: "computer-glasses",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="6" width="20" height="12" rx="2" strokeWidth={1.5}/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
      </svg>
    ),
    title: "Computer Glasses",
    desc: "Relieve digital eye strain with blue light filtering and advanced anti-fatigue coatings.",
    items: ["Blue Light Protection", "Anti-Fatigue Lenses", "Digital Screen Protection"],
    color: "indigo",
  },
  {
    id: "reading-glasses",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    title: "Reading Glasses",
    desc: "Single-vision or progressive lens options customized specifically for your reading distances.",
    items: ["Single Vision Reading", "Customized Prescription Reading"],
    color: "green",
  },
  {
    id: "kids-glasses",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Kids Glasses",
    desc: "Extremely durable, flexible, and lightweight frames designed to stay comfortable all day.",
    items: ["Flexible Frames", "Lightweight Frames", "Durable Children's Eyewear"],
    color: "pink",
  },
];

const colorMap = {
  ruby:   { bg: "bg-ruby-50 text-ruby-700 border-ruby-100",   badge: "bg-ruby-50 text-ruby-800 border-ruby-100" },
  amber:  { bg: "bg-amber-50 text-amber-700 border-amber-100",  badge: "bg-amber-50 text-amber-800 border-amber-100" },
  blue:   { bg: "bg-blue-50 text-blue-700 border-blue-100",   badge: "bg-blue-50 text-blue-800 border-blue-100" },
  indigo: { bg: "bg-indigo-50 text-indigo-700 border-indigo-100", badge: "bg-indigo-50 text-indigo-800 border-indigo-100" },
  green:  { bg: "bg-green-50 text-green-700 border-green-100",  badge: "bg-green-50 text-green-800 border-green-100" },
  pink:   { bg: "bg-pink-50 text-pink-700 border-pink-100",   badge: "bg-pink-50 text-pink-800 border-pink-100" },
};

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCategories = activeFilter === "all"
    ? categories
    : categories.filter(c => c.id === activeFilter);

  return (
    <section id="products" className="py-24 md:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle-premium">Our Collection</span>
          <h2 className="section-title-premium mt-2">
            Products We Offer
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mt-4 text-base sm:text-lg">
            From everyday digital screen protection to bespoke designer spectacles, find your perfect vision match.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-navy-950 text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeFilter === cat.id
                  ? "bg-ruby-700 text-white shadow-md shadow-premium-glow"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat) => {
            const colors = colorMap[cat.color];
            return (
              <div
                key={cat.title}
                className="bg-white rounded-3xl border border-slate-100 shadow-glass-light hover:shadow-lg transition-all duration-300 p-8 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Icon Block */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 transition-transform duration-500 group-hover:rotate-6 ${colors.bg}`}>
                    {cat.icon}
                  </div>
                  
                  {/* Category Title */}
                  <h3 className="font-display font-extrabold text-xl text-navy-900 mb-3">
                    {cat.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                    {cat.desc}
                  </p>
                </div>

                {/* Sub items / tags */}
                <div className="space-y-4">
                  <div className="h-px bg-slate-100 w-full" />
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg border tracking-wide transition-colors ${colors.badge}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

