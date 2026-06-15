import SlideShell from "@/app/components/SlideShell";

const phases = [
  {
    num: "01",
    title: "계정 접근",
    items: [
      "1Password에서 해당 계정 비밀번호 공유 받기",
      "Google 로그인 → 2단계 인증 완료",
      "Workspace 메일 수신 확인",
    ],
  },
  {
    num: "02",
    title: "Claude 셋업",
    items: [
      "Claude 웹/Desktop 로그인",
      "Connectors: Drive / GitHub / Notion 연결 확인",
      "Claude Code CLI 설치 및 로그인",
    ],
  },
  {
    num: "03",
    title: "협업 도구 가입",
    items: [
      "Slack: #ai-announcement, #ax-stream, #ai-{account} 가입",
      "Notion 워크스페이스 초대 수락",
      "GitHub 조직 초대 + 2FA",
    ],
  },
  {
    num: "04",
    title: "첫 작업 룰 숙지",
    items: [
      "PRD 템플릿 1회 읽기",
      "레포의 CLAUDE.md 1회 읽기",
      "1번째 PR 머지 후 노하우 1줄 등록",
    ],
  },
];

export default function Checklist() {
  return (
    <SlideShell
      number="12"
      eyebrow="ONBOARDING"
      title="신규 / 이동 멤버 체크리스트"
      description="공용 계정에 합류하는 멤버가 1시간 안에 끝낼 수 있도록 정렬했습니다."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {phases.map((p) => (
          <div
            key={p.num}
            className="rounded-2xl glass p-4 sm:p-5 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white font-bold text-sm shadow-glow-sm">
                {p.num}
              </span>
              <h3 className="font-semibold text-slate-50 text-base">{p.title}</h3>
            </div>
            <ul className="space-y-2">
              {p.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-2.5 text-[13.5px] text-slate-200"
                >
                  <span className="mt-[3px] inline-grid place-items-center h-4 w-4 shrink-0 rounded border border-slate-600 bg-ink-800 text-[10px] text-slate-500">
                    □
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-[11.5px] text-slate-500">
        ※ 항목별 인수 완료 후 초기 할당자에게 “온보딩 완료” DM 보내기.
      </p>
    </SlideShell>
  );
}
