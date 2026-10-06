import React from 'react'

const base = (size, className, children, label) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden={label ? undefined : true}
    role={label ? 'img' : undefined}
    aria-label={label}
  >
    {children}
  </svg>
)

export function Menu({ size = 24, className, ...props }) { return base(size, className, <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>, props['aria-label']) }
export function X({ size = 24, className, ...props }) { return base(size, className, <><path d="M6 6l12 12"/><path d="M18 6L6 18"/></>, props['aria-label']) }
export function Sun({ size = 24, className, ...props }) { return base(size, className, <><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></>, props['aria-label']) }
export function Moon({ size = 24, className, ...props }) { return base(size, className, <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8Z"/>, props['aria-label']) }
export function Download({ size = 24, className, ...props }) { return base(size, className, <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>, props['aria-label']) }
export function Github({ size = 24, className, ...props }) { return base(size, className, <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.5 5.5 0 0 0 19.2 4 5.1 5.1 0 0 0 19.1 1S17.9.6 15 2.5a13.4 13.4 0 0 0-6 0C6.1.6 4.9 1 4.9 1A5.1 5.1 0 0 0 4.8 4a5.5 5.5 0 0 0-1.5 3.5c0 5.4 3.4 6.6 6.7 7A4.8 4.8 0 0 0 9 18v4"/><path d="M9 18c-4.5 2-5-2-7-2"/></>, props['aria-label']) }
export function Linkedin({ size = 24, className, ...props }) { return base(size, className, <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>, props['aria-label']) }
export function Mail({ size = 24, className, ...props }) { return base(size, className, <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>, props['aria-label']) }
export function ExternalLink({ size = 24, className, ...props }) { return base(size, className, <><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></>, props['aria-label']) }
export function FileText({ size = 24, className, ...props }) { return base(size, className, <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h6"/></>, props['aria-label']) }
export function Archive({ size = 24, className, ...props }) { return base(size, className, <><path d="M3 6h18"/><path d="M5 6v14h14V6"/><path d="M9 10h6"/><path d="M4 3h16v3H4z"/></>, props['aria-label']) }
export function ArrowRight({ size = 24, className, ...props }) { return base(size, className, <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>, props['aria-label']) }
