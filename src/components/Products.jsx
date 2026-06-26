import { useState } from "react";

const categories = [
  {
    id: "frames",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.5a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm10 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 12.5h3m-11 0v-2.5a2 2 0 0 1 2-2h2m14 4.5v-2.5a2 2 0 0 0-2-2h-2" />
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.5 14C2.5 16.5 4 18 6.5 18S11 15.5 11 13V11H2.5v3Z" fill="currentColor" fillOpacity="0.2"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.5 14c0 2.5-1.5 4-4.5 4S13 15.5 13 13v-2h8.5v3Z" fill="currentColor" fillOpacity="0.2"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 12h2m-10.5-1v-1a2 2 0 0 1 2-2h2m15 3v-1a2 2 0 0 0-2-2h-2" />
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.5 10.5C5.5 17 18.5 17 20.5 10.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.5 10.5C8 12.5 16 12.5 20.5 10.5" fill="currentColor" fillOpacity="0.1" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 14L9 15M13.5 14l1.5 1" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v2m0 12v2" />
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
        <rect x="2" y="4" width="20" height="13" rx="2" strokeWidth={1.5}/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17v3m8-3v3M4 20h16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 11h2m-6 0v-.5a1 1 0 0 1 1-1h.5m8.5 1.5v-.5a1 1 0 0 0-1-1H15" />
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v15H6.5a2.5 2.5 0 0 0 0 5H20" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11h2m-6 0v-.5a1 1 0 0 1 1-1h.5m8.5 1.5v-.5a1 1 0 0 0-1-1H14" />
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 14a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0zm11 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 13.5h4m-11 0v-2a2 2 0 0 1 2-2h1.5m13.5 4v-2a2 2 0 0 0-2-2H16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 4l1 2 2 .5-1.5 1.5.5 2-2-1-2 1 .5-2L15 6.5 17 6l1-2z" fill="currentColor"/>
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

