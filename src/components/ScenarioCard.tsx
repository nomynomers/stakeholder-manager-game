import { useState, useRef } from "react";
import type { Scenario } from "../data/scenarios";

interface Props {
  scenario: Scenario;
  turn: number;
  maxTurns: number;
  onChoose: (side: "left" | "right") => void;
  onHoverChange: (side: "left" | "right" | null) => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  "Chuỗi cung ứng": "#d4a843",
  "Quan hệ cộng đồng": "#4ade80",
  "Quy định pháp luật": "#a78bfa",
  "Quan hệ lao động": "#60a5fa",
  "Quản lý khủng hoảng": "#f87171",
  "Chiến lược tăng trưởng": "#34d399",
  "Đạo đức chuỗi cung ứng": "#fb923c",
  "An toàn lao động": "#facc15",
  "Thuế doanh nghiệp": "#c084fc",
  "Ứng phó khủng hoảng": "#38bdf8",
  "Công nghệ": "#818cf8",
  "Quản trị doanh nghiệp": "#f472b6",
};

export default function ScenarioCard({ scenario, turn, maxTurns, onChoose, onHoverChange }: Props) {
  const [hover, setHover] = useState<"left" | "right" | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const catColor = CATEGORY_COLORS[scenario.category] ?? "#d4a843";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const next = x < rect.width / 2 ? "left" : "right";
    if (next !== hover) {
      setHover(next);
      onHoverChange(next);
    }
  };

  const handleMouseLeave = () => {
    setHover(null);
    onHoverChange(null);
  };

  const handleClick = () => {
    if (hover) onChoose(hover);
  };

  const tilt = hover === "left" ? -8 : hover === "right" ? 8 : 0;
  const activeChoice = hover === "left" ? scenario.left : hover === "right" ? scenario.right : null;

  return (
    <div className="flex flex-col items-center gap-6 select-none">
      {/* Turn dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: maxTurns }).map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-500"
            style={{
              width: i === turn ? 20 : 6,
              height: 6,
              backgroundColor: i < turn ? catColor : i === turn ? catColor : "rgba(255,255,255,0.15)",
              opacity: i < turn ? 0.4 : 1,
            }}
          />
        ))}
      </div>

      {/* Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="relative overflow-hidden rounded-2xl cursor-pointer"
        style={{
          width: 340,
          minHeight: 460,
          background: "#f5ede0",
          transform: `rotate(${tilt}deg)`,
          transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
          boxShadow: hover
            ? `0 28px 64px rgba(0,0,0,0.6), 0 0 0 2px ${catColor}55`
            : "0 16px 48px rgba(0,0,0,0.45)",
        }}
      >
        {/* Choice overlay */}
        <div
          className="absolute inset-0 z-10 flex items-end pointer-events-none transition-opacity duration-300"
          style={{ opacity: activeChoice ? 1 : 0 }}
        >
          <div
            className="w-full px-6 py-5"
            style={{
              background:
                hover === "left"
                  ? "linear-gradient(to top, rgba(234,88,12,0.18) 0%, transparent 100%)"
                  : "linear-gradient(to top, rgba(16,185,129,0.18) 0%, transparent 100%)",
              borderTop: `2px solid ${hover === "left" ? "rgba(234,88,12,0.4)" : "rgba(16,185,129,0.4)"}`,
            }}
          >
            <p
              className="text-sm font-semibold leading-snug"
              style={{
                fontFamily: "var(--font-body)",
                color: hover === "left" ? "#92400e" : "#065f46",
              }}
            >
              {activeChoice?.text}
            </p>
          </div>
        </div>

        {/* Zone tints */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none transition-opacity duration-200"
          style={{
            opacity: hover === "left" ? 1 : 0,
            background: "linear-gradient(to right, rgba(234,88,12,0.07) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none transition-opacity duration-200"
          style={{
            opacity: hover === "right" ? 1 : 0,
            background: "linear-gradient(to left, rgba(16,185,129,0.07) 0%, transparent 100%)",
          }}
        />

        {/* Card content */}
        <div className="relative z-0 p-7 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{
                backgroundColor: catColor + "22",
                color: catColor,
                fontFamily: "var(--font-body)",
                border: `1px solid ${catColor}44`,
              }}
            >
              {scenario.category}
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(30,30,20,0.35)", fontFamily: "var(--font-body)" }}
            >
              Lượt {turn + 1} / {maxTurns}
            </span>
          </div>

          <h2
            className="text-2xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "#1a1a14" }}
          >
            {scenario.title}
          </h2>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ backgroundColor: catColor + "44" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: catColor }} />
            <div className="flex-1 h-px" style={{ backgroundColor: catColor + "44" }} />
          </div>

          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "rgba(30,25,15,0.75)", fontWeight: 400 }}
          >
            {scenario.description}
          </p>

          <div
            className="mt-auto pt-4 flex items-center justify-between text-xs"
            style={{ color: "rgba(30,25,15,0.35)", fontFamily: "var(--font-body)" }}
          >
            <span className="transition-opacity duration-200" style={{ opacity: hover === "left" ? 0 : 1 }}>
              ← di chuột để chọn
            </span>
            <span className="transition-opacity duration-200" style={{ opacity: hover === "right" ? 0 : 1 }}>
              di chuột để chọn →
            </span>
          </div>
        </div>
      </div>

      {/* Choice buttons */}
      <div className="flex gap-4 w-full" style={{ maxWidth: 380 }}>
        <button
          onClick={() => onChoose("left")}
          onMouseEnter={() => { setHover("left"); onHoverChange("left"); }}
          onMouseLeave={() => { setHover(null); onHoverChange(null); }}
          className="flex-1 rounded-xl px-4 py-3 text-left transition-all duration-200"
          style={{
            background: hover === "left" ? "rgba(234,88,12,0.15)" : "rgba(255,255,255,0.06)",
            border: `1px solid ${hover === "left" ? "rgba(234,88,12,0.5)" : "rgba(255,255,255,0.1)"}`,
            color: hover === "left" ? "#fb923c" : "rgba(245,237,224,0.55)",
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          <span className="block text-xs mb-1 opacity-60">Lựa chọn A</span>
          {scenario.left.text}
        </button>
        <button
          onClick={() => onChoose("right")}
          onMouseEnter={() => { setHover("right"); onHoverChange("right"); }}
          onMouseLeave={() => { setHover(null); onHoverChange(null); }}
          className="flex-1 rounded-xl px-4 py-3 text-left transition-all duration-200"
          style={{
            background: hover === "right" ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.06)",
            border: `1px solid ${hover === "right" ? "rgba(16,185,129,0.5)" : "rgba(255,255,255,0.1)"}`,
            color: hover === "right" ? "#34d399" : "rgba(245,237,224,0.55)",
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          <span className="block text-xs mb-1 opacity-60">Lựa chọn B</span>
          {scenario.right.text}
        </button>
      </div>
    </div>
  );
}
