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

            
          </div>

          {/* Right Block – Booking Form & Map (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            
            {/* Custom styled map frame */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-md h-[550px] relative">
              <iframe
                title="Ruby Opticals Location"
                src="https://www.google.com/maps?q=Ruby+Optical+Dindigul&output=embed"
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
