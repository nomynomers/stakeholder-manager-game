interface Stats {
  profit: number;
  workers: number;
  government: number;
  community: number;
}

interface Props {
  stats: Stats;
  isVictory: boolean;
  gameOverReason: string;
  onRestart: () => void;
}

const STAT_META = [
  { key: "profit" as const, icon: "💰", label: "Lợi nhuận", color: "#d4a843" },
  { key: "workers" as const, icon: "👷", label: "Người lao động", color: "#60a5fa" },
  { key: "government" as const, icon: "🏛", label: "Chính phủ", color: "#a78bfa" },
  { key: "community" as const, icon: "🌳", label: "Cộng đồng", color: "#4ade80" },
];

function getBalanceGrade(stats: Stats): { grade: string; label: string; color: string } {
  const values = Object.values(stats);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((acc, v) => acc + Math.pow(v - avg, 2), 0) / values.length;
  const minVal = Math.min(...values);

  if (minVal >= 45 && variance < 250) return { grade: "S", label: "Cân bằng Xuất sắc", color: "#4ade80" };
  if (minVal >= 35 && variance < 450) return { grade: "A", label: "Quản trị Vững mạnh", color: "#34d399" };
  if (minVal >= 25 && variance < 700) return { grade: "B", label: "Tiến bộ Hợp lý", color: "#d4a843" };
  if (minVal >= 15) return { grade: "C", label: "Cân bằng Bấp bênh", color: "#fb923c" };
  return { grade: "D", label: "Mất cân bằng Nghiêm trọng", color: "#f87171" };
}

export default function GameEnd({ stats, isVictory, gameOverReason, onRestart }: Props) {
  const grade = isVictory ? getBalanceGrade(stats) : null;

  return (
    <div className="flex flex-col items-center gap-8 px-6" style={{ maxWidth: 480, margin: "0 auto" }}>
      <div className="text-center flex flex-col gap-3">
        {isVictory ? (
          <>
            <div
              className="text-7xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: grade?.color }}
            >
              {grade?.grade}
            </div>
            <h1
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "#f5ede0" }}
            >
              {grade?.label}
            </h1>
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-body)", color: "rgba(245,237,224,0.55)" }}
            >
              Bạn đã hoàn thành tất cả 12 quyết định. Dưới đây là kết quả của các bên liên quan.
            </p>
          </>
        ) : (
          <>
            <div className="text-5xl">⚠️</div>
            <h1
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "#f87171" }}
            >
              Công ty Lâm Khủng hoảng
            </h1>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "rgba(245,237,224,0.65)" }}
            >
              {gameOverReason}
            </p>
          </>
        )}
      </div>

      <div
        className="w-full rounded-2xl p-6 flex flex-col gap-4"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p
          className="text-xs uppercase tracking-widest mb-1"
          style={{ color: "rgba(245,237,224,0.35)", fontFamily: "var(--font-body)" }}
        >
          Cân bằng Cuối kỳ
        </p>
        {STAT_META.map(({ key, icon, label, color }) => {
          const val = stats[key];
          return (
            <div key={key} className="flex items-center gap-3">
              <span className="text-base w-5 text-center">{icon}</span>
              <span
                className="text-xs uppercase tracking-widest w-28 shrink-0"
                style={{ color: "rgba(245,237,224,0.5)", fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {label}
              </span>
              <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${val}%`, backgroundColor: color }}
                />
              </div>
              <span
                className="text-xs font-mono w-7 text-right shrink-0 tabular-nums"
                style={{ color: "rgba(245,237,224,0.4)", fontFamily: "var(--font-body)" }}
              >
                {val}
              </span>
            </div>
          );
        })}
      </div>

      <div
        className="rounded-2xl p-6 text-center"
        style={{ background: "#f5ede0", maxWidth: 400 }}
      >
        <p
          className="text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-display)", color: "#1a1a14", fontStyle: "italic", fontSize: 15 }}
        >
          "Lợi ích kinh tế là động lực của hoạt động kinh doanh, nhưng phát triển bền vững chỉ có thể đạt được khi tất cả các bên liên quan cân bằng và hài hòa lợi ích của mình vì lợi ích chung của xã hội."
        </p>
      </div>

      <button
        onClick={onRestart}
        className="px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{
          background: "#f5ede0",
          color: "#1a1a14",
          fontFamily: "var(--font-body)",
          border: "none",
          cursor: "pointer",
          letterSpacing: "0.03em",
        }}
      >
        Chơi lại
      </button>
    </div>
  );
}
