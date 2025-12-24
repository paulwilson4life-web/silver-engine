import React from 'react';
import { Camera, Clock, Image, Zap, Users, CheckCircle2, Info, MapPin, ShieldCheck, Download, Send } from 'lucide-react';

const App = () => {
  // 1. CHANGE THIS TO YOUR ACTUAL WHATSAPP NUMBER (Include country code, no '+')
  const WHATSAPP_NUMBER = "2348165026344"; 

  const packages = [
    {
      id: "basic",
      name: "Basic Coverage",
      price: "100,000",
      duration: "Up to 2 hours",
      images: "50–60 edited images",
      turnaround: "72 hours",
      description: "Best for small team gatherings, meetings, and brief sessions.",
      icon: <Camera className="w-6 h-6" />,
      featured: false
    },
    {
      id: "standard",
      name: "Standard Coverage",
      price: "200,000",
      duration: "Up to 4 hours",
      images: "80–120 edited images",
      turnaround: "48–72 hours",
      description: "Best for corporate sessions, workshops, and internal events.",
      icon: <ShieldCheck className="w-6 h-6" />,
      featured: true
    },
    {
      id: "premium",
      name: "Premium Coverage",
      price: "320,000",
      duration: "6–8 hours",
      images: "150–200 edited images",
      turnaround: "48 hours",
      description: "Best for conferences, company-wide events, and multi-session programs.",
      icon: <Zap className="w-6 h-6" />,
      featured: false,
      extra: "Priority image selection"
    }
  ];

  const addons = [
    { label: "Express Delivery (24 hrs)", price: "30,000", icon: <Zap className="w-4 h-4" /> },
    { label: "Extra Hour", price: "40,000", icon: <Clock className="w-4 h-4" /> },
    { label: "Second Photographer", price: "100,000", icon: <Users className="w-4 h-4" /> },
  ];

  const handleBooking = (pkgName) => {
    const message = encodeURIComponent(
      `Heyy Jimi! 👋\n\nI'm interested in the *${pkgName}* package for an event on [date]. \n\nPlease let me know if you're available and how we can proceed.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
            <h2 className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
              Jimi Pixels Service Pricing Guide
            </h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Event Photography <span className="text-blue-600">Packages</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Professional corporate coverage tailored to capture your brand's most important moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                pkg.featured 
                ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10 border-4 border-blue-500/20' 
                : 'bg-white text-slate-900 shadow-xl hover:shadow-2xl border border-slate-100'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              
              <div className={`mb-6 p-3 rounded-2xl inline-block ${pkg.featured ? 'bg-blue-600' : 'bg-slate-100 text-blue-600'}`}>
                {pkg.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-sm font-semibold mr-1">₦</span>
                <span className="text-4xl font-extrabold">{pkg.price}</span>
              </div>
              
              <p className={`text-sm mb-8 leading-relaxed ${pkg.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                {pkg.description}
              </p>

              <div className="space-y-4 mb-8 flex-grow text-sm">
                <div className="flex items-center">
                  <Clock className={`w-4 h-4 mr-3 ${pkg.featured ? 'text-blue-400' : 'text-blue-600'}`} />
                  {pkg.duration}
                </div>
                <div className="flex items-center">
                  <Image className={`w-4 h-4 mr-3 ${pkg.featured ? 'text-blue-400' : 'text-blue-600'}`} />
                  {pkg.images}
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className={`w-4 h-4 mr-3 ${pkg.featured ? 'text-blue-400' : 'text-blue-600'}`} />
                  Online Gallery
                </div>
                <div className="flex items-center font-medium">
                  <Zap className={`w-4 h-4 mr-3 ${pkg.featured ? 'text-blue-400' : 'text-blue-600'}`} />
                  Turnaround: {pkg.turnaround}
                </div>
                {pkg.extra && (
                   <div className="flex items-center font-bold text-blue-400 pt-2 border-t border-slate-700/50 mt-2">
                    <CheckCircle2 className="w-4 h-4 mr-3" />
                    {pkg.extra}
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleBooking(pkg.name)}
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group mt-6 ${
                pkg.featured 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}>
                Book Package
                <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                <Info className="w-5 h-5" />
              </span>
              Optional Add-Ons
            </h4>
            <div className="space-y-4">
              {addons.map((addon, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center font-medium text-slate-700">
                    <span className="mr-3 text-blue-600">{addon.icon}</span>
                    {addon.label}
                  </div>
                  <div className="font-bold text-slate-900">₦{addon.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl shadow-lg text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              Important Information
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Rates may vary based on event scope, duration, and specific location requirements.</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="w-5 h-5 mr-3 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Booking is officially confirmed only upon receipt of the initial deposit.</span>
              </li>
              <li className="flex items-start">
                <Download className="w-5 h-5 mr-3 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">All final images are delivered via a secure online gallery in high-resolution digital format.</span>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Contact for Custom Quotes</p>
              <p className="text-blue-400 text-sm font-medium">Available for local and destination corporate assignments.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-slate-400 text-sm font-medium tracking-wide">
          © 2025 • Jimi Pixels • Professional Event Photography Services • Nigeria
        </div>
      </div>
    </div>
  );
};

export default App;
