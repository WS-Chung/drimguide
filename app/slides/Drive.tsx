import SlideShell from "@/app/components/SlideShell";
import BlockFlow from "@/app/components/BlockFlow";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function Drive() {
  return (
    <SlideShell
      number="05"
      eyebrow="DRIVE · 공유드라이브 연결"
      title="지식 공유는 Google 공유 드라이브 한 곳에서만"
      description="Slack 채널·Notion DB 같은 추가 채널은 운영하지 않습니다. 모든 스킬·프롬프트·노하우·피드백은 Google 공유 드라이브의 AI-Knowhow 폴더 하나로 흐릅니다. 각자의 AI에이전트를 Google Drive MCP에 연결하면 가져오기·내보내기를 대화로 처리할 수 있습니다."
    >
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          AI-Knowhow 폴더 구조 (Google 공유 드라이브)
        </p>
        <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-brand-500/20 p-3.5 text-[13px] leading-relaxed text-slate-200 font-mono whitespace-pre">{`AI-Knowhow/
├ skills/        # 검증된 작업 절차 (.md)
├ prompts/       # 잘 동작한 프롬프트 골격 (.md)
├ docs/          # 도메인 메모, 결정 기록
└ feedbacks/     # 막힌 케이스 · 개선 제안 · 실패 사례`}</pre>
        <p className="mt-2.5 text-[13px] text-slate-400 leading-relaxed">
          폴더 이름이 점(.)으로 시작하지 않아 Windows에서도 잘 보입니다. 권한이 없으면
          관리자에게 “AI-Knowhow 멤버 추가”를 요청하세요.
        </p>
      </div>

      <BlockFlow
        items={[
          { num: "01", title: "Drive MCP 설치", sub: "AI 도구에 등록" },
          { num: "02", title: "AI-Knowhow 권한", sub: "공유 드라이브 멤버" },
          { num: "03", title: "가져오기", sub: "AI에 대화로 부탁" },
          { num: "04", title: "검역·검사", sub: "민감정보·출처" },
          { num: "05", title: "내보내기", sub: "내 결과를 공유" },
        ]}
      />

      <CardGrid cols={2}>
        <Card title="🔌 Drive MCP 연결 — 도구별" badge="1회 셋업" accent="brand">
          <p className="mb-1.5">
            대부분의 AI 도구가 Google Drive MCP 서버를 지원합니다. 도구마다 등록 위치가
            다르므로, 가장 쉬운 방법은 AI에게 직접 묻는 것입니다.
          </p>
          <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-brand-500/20 p-3 text-[12px] leading-relaxed text-slate-200 font-mono whitespace-pre mt-1">{`💬 내가 쓰는 AI 도구에 Google Drive
MCP를 연결하려면 어떻게 해야 해?
공유 드라이브 "AI-Knowhow"에 접근하고
싶어.`}</pre>
          <p className="mt-2 text-[12.5px] text-slate-500">
            ※ MCP 설정 파일 예시 / OAuth 토큰 / 권한 범위는 도구별로 자동 안내됩니다.
            토큰·credential은 절대 채팅·코드에 평문으로 남기지 마세요.
          </p>
        </Card>
        <Card title="📥 가져오기 — AI에게 부탁" accent="emerald">
          <p>드라이브의 스킬·프롬프트를 내 프로젝트로 가져올 때:</p>
          <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-emerald-400/20 p-3 text-[12px] leading-relaxed text-slate-200 font-mono whitespace-pre mt-1.5">{`💬 AI-Knowhow/prompts 폴더의 .md 중
"코드 리뷰" 관련 파일을 가져와서
내 프로젝트 AI-Knowhow/ 검역 폴더에
저장하고 보안 검사해줘.`}</pre>
          <p className="mt-2 text-[12.5px] text-slate-500">
            받은 파일은 곧바로 공식 rule/skill로 덮어쓰지 않습니다. 민감정보·출처 누락 ·
            credential · 기존 파일 충돌 검사가 통과된 뒤에만 사용합니다.
          </p>
        </Card>
        <Card title="📤 내보내기 — 내 결과를 공유" accent="emerald">
          <p>오늘 작업하면서 잘 동작한 프롬프트나 정리해 둔 메모를 공유할 때:</p>
          <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-emerald-400/20 p-3 text-[12px] leading-relaxed text-slate-200 font-mono whitespace-pre mt-1.5">{`💬 오늘 이 작업에서 잘 동작한 프롬프트를
.md로 정리해서 AI-Knowhow/prompts에
업로드할 수 있게 해줘. 민감정보는 빼고,
출처는 함께 적어줘.`}</pre>
          <p className="mt-2 text-[12.5px] text-slate-500">
            업로드 전 AI가 민감정보·credential 자동 점검. 검토 후 본인이 직접 업로드하거나
            MCP를 통해 자동 업로드.
          </p>
        </Card>
        <Card title="🛑 피드백 · 실패 케이스" accent="rose">
          <p>막힌 케이스나 실패 사례도 자산입니다.</p>
          <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-rose-400/20 p-3 text-[12px] leading-relaxed text-slate-200 font-mono whitespace-pre mt-1.5">{`💬 방금 시도한 흐름이 막혔어. 무엇을
어떻게 했고 어디서 막혔는지 .md로
정리해서 AI-Knowhow/feedbacks/에
올릴 수 있게 해줘.`}</pre>
          <p className="mt-2 text-[12.5px] text-slate-500">
            잘 된 사례 못지않게 잘 안 된 사례가 다음 KIT 배포본의 개선 포인트가 됩니다.
          </p>
        </Card>
      </CardGrid>

      <Callout variant="warn" title="⚠ 검역 폴더가 안전장치">
        Drive에서 받은 파일은 곧바로 <span className="font-mono text-amber-200">.agents/</span>{" "}
        같은 공식 위치에 들어가지 않습니다. 먼저 내 프로젝트 안의{" "}
        <span className="font-mono text-amber-200">AI-Knowhow/skills</span> /{" "}
        <span className="font-mono text-amber-200">AI-Knowhow/prompts</span>{" "}
        검역 폴더에 떨어뜨리고, 보안 검사를 통과한 것만 사용합니다.
      </Callout>
    </SlideShell>
  );
}
