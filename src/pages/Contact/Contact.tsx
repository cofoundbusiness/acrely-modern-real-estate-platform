import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { ContactForm } from '../../features';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20 container mx-auto px-4 md:px-6 animate-fade-in bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="md:sticky md:top-32 order-2 md:order-1 animate-slide-in-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-6">
            Contact Us
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Let's start a <br /><span className="text-amber-500">conversation.</span></h1>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
            Whether you're looking to buy your dream home, sell a property, or invest in fractional ownership, our team is here to help you every step of the way.
          </p>
          
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-500/20 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-500 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Headquarters</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Chengalpattu, Chennai - 603001</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-500/20 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-500 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Email Us</h3>
                <a href="mailto:queries@acrely.in" className="text-slate-500 dark:text-slate-400 mt-1 block hover:text-amber-600 dark:hover:text-amber-500">queries@acrely.in</a>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Typical response time: 2 hours</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 animate-slide-up">
          <ContactForm className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Contact;