interface Props {
  onStart: () => void;
}

const STAKEHOLDERS = [
  { icon: "💰", name: "Lợi nhuận", desc: "Tài chính & sự sống còn của doanh nghiệp" },
  { icon: "👷", name: "Người lao động", desc: "Năng suất, lòng trung thành & phúc lợi nhân viên" },
  { icon: "🏛", name: "Chính phủ", desc: "Sự tuân thủ pháp luật & tính pháp lý hoạt động" },
  { icon: "🌳", name: "Cộng đồng", desc: "Niềm tin của xã hội, môi trường & khách hàng" },
];

export default function WelcomeScreen({ onStart }: Props) {
  return (
    <div
      className="flex flex-col gap-6 rounded-2xl p-6 text-center"
      style={{
        background: "rgba(245, 237, 224, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        width: 360,
        boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
      }}
    >
      <div>
        <p
          className="text-xs tracking-[0.2em] font-semibold uppercase mb-1"
          style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
        >
          Trò chơi đạo đức kinh doanh
        </p>
        <h1
          className="text-3xl font-bold leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "#f5ede0" }}
        >
          Cân Bằng Lợi Ích
        </h1>
      </div>

      <p
        className="text-xs leading-relaxed"
        style={{ fontFamily: "var(--font-body)", color: "rgba(245, 237, 224, 0.65)" }}
      >
        Bạn bước vào vai trò Tổng Giám Đốc (CEO). Nhiệm vụ của bạn là đưa ra 12 quyết định chiến lược để chèo lái doanh nghiệp vượt qua thách thức.
      </p>

      {/* Stakeholders list */}
      <div className="flex flex-col gap-3 text-left my-1">
        <p
          className="text-[10px] uppercase tracking-wider font-semibold opacity-40 mb-1"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Bên liên quan cần cân bằng
        </p>
        {STAKEHOLDERS.map((s, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-2 rounded-lg"
            style={{ background: "rgba(255, 255, 255, 0.03)" }}
          >
            <span className="text-xl leading-none">{s.icon}</span>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold text-[#f5ede0]" style={{ fontFamily: "var(--font-body)" }}>
                {s.name}
              </h4>
              <p className="text-[10px] text-gray-400 mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="p-3 rounded-lg text-[11px] leading-relaxed text-left"
        style={{
          background: "rgba(212, 168, 67, 0.08)",
          border: "1px dashed rgba(212, 168, 67, 0.2)",
          color: "#d4a843",
          fontFamily: "var(--font-body)",
        }}
      >
        💡 <strong>Cách chơi:</strong> Di chuyển chuột hoặc chạm sang trái/phải thẻ bài để xem các lựa chọn. Nhấp trực tiếp vào nửa trái hoặc nửa phải của thẻ để chọn. 
        <span className="block mt-1 font-semibold text-[#f87171]">
          ⚠️ Giữ mọi chỉ số trên 0%! Nếu bất kỳ chỉ số nào chạm đáy, bạn thua cuộc lập tức.
        </span>
      </div>

      <button
        onClick={onStart}
        className="w-full py-3 rounded-xl text-sm font-semibold tracking-wider transition-all duration-200 hover:brightness-110 active:scale-95 cursor-pointer"
        style={{
          background: "#1a2e1a",
          color: "#f5ede0",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          fontFamily: "var(--font-body)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        Bắt đầu chèo lái →
      </button>
    </div>
  );
}
