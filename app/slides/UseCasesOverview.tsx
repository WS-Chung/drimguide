import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function UseCasesOverview() {
  return (
    <SlideShell
      number="11"
      eyebrow="FIRST USE CASE · 개요"
      title="가장 먼저 만드는 단 하나의 기반 — Agent 표준 룰셋"
      description="Team Plan 전환 직후 가장 먼저 적용해야 할 단 하나의 유즈케이스입니다. 16명이 OS·도구 차이 없이 동일한 SDD·아키텍처·커밋 룰로 일하도록 만드는 기반 작업이며, 이후의 Slack·Workspace·GitHub·Notion 자동화는 모두 이 기반 위에 단계적으로 쌓입니다."
    >
      <Card title="🧰 UC1 · Agent 표준 룰셋 배포" badge="D+1~3" accent="emerald">
        <p className="font-semibold text-slate-100 text-[14px] mb-1.5">
          환경·도구 무관 동일 룰셋 배포
        </p>
        <p>
          <span className="font-mono text-emerald-200">agent-deploy</span> CLI로 프로젝트
          마다 표준 룰셋(<span className="font-mono">.agents/rules/</span> 카노니컬 소스 +
          Claude/Codex/Gemini 진입점)을 1회 설치. 16명이 macOS·Windows·Linux × 어떤 AI
          도구를 쓰더라도 의미적으로 동일한 결과를 만든다.
        </p>
        <p className="mt-2 text-[12.5px] text-slate-400">
          상세 셋업과 명령 예시 → 좌측 메뉴의{" "}
          <strong className="text-emerald-200">UC1 · Agent 표준 룰셋</strong> 슬라이드.
        </p>
      </Card>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          왜 이걸 가장 먼저 하는가
        </p>
        <CardGrid cols={3}>
          <div>
            <p className="font-semibold text-slate-100 text-[13.5px]">⏱ 즉시성</p>
            <p className="mt-1 text-[12.5px] text-slate-400 leading-relaxed">
              install.sh / install.bat 실행 한 번으로 1~3일 내 셋업 완료. 다음 워킹데이부터
              16명 작업물에서 룰 일관성이 즉시 관찰됨.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-100 text-[13.5px]">📊 가시성</p>
            <p className="mt-1 text-[12.5px] text-slate-400 leading-relaxed">
              모든 프로젝트의 <span className="font-mono">AGENTS.md</span>·
              <span className="font-mono">CLAUDE.md</span> 진입점이 동일한 표준을 참조 →
              PR·커밋·문서 톤이 자연스럽게 통일됨.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-100 text-[13.5px]">🔁 확장성</p>
            <p className="mt-1 text-[12.5px] text-slate-400 leading-relaxed">
              UC1이 깔린 프로젝트에는 이후 Slack·Workspace·GitHub·Notion 자동화를 같은 룰
              위에서 안전하게 추가 가능. 이 기반 없이 시작하면 도구별 결과 품질이 어긋남.
            </p>
          </div>
        </CardGrid>
      </div>

      <Callout variant="info" title="ℹ 운영 룰">
        UC1에는 <strong className="text-brand-200">Use Case Owner</strong> 1명을 지정합니다.
        첫 2주는 데이터 수집 기간 — 설치 성공률 / 평균 셋업 시간 / 룰 변경의 전사 전파
        시간 / 도구별 의미 동등성 등을 측정합니다. 3주차 회고에서 정식 룰로 승격하거나
        보강합니다. <strong className="text-brand-200">UC1이 안정화된 뒤에야</strong>{" "}
        Slack 데일리 요약·회의록 자동화·PR 자동 리뷰 같은 후속 UC를 단계적으로 추가합니다.
      </Callout>
    </SlideShell>
  );
}
