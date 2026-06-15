import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import FlowDiagram from "@/app/components/FlowDiagram";
import Callout from "@/app/components/Callout";

export default function Hardware() {
  return (
    <SlideShell
      number="A"
      eyebrow="APPENDIX A · 부록"
      title="사내 유휴 하드웨어 활용 (선택)"
      description="필수가 아닌 보너스 트랙입니다. 고성능 데스크탑과 NAS는 “Claude를 더 강하게” 만들어주는 자산입니다. 외부 SaaS만으로는 어려운 사내 데이터 RAG, 로컬 모델, MCP 서버, 빌드 가속이 가능합니다."
      variant="appendix"
    >
      <div className="appendix-divider">Bonus Track · 권장 사항</div>

      <CardGrid cols={3}>
        <Card title="A. 사내 RAG 서버" badge="1순위" icon="◆" accent="brand">
          유휴 데스크탑 1~2대를 사내 지식 검색 서버로. NAS의 PDF/MD/회의록/도면을
          임베딩하면 Claude가 사내 자료를 직접 참조.
          <p className="mt-1.5 text-[11px] text-slate-500">
            Ollama(임베딩) + Qdrant/pgvector + 자체 MCP + Tailscale
          </p>
        </Card>
        <Card title="B. 로컬 LLM (보조)" badge="실험" icon="◇" accent="slate">
          GPU 데스크탑에 Ollama / vLLM. Llama 3.1, Qwen2.5, Codestral 등으로 1차
          마스킹 / 저난도 자동완성. Claude는 고난도 전용.
        </Card>
        <Card title="C. 자체 MCP 서버" icon="⇄" accent="brand">
          Notion · Jira · 사내 Wiki · 빌드 시스템에 접근하는 맞춤 MCP를 데스크탑에서
          상시 가동. Claude Desktop이 사내망 호출.
        </Card>
        <Card title="D. NAS = 단일 KB" icon="◈" accent="emerald">
          NAS 한 디렉터리를 “사내 AI 코퍼스”로 지정. 모든 산출물·도면·회의록을
          표준 경로로 적재. Snapshot 백업.
        </Card>
        <Card title="E. CI/Build 러너" icon="▶" accent="emerald">
          사내 GitHub Actions self-hosted runner. BSP/커널 등 큰 빌드 가속. AI 리뷰
          잡도 사내 러너로.
        </Card>
        <Card title="F. GPU 학습/실험" icon="◉" accent="amber">
          유휴 GPU를 시간대별 예약(Slurm-mini, Ray, Cron). 평소 RAG/로컬 LLM, 야간
          미세조정/실험.
        </Card>
      </CardGrid>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        <div className="rounded-2xl glass p-4 sm:p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-3">
            단계적 시작 가이드
          </p>
          <FlowDiagram
            steps={[
              {
                title: "1단계 — NAS 표준 경로",
                body: "/ai-corpus 생성, 회의록·PRD·도면 메타 적재. 폴더 권한 정리.",
              },
              {
                title: "2단계 — 임베딩 파이프라인",
                body: "데스크탑 1대에 Ollama + Qdrant. 신규 파일 자동 임베딩.",
              },
              {
                title: "3단계 — 사내 MCP 노출",
                body: "drimaes-knowledge-mcp 등록. 첫 사용자 그룹부터 점진 확대.",
              },
              {
                title: "4단계 — 안전한 원격 접근",
                body: "Tailscale / Cloudflare Tunnel. 외부 공개 포트 금지.",
              },
              {
                title: "5단계 — GPU / 로컬 LLM 합류",
                body: "성과 확인 후 GPU 머신 추가. Claude와 역할 분담.",
              },
            ]}
            compact
          />
        </div>

        <div className="space-y-3.5">
          <Callout variant="warn" title="보안 체크포인트">
            <ul className="list-disc pl-5 space-y-1">
              <li>사내망 노출 포트 최소화 (Tailscale / WireGuard 권장)</li>
              <li>RAG 자료에 접근권한 메타를 임베딩과 함께 저장 → 응답 시 권한 필터링</li>
              <li>로그(질의/응답) 보관 90일 등 사전 정의 후 자동 파기</li>
            </ul>
          </Callout>
          <div className="rounded-xl border border-dashed border-slate-700 bg-ink-800/40 p-4 text-[12px] text-slate-400 leading-relaxed">
            ※ 본 부록은 권장 사항이며, 본론(공용 계정 + 통합 가이드)만으로도
            거버넌스는 충분히 동작합니다. HW 활용은 인력/일정이 허락할 때 단계적으로
            시작하세요.
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
