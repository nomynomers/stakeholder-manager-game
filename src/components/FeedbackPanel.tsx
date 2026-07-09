import type { StatChanges } from "../data/scenarios";

interface Props {
  choiceText: string;
  explanation: string;
  changes: StatChanges;
  onContinue: () => void;
}

const STAT_META = [
  { key: "profit" as const, icon: "💰", label: "Lợi nhuận" },
  { key: "workers" as const, icon: "👷", label: "Người lao động" },
  { key: "government" as const, icon: "🏛", label: "Chính phủ" },
  { key: "community" as const, icon: "🌳", label: "Cộng đồng" },
];

export default function FeedbackPanel({ choiceText, explanation, changes, onContinue }: Props) {
  return (
    <div
      className="flex flex-col gap-6 rounded-2xl p-8"
      style={{
        background: "#f5ede0",
        width: 360,
        boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
      }}
    >
      <div>
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "rgba(30,25,15,0.4)", fontFamily: "var(--font-body)" }}
        >
          Bạn đã quyết định
        </span>
        <h3
          className="text-lg font-bold leading-snug mt-1"
          style={{ fontFamily: "var(--font-display)", color: "#1a1a14" }}
        >
          {choiceText}
        </h3>
      </div>

      <p
        className="text-sm leading-relaxed"
        style={{ fontFamily: "var(--font-body)", color: "rgba(30,25,15,0.7)", fontWeight: 400 }}
      >
        {explanation}
      </p>

      <div className="flex flex-col gap-2.5">
        {STAT_META.map(({ key, icon, label }) => {
          const val = changes[key];
          if (val === undefined) return null;
          return (
            <div key={key} className="flex items-center gap-3">
              <span className="text-base">{icon}</span>
              <span
                className="text-xs uppercase tracking-widest flex-1"
                style={{ fontFamily: "var(--font-body)", color: "rgba(30,25,15,0.5)", fontWeight: 500 }}
              >
                {label}
              </span>
              <span
                className="text-sm font-semibold"
                style={{
                  color: val > 0 ? "#059669" : "#dc2626",
                  fontFamily: "var(--font-body)",
                }}
              >
                {val > 0 ? `+${val}` : val}
              </span>
            </div>
          );
        })}
      </div>

      <button
        onClick={onContinue}
        className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{
          background: "#1a2e1a",
          color: "#f5ede0",
          fontFamily: "var(--font-body)",
          border: "none",
          cursor: "pointer",
        }}
      >
        Tiếp tục →
      </button>
    </div>
  );
}
