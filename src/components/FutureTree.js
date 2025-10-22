import React from 'react';
import { useEffect } from "react";

export default function FutureTree({ className = "" }) {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes glowPulse { 
        0%, 100% { opacity: 0.4; filter: blur(0px); } 
        50% { opacity: 1; filter: blur(1.5px); } 
      }
      @keyframes flowEnergy { 
        0% { stroke-dashoffset: 60; } 
        100% { stroke-dashoffset: 0; } 
      }
      @keyframes particleFloat {
        0% { transform: translateY(0px) scale(1); opacity: 0.8; }
        50% { transform: translateY(-40px) scale(1.2); opacity: 1; }
        100% { transform: translateY(-80px) scale(0.6); opacity: 0; }
      }
      @keyframes energyRipple {
        0% { r: 0; opacity: 0.7; }
        60% { r: 130; opacity: 0.3; }
        100% { r: 160; opacity: 0; }
      }
      @keyframes organicBreathe {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.03); }
      }
      @keyframes letterReveal {
        0% { opacity: 0; transform: translateY(15px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes technologiesReveal {
        0% { opacity: 0; transform: translateY(8px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes logoPulse {
        0%, 100% { filter: drop-shadow(0 0 4px #00ffff); }
        50% { filter: drop-shadow(0 0 14px #00ffff); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aiRoot" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="humanBranch" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <radialGradient id="fusionGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Energy Aura */}
      <circle
        cx="400"
        cy="300"
        r="130"
        fill="url(#fusionGlow)"
        style={{ animation: "energyRipple 3s ease-out" }}
      />

      {/* Tree breathing */}
      <g style={{ transformOrigin: "center", animation: "organicBreathe 5s ease-in-out infinite" }}>
        <path
          d="M400 300 C400 240 400 180 400 120"
          stroke="url(#humanBranch)"
          strokeWidth="6"
          strokeLinecap="round"
          style={{
            strokeDasharray: "60",
            strokeDashoffset: "60",
            animation: "flowEnergy 3.5s linear infinite",
          }}
        />
        <path
          d="M400 300 C400 360 400 420 400 480"
          stroke="url(#aiRoot)"
          strokeWidth="6"
          strokeLinecap="round"
          style={{
            strokeDasharray: "60",
            strokeDashoffset: "60",
            animation: "flowEnergy 3.5s linear infinite reverse",
          }}
        />
      </g>

      {/* Human branches */}
      <g
        stroke="url(#humanBranch)"
        strokeWidth="3"
        fill="none"
        style={{ animation: "glowPulse 2.5s ease-in-out infinite" }}
      >
        <path d="M400 180 C360 140 320 100 280 80" />
        <path d="M400 160 C440 120 480 90 520 70" />
        <circle cx="280" cy="80" r="7" fill="#A7F3D0" />
        <circle cx="520" cy="70" r="7" fill="#C4B5FD" />
      </g>

      {/* AI roots */}
      <g
        stroke="url(#aiRoot)"
        strokeWidth="2.5"
        fill="none"
        style={{ animation: "glowPulse 3s ease-in-out infinite reverse" }}
      >
        <path d="M400 420 C380 460 340 500 300 520" />
        <path d="M400 440 C420 480 460 510 500 530" />
        <circle cx="300" cy="520" r="7" fill="#06B6D4" />
        <circle cx="500" cy="530" r="7" fill="#3B82F6" />
      </g>

      {/* Floating particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <circle
          key={i}
          cx="400"
          cy={480 - i * 25}
          r={Math.random() * 2 + 2}
          fill={i % 2 ? "#3B82F6" : "#7C3AED"}
          style={{
            animation: `particleFloat ${2 + Math.random() * 2}s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}

      {/* === LoomX Logo (continuous & stylized) === */}
      <g transform="translate(400,300)" textAnchor="middle">
        {/* LoomX combined */}
        <text
          y="10"
          fill="#FFFFFF"
          fontWeight="700"
          letterSpacing="2"
          style={{
            textTransform: "uppercase",
            opacity: 0,
            animation: "letterReveal 0.8s ease-out 0.3s forwards",
          }}
        >
          <tspan fontSize="40" fill="#FFFFFF" fontStyle= "italic">L</tspan>
          <tspan fontSize="28" fill="#FFFFFF" fontStyle= "italic">oom</tspan>
          <tspan fontSize="50" fill="#0fffff" fontWeight="800"fontStyle= "italic">X</tspan>
        </text>

        {/* Technologies text */}
        <text
          x="0"
          y="35"
          fill="#A5F3FC"
          fontSize="14"
          fontWeight="400"
          letterSpacing="1"
          opacity="0"
          style={{
            animation: "technologiesReveal 0.8s ease-out 1.2s forwards",
          }}
        >
          Technologies
        </text>
      </g>

      {/* Tagline */}
      <text
        x="400"
        y="570"
        textAnchor="middle"
        fill="#E5E7EB"
        fontSize="18"
        fontWeight="500"
        style={{
          animation: "letterReveal 3s ease forwards",
          animationDelay: "2s",
          opacity: 0,
        }}
      >
        "Clients' Vision → Reality through LoomX Technologies"
      </text>
    </svg>
  );
}





