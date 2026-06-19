import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import BlockFlow from "@/app/components/BlockFlow";
import Callout from "@/app/components/Callout";

export default function GovernanceV2() {
  return (
    <SlideShell
      number="03"
      eyebrow="GOVERNANCE V2 · 전환"
      title="거버넌스 v2 — Team Plan 16-seat 전환"
      description="실무진 피드백 5건 중 4건을 사실로 검증하고, 한 가지 결정으로 모두 해결합니다. 같은 예산($800/월) 안에서 정식 라이선스 + 어드민 콘솔 + 공유 Projects를 확보합니다."
    >
      <CardGrid cols={2}>
        <Card title="⛺ As-is — 공용 8계정" badge="ToS 위반" accent="amber">
          <ul className="list-disc pl-5 space-y-1">
            <li>Max 8개 × $100 = $800/월</li>
            <li>16명이 8계정을 돌려씀 → 약관 위반</li>
            <li>채팅·Project 단절, 어드민 콘솔 없음</li>
            <li>Slack/Notion 통합 8회 반복 셋업</li>
          </ul>
        </Card>
        <Card title="🚀 To-be — Team 16-seat" badge="권장" accent="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>Premium 6 + Standard 10 ≈ $800/월</li>
            <li>16명 정식 개별 좌석 — ToS 합치</li>
            <li>공유 Projects + 어드민 콘솔로 일괄 운영</li>
            <li>Slack/Notion 통합 1회 셋업으로 전체 적용</li>
          </ul>
        </Card>
      </CardGrid>

      <div className="rounded-2xl border border-slate-800/70 bg-ink-800/40 backdrop-blur overflow-x-auto">
        <table className="min-w-full text-[13px]">
          <thead className="bg-ink-700/40 text-slate-400 text-[11px] uppercase tracking-wider">
            <tr>
              <Th>#</Th>
              <Th>실무진 의견</Th>
              <Th>판정</Th>
              <Th>전환 시 해결 방식</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70">
            <Row id="①" issue="비용 효율성" verdict="ok" verdictText="✅ 사실">
              Standard $20/연간 × 10 + Premium $100/연간 × 6 ={" "}
              <strong className="text-slate-100">$800/월</strong>, 정식 라이선스로
              동일 비용
            </Row>
            <Row id="②" issue="통합/지식공유" verdict="ok" verdictText="✅ 사실">
              어드민 콘솔에서 4개 도구 일괄 연결, 공유 Projects 도메인별 운영
            </Row>
            <Row id="③" issue="새 9계정 시트 비용 누적" verdict="ok" verdictText="✅ 사실">
              Google Workspace는 시트 단위 자동 과금 — 9계정 추가 ={" "}
              <strong className="text-slate-100">월 +$63~$198 / 연 +$756~$2,376</strong>{" "}
              (100인 미만 Business 플랜 기준). Notion 멤버 추가 시 별도. 9계정 폐기 +
              Notion Guest 다운그레이드로 즉시 절감.
            </Row>
            <Row id="④" issue="즉시 적용 부담" verdict="ok" verdictText="✅ 합리">
              3주 점진 롤아웃 (Week 0~3), 강제 데드라인은 3주차 종료 시점
            </Row>
            <Row id="⑤" issue="계정 공유 = 이중 약관 위반" verdict="ng" verdictText="🚫 시급">
              Anthropic ToS <strong className="text-rose-200">§2/§12</strong> + Google Workspace 라이선스 공유 금지(<em className="text-rose-100">"Multiple users can't share a single license"</em>)로
              <strong className="text-rose-200"> Anthropic + Google 이중 약관 위반</strong>. Team 전환 시 자동 해소. 임시 운영 시 1계정=1명 단일 매핑 강제.
            </Row>
          </tbody>
        </table>
      </div>

      <BlockFlow
        items={[
          { num: "0", title: "WEEK 0 · 의사결정", sub: "계약 승인 + 감사" },
          { num: "1", title: "WEEK 1 · 기반 셋업", sub: "시드 16석 초대" },
          { num: "2", title: "WEEK 2 · 통합 표준화", sub: "커넥터 일괄" },
          { num: "3", title: "WEEK 3 · 실사용 시작", sub: "UC 4개 가동" },
        ]}
      />

      <Callout variant="success" title="✓ 한 가지 결정으로 5개 이슈 동시 해결">
        ①②⑤는 직접, ④는 3주 로드맵으로, ③은 부수 감사 작업으로 처리. 가이드 페이지
        거버넌스 로드맵 Phase 2를 즉시 발동시키면 됩니다. 자세한 검증 근거는 별도
        슬라이드 데크 <em>실무진 피드백 &amp; 팩트체크</em> 참고.
      </Callout>
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

function Row({
  id,
  issue,
  verdict,
  verdictText,
  children,
}: {
  id: string;
  issue: string;
  verdict: "ok" | "partial" | "ng";
  verdictText: string;
  children: React.ReactNode;
}) {
  const verdictColor =
    verdict === "ok"
      ? "text-emerald-300"
      : verdict === "partial"
      ? "text-amber-300"
      : "text-rose-300";
  return (
    <tr className="hover:bg-brand-500/5 transition">
      <td className="px-3.5 py-2.5 align-top whitespace-nowrap font-mono font-semibold text-brand-300">
        {id}
      </td>
      <td className="px-3.5 py-2.5 align-top text-slate-200">{issue}</td>
      <td className={`px-3.5 py-2.5 align-top font-semibold whitespace-nowrap ${verdictColor}`}>
        {verdictText}
      </td>
      <td className="px-3.5 py-2.5 align-top text-slate-300 leading-relaxed">
        {children}
      </td>
    </tr>
  );
}
