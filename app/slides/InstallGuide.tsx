import SlideShell from "@/app/components/SlideShell";
import BlockFlow from "@/app/components/BlockFlow";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

const KIT_DRIVE_URL =
  "https://drive.google.com/drive/u/0/folders/0AApU7x4G-XVWUk9PVA";

export default function InstallGuide() {
  return (
    <SlideShell
      number="A1"
      eyebrow="APPENDIX A1 · 설치 가이드"
      title="회사 AI, 이렇게 설치하면 됩니다 — 처음 사용자용"
      description="명령어를 외울 필요가 없습니다. 받은 설치 묶음을 풀고 AI에게 말로 시키면 AI가 알아서 설정을 설치해 줍니다. 이 가이드는 그 과정을 그림 없이 텍스트와 단계로 천천히 설명합니다."
      variant="appendix"
    >
      {/* 0. 마음 편히 가지기 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-2">
          0. 먼저, 마음 편히 가지세요
        </p>
        <p className="text-[14px] text-slate-200 leading-relaxed">
          핵심은 딱 하나입니다 —{" "}
          <strong className="text-slate-50">
            설치는 사람이 하지 않고, AI에게 부탁하면 AI가 합니다.
          </strong>{" "}
          여러분이 할 일은 “부탁하기”와 “괜찮은지 확인하기”뿐입니다. 까만 명령어가 나와도
          직접 만들 필요 없습니다 — AI가 대신 만들어 줍니다.
        </p>
      </div>

      <Callout variant="info" title="ℹ 어느 폴더에 설치되나요?">
        zip을 풀면{" "}
        <span className="font-mono text-brand-200">company-agent-kit</span> 폴더가
        생기는데, <strong>이 폴더 자체가 아니라</strong> 여러분이{" "}
        <strong>작업하는 프로젝트 폴더</strong>에 설정이 설치됩니다. 헷갈리면 그냥 두세요 —
        AI가 설치 전에 한 번 더 확인해 줍니다.
      </Callout>

      {/* KIT 다운로드 다시 노출 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-2">
          KIT 받기 (공유드라이브)
        </p>
        <p className="text-[13.5px] text-slate-200 leading-relaxed mb-3">
          모든 인원이 <strong className="text-slate-100">콘텐츠 관리자</strong>로 등록되어
          있어 자유롭게 읽고 쓸 수 있습니다.
        </p>
        <a
          href={KIT_DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold px-4 py-2.5 text-[13.5px] shadow-glow-sm transition"
        >
          공유드라이브 열기 ↗
        </a>
      </div>

      {/* 1. 준비물 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          1. 준비물 확인
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-800/70 bg-ink-800/40 backdrop-blur">
          <table className="min-w-full text-[13px]">
            <thead className="bg-ink-700/40 text-slate-400 text-[11px] uppercase tracking-wider">
              <tr>
                <Th>준비물</Th>
                <Th>설명</Th>
                <Th>필수 여부</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              <tr className="hover:bg-brand-500/5">
                <Td bold>설치 묶음(zip)</Td>
                <Td>
                  공유드라이브의{" "}
                  <span className="font-mono text-brand-200">
                    company-agent-kit.zip
                  </span>{" "}
                  파일. 이걸 풀어서 설치합니다.
                </Td>
                <Td>
                  <span className="text-emerald-300 font-semibold">✅ 필수</span>
                </Td>
              </tr>
              <tr className="hover:bg-brand-500/5">
                <Td bold>회사 AI 도구</Td>
                <Td>
                  설치를 맡길 AI 대화 도구 (예: Claude · Codex · Gemini · Kiro). 로그인돼
                  있어야 합니다.
                </Td>
                <Td>
                  <span className="text-emerald-300 font-semibold">✅ 필수</span>
                </Td>
              </tr>
              <tr className="hover:bg-brand-500/5">
                <Td bold>전사 공유드라이브</Td>
                <Td>
                  Google Drive의{" "}
                  <span className="font-mono text-brand-200">AI-Knowhow</span> 폴더.
                  문제가 생겼을 때 피드백을 올리거나 도움받는 곳.
                </Td>
                <Td>
                  <span className="text-slate-400">선택</span>
                </Td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. 설치 흐름 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          2. 설치하기
        </p>
        <BlockFlow
          items={[
            { num: "01", title: "압축 풀기" },
            { num: "02", title: "AI에 붙여넣기" },
            { num: "03", title: "AI가 질문" },
            { num: "04", title: "미리보기" },
            { num: "05", title: "설치 완료" },
          ]}
        />
        <ol className="mt-4 space-y-2">
          <Step n={1} title="설치 묶음(zip)을 풀어서 폴더를 엽니다">
            공유드라이브에서 받은{" "}
            <span className="font-mono text-brand-200">company-agent-kit.zip</span>을
            더블클릭해 압축을 풀고, 생긴 폴더를 엽니다.
          </Step>
          <Step n={2} title="(선택) 파일이 안전한지 확인">
            zip과 함께 받은 <span className="font-mono">.sha256</span> 파일로 무결성을
            확인할 수 있습니다. 어렵게 느껴지면 건너뛰어도 됩니다.
          </Step>
          <Step n={3} title="AI에게 설치 안내서를 건넵니다">
            폴더 안의{" "}
            <span className="font-mono text-brand-200">SETUP_WIZARD.md</span>를 열어
            내용을 복사한 뒤, AI 대화창에 붙여넣고 이렇게 말합니다:{" "}
            <Say>이걸 읽고 내 설치를 도와줘.</Say>
            <p className="mt-1.5 text-[12px] text-slate-500">
              파일 첨부가 되는 도구라면 SETUP_WIZARD.md를 그냥 첨부해도 됩니다.
            </p>
          </Step>
          <Step n={4} title="AI의 질문에 답합니다">
            AI가 <strong>직무 · 사용하는 AI 도구 · 설치할 폴더</strong>를 물어봅니다.
            예: “기획 / Claude(또는 Kiro) / 이 작업 폴더”. 폴더가 헷갈리면 AI가 알아서
            확인해 주니 걱정하지 마세요.
          </Step>
          <Step n={5} title="“미리보기”로 무엇이 생기는지 먼저 봅니다">
            AI가 먼저 <strong>미리보기(dry-run)</strong> 명령을 만들어 줍니다. 이건{" "}
            <strong>실제로 아무것도 바꾸지 않고</strong>, “이런 파일들이 생길 거예요”라고
            목록만 보여줍니다.
          </Step>
          <Step n={6} title="괜찮으면 설치(apply)합니다">
            미리보기 결과가 괜찮으면, AI가 주는 설치 명령을 실행합니다. 이때 실제 설정이
            폴더에 설치됩니다. 명령을 어디에 넣는지 모르겠으면 →{" "}
            <Say>이 명령을 어디에 어떻게 입력해?</Say>
          </Step>
        </ol>
      </div>

      <Callout variant="warn" title="⚠ “미리보기(dry-run)”가 안전장치입니다">
        미리보기는 <strong>실제로 파일을 만들지 않습니다.</strong> 생길 파일 목록만
        보여주므로 마음 놓고 먼저 확인하세요. 확인한 다음에만 설치(apply)가 진행되어
        잘못 눌러서 망가질 걱정이 없습니다.
      </Callout>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          내 직무에는 어떤 걸 설치하나요?
        </p>
        <p className="text-[13.5px] text-slate-300 mb-3 leading-relaxed">
          AI가 알아서 추천하지만, 미리 알아두면 좋습니다. (“profile”은 직무에 맞는 설정
          묶음이라는 뜻)
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-800/70 bg-ink-800/40 backdrop-blur">
          <table className="min-w-full text-[13px]">
            <thead className="bg-ink-700/40 text-slate-400 text-[11px] uppercase tracking-wider">
              <tr>
                <Th>내 직무</Th>
                <Th>추천 설정</Th>
                <Th>이런 걸 도와줍니다</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              <ProfileRow job="기획 · PM" profile="product" tone="brand">
                아이디어 → PRD 초안, 요구사항 정리, 사용자 스토리
              </ProfileRow>
              <ProfileRow job="사업 · 영업 · CS" profile="business" tone="emerald">
                고객 응대 답변, 제안서 메시지, 공지문
              </ProfileRow>
              <ProfileRow job="개발" profile="developer" tone="brand">
                구현 · 코드 리뷰 · 커밋 메시지 · 설계 도움
              </ProfileRow>
              <ProfileRow job="잘 모르겠음" profile="minimal" tone="slate">
                회사 공통 AI 사용 규칙(보안 · 출처)만 가볍게
              </ProfileRow>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          개발자용 — 직접 명령으로 설치하기
        </p>
        <p className="text-[13px] text-slate-300 leading-relaxed mb-3">
          터미널이 익숙하다면 AI를 거치지 않고 <code>node</code> 명령으로 바로 설치할 수
          있습니다. (전제: Node.js LTS ≥ 18). 압축을 푼{" "}
          <span className="font-mono text-brand-200">company-agent-kit</span> 폴더 안에서
          실행하고, <code>--project</code>에는 설정을 설치할 실제 프로젝트 경로를
          적습니다.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-brand-500/20 p-3 text-[11.5px] leading-relaxed text-slate-200 font-mono whitespace-pre">{`# 무엇을 설치할 수 있는지 / 환경·번들 진단
node src/cli.js list
node src/cli.js doctor --project /path/to/repo

# 미리보기(dry-run) — 실제로는 아무 파일도 쓰지 않음
node src/cli.js apply --target codex \\
  --profile developer \\
  --project /path/to/repo --dry-run

# 설치(apply) — 기존 파일은 --backup으로 사본 보관
node src/cli.js apply --target codex \\
  --profile developer \\
  --project /path/to/repo --backup

# 사용자 전역(home/global) 설치
node src/cli.js apply --target claude \\
  --profile developer --scope home`}</pre>
        <p className="mt-2.5 text-[12px] text-slate-500 leading-relaxed">
          이미 agent 설정이 있는 프로젝트라면 기존 설정 우선 병합 모드를 추천:{" "}
          <code>--conflict-policy preserve-existing --backup</code>. Windows에서는{" "}
          <code>node src\cli.js apply --target codex --project &quot;%CD%&quot;
          --dry-run</code> 처럼 경로 표기만 cmd 규칙으로. 더 자세한 내용은{" "}
          SETUP_WIZARD.md 9장 참고.
        </p>
      </div>

      {/* 3. 공유 .md 받기 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          3. 공유 .md 받기 — AI-Knowhow 폴더
        </p>
        <p className="text-[13.5px] text-slate-300 leading-relaxed mb-3">
          설치 후 다른 사람이 공유한 프롬프트·스킬·문서를 받을 때는 이름을 Google Drive와
          똑같이 맞춘{" "}
          <span className="font-mono text-brand-200">AI-Knowhow/</span> 폴더를 씁니다.
          점(.)으로 시작하지 않아서 Windows에서도 찾기 쉽습니다.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-brand-500/20 p-3 text-[12px] leading-relaxed text-slate-200 font-mono whitespace-pre">{`AI-Knowhow/skills/
AI-Knowhow/prompts/
AI-Knowhow/docs/`}</pre>
        <p className="mt-2.5 text-[13px] text-slate-200">AI에게 이렇게 요청하면 됩니다:</p>
        <Say>
          AI-Knowhow/prompts 폴더의 .md를 가져와서 내 프로젝트 AI-Knowhow/에 저장하고
          보안검사해줘.
        </Say>
        <p className="mt-2.5 text-[12px] text-slate-500 leading-relaxed">
          ※ 받은 파일은 곧바로 공식 rule이나 skill로 덮어쓰지 않습니다. AI가{" "}
          <strong className="text-slate-300">
            민감정보 · credential · 고객 데이터 · 출처 누락 · 기존 파일 충돌
          </strong>
          을 먼저 확인하게 하세요.
        </p>
      </div>

      {/* 4. 꼭 지킬 것 */}
      <CardGrid cols={2}>
        <Card title="🚫 민감정보는 넣지 않기" badge="Must" accent="rose">
          고객 개인정보, 비밀번호·토큰, 미공개 계약·재무 자료는 AI에 입력하지 않습니다.
          꼭 써야 하면 <span className="font-mono text-rose-200">{`<고객명>`}</span>
          처럼 가려서 씁니다.
        </Card>
        <Card title="✱ 외부 자료는 출처 남기기" badge="Must" accent="brand">
          인터넷 글·문서 등 외부 자료를 가져와 쓰면, 어디서 가져왔는지 출처를 함께 적어
          둡니다.
        </Card>
      </CardGrid>

      {/* 5. 트러블슈팅 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          5. 막히면 — 이렇게 해결하세요
        </p>
        <div className="space-y-2">
          <Trouble q="설치가 자꾸 안 돼요">
            <span className="font-mono text-brand-200">SETUP_WIZARD.md</span>의 “설치가
            안 될 때” 부분을 AI에게 함께 보여주세요. AI가 원인을 짚어 줍니다.
          </Trouble>
          <Trouble q='"node: command not found"'>
            설치에 필요한 Node.js가 없습니다.{" "}
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-300 underline decoration-dotted"
            >
              nodejs.org
            </a>
            에서 LTS 버전을 설치한 뒤 다시 시도하세요.
          </Trouble>
          <Trouble q='"permission denied" (권한 오류)'>
            설치 폴더에 쓰기 권한이 없을 수 있습니다. 회사 관리 PC라면 IT·관리 담당자에게
            문의하세요.
          </Trouble>
          <Trouble q="명령을 어디에 넣는지 몰라요">
            AI에게{" "}
            <strong className="text-slate-100">
              “이 명령을 어디에 어떻게 입력해?”
            </strong>
            라고 그대로 물어보세요. 단계별로 알려 줍니다.
          </Trouble>
          <Trouble q="그래도 안 풀려요">
            AI에게 “이 내용을 피드백 .md로 정리해서 Google Drive{" "}
            <span className="font-mono">AI-Knowhow/feedbacks</span>에 올릴 수 있게 해줘”
            라고 요청하세요. AI가 정리를 도와줍니다.
          </Trouble>
        </div>
        <Callout variant="info" title="ℹ 막혔을 때 가장 빠른 길">
          화면에 나온 오류 메시지를{" "}
          <strong className="text-slate-100">그대로 복사해서 AI에게 붙여넣고</strong>{" "}
          “이거 어떻게 해결해?”라고 물어보세요.
        </Callout>
      </div>

      <p className="text-[11.5px] text-slate-500 leading-relaxed">
        출처: 이 부록은 번들의 <span className="font-mono">SETUP_WIZARD.md</span>와{" "}
        <span className="font-mono">docs/non-developer-guide.md</span>를 다크 테마로 옮긴
        것입니다. 막히면 담당자 또는 공유 드라이브{" "}
        <span className="font-mono">AI-Knowhow</span> 운영 메모로 문의하세요.
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

function Td({
  children,
  bold,
}: {
  children: React.ReactNode;
  bold?: boolean;
}) {
  return (
    <td
      className={`px-3.5 py-2.5 align-top leading-relaxed ${
        bold ? "text-slate-100 font-semibold" : "text-slate-200"
      }`}
    >
      {children}
    </td>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3 items-start py-2.5 px-3.5 rounded-lg bg-ink-800/50 border border-slate-800/60">
      <span className="shrink-0 grid place-items-center h-7 w-7 rounded-md bg-brand-500/20 text-brand-200 font-mono text-[12px] font-bold ring-1 ring-brand-400/30">
        {n}
      </span>
      <div className="flex-1">
        <p className="font-semibold text-slate-100 text-[13.5px] mb-1">{title}</p>
        <div className="text-[12.5px] text-slate-300 leading-relaxed">{children}</div>
      </div>
    </li>
  );
}

function Say({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-brand-500/15 border border-brand-400/30 text-brand-100 rounded-lg px-2.5 py-1 my-1 text-[12.5px]">
      💬 {children}
    </span>
  );
}

function ProfileRow({
  job,
  profile,
  tone,
  children,
}: {
  job: string;
  profile: string;
  tone: "brand" | "emerald" | "slate";
  children: React.ReactNode;
}) {
  const chip =
    tone === "brand"
      ? "bg-brand-500/20 text-brand-200 ring-1 ring-brand-400/30"
      : tone === "emerald"
      ? "bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-400/30"
      : "bg-slate-500/20 text-slate-200 ring-1 ring-slate-400/30";
  return (
    <tr className="hover:bg-brand-500/5">
      <td className="px-3.5 py-2.5 align-top text-slate-100 font-semibold whitespace-nowrap">
        {job}
      </td>
      <td className="px-3.5 py-2.5 align-top whitespace-nowrap">
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11.5px] font-mono font-semibold ${chip}`}
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

function Trouble({
  q,
  children,
}: {
  q: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[14rem_1fr] rounded-lg overflow-hidden border border-slate-800/60">
      <div className="bg-amber-500/10 text-amber-200 font-semibold text-[12.5px] px-3.5 py-2.5">
        {q}
      </div>
      <div className="bg-ink-800/40 text-slate-300 text-[12.5px] px-3.5 py-2.5 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
