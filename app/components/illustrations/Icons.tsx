const svg = {
  className: "h-7 w-7",
  fill: "none",
  viewBox: "0 0 32 32",
  "aria-hidden": true,
} as const;

export function IconDisease() {
  return (
    <svg {...svg}>
      <circle cx="16" cy="16" r="11" stroke="#0078B4" strokeWidth="1.8" />
      <path
        d="M12 14c.4-2 2-3.2 4-3.2S19.6 12 20 14"
        stroke="#1E2878"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 19.5c1.2 1.6 6.8 1.6 8 0"
        stroke="#F0960A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconBarrier() {
  return (
    <svg {...svg}>
      <rect
        x="6"
        y="10"
        width="20"
        height="14"
        rx="3"
        stroke="#0078B4"
        strokeWidth="1.8"
      />
      <path d="M10 10V8a6 6 0 0 1 12 0v2" stroke="#1E2878" strokeWidth="1.8" />
      <circle cx="16" cy="17" r="2" fill="#F0960A" />
    </svg>
  );
}

export function IconAccess() {
  return (
    <svg {...svg}>
      <path
        d="M7 24V12l9-6 9 6v12"
        stroke="#1E2878"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M13 24v-7h6v7" stroke="#0078B4" strokeWidth="1.8" />
    </svg>
  );
}

export function IconSchool() {
  return (
    <svg {...svg}>
      <path
        d="M5 14l11-6 11 6-11 6-11-6z"
        stroke="#1E2878"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M10 16.5v6.2c3.2 1.6 8.8 1.6 12 0V16.5" stroke="#0078B4" strokeWidth="1.8" />
    </svg>
  );
}

export function IconClinic() {
  return (
    <svg {...svg}>
      <rect x="6" y="8" width="20" height="16" rx="3" stroke="#0078B4" strokeWidth="1.8" />
      <path d="M16 12v8M12 16h8" stroke="#F0960A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconPool() {
  return (
    <svg {...svg}>
      <circle cx="12" cy="14" r="5" stroke="#1E2878" strokeWidth="1.8" />
      <circle cx="20" cy="14" r="5" stroke="#0078B4" strokeWidth="1.8" />
      <path d="M8 23c1.8-2.4 4.2-3.2 8-3.2S22.2 20.6 24 23" stroke="#F0960A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconMail() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 6.5 10 11l6-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconPin() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M10 17s5-4.2 5-8.2A5 5 0 0 0 5 8.8C5 12.8 10 17 10 17z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="10" cy="8.5" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function IconClock() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 6.5V10l2.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
