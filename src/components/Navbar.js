import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-teal-400 text-white rounded-md flex items-center justify-center font-bold">L</div>
          <div>
            <div className="text-lg font-semibold text-slate-100">LoomX Technologies</div>
            <div className="text-xs text-slate-400">From Idea to App, We Make It Happen.</div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/" className={`px-2 py-1 ${loc.pathname === '/' ? 'text-indigo-300 font-medium' : 'text-slate-300'}`}>Home</Link>
          <Link to="/services" className={`px-2 py-1 ${loc.pathname === '/services' ? 'text-indigo-300 font-medium' : 'text-slate-300'}`}>Services</Link>
          <Link to="/request" className="px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded">Request a Service</Link>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:bg-slate-800/60"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            <Link to="/" onClick={() => setOpen(false)} className={`block px-2 py-2 ${loc.pathname === '/' ? 'text-indigo-300 font-medium' : 'text-slate-300'}`}>Home</Link>
            <Link to="/services" onClick={() => setOpen(false)} className={`block px-2 py-2 ${loc.pathname === '/services' ? 'text-indigo-300 font-medium' : 'text-slate-300'}`}>Services</Link>
            <Link to="/request" onClick={() => setOpen(false)} className="block px-2 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded">Request a Service</Link>
          </div>
        </div>
      )}
    </header>
  );
}
