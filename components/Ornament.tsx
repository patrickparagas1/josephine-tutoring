/**
 * Small editorial section ornament — a hand-drawn-feeling sprig.
 * Use sparingly between sections to add brand rhythm without clutter.
 */
export default function Ornament({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 120 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line
          x1="0"
          y1="12"
          x2="44"
          y2="12"
          strokeWidth="0.8"
          opacity="0.5"
        />
        <line
          x1="76"
          y1="12"
          x2="120"
          y2="12"
          strokeWidth="0.8"
          opacity="0.5"
        />
        {/* Center sprig — a small stem with three soft leaves */}
        <path d="M 60 4 Q 60 12 60 20" strokeWidth="1.1" />
        <path
          d="M 60 9 Q 53 8 51 11 Q 53 11.5 60 11"
          strokeWidth="1"
        />
        <path
          d="M 60 9 Q 67 8 69 11 Q 67 11.5 60 11"
          strokeWidth="1"
        />
        <path
          d="M 60 14 Q 55 14 53 16 Q 55 16.5 60 15.5"
          strokeWidth="1"
        />
        <path
          d="M 60 14 Q 65 14 67 16 Q 65 16.5 60 15.5"
          strokeWidth="1"
        />
        <circle cx="60" cy="3" r="1" fill="currentColor" />
      </svg>
    </div>
  );
}
