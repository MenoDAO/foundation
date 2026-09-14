/**
 * Illustrated stand-in for the required field photograph.
 * PLACEHOLDER: replace with an authentic outdoor photo of an oral-health
 * educator demonstrating brushing to primary-school learners.
 * File slot: /public/images/hero-field-education.jpg
 * No clinical trauma or distress imagery.
 */
export function HeroScene({ badge = "Tabasamu classroom visit" }: { badge?: string }) {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-[#D8DCEB]/60 bg-gradient-to-b from-[#dce9f4] via-[#eef4ea] to-[#f4efe4]">
      <svg
        viewBox="0 0 640 520"
        className="h-auto w-full"
        role="img"
        aria-label="Illustration of an oral-health educator demonstrating brushing technique to primary-school learners outdoors"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8ec6e6" />
            <stop offset="55%" stopColor="#d7e8f4" />
            <stop offset="100%" stopColor="#e8f0d8" />
          </linearGradient>
        </defs>

        <rect width="640" height="520" fill="url(#sky)" />
        <circle cx="520" cy="78" r="36" fill="#F0960A" className="animate-float" />
        <circle
          cx="520"
          cy="78"
          r="52"
          fill="none"
          stroke="#F0960A"
          strokeOpacity="0.25"
          className="animate-pulse-ring"
        />

        <path
          d="M0 330 C 90 300 140 350 220 325 C 300 300 360 345 430 320 C 510 292 560 330 640 310 L 640 520 L 0 520 Z"
          fill="#c5d6a8"
        />
        <path
          d="M0 390 C 120 370 200 410 310 385 C 410 362 500 405 640 380 L 640 520 L 0 520 Z"
          fill="#b7c896"
        />

        <g className="animate-sway">
          <path d="M92 410 L98 250" stroke="#1E2878" strokeWidth="8" />
          <ellipse cx="70" cy="230" rx="36" ry="18" fill="#1E2878" />
          <ellipse cx="118" cy="238" rx="34" ry="16" fill="#0078B4" />
          <ellipse cx="92" cy="210" rx="28" ry="14" fill="#1E2878" />
        </g>
        <g className="animate-sway" style={{ animationDelay: "0.6s" }}>
          <path d="M560 420 L566 270" stroke="#1E2878" strokeWidth="7" />
          <ellipse cx="544" cy="252" rx="30" ry="15" fill="#0078B4" />
          <ellipse cx="586" cy="260" rx="28" ry="13" fill="#1E2878" />
        </g>

        <rect x="250" y="248" width="150" height="10" rx="3" fill="#8d6a45" />
        <rect x="258" y="198" width="6" height="50" fill="#8d6a45" />
        <rect x="386" y="198" width="6" height="50" fill="#8d6a45" />
        <path d="M248 198 H402 L392 168 H258 Z" fill="#1E2878" />

        {/* Educator */}
        <g transform="translate(300 268)">
          <circle cx="36" cy="22" r="16" fill="#c68642" />
          <path d="M20 20 h32 v8 c0 10-32 10-32 0z" fill="#2b2118" />
          <rect x="22" y="40" width="28" height="36" rx="10" fill="#1E2878" />
          <rect x="16" y="46" width="10" height="22" rx="5" fill="#1E2878" />
          <g className="animate-brush">
            <rect x="48" y="44" width="34" height="7" rx="3" fill="#0078B4" />
            <rect x="76" y="41" width="12" height="13" rx="2" fill="#F0960A" />
          </g>
          <rect x="24" y="74" width="10" height="28" rx="4" fill="#2b2118" />
          <rect x="38" y="74" width="10" height="28" rx="4" fill="#2b2118" />
        </g>

        {/* Learners */}
        <Learner x={168} y={318} shirt="#0078B4" delay="0s" />
        <Learner x={214} y={330} shirt="#F0960A" delay="0.3s" />
        <Learner x={430} y={322} shirt="#1E2878" delay="0.15s" />
        <Learner x={478} y={334} shirt="#0078B4" delay="0.45s" />

        <rect
          x="20"
          y="20"
          width="280"
          height="36"
          rx="18"
          fill="white"
          fillOpacity="0.82"
        />
        <text
          x="160"
          y="43"
          textAnchor="middle"
          fill="#1E2878"
          fontSize="12"
          fontFamily="Outfit, system-ui, sans-serif"
          fontWeight="600"
        >
          {badge}
        </text>
      </svg>
      <figcaption className="sr-only">
        Illustration standing in for an authentic field photograph of an
        oral-health educator demonstrating brushing technique to primary-school
        learners outdoors.
      </figcaption>
    </figure>
  );
}

function Learner({
  x,
  y,
  shirt,
  delay,
}: {
  x: number;
  y: number;
  shirt: string;
  delay: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx="16" cy="12" r="10" fill="#e0ac69" />
      <rect x="7" y="24" width="18" height="20" rx="6" fill={shirt} />
      <g className="animate-brush" style={{ animationDelay: delay }}>
        <rect x="22" y="28" width="18" height="5" rx="2" fill="#14171F" />
        <rect x="36" y="26" width="7" height="9" rx="1.5" fill="#F0960A" />
      </g>
      <rect x="8" y="44" width="6" height="16" rx="3" fill="#2b2118" />
      <rect x="17" y="44" width="6" height="16" rx="3" fill="#2b2118" />
    </g>
  );
}
