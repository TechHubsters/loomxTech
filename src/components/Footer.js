import React, { useState } from "react";
import { Link } from "react-router-dom";


function MobileAccordion() {
  const [open, setOpen] = useState({
    services: false,
    company: false,
    contact: false,
  });

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="space-y-3">
      {[
        {
          title: "Services",
          key: "services",
          links: [
            "App Development",
            "Web Development",
            "Automation",
            "UI / UX",
            "Custom Software",
          ],
        },
        {
          title: "Company",
          key: "company",
          links: ["Home", "Services", "Request a Service", "Privacy"],
        },
        {
          title: "Contact",
          key: "contact",
          links: ["hello@loomx.tech", "+1 (234) 567-890"],
        },
      ].map((section) => (
        <div
          key={section.key}
          className="border border-slate-800 rounded-md overflow-hidden"
        >
          <button
            onClick={() => toggle(section.key)}
            className="w-full text-left px-4 py-3 flex items-center justify-between bg-slate-800/40 hover:bg-slate-800 transition-colors"
          >
            <span className="font-semibold">{section.title}</span>
            <span className="text-slate-400">
              {open[section.key] ? "−" : "+"}
            </span>
          </button>
          {open[section.key] && (
            <div className="px-4 pb-3 text-sm text-slate-400 space-y-1">
              {section.title !== "Contact" ? (
                section.links.map((link, idx) => (
                  <div key={idx}>
                    {link === "Privacy" ? (
                      <button
                        type="button"
                        onClick={() => alert('Privacy policy coming soon')}
                        className="hover:text-white text-left"
                      >
                        {link}
                      </button>
                    ) : (
                      <Link
                        to={`/${link
                          .toLowerCase()
                          .replace(/\s+/g, "")
                          .replace("home", "")}`}
                        className="hover:text-white"
                      >
                        {link}
                      </Link>
                    )}
                  </div>
                ))
              ) : (
                <>
                  <a
                    href="mailto:loomxtechnologies@gmail.com"
                    className="block hover:text-white"
                  >
                    loomxtechnologies@gmail.com
                  </a>
                  <a href="tel:+1234567890" className="block hover:text-white">
                    +1 (234) 567-890
                  </a>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="bg-slate-950 text-slate-200 mt-12"
      role="contentinfo"
      aria-label="LoomX footer"
    >
      {/* subtle animated separator */}
      <div className="footer-separator w-full h-1">
        <div className="gradient-line w-full h-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Company Info */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="2"
                    y="2"
                    width="44"
                    height="44"
                    rx="10"
                    fill="url(#g1)"
                  />
                  <circle cx="24" cy="24" r="14" fill="#0f172a" />
                  <text
                    x="24"
                    y="28"
                    textAnchor="middle"
                    fontFamily="Inter, system-ui, Arial"
                    fontWeight="700"
                    fontSize="16"
                    fill="#fff"
                  >
                    L
                  </text>
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold">LoomX Technologies</h3>
                <p className="text-sm text-slate-400">
                  From Idea to App, We Make It Happen.
                </p>
              </div>
            </div>

            <p className="mt-3 text-sm text-slate-400 max-w-md">
              We build reliable mobile, web, and custom software for startups
              and growing businesses. Product-focused engineering, clean code,
              and fast delivery.
            </p>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:grid md:w-1/2 grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold mb-2">Services</h4>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>
                  <Link to="/services" className="hover:text-indigo-300">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white">
                    Automation
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white">
                    UI / UX
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white">
                    Custom Software
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/request" className="hover:text-white">
                    Request a Service
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => alert('Privacy policy coming soon')}
                    className="hover:text-white text-left"
                  >
                    Privacy
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>
                  <a href="mailto:loomxtechnologies@gmail.com" className="hover:text-indigo-300">
                    loomxtechnologies@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-indigo-300">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden w-full">
            <MobileAccordion />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} LoomX Technologies. All rights reserved.
      </div>
    </footer>
  );
}
