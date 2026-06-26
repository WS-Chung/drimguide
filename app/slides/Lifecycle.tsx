import SlideShell from "@/app/components/SlideShell";
import BlockFlow from "@/app/components/BlockFlow";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function Lifecycle() {
  return (
    <SlideShell
      number="06"
      eyebrow="USAGE · KIT 사용법"
      title="에이전트 라이프사이클 · SDD · 프롬프트 컨텍스트"
      description="KIT를 설치한 후 AI가 한 번의 요청을 처리하는 흐름. 회사 룰이 미리 깔린 컨텍스트 위에 내 요청이 얹히기 때문에, 매번 보안·출처·커밋 양식을 말하지 않아도 됩니다."
    >
      {/* 상세 가이드 바로가기 — 타이틀 직하 */}
      <div className="rounded-2xl glass p-4 sm:p-5 flex flex-wrap items-center gap-3 justify-between">
        <div className="flex-1 min-w-[220px]">
          <p className="text-[15px] font-semibold text-slate-100">
            📗 상세 사용 가이드
          </p>
          <p className="text-[13.5px] text-slate-400 mt-0.5 leading-relaxed">
            대화 요령 · 프롬프트 라이브러리 · 지식 공유(가져오기 · 승격 · 내보내기)
            전체 흐름이 한 페이지에 정리되어 있습니다. 설치 이후 단계가 궁금하면
            펼쳐 보세요.
          </p>
        </div>
        <a
          href="#usage-guide"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-500/20 hover:bg-brand-500/30 text-brand-100 font-semibold px-4 py-2.5 text-[14.5px] ring-1 ring-brand-400/35 transition"
        >
          상세 가이드 열기 →
        </a>
      </div>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          한 건의 요청이 도는 흐름
        </p>
        <BlockFlow
          items={[
            { num: "①", title: "요청 해석", sub: "무엇을 원하나 (A)" },
            { num: "②", title: "모드 판단", sub: "none/lite/full" },
            { num: "③", title: "룰+프롬프트", sub: "회사 표준 적용" },
            { num: "④", title: "작업 수행", sub: "설계·구현 (D~F)" },
            { num: "⑤", title: "검증", sub: "테스트·diff (G)" },
            { num: "⑥", title: "결과 보고", sub: "변경·남은일 (Z)" },
          ]}
        />
      </div>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          SDD 모드 — 같은 흐름, 다른 깊이
        </p>
        <p className="text-[14.5px] text-slate-300 leading-relaxed mb-3">
          SDD(Spec Driven Development)는 "문서부터 쓰는 무거운 방법론"이 아닙니다. 매번
          질문으로 멈추지 않도록, 에이전트가 요청의 무게를 보고{" "}
          <strong className="text-slate-100">스스로 적절한 깊이</strong>를 고르는 규칙입니다.
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-800/70 bg-ink-800/40 backdrop-blur">
          <table className="min-w-full text-[14px]">
            <thead className="bg-ink-700/40 text-slate-400 text-[12px] uppercase tracking-wider">
              <tr>
                <Th>모드</Th>
                <Th>흐름</Th>
                <Th>언제</Th>
                <Th>산출물</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              <tr className="hover:bg-brand-500/5 transition">
                <Td className="whitespace-nowrap">
                  <span className="font-mono font-semibold text-slate-200 px-2 py-0.5 rounded bg-slate-700/40">none</span>
                </Td>
                <Td><code className="text-brand-200">A → C → Z</code></Td>
                <Td>단순 질문, 오타·표현 수정처럼 영향 없는 작은 일</Td>
                <Td>별도 문서 없음 · 결과 보고만</Td>
              </tr>
              <tr className="hover:bg-brand-500/5 transition">
                <Td className="whitespace-nowrap">
                  <span className="font-mono font-semibold text-emerald-200 px-2 py-0.5 rounded bg-emerald-500/20">lite</span>
                </Td>
                <Td><code className="text-brand-200">A → C → E → F → G → Z</code></Td>
                <Td>한두 파일 수준 문서/설정 보강, 명확한 작은 변경</Td>
                <Td>간단한 계획 + 변경 후 확인</Td>
              </tr>
              <tr className="hover:bg-brand-500/5 transition">
                <Td className="whitespace-nowrap">
                  <span className="font-mono font-semibold text-brand-200 px-2 py-0.5 rounded bg-brand-500/20">full</span>
                </Td>
                <Td><code className="text-brand-200">A → B → C → D → E → F → G → H → Z</code></Td>
                <Td>새 기능·구조 변경, 여러 사람이 이어받는 큰 작업</Td>
                <Td>requirements · design · tasks · review 스펙</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[13px] text-slate-400 leading-relaxed">
          기본은 에이전트가 자동 선택. 원하는 모드를 직접 지정하고 싶다면 "이건 가볍게
          lite로", "설계 문서까지 full로" 같이 한 줄로 지정하면 됩니다. 파괴적 작업·보안·비용·
          외부 배포는 모드와 무관하게 먼저 확인합니다.
        </p>
      </div>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          프롬프트 컨텍스트는 5층으로 쌓입니다
        </p>
        <Layer n="01" name="진입점" color="brand" desc="AGENTS.md · CLAUDE.md · GEMINI.md (룰 포인터)" />
        <Layer n="02" name="회사 룰" color="brand" desc=".agents/rules/ — 보안 · 출처 · SDD · 아키텍처 · 커밋" />
        <Layer n="03" name="스킬" color="emerald" desc="코드리뷰 · 회의록 · 커밋메시지 등 작업 절차" />
        <Layer n="04" name="프롬프트" color="emerald" desc="검증된 프롬프트 골격 (.agents/prompts/)" />
        <Layer n="05" name="내 요청" color="amber" desc='"이거 해줘" + 목적 · 배경 · 제약 — 여러분이 직접 쓰는 부분' />
        <p className="mt-3 text-[13px] text-slate-400 leading-relaxed">
          위 4층은 KIT 설치 시 이미 깔려 있습니다. 매번 "보안 지켜 · 출처 남겨 · 커밋 양식"을
          말하지 않아도 자동 적용 — 여러분은 <strong className="text-slate-200">하고 싶은 일만</strong>{" "}
          말하면 됩니다.
        </p>
      </div>

      <Callout variant="info" title="ℹ 진입점은 룰을 직접 담지 않습니다">
        <span className="font-mono text-brand-200">AGENTS.md</span> /{" "}
        <span className="font-mono text-brand-200">CLAUDE.md</span> /{" "}
        <span className="font-mono text-brand-200">GEMINI.md</span>는{" "}
        <strong className="text-brand-200">포인터 역할</strong>만 하고, 실제 룰은{" "}
        <span className="font-mono text-brand-200">.agents/rules/</span> 안에 한 번만
        있습니다. 도구가 달라도 의미는 동일하게 적용됩니다.
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
function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <td className={`px-3.5 py-2.5 align-top text-slate-200 leading-relaxed ${className}`}>
      {children}
    </td>
  );
}

function Layer({
  n,
  name,
  color,
  desc,
}: {
  n: string;
  name: string;
  color: "brand" | "emerald" | "amber";
  desc: string;
}) {
  const bg = {
    brand: "bg-brand-500/10 border-brand-400/30",
    emerald: "bg-emerald-500/10 border-emerald-400/30",
    amber: "bg-amber-500/10 border-amber-400/30",
  }[color];
  const nameColor = {
    brand: "text-brand-200",
    emerald: "text-emerald-200",
    amber: "text-amber-200",
  }[color];
  return (
    <div className={`flex items-start gap-3 rounded-lg border px-3.5 py-2.5 mb-1.5 last:mb-0 ${bg}`}>
      <span className="shrink-0 font-mono text-[12px] font-bold text-slate-400 mt-0.5">
        {n}
      </span>
      <div className="flex-1 min-w-0">
        <p className={`text-[14.5px] font-semibold ${nameColor}`}>{name}</p>
        <p className="text-[13.5px] text-slate-300 mt-0.5">{desc}</p>
      </div>
    </div>
  );
}
