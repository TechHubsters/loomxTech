import React, { useState } from 'react';

export default function RequestService() {
  const [form, setForm] = useState({ name: '', email: '', service: 'App Development', details: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Client-side mailto fallback so this works on static hosting (GitHub Pages)
    const to = 'loomxtechnologies@gmail.com';
    const subject = encodeURIComponent(`Service request: ${form.service} (from ${form.name})`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nDetails:\n${form.details || '(none)'}\n`
    );

    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    // Try opening the user's email client
    const opened = window.open(mailto, '_self');
    if (opened === null) {
      // Fallback: copy to clipboard and show instructions
      const text = `To: ${to}\nSubject: ${decodeURIComponent(subject)}\n\n${decodeURIComponent(body)}`;
      navigator.clipboard?.writeText(text).then(() => {
        alert('Email content copied to clipboard. Please paste it into your email client and send to ' + to);
        setSent(true);
      }).catch(() => {
        alert('Could not open email client or copy to clipboard. Please email ' + to + ' with your request.');
      });
    } else {
      // Assume mail client opened; still mark as sent so user sees confirmation
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="max-w-xl w-full p-8 bg-slate-800 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold text-white">Thanks — we got your request</h3>
          <p className="mt-2 text-slate-300">We'll contact you shortly to discuss next steps.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="max-w-xl w-full p-8 bg-slate-800 rounded-xl shadow">
        <h3 className="text-2xl font-bold text-white">Request a Service</h3>
        <p className="text-slate-300 mt-2">Tell us about your project and an estimate of your timeline and budget.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full bg-slate-700 text-slate-100 border border-slate-600 rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 w-full bg-slate-700 text-slate-100 border border-slate-600 rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300">Service</label>
            <select name="service" value={form.service} onChange={handleChange} className="mt-1 w-full bg-slate-700 text-slate-100 border border-slate-600 rounded p-2">
              <option>App Development</option>
              <option>Web Development</option>
              <option>Automation</option>
              <option>UI / UX</option>
              <option>Custom Software</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300">Project details</label>
            <textarea name="details" value={form.details} onChange={handleChange} rows="4" className="mt-1 w-full bg-slate-700 text-slate-100 border border-slate-600 rounded p-2" />
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded">Send request</button>
            <span className="text-sm text-slate-400">We usually reply within 1-2 business days.</span>
          </div>
        </form>
      </div>
    </div>
  );
}
