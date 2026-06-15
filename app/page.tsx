import Sidebar from "@/app/components/Sidebar";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import Section from "@/app/components/Section";
import Callout from "@/app/components/Callout";
import FlowDiagram from "@/app/components/FlowDiagram";
import { Card, CardGrid } from "@/app/components/Card";
import AccountsTable from "@/app/components/AccountsTable";

export default function HomePage() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 min-w-0">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-12">
          <Hero />

          {/* 1. 도입 배경 & 원칙 */}
          <Section
            id="principles"
            eyebrow="01"
            title="도입 배경 & 5대 원칙"
            description="회사 차원의 거버넌스를 단번에 적용하기 어려운 현실을 인정하고, 분야별 공용 계정으로 빠르게 시작합니다. 단, 지식 자산은 반드시 회사에 남도록 룰을 강제합니다."
          >
            <CardGrid cols={3}>
              <Card title="① 분야별 공용 계정" badge="Why">
                개발은 2인 1계정, 기획·운영은 7인 1계정. 초기 분야로 지정 후
                필요시 자유롭게 이동.
              </Card>
              <Card title="② 회사 메일 강제 연결" badge="Must">
                공용 계정의 Google Workspace 이메일은{" "}
                <strong>반드시 연결해서 사용</strong>합니다. 결과물·이력의
                회사 귀속을 위함입니다.
              </Card>
              <Card title="③ 지식의 회사 귀속" badge="Why">
                개인 디바이스/개인 계정에 산출물을 남기지 않습니다. 모든 결과는
                Notion·GitHub·Drive로.
              </Card>
              <Card title="④ AX 워크플로우 표준화" badge="How">
                PRD, 사전 MD(<code>CLAUDE.md</code> 등) 셋업, 프롬프트·리뷰
                템플릿을 표준화합니다.
              </Card>
              <Card title="⑤ 공유의 자동화" badge="How">
                Slack/Notion/GitHub/Drive에 결과를 흘려보내는 동선을 만들고,
                매주 노하우를 공유합니다.
              </Card>
              <Card title="⑥ 보안과 책임" badge="Risk">
                계정·MFA·세션은 PMO에서 관리. 외부 코드 업로드는 사내 정책에
                따릅니다.
              </Card>
            </CardGrid>

            <Callout variant="warn" title="현실 인정">
              본 가이드는 “완성된 거버넌스”가 아닌, <strong>최소 실행 가능한 거버넌스(MVP-Governance)</strong>입니다.
              운영하면서 부족한 부분은 <span className="font-mono">#ai-governance</span> 채널과 분기 리뷰로 보강합니다.
            </Callout>
          </Section>

          {/* 2. 공용 계정 구조 */}
          <Section
            id="accounts"
            eyebrow="02"
            title="공용 계정 구조"
            description="아래 9개 공용 계정을 전사 표준으로 사용합니다. 각 계정에는 초기 할당자가 1명 지정되어 셋업·로그인 이슈·MFA 코드 수신을 1차로 책임집니다. 팀별 계정 수와 멤버 구성은 운영 중 변동될 수 있습니다."
          >
            <AccountsTable />

            <Callout variant="info" title="할당 원칙">
              <ul className="list-disc pl-5 space-y-1">
                <li>개발 8개 계정 × 2인 = <strong>총 16명</strong> 1차 매칭</li>
                <li>기획·운영 1개 계정(planner1) × 최대 7명 공용</li>
                <li>처음에는 위 매핑대로 사용하고, 이후 업무 변동 시 자유 이동 (해당 계정의 초기 할당자에게 통지)</li>
                <li>계정 이메일은 <span className="font-mono">id@drimaes.com</span> 패턴 (Google Workspace)</li>
              </ul>
            </Callout>

            <Callout variant="danger" title="절대 금지">
              <ul className="list-disc pl-5 space-y-1">
                <li>공용 계정 비밀번호의 외부 메신저/메일 평문 공유</li>
                <li>개인 Google 계정으로 Claude를 결제·로그인하여 회사 결과물을 저장</li>
                <li>공용 계정의 Google 이메일을 미연결한 채 Claude 사용</li>
              </ul>
            </Callout>
          </Section>

          {/* 3. 운영 규칙 */}
          <Section
            id="operation"
            eyebrow="03"
            title="공용 계정 운영 규칙"
            description="여러 명이 한 계정을 공유하기 때문에, 다음 규칙을 지켜야 사용 충돌과 보안 사고를 막을 수 있습니다."
          >
            <CardGrid cols={2}>
              <Card title="로그인 / MFA">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Google 2단계 인증은 초기 할당자 휴대폰 + 백업 코드 보관</li>
                  <li>가능하면 Passkey 또는 Authenticator 앱 공유는 1Password/Bitwarden 등 비밀번호 매니저로</li>
                  <li>로그인 알림은 초기 할당자에게 알림 오도록 설정</li>
                </ul>
              </Card>
              <Card title="동시 사용">
                <ul className="list-disc pl-5 space-y-1">
                  <li>같은 시간대에 동일 계정으로 동시 채팅 시 사용 한도를 빠르게 소진합니다.</li>
                  <li>장시간 작업이 필요한 경우 Slack <span className="font-mono">#ai-{`{account}`}</span> 채널에 점유 알림</li>
                  <li>공용 계정의 채팅 히스토리는 모두에게 보입니다. 민감 정보는 입력 금지</li>
                </ul>
              </Card>
              <Card title="프롬프트 / 결과물 보관">
                <ul className="list-disc pl-5 space-y-1">
                  <li>중요 결과는 Notion DB에 즉시 적재 (자동/수동)</li>
                  <li>코드 산출물은 GitHub PR로만 반영 (개인 PC 보관 금지)</li>
                  <li>공용 Drive에 작업물 백업, 외부 링크 공유는 도메인 제한</li>
                </ul>
              </Card>
              <Card title="사용 한도 관리">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Max는 일정 시간 단위 대화 한도가 있어 “긴 컨텍스트 + 코딩” 위주로 사용</li>
                  <li>한도 임박 시 작업을 분할하거나 다음 윈도로 미루기</li>
                  <li>API 추가 사용 필요 시 PMO 승인 후 별도 키 발급</li>
                </ul>
              </Card>
            </CardGrid>

            <Callout variant="warn" title="민감 정보 마스킹 룰">
              고객사 고유명, 내부 인사정보, 비밀번호/토큰, 미공개 사양은 프롬프트에
              직접 입력하지 않습니다. 필요한 경우{" "}
              <span className="font-mono">[CUSTOMER_A]</span>,{" "}
              <span className="font-mono">[KEY_REDACTED]</span>처럼
              플레이스홀더로 치환해서 사용합니다.
            </Callout>
          </Section>

          {/* 4. AX 워크플로우 */}
          <Section
            id="ax-workflow"
            eyebrow="04"
            title="AX 워크플로우 표준"
            description="모든 작업은 PRD → 사전 MD 셋업 → Claude 작업 → 리뷰 → 공유의 5단계로 진행합니다. AX(AI Transformation)는 결과물뿐 아니라 “어떻게 만들었는지”를 함께 자산화하는 것이 핵심입니다."
          >
            <FlowDiagram
              steps={[
                {
                  title: "PRD 작성 (요구사항 정의)",
                  body: (
                    <>
                      <p>
                        모든 신규 기능/과제는 <strong>PRD</strong>를 먼저 작성합니다. Notion
                        템플릿 <span className="font-mono">PRD-Template</span>을 복제해서
                        사용합니다.
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>배경 / 문제 / 사용자 / 목표 지표</li>
                        <li>범위(Scope) / 비범위(Out of scope)</li>
                        <li>주요 시나리오, 비기능 요구사항(성능·보안)</li>
                        <li>마일스톤 / 책임자 / 검수 기준</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "사전 MD 파일 셋업",
                  body: (
                    <>
                      <p>
                        Claude가 프로젝트 컨텍스트를 일관되게 이해하도록 레포 루트에 다음
                        Markdown을 둡니다.
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <span className="font-mono">CLAUDE.md</span> — 프로젝트 개요, 핵심
                          규칙, 빌드/실행, 테스트 명령, 커밋 규칙
                        </li>
                        <li>
                          <span className="font-mono">.claude/agents/*.md</span> — 역할별
                          서브에이전트 (예: reviewer, kernel-expert)
                        </li>
                        <li>
                          <span className="font-mono">docs/architecture.md</span> — 모듈
                          구조, 데이터 흐름, 외부 의존성
                        </li>
                        <li>
                          <span className="font-mono">docs/glossary.md</span> — 도메인 용어
                          (오토에버, BSP, 드림심 등)
                        </li>
                        <li>
                          <span className="font-mono">.editorconfig</span>,{" "}
                          <span className="font-mono">eslint/prettier</span> 등 코드 스타일
                          규칙도 함께 명시
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "Claude로 설계·구현",
                  body: (
                    <p>
                      “질문 → 설계 → 구현 → 자체 리뷰” 순으로 진행. 큰 변경은 PR 분할.
                      매 PR에 <strong>Claude 사용 로그</strong>(어떤 프롬프트로 만들었는지
                      요약)를 첨부합니다.
                    </p>
                  ),
                },
                {
                  title: "사람 리뷰 + Claude 리뷰",
                  body: (
                    <p>
                      PR 생성 시 GitHub Action으로 Claude 리뷰 자동 실행 → 사람 리뷰어가
                      최종 승인. 보안/성능 관련 PR은 반드시 사람 2인 승인.
                    </p>
                  ),
                },
                {
                  title: "결과 공유 + 노하우 적재",
                  body: (
                    <p>
                      머지 시점에 자동으로 Slack <span className="font-mono">#ax-stream</span>
                      에 요약, Notion <strong>AI 노하우 DB</strong>에 한 줄 회고가 등록되도록
                      자동화합니다.
                    </p>
                  ),
                },
              ]}
            />

            <Callout variant="info" title="추천 디렉터리 구조 예시">
              <pre className="mt-1 overflow-x-auto rounded-lg bg-slate-900 text-slate-100 p-4 text-xs leading-relaxed">{`my-repo/
├─ CLAUDE.md                  # 프로젝트 헌법
├─ .claude/
│  ├─ agents/
│  │   ├─ reviewer.md
│  │   └─ kernel-expert.md
│  └─ commands/
│      └─ review-pr.md
├─ docs/
│  ├─ prd/PRD-2025-Q3-feature-x.md
│  ├─ architecture.md
│  ├─ glossary.md
│  └─ adr/0001-choose-frontend.md
└─ src/...`}</pre>
            </Callout>
          </Section>

          {/* 5. Google Workspace 연동 */}
          <Section
            id="integration-google"
            eyebrow="05 · 통합"
            title="Google Workspace 연동"
            description="공용 계정의 Google Workspace 이메일은 반드시 연결합니다. Drive 문서를 Claude에 컨텍스트로 붙이고, Gmail/Calendar는 회의록·일정 자동화에 활용합니다."
          >
            <FlowDiagram
              steps={[
                {
                  title: "공용 Google 계정에 Workspace 이메일 활성화",
                  body: (
                    <>
                      <span className="font-mono">id@drimaes.com</span>이 정상 수신/발신
                      되는지 확인. 자동전달, 서명, 그룹별칭 설정.
                    </>
                  ),
                },
                {
                  title: "Claude → Settings → Connectors → Google Drive 연결",
                  body: (
                    <>
                      Claude 웹/데스크톱 앱에서 해당 공용 계정으로 로그인 후 Connectors에서{" "}
                      <strong>Google Drive</strong>를 연결합니다. (Max 플랜 기본 제공)
                    </>
                  ),
                },
                {
                  title: "공용 Drive 폴더 구조 확정",
                  body: (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-mono">/AI-Workspace/{`{account}`}/inbox</span> — Claude로 가져갈 원본 자료
                      </li>
                      <li>
                        <span className="font-mono">/AI-Workspace/{`{account}`}/output</span> — Claude 산출물 백업
                      </li>
                      <li>
                        <span className="font-mono">/AI-Workspace/_shared</span> — 전사 공통 지식 베이스
                      </li>
                    </ul>
                  ),
                },
                {
                  title: "Gmail / Calendar 자동화",
                  body: (
                    <>
                      Apps Script 또는 Make/Zapier로 “회의록 메일 → Notion 페이지 생성 →
                      Claude 요약” 파이프라인을 구성합니다. 회의 일정엔 Meet 자동 녹취 +
                      요약 봇을 사용해도 좋습니다.
                    </>
                  ),
                },
                {
                  title: "도메인 단위 보안 설정",
                  body: (
                    <>
                      Google Admin에서 외부 공유는 <strong>드림에이스 도메인 제한</strong>으로
                      기본 설정. 공용 계정에 Drive 라벨(기밀/내부/공개)을 적용해 데이터
                      유출을 차단합니다.
                    </>
                  ),
                },
              ]}
            />

            <Callout variant="warn" title="주의">
              공용 계정으로 외부 사람과 Drive 공유 시, 해당 외부인은 다른 모든 공용 계정
              자료에 접근하지 못하도록 폴더 단위 권한을 항상 점검하세요.
            </Callout>
          </Section>

          {/* 6. Slack */}
          <Section
            id="integration-slack"
            eyebrow="06 · 통합"
            title="Slack 연동"
            description="Slack은 “질문 던지면 Claude가 답하고, 그 답이 자산이 되는” 허브입니다. 공식 Claude Slack 앱과 워크플로우를 함께 씁니다."
          >
            <FlowDiagram
              steps={[
                {
                  title: "워크스페이스 채널 표준화",
                  body: (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-mono">#ai-announcement</span> — 공지 (이 가이드 링크 고정)
                      </li>
                      <li>
                        <span className="font-mono">#ai-governance</span> — 룰/이슈/개정 제안
                      </li>
                      <li>
                        <span className="font-mono">#ax-stream</span> — Claude 결과 자동 게시
                      </li>
                      <li>
                        <span className="font-mono">#ai-{`{account}`}</span> — 계정별 점유/이슈 (예: #ai-server)
                      </li>
                      <li>
                        <span className="font-mono">#ai-knowhow</span> — 주간 노하우 공유
                      </li>
                    </ul>
                  ),
                },
                {
                  title: "Claude 공식 Slack 앱 설치",
                  body: (
                    <>
                      Slack App Directory에서 <strong>Claude</strong> 앱 설치 → 공용 Claude
                      계정으로 인증. 채널에 <span className="font-mono">@Claude</span>를 멘션해
                      대화하거나, DM으로 사용. 답변에 사용된 컨텍스트는 채널 전체가 볼 수
                      있어 자동 공유 효과.
                    </>
                  ),
                },
                {
                  title: "AX-Stream 자동 게시",
                  body: (
                    <>
                      GitHub Action / Notion Webhook이 PR 머지·문서 작성 시 요약을{" "}
                      <span className="font-mono">#ax-stream</span>에 게시합니다.
                      Slack Workflow Builder로 “이번 주 노하우” 폼을 매주 금요일 16:00에
                      자동 게시하세요.
                    </>
                  ),
                },
                {
                  title: "민감정보 차단",
                  body: (
                    <>
                      Slack DLP(또는 Nightfall, Polymer 등)로 비밀번호·토큰 패턴을
                      자동 마스킹. <span className="font-mono">#ax-stream</span> 채널은
                      외부 게스트 초대 금지로 설정.
                    </>
                  ),
                },
              ]}
            />

            <Callout variant="success" title="권장 패턴">
              개인 DM에서 Claude를 부르지 말고, <strong>가능한 채널에서 멘션</strong>하세요.
              한 사람의 답변이 곧 모두의 위키가 됩니다.
            </Callout>
          </Section>

          {/* 7. Notion */}
          <Section
            id="integration-notion"
            eyebrow="07 · 통합"
            title="Notion 연동"
            description="Notion은 “지식의 영구 저장소”입니다. PRD, 회의록, AI 노하우, 프롬프트 템플릿이 모두 여기서 끝납니다."
          >
            <CardGrid cols={2}>
              <Card title="필수 데이터베이스">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>PRD DB</strong> — 모든 기능/과제 PRD</li>
                  <li><strong>AI 노하우 DB</strong> — 프롬프트, 사례, 실패담</li>
                  <li><strong>프롬프트 템플릿 DB</strong> — 역할별 재사용 프롬프트</li>
                  <li><strong>회의록 DB</strong> — Meet 자동 요약 적재</li>
                  <li><strong>아키텍처 결정 기록(ADR)</strong></li>
                </ul>
              </Card>
              <Card title="권한 모델">
                <ul className="list-disc pl-5 space-y-1">
                  <li>최상위 워크스페이스: 전사 멤버 = 편집자</li>
                  <li>고객사 비공개 공간: 해당 프로젝트 그룹만 접근</li>
                  <li>외부 게스트: PRD DB는 읽기만 / AI 노하우 DB 접근 불가</li>
                </ul>
              </Card>
            </CardGrid>

            <FlowDiagram
              steps={[
                {
                  title: "Claude ↔ Notion 연결",
                  body: (
                    <>
                      Claude의 <strong>Connectors → Notion</strong>을 활성화하거나, Notion이
                      제공하는 <strong>Notion MCP 서버</strong>를 Claude Desktop에 등록합니다.
                      공용 계정으로 OAuth 인증.
                    </>
                  ),
                },
                {
                  title: "MCP 등록 (Claude Desktop)",
                  body: (
                    <pre className="overflow-x-auto rounded-lg bg-slate-900 text-slate-100 p-4 text-xs leading-relaxed">{`{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": { "NOTION_API_KEY": "secret_..." }
    }
  }
}`}</pre>
                  ),
                },
                {
                  title: "AI 노하우 적재 자동화",
                  body: (
                    <>
                      매 PR/문서 작성 시, Slack 슬래시 커맨드 <span className="font-mono">/knowhow</span>
                      또는 Notion 폼으로 “문제 / 시도한 프롬프트 / 결과 / 회고”를 1분 내에
                      적도록 합니다.
                    </>
                  ),
                },
              ]}
            />
          </Section>

          {/* 8. GitHub */}
          <Section
            id="integration-github"
            eyebrow="08 · 통합"
            title="GitHub 연동"
            description="개발 산출물의 단일 진실. Claude는 ‘초안 작성자 + 자동 리뷰어’로 활용합니다."
          >
            <FlowDiagram
              steps={[
                {
                  title: "조직 단위 표준 레포 템플릿",
                  body: (
                    <>
                      <span className="font-mono">drimaes/repo-template</span>에{" "}
                      <span className="font-mono">CLAUDE.md</span>, PR/이슈 템플릿, 워크플로,
                      ADR 폴더가 미리 들어있도록 합니다. 신규 프로젝트는 반드시 템플릿에서
                      포크.
                    </>
                  ),
                },
                {
                  title: "Claude Code (CLI) 도입",
                  body: (
                    <>
                      개발자 로컬에 <span className="font-mono">claude</span> CLI를 설치하고,
                      공용 Claude 계정으로 로그인. 레포 루트의 <span className="font-mono">CLAUDE.md</span>
                      를 그대로 컨텍스트로 사용합니다.
                    </>
                  ),
                },
                {
                  title: "PR 자동 리뷰 GitHub Action",
                  body: (
                    <>
                      <p>예시: <span className="font-mono">.github/workflows/claude-review.yml</span></p>
                      <pre className="overflow-x-auto rounded-lg bg-slate-900 text-slate-100 p-4 text-xs leading-relaxed mt-2">{`name: Claude PR Review
on:
  pull_request:
    types: [opened, synchronize]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          mode: review
          guidelines_file: CLAUDE.md`}</pre>
                    </>
                  ),
                },
                {
                  title: "GitHub MCP 서버",
                  body: (
                    <>
                      Claude Desktop/Code에 GitHub MCP를 등록하면 이슈 검색, 코드 검색, PR
                      코멘트가 자연어로 가능. 공용 계정의 PAT(또는 GitHub App)을 사용하고
                      권한은 최소(read + PR write)로 제한.
                    </>
                  ),
                },
                {
                  title: "Branch / 커밋 룰",
                  body: (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>브랜치: <span className="font-mono">feat/ID-{`<요약>`}</span>, <span className="font-mono">fix/...</span>, <span className="font-mono">docs/...</span></li>
                      <li>커밋: Conventional Commits (<span className="font-mono">feat:</span>, <span className="font-mono">fix:</span>)</li>
                      <li>PR 본문 끝에 <strong>“Claude 사용 요약”</strong> 섹션 의무</li>
                    </ul>
                  ),
                },
              ]}
            />

            <Callout variant="danger" title="시크릿 절대 금지">
              <span className="font-mono">.env</span>, API 키, 인증서, 고객사 비공개 사양은
              레포에 커밋 금지. <strong>git-secrets</strong> / <strong>gitleaks</strong> pre-commit 훅을
              템플릿에 기본 내장합니다.
            </Callout>
          </Section>

          {/* 9. 지식 공유 룰 */}
          <Section
            id="knowledge"
            eyebrow="09"
            title="지식 공유 룰"
            description="공용 계정의 가장 큰 이유는 “지식의 공유화”입니다. 다음 5가지는 운영 KPI로 추적합니다."
          >
            <CardGrid cols={2}>
              <Card title="① 1 PR = 1 노하우">
                머지된 모든 PR은 AI 노하우 DB에 한 줄 회고를 남깁니다.
              </Card>
              <Card title="② 매주 금요일 16:00 회고">
                Slack <span className="font-mono">#ai-knowhow</span>에 폼 자동 발송.
                각 계정의 초기 할당자가 1차 작성, 공동 사용자도 보강 가능.
              </Card>
              <Card title="③ 월 1회 사내 데모데이">
                계정별 가장 좋은 사례/실패담을 15분씩 발표.
              </Card>
              <Card title="④ 분기별 거버넌스 리뷰">
                계정 재배분, 룰 개정, 신규 통합 결정. PMO 주관.
              </Card>
              <Card title="⑤ 프롬프트 자산화">
                재사용 프롬프트는 Notion 템플릿 DB에 등록. 사용 횟수/성공률을 태깅.
              </Card>
              <Card title="⑥ 외부 자료 출처 표기">
                외부 블로그/문서 인용 시 출처와 라이선스를 함께 적재.
              </Card>
            </CardGrid>
          </Section>

          {/* 10. 거버넌스 / 보안 */}
          <Section
            id="governance"
            eyebrow="10"
            title="거버넌스 & 보안"
            description="공용 계정은 편하지만 위험합니다. 다음 항목은 PMO가 분기별로 점검합니다."
          >
            <CardGrid cols={2}>
              <Card title="결제·청구">
                결제수단은 법인카드 1개로 통합. 매월 비용 리포트가{" "}
                <span className="font-mono">#ai-governance</span>에 자동 게시.
              </Card>
              <Card title="계정 회수 절차">
                퇴사·이동 시 24시간 내 비밀번호 교체, 1Password 공유 권한 회수,
                Slack/Notion/GitHub 외부 세션 강제 로그아웃.
              </Card>
              <Card title="데이터 분류">
                Public / Internal / Confidential / Restricted 4단계. Restricted는
                Claude 입력 금지.
              </Card>
              <Card title="감사 로그">
                Google Workspace, GitHub, Notion 감사로그를 월 단위 보관. 이상 활동
                알림 자동화.
              </Card>
              <Card title="라이선스·저작권">
                Claude로 생성된 코드의 라이선스 충돌 가능성을 PR 시 점검. OSS 의존성은{" "}
                <span className="font-mono">scancode</span>/<span className="font-mono">FOSSA</span>로 스캔.
              </Card>
              <Card title="고객 데이터">
                고객사 데이터는 별도 격리된 워크스페이스/레포에서만 사용. 공용 계정에
                상시 노출 금지.
              </Card>
            </CardGrid>
          </Section>

          {/* 11. 체크리스트 */}
          <Section
            id="checklist"
            eyebrow="11"
            title="신규/이동 멤버 온보딩 체크리스트"
            description="공용 계정에 합류하는 멤버가 1시간 안에 끝낼 수 있도록 정렬했습니다."
          >
            <CardGrid cols={2}>
              <Card title="① 계정 접근">
                <ul className="list-disc pl-5 space-y-1">
                  <li>1Password에서 해당 계정 비밀번호 공유 받기</li>
                  <li>Google 로그인 → 2단계 인증 완료</li>
                  <li>Workspace 메일 수신 확인</li>
                </ul>
              </Card>
              <Card title="② Claude 셋업">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Claude 웹/Desktop 로그인</li>
                  <li>Connectors: Drive / GitHub / Notion 연결 확인</li>
                  <li>Claude Code CLI 설치 및 로그인</li>
                </ul>
              </Card>
              <Card title="③ 협업 도구">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Slack 채널 가입: #ai-announcement, #ax-stream, #ai-{`{account}`}</li>
                  <li>Notion 워크스페이스 초대 수락</li>
                  <li>GitHub 조직 초대 + 2FA</li>
                </ul>
              </Card>
              <Card title="④ 첫 작업 룰 숙지">
                <ul className="list-disc pl-5 space-y-1">
                  <li>PRD 템플릿 1회 읽기</li>
                  <li>레포의 CLAUDE.md 1회 읽기</li>
                  <li>1번째 PR 머지 후 노하우 1줄 등록</li>
                </ul>
              </Card>
            </CardGrid>
          </Section>

          {/* 12. FAQ */}
          <Section id="faq" eyebrow="12" title="자주 묻는 질문">
            <div className="space-y-3">
              <Faq q="공용 계정인데 내 채팅이 동료에게 보이지 않게 하려면?">
                기본적으로 같은 계정 = 같은 히스토리입니다. 민감한 1회성 작업은
                <strong> Claude Projects</strong>를 분리해 만들고 작업 후 삭제하거나,
                개인 작업은 사내 RAG/로컬 LLM(부록 참조)으로 분리하세요.
              </Faq>
              <Faq q="동시 사용 한도는 어떻게 분배하나요?">
                같은 계정 동시 사용은 한도를 빠르게 소진합니다. 채널에 점유 알림 후
                중요한 일을 우선 처리하고, 나머지는 다음 윈도로 미루는 것을 권장합니다.
              </Faq>
              <Faq q="Pro와 Max 사용을 섞어도 되나요?">
                planner1(Pro)은 비개발 기획·운영 전용입니다. 개발팀이 Pro에 임시
                로그인하지 않습니다. 라이선스/한도가 다릅니다.
              </Faq>
              <Faq q="외부 고객 PC에서 공용 계정으로 로그인해도 되나요?">
                금지입니다. 회사 관리 디바이스에서만 로그인합니다.
              </Faq>
              <Faq q="API 키가 필요한 자동화는 어떻게 받나요?">
                <span className="font-mono">#ai-governance</span>에 사용 목적/예상 호출량을
                작성하면 PMO가 별도 키를 발급합니다. 공용 계정의 세션 토큰 재사용 금지.
              </Faq>
            </div>
          </Section>

          {/* ---- 본론 끝 / 부록 시작 ---- */}
          <div className="appendix-divider no-print">
            본 가이드 본론 종료 · Appendix
          </div>

          {/* A. 사내 HW 활용 (부록) */}
          <Section
            id="appendix-hw"
            eyebrow="Appendix A · 부록"
            title="사내 유휴 하드웨어 활용 (선택)"
            description="필수가 아닌 보너스 트랙입니다. 고성능 데스크탑과 NAS는 “Claude를 더 강하게” 만들어주는 자산입니다. 외부 SaaS만으로는 어려운 사내 데이터 RAG, 로컬 모델, MCP 서버, 빌드 가속까지 가능합니다."
            variant="appendix"
          >
            <CardGrid cols={2}>
              <Card title="A. 사내 RAG 서버 (강력 추천)" badge="활용 1순위">
                <p>
                  유휴 데스크탑 1~2대를 <strong>사내 지식 검색 서버</strong>로 사용. NAS에
                  쌓인 PDF/MD/회의록/도면 메타를 임베딩해 두면, Claude가 사내 자료를 직접
                  참조하는 RAG가 됩니다.
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  스택 예: Ollama(임베딩) + Qdrant/PostgreSQL+pgvector + 자체 MCP 서버 +
                  Cloudflare Tunnel/Tailscale로 외부 안전 접근.
                </p>
              </Card>
              <Card title="B. 로컬 LLM (보조)" badge="실험용">
                <p>
                  GPU 데스크탑이 있다면 Ollama 또는 vLLM으로 <strong>로컬 모델</strong>(Llama 3.1,
                  Qwen2.5, Codestral 등)을 띄워서 “민감 데이터 1차 마스킹”과 “저난도 자동완성”에
                  활용. Claude는 “고난도/최종 결과” 전용으로 분리하면 보안·운영 모두 유리.
                </p>
              </Card>
              <Card title="C. 자체 MCP 서버 호스팅">
                <p>
                  Notion, Jira, 사내 Wiki, 빌드 시스템에 접근하는 <strong>맞춤 MCP 서버</strong>를
                  데스크탑에서 상시 가동. Claude Desktop이 사내망을 통해 호출.
                </p>
              </Card>
              <Card title="D. NAS = 단일 지식 저장소">
                <p>
                  NAS의 한 디렉터리를 “사내 AI 코퍼스”로 지정해 모든 산출물·도면·회의록을
                  표준 경로로 적재. 백업/버전관리(Snapshot)로 데이터 유실 방지.
                </p>
              </Card>
              <Card title="E. 빌드/CI 러너">
                <p>
                  사내 GitHub Actions self-hosted runner로 사용. 큰 이미지 빌드(BSP/커널 등)
                  시간을 SaaS 대비 크게 단축. AI 리뷰 잡도 사내 러너로 돌릴 수 있어 운영
                  유연성↑.
                </p>
              </Card>
              <Card title="F. 학습/실험 GPU 풀">
                <p>
                  유휴 GPU를 모아 시간대별 예약 사용 (Slurm-mini, Ray, 또는 단순 Cron). 평소엔
                  RAG·로컬 LLM, 야간엔 미세조정·실험.
                </p>
              </Card>
            </CardGrid>

            <FlowDiagram
              steps={[
                {
                  title: "1단계 — NAS 표준 경로 정착",
                  body: (
                    <>
                      <span className="font-mono">/ai-corpus</span> 표준 경로 생성, 회의록·PRD·도면
                      메타를 모읍니다. 폴더 권한과 라벨 정책 먼저 정리.
                    </>
                  ),
                },
                {
                  title: "2단계 — 임베딩 파이프라인",
                  body: (
                    <>
                      데스크탑 1대에 Ollama + Qdrant 설치. 신규 파일 발생 시 자동 임베딩.
                    </>
                  ),
                },
                {
                  title: "3단계 — 사내 MCP 서버 노출",
                  body: (
                    <>
                      <span className="font-mono">drimaes-knowledge-mcp</span>로 노출하고 Claude
                      Desktop에 등록. 첫 사용자 그룹부터 점진 확대.
                    </>
                  ),
                },
                {
                  title: "4단계 — 안전한 원격 접근",
                  body: (
                    <>
                      Tailscale 또는 Cloudflare Tunnel로 재택/외근 시에도 안전하게 접근.
                      외부 공개 포트는 만들지 않습니다.
                    </>
                  ),
                },
                {
                  title: "5단계 — GPU 합류 / 로컬 LLM",
                  body: (
                    <>
                      성과 확인 후 GPU 머신을 로컬 LLM/파인튜닝 용도로 추가 합류. Claude와
                      역할 분담을 명확히 합니다.
                    </>
                  ),
                },
              ]}
            />

            <Callout variant="warn" title="보안 체크포인트">
              <ul className="list-disc pl-5 space-y-1">
                <li>사내망 노출 포트 최소화 (Tailscale/WireGuard 권장)</li>
                <li>RAG에 들어가는 자료는 <strong>접근권한 메타</strong>를 임베딩에 함께 저장 → 응답 시 권한 필터링</li>
                <li>로그(질의/응답) 보관 기간을 사전에 정의(예: 90일)하고 자동 파기</li>
              </ul>
            </Callout>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              ※ 본 부록은 권장 사항이며, 본론(공용 계정 + 통합 가이드)만으로도 거버넌스는
              충분히 동작합니다.
            </p>
          </Section>

          <Footer />
        </div>
      </main>
    </div>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4">
      <summary className="cursor-pointer list-none flex items-start justify-between gap-3 font-semibold text-slate-900 dark:text-slate-50">
        <span>{q}</span>
        <span className="ml-2 text-brand-500 transition group-open:rotate-45 text-xl leading-none">
          +
        </span>
      </summary>
      <div className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {children}
      </div>
    </details>
  );
}
