export default function Footer() {
  return (
    <footer className="no-print py-10 text-sm text-slate-500 dark:text-slate-400">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p>© DrimAES · 사내 전용 가이드</p>
        <p>
          문의/개정 제안: <span className="font-mono">#ai-governance</span>{" "}
          (Slack)
        </p>
      </div>
      <p className="mt-3 text-xs">
        본 문서는 DrimAES의 영업비밀 및 내부 운영자료를 포함합니다. 외부 유출 및
        무단 복제 금지.
      </p>
    </footer>
  );
}
