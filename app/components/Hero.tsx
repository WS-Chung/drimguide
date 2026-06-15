export default function Hero() {
  return (
    <header
      id="overview"
      className="section-anchor relative overflow-hidden border-b border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl pointer-events-none" />
      <div className="relative pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 dark:bg-slate-900/60 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-200">
          <span className="inline-block h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
          Internal Announcement · v1.0
        </div>
        <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          DrimAES <span className="gradient-text">AI 활용 거버넌스</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline"> &amp; 업무 효율화 가이드</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          공용 Claude(Max/Pro) 계정 운영, AX 워크플로우, Slack · Notion · GitHub ·
          Google Workspace 연동, 그리고 사내 유휴 하드웨어 활용까지. 모든 구성원이
          같은 룰로 더 빠르게, 더 잘 만들기 위한 사내 표준입니다.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#accounts"
            className="rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 text-sm shadow-sm transition"
          >
            계정 매핑 바로가기
          </a>
          <a
            href="#ax-workflow"
            className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 text-slate-800 dark:text-slate-100 font-semibold px-5 py-2.5 text-sm transition"
          >
            AX 워크플로우 보기
          </a>
          <a
            href="#integration-google"
            className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 text-slate-800 dark:text-slate-100 font-semibold px-5 py-2.5 text-sm transition"
          >
            연동 가이드
          </a>
        </div>

        <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
          <Fact label="공용 계정" value="9개" />
          <Fact label="Max / Pro" value="8 / 1" />
          <Fact label="월 결제" value="$825" />
          <Fact label="대상 인원" value="개발 16 + 기획·운영 7" />
        </dl>
      </div>
    </header>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 px-4 py-3 backdrop-blur">
      <dt className="text-xs text-slate-500">{label}</dt>
      <dd className="mt-1 text-lg font-bold">{value}</dd>
    </div>
  );
}
