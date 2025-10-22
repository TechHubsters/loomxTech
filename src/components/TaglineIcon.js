import React from 'react';

export default function TaglineIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="ti" x1="0" x2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="64" height="64" rx="12" fill="#071223" />
      <g transform="translate(12,12) scale(0.7)">
        <circle cx="20" cy="8" r="5" fill="url(#ti)" />
        <rect x="14" y="22" width="12" height="10" rx="2" fill="#0b1220" stroke="url(#ti)" strokeWidth="1.5" />
        <path d="M8 40 q12 10 24 0" stroke="#07BEB8" strokeWidth="1.2" fill="none" opacity="0.8" />
      </g>
    </svg>
  );
}
