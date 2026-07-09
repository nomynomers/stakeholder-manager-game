import { useState, useCallback } from "react";
import { scenarios } from "./data/scenarios";
import type { StatChanges } from "./data/scenarios";
import StatBar from "./components/StatBar";
import ScenarioCard from "./components/ScenarioCard";
import FeedbackPanel from "./components/FeedbackPanel";
import GameEnd from "./components/GameEnd";

interface Stats {
  profit: number;
  workers: number;
  government: number;
  community: number;
}

interface FeedbackState {
  choiceText: string;
  explanation: string;
  changes: StatChanges;
}

type Phase = "playing" | "feedback" | "gameover" | "victory";

const STAT_META = [
  { key: "profit" as const, icon: "💰", label: "Lợi nhuận", color: "#d4a843" },
  { key: "workers" as const, icon: "👷", label: "Người lao động", color: "#60a5fa" },
  { key: "government" as const, icon: "🏛", label: "Chính phủ", color: "#a78bfa" },
  { key: "community" as const, icon: "🌳", label: "Cộng đồng", color: "#4ade80" },
];

const GAME_SCENARIOS = scenarios.slice(0, 12);
const MAX_TURNS = GAME_SCENARIOS.length;

const GAME_OVER_MESSAGES: Record<string, string> = {
  profit: "Công ty đã phá sản. Không có khả năng tài chính, không thể duy trì hoạt động, trả lương nhân viên hay đầu tư vào cộng đồng. Một doanh nghiệp đánh mất nền tảng kinh tế không thể phục vụ bất kỳ ai.",
  workers: "Làn sóng nhân viên rời bỏ hàng loạt đã làm tê liệt công ty. Năng suất sụp đổ, nhân tài chạy sang đối thủ, và tổ chức mất đi khả năng vận hành. Con người không chỉ là nguồn lực — họ là động cơ của mọi doanh nghiệp.",
  government: "Cơ quan quản lý đã đình chỉ hoạt động của bạn. Các vi phạm tích lũy, giấy phép bị thu hồi và rủi ro pháp lý khiến việc tiếp tục là không thể. Kinh doanh bền vững đòi hỏi tuân thủ các quy tắc mà xã hội đặt ra.",
  community: "Làn sóng phản ứng từ cộng đồng đã phá hủy giấy phép xã hội để hoạt động của bạn. Tẩy chay, biểu tình và áp lực chính trị khiến hoạt động bình thường là không thể. Không công ty nào có thể phát triển trong một cộng đồng đã quay lưng với mình.",
};

function applyChanges(stats: Stats, changes: StatChanges): Stats {
  return {
    profit: Math.max(0, Math.min(100, stats.profit + (changes.profit ?? 0))),
    workers: Math.max(0, Math.min(100, stats.workers + (changes.workers ?? 0))),
    government: Math.max(0, Math.min(100, stats.government + (changes.government ?? 0))),
    community: Math.max(0, Math.min(100, stats.community + (changes.community ?? 0))),
  };
}

function checkGameOver(stats: Stats): string | null {
  for (const { key } of STAT_META) {
    if (stats[key] <= 0) return key;
  }
  return null;
}

const INITIAL_STATS: Stats = { profit: 50, workers: 50, government: 50, community: 50 };

export default function App() {
  const [stats, setStats] = useState<Stats>(INITIAL_STATS);
  const [turn, setTurn] = useState(0);
  const [phase, setPhase] = useState<Phase>("playing");
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const [gameOverReason, setGameOverReason] = useState("");
  const [hoverPreview, setHoverPreview] = useState<StatChanges | null>(null);
  const [pendingPhase, setPendingPhase] = useState<Phase | null>(null);

  const handleChoose = useCallback(
    (side: "left" | "right") => {
      if (phase !== "playing") return;
      const scenario = GAME_SCENARIOS[turn];
      const choice = side === "left" ? scenario.left : scenario.right;
      const newStats = applyChanges(stats, choice.changes);

      setFeedback({ choiceText: choice.text, explanation: choice.explanation, changes: choice.changes });
      setStats(newStats);
      setHoverPreview(null);
      setPhase("feedback");

      const failedStat = checkGameOver(newStats);
      if (failedStat) {
        setGameOverReason(GAME_OVER_MESSAGES[failedStat] ?? "");
        setPendingPhase("gameover");
      } else if (turn + 1 >= MAX_TURNS) {
        setPendingPhase("victory");
      } else {
        setPendingPhase(null);
      }
    },
    [phase, turn, stats]
  );

  const handleContinue = useCallback(() => {
    if (phase === "feedback") {
      setFeedback(null);
      if (pendingPhase) {
        setPhase(pendingPhase);
        setPendingPhase(null);
      } else {
        setTurn((t) => t + 1);
        setPhase("playing");
      }
    }
  }, [phase, pendingPhase]);

  const handleHoverChange = useCallback(
    (side: "left" | "right" | null) => {
      if (side === null) {
        setHoverPreview(null);
        return;
      }
      const scenario = GAME_SCENARIOS[turn];
      setHoverPreview(side === "left" ? scenario.left.changes : scenario.right.changes);
    },
    [turn]
  );

  const handleRestart = useCallback(() => {
    setStats(INITIAL_STATS);
    setTurn(0);
    setPhase("playing");
    setFeedback(null);
    setGameOverReason("");
    setHoverPreview(null);
    setPendingPhase(null);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(160deg, #0f2013 0%, #0f1f12 50%, #0d1a0f 100%)" }}
    >
      {/* Header */}
      <header
        className="flex items-center justify-between px-8 py-5 shrink-0"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div>
          <h1
            className="text-lg font-bold leading-none"
            style={{ fontFamily: "var(--font-display)", color: "#f5ede0", letterSpacing: "-0.01em" }}
          >
            Cân Bằng Lợi Ích
          </h1>
          <p
            className="text-xs mt-0.5"
            style={{ color: "rgba(245,237,224,0.35)", fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}
          >
            TRÒ CHƠI ĐẠO ĐỨC KINH DOANH
          </p>
        </div>
        {phase === "playing" || phase === "feedback" ? (
          <div
            className="text-xs font-medium"
            style={{ color: "rgba(245,237,224,0.35)", fontFamily: "var(--font-body)", letterSpacing: "0.05em" }}
          >
            LƯỢT {Math.min(turn + 1, MAX_TURNS)} / {MAX_TURNS}
          </div>
        ) : null}
      </header>

      {/* Stat bars */}
      {(phase === "playing" || phase === "feedback") && (
        <div
          className="px-8 py-4 flex flex-col gap-2.5 shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {STAT_META.map(({ key, icon, label, color }) => (
            <StatBar
              key={key}
              icon={icon}
              label={label}
              value={stats[key]}
              color={color}
              preview={hoverPreview?.[key]}
            />
          ))}
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center py-10 px-4">
        {phase === "playing" && (
          <ScenarioCard
            scenario={GAME_SCENARIOS[turn]}
            turn={turn}
            maxTurns={MAX_TURNS}
            onChoose={handleChoose}
            onHoverChange={handleHoverChange}
          />
        )}

        {phase === "feedback" && feedback && (
          <FeedbackPanel
            choiceText={feedback.choiceText}
            explanation={feedback.explanation}
            changes={feedback.changes}
            onContinue={handleContinue}
          />
        )}

        {(phase === "gameover" || phase === "victory") && (
          <GameEnd
            stats={stats}
            isVictory={phase === "victory"}
            gameOverReason={gameOverReason}
            onRestart={handleRestart}
          />
        )}
      </main>
    </div>
  );
}
