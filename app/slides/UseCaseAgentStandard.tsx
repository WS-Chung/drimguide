import SlideShell from "@/app/components/SlideShell";
import BlockFlow from "@/app/components/BlockFlow";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function UseCaseAgentStandard() {
  return (
    <SlideShell
      number="12"
      eyebrow="USE CASE 1 · AGENT STANDARD ROLLOUT"
      title="사내 Agent 표준 룰셋 배포 — 환경·도구 무관 동일 룰"
      description="agent-deploy CLI로 프로젝트마다 표준 룰셋(SDD · 아키텍처 · 커밋 컨벤션 · 보안)을 1회 설치. 16명이 macOS/Windows/Linux × Claude/Codex/Gemini 어떤 조합으로 일해도 의미적으로 동일한 룰과 산출물을 만든다. 카노니컬 룰은 Google 공유 드라이브와 미러되어 비개발자까지 자연스럽게 지식이 공유된다."
    >
      <CardGrid cols={2}>
        <Card title="🎯 목표 효용" accent="brand">
          <ul className="list-disc pl-5 space-y-1">
            <li>16명 모두 동일 SDD/아키텍처/커밋 룰로 작업 — 환경·도구 분기 제거</li>
            <li>도구·OS·IDE 차이를 <strong>adapter가 흡수</strong>해 의미 동등성(semantic equivalence) 보장</li>
            <li>룰 변경이 회사 전역에 <strong>한 번의 install / sync로 즉시 전파</strong></li>
            <li>신규 합류자가 install 한 번으로 동일 환경 확보 (셋업 1시간 → 5분)</li>
          </ul>
        </Card>
        <Card title="📋 필요 요소" accent="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              GitHub 저장소{" "}
              <span className="font-mono text-emerald-200">puzzle-drimaes/agent_guide</span>
            </li>
            <li>
              <span className="font-mono text-emerald-200">.agents/rules/</span>{" "}
              canonical 룰 소스 (common · developer)
            </li>
            <li>
              <span className="font-mono text-emerald-200">agent-deploy/</span>{" "}
              CLI installer (Manifest → Plan → Adapter → Apply → State)
            </li>
            <li>도구 adapter: Claude / Codex / Gemini (각 프로젝트에 진입점 + .agents/ 자동 생성)</li>
            <li>
              Google 공유 드라이브 폴더{" "}
              <span className="font-mono text-emerald-200">/AI-Workspace/_agent-rules</span>{" "}
              (캐노니컬 미러)
            </li>
          </ul>
        </Card>
      </CardGrid>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          배포 흐름 — Canonical Rule First
        </p>
        <BlockFlow
          items={[
            { num: "01", title: ".agents/rules", sub: "canonical 룰" },
            { num: "02", title: "agent-deploy", sub: "Manifest+Plan" },
            { num: "03", title: "Adapter", sub: "Claude/Codex/Gemini" },
            { num: "04", title: "Project Files", sub: "AGENTS.md 등" },
            { num: "05", title: "Drive 미러", sub: "지식 공유화" },
          ]}
        />
        <p className="mt-3 text-[12px] text-slate-400 leading-relaxed">
          파일 구조의 동일성이 아니라 <strong className="text-slate-200">의미의 동일성</strong>을
          목표. 도구별 차이(예: Codex의 <span className="font-mono">.codex/config.toml</span> vs
          Claude의 <span className="font-mono">.claude/agents/</span>)는 adapter가 흡수.
        </p>
      </div>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          셋업 절차 (소요 0.5~1일)
        </p>
        <Step n={1}>
          신규 프로젝트는{" "}
          <span className="font-mono text-brand-200">puzzle-drimaes/agent_guide</span> 또는
          표준 레포 템플릿에서 시작.
        </Step>
        <Step n={2}>
          프로젝트 루트에서 <span className="font-mono text-brand-200">install.sh</span>{" "}
          (macOS/Linux) 또는 <span className="font-mono text-brand-200">install.bat</span>{" "}
          (Windows) 실행.
        </Step>
        <Step n={3}>
          profile 선택 (<span className="font-mono">minimal · developer · product · business</span>)
          + target 선택 (Claude / Codex / Gemini 중 복수 가능). 어드민 결정 후 사내 표준은{" "}
          <strong className="text-slate-100">developer</strong> 기본.
        </Step>
        <Step n={4}>
          agent-deploy가 자동으로 생성:{" "}
          <span className="font-mono text-brand-200">AGENTS.md</span>,{" "}
          <span className="font-mono text-brand-200">CLAUDE.md</span>,{" "}
          <span className="font-mono text-brand-200">GEMINI.md</span>,{" "}
          <span className="font-mono text-brand-200">.agents/</span>,{" "}
          <span className="font-mono text-brand-200">.claude/</span>,{" "}
          <span className="font-mono text-brand-200">.codex/</span>,{" "}
          <span className="font-mono text-brand-200">.gemini/</span>,{" "}
          <span className="font-mono text-brand-200">.agent-deploy/install-state.json</span>.
        </Step>
        <Step n={5}>
          작업 시작 — 모든 도구가 동일 룰로 작동. SDD 모드(none/lite/full)는 agent가{" "}
          <strong className="text-slate-100">작업 성격에 따라 자동 판단</strong>해 적용.
        </Step>
        <Step n={6}>
          룰 변경 시 canonical 소스(<span className="font-mono">.agents/rules/</span>)에서만
          수정 → push → 각 프로젝트에서{" "}
          <span className="font-mono text-brand-200">agent-deploy update</span>로 전파. Drive
          미러도 동기화.
        </Step>
      </div>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          샘플 명령
        </p>
        <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-brand-500/20 p-3.5 text-[11.5px] leading-relaxed text-slate-200 font-mono whitespace-pre">{`# 신규 프로젝트에 standard 룰셋 + 다중 target 배포
./install.sh --scope project \\
             --profile developer \\
             --target claude,codex,gemini

# 변경된 룰을 기존 프로젝트에 동기화 (managed 영역만)
./agent-deploy update --scope project --project .

# 설치 상태 점검 (drift / missing 파일)
./agent-deploy doctor --project .

# 룰 변경 전 dry-run (어떤 파일이 어떻게 바뀔지 미리 보기)
./agent-deploy install --dry-run --scope project --target claude`}</pre>
      </div>

      <CardGrid cols={3}>
        <Card title="📐 SDD 작업 모드" accent="brand">
          <p className="mb-1.5">3가지 모드, 같은 A~Z 흐름의 압축률 차이만:</p>
          <ul className="list-disc pl-5 space-y-0.5 text-[12.5px]">
            <li>
              <strong className="text-slate-100">none</strong>: A → C → Z (간단 작업)
            </li>
            <li>
              <strong className="text-slate-100">lite</strong>: A → C → E → F → G → Z
            </li>
            <li>
              <strong className="text-slate-100">full</strong>: A → B → C → D → E → F → G → H → Z (대형 변경)
            </li>
          </ul>
          <p className="mt-1.5 text-[11.5px] text-slate-400">
            agent가 직접 판단. 사용자에게 불필요한 QnA 안 함.
          </p>
        </Card>
        <Card title="🏗 아키텍처 표준" accent="emerald">
          <ul className="list-disc pl-5 space-y-0.5 text-[12.5px]">
            <li>Backend: Clean / Hexagonal</li>
            <li>Frontend: Feature-based</li>
            <li>Mobile/Desktop: MVVM + Clean</li>
            <li>CLI/Automation: Command → UseCase → Adapter</li>
          </ul>
        </Card>
        <Card title="📝 커밋 컨벤션" accent="amber">
          <pre className="font-mono text-[11px] leading-snug text-amber-100 mt-1">{`[type] 한글 제목

1. 내용
2. 수정 내역
3. 영향도

jira : DRM-123`}</pre>
          <p className="mt-1 text-[11px] text-slate-400">
            type: feat · fix · refactor · chore · docs · test
          </p>
        </Card>
        <Card title="🛡 공통 보안 룰" accent="rose">
          <ul className="list-disc pl-5 space-y-0.5 text-[12.5px]">
            <li>token · key · 계정 정보 파일 금지</li>
            <li>외부 자료는 출처/라이선스 표기</li>
            <li>관리 파일에 민감정보 금지</li>
          </ul>
        </Card>
        <Card title="🔁 지식 공유 루프" accent="brand">
          <p>
            PR 노하우 → Notion AI 노하우 DB → 검증된 프롬프트는{" "}
            <strong className="text-slate-100">.agents/skills/</strong>로 승격 → 다음 install부터
            전 사원이 사용.
          </p>
        </Card>
        <Card title="🌐 Google Drive 미러" accent="slate">
          <p>
            캐노니컬 룰을{" "}
            <span className="font-mono">/AI-Workspace/_agent-rules</span>에 자동 미러.
            비개발자도 Markdown으로 룰 직접 열람 가능 — 진정한 지식 공유화.
          </p>
        </Card>
      </CardGrid>

      <Callout variant="info" title="ℹ 첫 도입 시점에 이걸 1순위로 두는 이유">
        다른 3개 UC(Workspace 회의록, GitHub PR 리뷰, Notion PRD 회고)는 모두{" "}
        <strong className="text-slate-100">표준 룰셋이 깔린 프로젝트</strong>를 전제로 동작합니다.
        UC1을 먼저 깔지 않으면 도구·환경별 결과 품질이 달라져{" "}
        UC2~UC4의 효과도 함께 떨어집니다. 따라서{" "}
        <strong className="text-slate-100">Day 1~3에 UC1 적용 → Day 4부터 UC2~UC4 순차 가동</strong>이
        가장 합리적인 순서입니다.
      </Callout>

      <Callout variant="success" title="✓ 측정 지표 (2주차 회고)">
        ① 신규 프로젝트 install 성공률, ② 16명 평균 셋업 소요 시간, ③ 룰 변경 후 전사 전파에
        걸린 시간, ④ 도구별 산출물 의미 동등성(샘플 PR 비교), ⑤ Prompt DB → skill 승격 건수.
      </Callout>
    </SlideShell>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start py-2 px-3.5 rounded-lg bg-ink-800/50 border border-slate-800/60 mb-1.5 last:mb-0">
      <span className="shrink-0 grid place-items-center h-6 w-6 rounded-md bg-brand-500/20 text-brand-200 font-mono text-[11px] font-bold ring-1 ring-brand-400/30">
        {n}
      </span>
      <div className="flex-1 text-[13px] text-slate-200 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
