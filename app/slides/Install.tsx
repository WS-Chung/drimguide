import SlideShell from "@/app/components/SlideShell";
import BlockFlow from "@/app/components/BlockFlow";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

const KIT_DRIVE_URL =
  "https://drive.google.com/drive/u/0/folders/0AApU7x4G-XVWUk9PVA";

export default function Install() {
  return (
    <SlideShell
      number="04"
      eyebrow="INSTALL · KIT 설치"
      title="KIT 설치 — AI에게 부탁하면 끝납니다"
      description="명령어를 외울 필요 없습니다. 압축을 푼 폴더 안의 SETUP_WIZARD.md를 AI에게 건네면, AI가 직무·도구·프로젝트 폴더를 묻고 미리보기까지 보여준 뒤 설치합니다."
    >
      {/* 상세 가이드 바로가기 — 타이틀 직하 */}
      <div className="rounded-2xl glass p-4 sm:p-5 flex flex-wrap items-center gap-3 justify-between">
        <div className="flex-1 min-w-[220px]">
          <p className="text-[15px] font-semibold text-slate-100">
            📘 상세 설치 가이드
          </p>
          <p className="text-[13.5px] text-slate-400 mt-0.5 leading-relaxed">
            준비물 · 설치 흐름 · 트러블슈팅 · 공유 .md 받기까지 한 페이지에 정리한
            풀버전 가이드입니다. 처음이거나 막힌 단계가 있을 때 펼쳐 보세요.
          </p>
        </div>
        <a
          href="#install-guide"
          className="group inline-flex items-center gap-2.5 rounded-xl bg-brand-500/35 hover:bg-brand-500/55 text-brand-50 font-semibold px-5 py-3 text-[15px] ring-2 ring-brand-400/60 hover:ring-brand-300/90 shadow-[0_0_16px_rgba(27,187,204,0.3)] hover:shadow-[0_0_28px_rgba(27,187,204,0.55)] hover:-translate-y-0.5 transition-all"
        >
          상세 가이드 열기
          <span
            className="inline-block transition-transform group-hover:translate-x-1"
            aria-hidden
          >
            →
          </span>
        </a>
      </div>

      {/* KIT 다운로드 — Google 공유드라이브 */}
      <div className="rounded-2xl glass p-4 sm:p-5 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand-500/15 blur-3xl pointer-events-none" />
        <div className="relative">
          <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-2">
            KIT 받기 — Google 공유드라이브
          </p>
          <p className="text-[15px] text-slate-200 leading-relaxed mb-3">
            아래 공유드라이브에서{" "}
            <span className="font-mono text-brand-200">company-agent-kit.zip</span>{" "}
            (및 함께 받을 자료)을 받습니다.{" "}
            <strong className="text-slate-100">
              우리 회사 모든 인원은 이 공유드라이브의 ‘콘텐츠 관리자’
            </strong>
            로 등록되어 있어 누구나 자유롭게 읽고 쓸 수 있습니다 — 별도 요청 없이 바로
            접근하시면 됩니다.
          </p>
          <div className="flex flex-wrap gap-2.5 items-center">
            <a
              href={KIT_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold px-4 py-2.5 text-[14.5px] shadow-glow-sm transition"
            >
              <DriveIcon /> 공유드라이브 열기 ↗
            </a>
            <span className="text-[12px] text-slate-500 font-mono break-all">
              drive.google.com/…/0AApU7x4G-XVWUk9PVA
            </span>
          </div>
          <p className="mt-3 text-[13px] text-slate-400 leading-relaxed">
            ※ 처음 들어가서 안 보이면 회사 Workspace 계정으로 로그인되어 있는지 확인하세요.
            그래도 안 보이면 담당자에게 한 줄 알려 주시면 즉시 점검합니다.
          </p>
        </div>
      </div>

      <BlockFlow
        items={[
          { num: "01", title: "압축 풀기", sub: "company-agent-kit.zip" },
          { num: "02", title: "AI에 붙여넣기", sub: "SETUP_WIZARD.md" },
          { num: "03", title: "AI가 질문", sub: "직무·도구·폴더" },
          { num: "04", title: "미리보기", sub: "dry-run, 안전" },
          { num: "05", title: "설치(apply)", sub: "괜찮으면 실행" },
        ]}
      />

      <Callout variant="info" title="ℹ 설치 위치 — 헷갈리지 마세요">
        zip을 풀면 <span className="font-mono text-brand-200">company-agent-kit</span>{" "}
        폴더가 생기지만, 설정은 <strong className="text-slate-100">이 폴더 자체가 아니라
        여러분이 작업하는 프로젝트 폴더</strong>에 설치됩니다. 헷갈리면 AI가 설치 전에
        한 번 더 확인해 줍니다.
      </Callout>

      <CardGrid cols={2}>
        <Card title="🛠 가장 쉬운 방법 — AI에게 부탁" badge="기본" accent="brand">
          <ol className="list-decimal pl-5 space-y-1">
            <li>zip 압축 풀기</li>
            <li>폴더 안{" "}
              <span className="font-mono text-brand-200">SETUP_WIZARD.md</span> 열기
            </li>
            <li>내용 복사 → AI 대화창에 붙여넣기 → “이걸 읽고 내 설치를 도와줘”</li>
            <li>AI 질문(직무·도구·폴더)에 답</li>
            <li>미리보기(dry-run) 결과 검토 후 설치(apply)</li>
          </ol>
        </Card>
        <Card title="⚙ 개발자용 — 직접 명령" badge="옵션" accent="emerald">
          <p>터미널이 익숙하면 Node.js LTS ≥ 18에서 직접 실행 가능. 압축 푼 폴더 안에서:</p>
          <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-brand-500/20 p-3 text-[12px] leading-relaxed text-slate-200 font-mono whitespace-pre mt-2">{`# 미리보기 (실제로 아무것도 안 바꿈)
node src/cli.js apply --target codex \\
  --profile developer \\
  --project /path/to/repo --dry-run

# 실제 설치 (기존 파일은 --backup으로 사본 보관)
node src/cli.js apply --target codex \\
  --profile developer \\
  --project /path/to/repo --backup`}</pre>
        </Card>
      </CardGrid>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          내 직무에 맞는 프로필 선택
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-800/70 bg-ink-800/40 backdrop-blur">
          <table className="min-w-full text-[14px]">
            <thead className="bg-ink-700/40 text-slate-400 text-[12px] uppercase tracking-wider">
              <tr>
                <Th>직무</Th>
                <Th>추천 프로필</Th>
                <Th>이런 걸 도와줍니다</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              <Row job="기획 · PM" profile="product" badge="brand">
                아이디어 → PRD 초안, 요구사항 정리, 사용자 스토리
              </Row>
              <Row job="사업 · 영업 · CS · 마케팅" profile="business" badge="emerald">
                고객 응대 답변, 제안서 메시지, 공지문, 외부 커뮤니케이션
              </Row>
              <Row job="개발" profile="developer" badge="brand">
                구현 · 코드 리뷰 · 커밋 메시지 · 설계 도움 · SDD 모드 활성
              </Row>
              <Row job="지원 부서 / 잘 모름" profile="minimal" badge="slate">
                회사 공통 AI 사용 룰(보안·출처)만 가볍게
              </Row>
            </tbody>
          </table>
        </div>
        <p className="text-[12.5px] text-slate-500 mt-2.5 leading-relaxed">
          ※ 한 사람이 여러 프로젝트에서 다른 프로필을 쓸 수 있습니다. 프로젝트마다 따로 설치 ·
          따로 최적화하는 것이 KIT의 핵심.
        </p>
      </div>

      <Callout variant="warn" title="⚠ 미리보기(dry-run)가 안전장치">
        <strong>dry-run은 실제로 파일을 만들지 않습니다.</strong> 생길 파일 목록만
        보여주므로 마음 놓고 먼저 확인하세요. 검토한 다음에만 설치(apply)가 진행되어 잘못
        눌러도 망가지지 않습니다.
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
  job,
  profile,
  badge,
  children,
}: {
  job: string;
  profile: string;
  badge: "brand" | "emerald" | "slate";
  children: React.ReactNode;
}) {
  const chipColor =
    badge === "brand"
      ? "bg-brand-500/20 text-brand-200 ring-1 ring-brand-400/30"
      : badge === "emerald"
      ? "bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-400/30"
      : "bg-slate-500/20 text-slate-200 ring-1 ring-slate-400/30";
  return (
    <tr className="hover:bg-brand-500/5 transition">
      <td className="px-3.5 py-2.5 align-top text-slate-100 font-semibold whitespace-nowrap">
        {job}
      </td>
      <td className="px-3.5 py-2.5 align-top whitespace-nowrap">
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-md text-[12.5px] font-mono font-semibold ${chipColor}`}
        >
          {profile}
        </span>
      </td>
      <td className="px-3.5 py-2.5 align-top text-slate-300 leading-relaxed">
        {children}
      </td>
    </tr>
  );
}

function DriveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
      <path d="M8.5 2 L15.5 2 L23 15 L19.5 21 L12.5 21 L5 8 Z" fill="#ffffff" opacity="0.95" />
      <path d="M8.5 2 L15.5 2 L12 8 L5 8 Z" fill="#1BBBCC" opacity="0.9" />
      <path d="M15.5 2 L23 15 L19.5 21 L12 15 Z" fill="#7DEAD5" opacity="0.9" />
      <path d="M5 8 L12 8 L12.5 21 Z" fill="#06438C" opacity="0.9" />
    </svg>
  );
}
