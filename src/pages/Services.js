import React from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '../assets/icons/app.svg';
import WebIcon from '../assets/icons/web.svg';
import AutoIcon from '../assets/icons/automation.svg';
import UiuxIcon from '../assets/icons/uiux.svg';
import CustomIcon from '../assets/icons/custom.svg';
import StartupIcon from '../assets/icons/startup.svg';

export default function Services() {
  const services = [
  { title: 'App Development', desc: "We build mobile apps people actually enjoy using for iPhone and Android. We work with native technologies (Swift for iOS, Kotlin/Java for Android) or cross-platform tools (React Native, Flutter) depending on what fits your product.", icon: AppIcon },
    { title: 'Web Development', desc: "Beautiful, fast websites and web apps that work on any device. We use modern frontends (React, Next.js) and reliable backends (Node, Java/Spring, or Python) with REST or GraphQL APIs.", icon: WebIcon },
  { title: 'Automation', desc: "We automate repetitive tasks so your team can focus on customers. This includes integrations, workflows and CI/CD (GitHub Actions, Zapier, APIs) to make work smoother.", icon: AutoIcon },
  { title: 'UI / UX', desc: "We design interfaces that are simple and easy to use. We create wireframes, interactive prototypes and design systems in Figma to ensure a consistent, delightful experience.", icon: UiuxIcon },
  { title: 'Custom Software', desc: "We build custom systems and tools tailored to your business. Typical solutions include microservices, databases and cloud deployments (Java/Spring Boot, Node, Python; PostgreSQL; AWS/GCP).", icon: CustomIcon },
  { title: 'Startup Support', desc: "Fast, practical help to get you to launch. We provide MVPs, architecture guidance and hands-on engineering or hiring support.", icon: StartupIcon }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto p-6">
  <h2 className="text-3xl font-bold mb-6 text-white">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 bg-slate-800 rounded-xl shadow flex flex-col">
              <div className="flex items-center gap-4">
                <img src={s.icon} alt="" className="w-12 h-12" />
                <h3 className="font-semibold text-lg">{s.title}</h3>
              </div>
              <p className="text-slate-300 mt-3 flex-1">{s.desc}</p>
              <div className="mt-4">
                <Link to="/request" className="inline-flex items-center justify-center px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-md font-semibold w-full sm:w-auto">Get started</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
