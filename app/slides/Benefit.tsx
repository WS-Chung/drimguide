import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function Benefit() {
  return (
    <SlideShell
      number="08"
      eyebrow="BENEFIT · 기대 효과"
      title="프로젝트별 최적화 + 직무별 페르소나 = 회사 고유 AI 자산"
      description="하나의 룰로 다양한 직무와 프로젝트를 커버할 수 없다는 한계를 인정합니다. KIT를 매 프로젝트마다 따로 설치·최적화하고, 직무 프로필을 조합해 페르소나를 구현하면 회사만의 AI 활용 스킬셋이 점차 정교해집니다."
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <Kpi value="N" label="프로젝트 = N개 최적화" />
        <Kpi value="4" label="직무 프로필 조합" />
        <Kpi value="∞" label="페르소나 가능성" />
      </div>

      <CardGrid cols={2}>
        <Card title="🎯 프로젝트별 최적화" badge="핵심" accent="brand">
          <p className="mb-1.5">
            로보틱스 / 백엔드 / 드림심 / 기획 / 마케팅 — 각 프로젝트는 도메인 용어 · 코드
            컨벤션 · 외부 제약이 다릅니다.
          </p>
          <p>
            KIT는 <strong className="text-slate-100">한 번 설치하면 그 프로젝트 폴더 안에서만</strong>{" "}
            적용됩니다. 다른 프로젝트에는 영향이 없고, 각자의 컨텍스트에 맞게 따로
            최적화할 수 있습니다.
          </p>
          <p className="mt-1.5 text-[11.5px] text-slate-500">
            글로벌 룰 X → 프로젝트별 룰 ○
          </p>
        </Card>
        <Card title="👤 직무별 페르소나" badge="조합" accent="emerald">
          <p className="mb-1.5">
            <strong className="text-slate-100">minimal · developer · product · business</strong>{" "}
            네 가지 프로필을 단독 또는 조합으로 선택.
          </p>
          <ul className="list-disc pl-5 space-y-0.5">
            <li>PM이 백엔드 PoC 중 → product + developer</li>
            <li>마케터가 고객 응대 → business 단독</li>
            <li>지원 부서 → minimal로 가볍게 시작</li>
          </ul>
          <p className="mt-1.5 text-[11.5px] text-slate-500">
            한 사람도 프로젝트마다 다른 페르소나 가능.
          </p>
        </Card>
      </CardGrid>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          예상 시나리오 — 페르소나 조합 표
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-800/70 bg-ink-800/40 backdrop-blur">
          <table className="min-w-full text-[13px]">
            <thead className="bg-ink-700/40 text-slate-400 text-[11px] uppercase tracking-wider">
              <tr>
                <Th>상황</Th>
                <Th>프로필 조합</Th>
                <Th>도움받는 작업</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              <PRow scenario="개발자가 새 백엔드 모듈" combo="developer">
                구현 · 리뷰 · 커밋 메시지 · SDD 모드 자동 적용
              </PRow>
              <PRow scenario="PM이 신규 기능 PRD" combo="product">
                아이디어 → 요구사항 정리 → 사용자 스토리
              </PRow>
              <PRow scenario="PM이 PoC 코드 직접 작성" combo="product + developer">
                PRD 초안과 코드 골격을 같은 도구 안에서 오가며 작성
              </PRow>
              <PRow scenario="마케터가 고객 메일·공지문" combo="business">
                고객 응대 답변 · 제안서 메시지 · 외부 공지문 톤 일관성
              </PRow>
              <PRow scenario="지원 부서가 처음 도입" combo="minimal">
                회사 공통 AI 사용 룰만 가볍게 적용 — 부담 없이 시작
              </PRow>
              <PRow scenario="QA · 검증" combo="developer + business">
                테스트 케이스 작성 + 결함 리포트 외부 공유 톤
              </PRow>
            </tbody>
          </table>
        </div>
      </div>

      <CardGrid cols={3}>
        <Card title="📈 단기 효과 (1~2개월)" accent="brand">
          <ul className="list-disc pl-5 space-y-1">
            <li>설치 한 번으로 도구·OS 차이 없이 동일 룰 적용</li>
            <li>매번 "보안 지켜·출처 남겨" 안 말해도 됨</li>
            <li>잘 동작한 프롬프트가 .md로 남음</li>
          </ul>
        </Card>
        <Card title="📊 중기 효과 (3~6개월)" accent="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>Drive AI-Knowhow에 회사 도메인 특화 자산 축적</li>
            <li>막힌 사례가 다음 KIT 배포본 개선 트리거</li>
            <li>직무별 페르소나가 안정화</li>
          </ul>
        </Card>
        <Card title="🌐 장기 효과 (6개월~)" accent="brand">
          <ul className="list-disc pl-5 space-y-1">
            <li>회사 고유의 AI 활용 스킬셋 자산화</li>
            <li>신규 합류자도 같은 표준으로 빠르게 합류</li>
            <li>운영 데이터 기반 정식 거버넌스 정립 가능 시점 도래</li>
          </ul>
        </Card>
      </CardGrid>

      <Callout variant="info" title="ℹ 한 줄 요약">
        <strong className="text-brand-200">"하나의 룰로 모두 커버할 수 없다"</strong>는
        한계를 인정하고, 매 프로젝트마다 따로 설치·최적화하며, 잘된 사례를 자연스럽게
        공유해 회사 고유의 AI 활용 스킬셋을 함께 다듬어 갑니다.
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
function PRow({
  scenario,
  combo,
  children,
}: {
  scenario: string;
  combo: string;
  children: React.ReactNode;
}) {
  return (
    <tr className="hover:bg-brand-500/5 transition">
      <td className="px-3.5 py-2.5 align-top text-slate-100 font-semibold">
        {scenario}
      </td>
      <td className="px-3.5 py-2.5 align-top whitespace-nowrap">
        <span className="font-mono text-[12px] text-brand-200">{combo}</span>
      </td>
      <td className="px-3.5 py-2.5 align-top text-slate-300 leading-relaxed">
        {children}
      </td>
    </tr>
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
