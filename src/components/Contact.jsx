import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const services = [
    "Eye Examination", "Computerized Eye Testing", "Contact Lens Consultation",
    "Progressive Lens Consultation", "Frame Selection", "Frame Repair",
    "Prescription Eyewear", "Other",
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Appointment Request – Ruby Opticals*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Email:* ${form.email || "Not provided"}%0A*Service:* ${form.service}%0A*Message:* ${form.message || "None"}`;
    window.open(`https://wa.me/918903684848?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="section-subtitle-premium">Get In Touch</span>
          <h2 className="section-title-premium mt-2">
            Book an Appointment
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mt-4 text-base sm:text-lg">
            Schedule your professional vision test or eyewear consultation. Walk-ins are always welcome.
          </p>
        </div>

        <div id="appointment" className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Block – Contact details (5 columns on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visit card */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-glass-light p-8">
              <h3 className="font-display font-extrabold text-navy-900 text-lg mb-6">Visit Our Store</h3>
              <div className="space-y-6">
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-ruby-50 border border-ruby-100 rounded-xl flex items-center justify-center text-ruby-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Clinic Address</p>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      6-E, PNG Building, New Pensioner Street,<br />
                      Dindigul, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-ruby-50 border border-ruby-100 rounded-xl flex items-center justify-center text-ruby-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Telephone</p>
                    <a href="tel:+918903684848" className="text-base text-ruby-700 font-bold hover:underline leading-none">
                      +91 89036 84848
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-ruby-50 border border-ruby-100 rounded-xl flex items-center justify-center text-ruby-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email Enquiry</p>
                    <a href="mailto:khalifu@gmail.com" className="text-sm text-ruby-700 font-bold hover:underline leading-none">
                      khalifu@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Timings card */}
            <div className="bg-navy-950 text-white rounded-3xl p-8 border border-white/5 relative overflow-hidden shadow-xl">
              <div className="absolute top-[-30%] right-[-30%] w-56 h-56 bg-ruby-700/10 rounded-full blur-[60px]" />
              
              <p className="text-gold-400 font-bold text-xs tracking-[0.2em] uppercase mb-5">Working Timings</p>
              <div className="space-y-4 text-sm font-medium">
                <div className="flex justify-between">
                  <span className="text-slate-400">Monday – Saturday</span>
                  <span className="font-bold">9:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-3.5">
                  <span className="text-slate-400">Sunday</span>
                  <span className="font-bold text-gold-400">10:00 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-3.5">
                  <span className="text-slate-400">Public Holidays</span>
                  <span className="text-ruby-400 font-bold">Call to confirm</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918903684848"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-3xl p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">Chat on WhatsApp</p>
                <p className="text-emerald-100 text-xs mt-0.5 leading-none">Quick appointments & general inquiries</p>
              </div>
              <svg className="w-4 h-4 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Block – Booking Form & Map (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Form */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-glass-light p-8">
              <h3 className="font-display font-extrabold text-navy-900 text-xl mb-1">Book Eye Test / Inquiry</h3>
              <p className="text-slate-500 text-sm mb-8 font-medium">Fill in your information and we will verify via WhatsApp instantly.</p>

              {sent && (
                <div className="mb-6 bg-emerald-50 border border-emerald-150 text-emerald-900 text-sm font-semibold rounded-2xl px-5 py-4 flex items-center gap-3.5 shadow-sm">
                  <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                  Your details have been compiled and sent via WhatsApp successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full border border-slate-200/80 bg-slate-50 rounded-2xl px-5 py-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-ruby-500 focus:ring-2 focus:ring-ruby-100 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number *</label>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 XXXXX XXXXX"
                      className="w-full border border-slate-200/80 bg-slate-50 rounded-2xl px-5 py-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-ruby-500 focus:ring-2 focus:ring-ruby-100 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address (optional)</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. mail@example.com"
                    className="w-full border border-slate-200/80 bg-slate-50 rounded-2xl px-5 py-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-ruby-500 focus:ring-2 focus:ring-ruby-100 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service Required *</label>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-slate-200/80 bg-slate-50 rounded-2xl px-5 py-4 text-sm text-slate-800 focus:outline-none focus:bg-white focus:border-ruby-500 focus:ring-2 focus:ring-ruby-100 transition-all duration-300"
                  >
                    <option value="">Select a clinical service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message (optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific requests or power info..."
                    className="w-full border border-slate-200/80 bg-slate-50 rounded-2xl px-5 py-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-ruby-500 focus:ring-2 focus:ring-ruby-100 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ruby-700 hover:bg-ruby-800 text-white font-bold tracking-wider uppercase py-4.5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5 text-sm shadow-md hover:shadow-premium-glow hover:-translate-y-0.5 active:translate-y-0"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Confirm Appointment via WhatsApp
                </button>

                <p className="text-slate-400 text-center text-xs font-semibold leading-relaxed">
                  Your inputs will be safely structured and sent to Mr. Khalif Ahamed immediately.
                </p>
              </form>
            </div>

            {/* Custom styled map frame */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-md h-[250px] relative">
              <iframe
                title="Ruby Opticals Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.62!2d77.9771!3d10.3595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9da9eb7dcb240115!2sRuby+Opticals!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
