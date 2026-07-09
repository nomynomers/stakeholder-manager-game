interface Props {
  icon: string;
  label: string;
  value: number;
  color: string;
  preview?: number;
}

export default function StatBar({ icon, label, value, color, preview }: Props) {
  const clamped = Math.max(0, Math.min(100, value));
  const projected = preview !== undefined ? Math.max(0, Math.min(100, value + preview)) : null;
  const isDanger = clamped <= 15;
  const isHigh = clamped >= 88;

  // For negative: overlay a solid red cap on top of the bar (high opacity so it reads clearly, not blended)
  // For positive: extend a green band beyond the bar
  const isNegative = preview !== undefined && preview < 0;
  const isPositive = preview !== undefined && preview > 0;

  const negativeStart = projected !== null && isNegative ? projected : 0;
  const negativeWidth = projected !== null && isNegative ? clamped - projected : 0;

  const positiveStart = clamped;
  const positiveWidth = projected !== null && isPositive ? projected - clamped : 0;

  return (
    <div className="flex items-center gap-3">
      <span className="text-base w-5 text-center select-none">{icon}</span>
      <span
        className="text-xs font-medium uppercase tracking-widest w-20 shrink-0"
        style={{ color: "rgba(245,237,224,0.55)", fontFamily: "var(--font-body)" }}
      >
        {label}
      </span>
      <div className="flex-1 relative h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
        {/* Base bar */}
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${clamped}%`, backgroundColor: color, opacity: isDanger || isHigh ? 1 : 0.85 }}
        />
        {/* Negative preview: solid red cap over the bar — same red regardless of bar color */}
        {isNegative && negativeWidth > 0 && (
          <div
            className="absolute top-0 h-full transition-all duration-300"
            style={{
              left: `${negativeStart}%`,
              width: `${negativeWidth}%`,
              backgroundColor: "#ef4444",
              opacity: 0.92,
            }}
          />
        )}
        {/* Positive preview: green extension beyond the bar */}
        {isPositive && positiveWidth > 0 && (
          <div
            className="absolute top-0 h-full transition-all duration-300"
            style={{
              left: `${positiveStart}%`,
              width: `${positiveWidth}%`,
              backgroundColor: "#4ade80",
              opacity: 0.75,
            }}
          />
        )}
        {isDanger && (
          <div
            className="absolute top-0 left-0 h-full w-full animate-pulse rounded-full"
            style={{ background: "rgba(248,113,113,0.15)" }}
          />
        )}
      </div>
      <span
        className="text-xs font-mono w-7 text-right shrink-0 tabular-nums transition-colors duration-300"
        style={{
          color: isDanger ? "#f87171" : isHigh ? "#fbbf24" : "rgba(245,237,224,0.45)",
          fontFamily: "var(--font-body)",
        }}
      >
        {clamped}
      </span>
    </div>
  );
}
