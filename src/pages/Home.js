import React from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '../assets/icons/app.svg';
import WebIcon from '../assets/icons/web.svg';
import AutoIcon from '../assets/icons/automation.svg';
import UiuxIcon from '../assets/icons/uiux.svg';
import CustomIcon from '../assets/icons/custom.svg';
import StartupIcon from '../assets/icons/startup.svg';
import FutureTree from '../components/FutureTree';
import TaglineIcon from '../components/TaglineIcon';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Full-bleed hero: uses full width but keeps a comfortable inner max width */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            {/* Mobile header: icon + headline in one row */}
            <div className="flex items-center gap-4 md:hidden">
              <TaglineIcon className="tagline-icon w-14 h-14 relative -ml-1" />
              <h1 className="tagline-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-teal-300 to-indigo-200 tagline-clamp">From Idea to App, We Make It Happen.</h1>
            </div>

            {/* Mobile description + full-width stacked CTAs */}
            <div className="mt-4 md:hidden">
              <p className="text-base text-slate-300">Product-minded engineering, human-centered design and scalable systems for startups and growing businesses. We'll help you move faster from prototype to production.</p>
              <div className="mt-4 h-1 w-24 rounded bg-gradient-to-r from-indigo-500 to-teal-400" aria-hidden></div>
              <div className="mt-6 flex gap-3">
                <Link to="/request" className="flex-1 text-center px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg font-semibold shadow">Request a Service</Link>
                <Link to="/services" className="flex-1 text-center px-6 py-3 border border-slate-700 rounded-lg text-slate-200">Explore Services</Link>
              </div>
            </div>

            {/* Desktop / larger screens: original grid layout */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-2 flex md:items-start justify-start">
                {/* nudge icon a bit lower and slightly left to sit below the headline baseline */}
                <TaglineIcon className="tagline-icon w-12 h-12 md:w-16 md:h-16 relative top-2 md:top-3 -ml-1 md:-ml-2" />
              </div>
              <div className="md:col-span-10">
                <h1 className="tagline-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-teal-300 to-indigo-200 whitespace-normal break-words tagline-clamp">From Idea to App, We Make It Happen.</h1>
                <p className="mt-3 text-base md:text-lg text-slate-300 max-w-xl">Product-minded engineering, human-centered design and scalable systems for startups and growing businesses. We'll help you move faster from prototype to production.</p>
                <div className="mt-4 h-1 w-24 rounded bg-gradient-to-r from-indigo-500 to-teal-400" aria-hidden></div>

                <div className="mt-6 flex gap-4">
                  <Link to="/request" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg font-semibold shadow">Request a Service</Link>
                  <Link to="/services" className="px-6 py-3 border border-slate-700 rounded-lg text-slate-200">Explore Services</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden">
            {/* Decorative future-tree placed behind hero. pointer-events-none and aria-hidden to avoid interaction */}
            <div className="absolute inset-0 pointer-events-none opacity-85 z-0">
              <FutureTree className="w-full h-full max-h-[420px] min-h-[220px]" />
            </div>
            <div className="relative z-10 w-full h-80 bg-transparent rounded-2xl shadow-2xl transform rotate-3 max-w-full origin-center"></div>
            <div className="absolute md:-bottom-6 md:-right-6 bottom-2 right-2 w-44 md:w-48 max-w-[45%] h-28 bg-slate-800 rounded-lg shadow p-4 flex flex-col justify-center">
              <span className="text-sm text-slate-400">Trusted by</span>
              <span className="font-semibold text-white">Startups & SMEs</span>
            </div>
          </div>
          </section>
        </div>
      </div>

      <main className="max-w-6xl mx-auto p-6">
        <section id="services" className="py-8">
          <h3 className="text-2xl font-bold text-white">What we build</h3>
          <p className="text-slate-300 mt-2">Focused on mobile, web, automation and custom solutions tailored for early stage and growing businesses.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="p-6 bg-slate-800 rounded-xl shadow hover:shadow-lg transition flex flex-col">
              <div className="flex items-center gap-4">
                <img src={AppIcon} alt="App" className="w-12 h-12" />
                <h4 className="font-semibold text-lg">App Development</h4>
              </div>
              <p className="mt-2 text-sm text-slate-300 flex-1">Native & cross-platform mobile apps, product-minded engineering and fast prototypes.</p>
            </article>
            <article className="p-6 bg-slate-800 rounded-xl shadow hover:shadow-lg transition flex flex-col">
              <div className="flex items-center gap-4">
                <img src={WebIcon} alt="Web" className="w-12 h-12" />
                <h4 className="font-semibold text-lg">Web Development</h4>
              </div>
              <p className="mt-2 text-sm text-slate-300 flex-1">Modern web apps, responsive UIs and server-side APIs with clean developer handoffs.</p>
            </article>
            <article className="p-6 bg-slate-800 rounded-xl shadow hover:shadow-lg transition flex flex-col">
              <div className="flex items-center gap-4">
                <img src={AutoIcon} alt="Automation" className="w-12 h-12" />
                <h4 className="font-semibold text-lg">Automation & Integrations</h4>
              </div>
              <p className="mt-2 text-sm text-slate-300 flex-1">Workflow automation, integrations and tooling that save time and reduce human error.</p>
            </article>
            <article className="p-6 bg-slate-800 rounded-xl shadow hover:shadow-lg transition flex flex-col">
              <div className="flex items-center gap-4">
                <img src={UiuxIcon} alt="UIUX" className="w-12 h-12" />
                <h4 className="font-semibold text-lg">UI / UX Design</h4>
              </div>
              <p className="mt-2 text-sm text-slate-300 flex-1">User-centered design, prototypes and design systems to accelerate development.</p>
            </article>
            <article className="p-6 bg-slate-800 rounded-xl shadow hover:shadow-lg transition flex flex-col">
              <div className="flex items-center gap-4">
                <img src={CustomIcon} alt="Custom" className="w-12 h-12" />
                <h4 className="font-semibold text-lg">Custom Software</h4>
              </div>
              <p className="mt-2 text-sm text-slate-300 flex-1">End-to-end systems, microservices and scalable architectures for growing products.</p>
            </article>
            <article className="p-6 bg-slate-800 rounded-xl shadow hover:shadow-lg transition flex flex-col">
              <div className="flex items-center gap-4">
                <img src={StartupIcon} alt="Startup" className="w-12 h-12" />
                <h4 className="font-semibold text-lg">Startup Support</h4>
              </div>
              <p className="mt-2 text-sm text-slate-300 flex-1">MVPs, technical strategy and hands-on engineering support for launching fast.</p>
            </article>
          </div>
        </section>

        <section className="py-12">
          <div className="bg-indigo-600 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="text-2xl font-bold">Ready to build something great?</h4>
              <p className="mt-2 text-indigo-100">Tell us about your project and we'll get back with a plan.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/request" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg font-semibold">Request a Service</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer is provided globally via the Footer component */}
    </div>
  );
}
