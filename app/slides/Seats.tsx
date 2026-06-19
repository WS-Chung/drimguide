import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";

export default function Seats() {
  return (
    <SlideShell
      number="04"
      eyebrow="TEAM SEATS · 좌석 구성"
      title="팀 시트 구성 — Premium 6 + Standard 10"
      description="분야별 업무 강도에 따라 Standard / Premium 혼합. 분기마다 등급 재평가하며, 인원 변동은 #ai-governance 채널에 통지합니다."
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <Kpi value="16" label="Total Seats" />
        <Kpi value="6" label="Premium · Claude Code" />
        <Kpi value="10" label="Standard" />
      </div>

      <div className="rounded-2xl border border-slate-800/70 bg-ink-800/40 backdrop-blur overflow-x-auto">
        <table className="min-w-full text-[13px]">
          <thead className="bg-ink-700/40 text-slate-400 text-[11px] uppercase tracking-wider">
            <tr>
              <Th>좌석</Th>
              <Th>대상 인원</Th>
              <Th>핵심 권한</Th>
              <Th>비고</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70">
            <tr className="hover:bg-brand-500/5 transition">
              <Td>
                <strong className="text-brand-200">Premium × 6</strong>
              </Td>
              <Td>
                BSP·커널, 백엔드 리드, 로보틱스 리드, 드림심 리드, 앱 리드, 검증 리드
              </Td>
              <Td>Claude Code 포함, 5× usage</Td>
              <Td>코드 헤비 작업 / PR 자동 리뷰 운영</Td>
            </tr>
            <tr className="hover:bg-brand-500/5 transition">
              <Td>
                <strong className="text-emerald-200">Standard × 10</strong>
              </Td>
              <Td>일반 개발자, 주니어, 신규 합류자</Td>
              <Td>Claude.ai 웹·데스크톱·앱 + Connectors</Td>
              <Td>Pro 대비 더 많은 usage / Premium 업그레이드 가능</Td>
            </tr>
            <tr className="hover:bg-brand-500/5 transition">
              <Td>기획·운영 (planner1)</Td>
              <Td>7명 → 별도 검토</Td>
              <Td>현 Pro 유지 / 또는 Standard 합류</Td>
              <Td>1개월 사용량 측정 후 결정</Td>
            </tr>
          </tbody>
        </table>
      </div>

      <CardGrid cols={2}>
        <Card title="🎯 공유 Projects (도메인별)" accent="brand">
          <ul className="list-disc pl-5 space-y-1">
            <li>로보틱스 / 드림심 / 앱 / 백엔드 / 커널 / 검증 / 기획</li>
            <li>도메인별 Project에 멤버 / 자료 / 프롬프트 격리</li>
            <li>고객사 비공개 자료는 별도 Restricted Project</li>
          </ul>
        </Card>
        <Card title="🛡 권한 모델" accent="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>어드민: PMO 1~2명</li>
            <li>도메인 리드: 해당 Project 관리자</li>
            <li>일반 멤버: 본인 도메인 + _shared</li>
            <li>SSO 연동(Google Workspace) — Phase 2 동시 달성</li>
          </ul>
        </Card>
      </CardGrid>

      <p className="text-[11.5px] text-slate-500 leading-relaxed">
        ※ Standard ↔ Premium 등급 변경은 어드민 콘솔(Organization settings → Organization)에서
        <strong className="text-slate-300"> 새 좌석 구매 없이 즉시 재할당</strong> 가능. 변경 시
        잔여 청구 주기 기준으로 일할 청구. 분기 1회 정기 리뷰 또는 #ai-governance에 사유
        명시 후 변경 신청.
      </p>
    </SlideShell>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left px-3.5 py-2.5 font-semibold whitespace-nowrap">
      {children}
    </th>
  );
}
function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-3.5 py-2.5 align-top text-slate-200 leading-relaxed">
      {children}
    </td>
  );
}

function Kpi({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl glass p-5 text-center relative overflow-hidden">
      <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-brand-500/15 blur-2xl pointer-events-none" />
      <p className="relative text-3xl font-extrabold gradient-text">{value}</p>
      <p className="relative mt-1.5 text-xs text-slate-400 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
