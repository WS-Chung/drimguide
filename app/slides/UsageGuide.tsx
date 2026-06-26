import SlideShell from "@/app/components/SlideShell";
import BlockFlow from "@/app/components/BlockFlow";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

const DRIVE = {
  prompts:
    "https://drive.google.com/drive/folders/1Cv104mmGpw9fqNQfuAttr_LfQl8Hxqee",
  skills:
    "https://drive.google.com/drive/folders/1PZx9YNdpPZ2I2LX0zYC1k-XerQ0nEMys",
  root: "https://drive.google.com/drive/folders/1krsWm7GBlwAk9M58HfW2kfWmkSuKBqQz",
  feedbacks:
    "https://drive.google.com/drive/folders/17uEEoB9LdLBx9yNvOX0xKT3hh1uKFcL6",
};

export default function UsageGuide() {
  return (
    <SlideShell
      number="A2"
      eyebrow="APPENDIX A2 · 사용 가이드"
      title="회사 AI, 이렇게 쓰면 됩니다 — 설치 이후의 매뉴얼"
      description="설치는 끝났습니다. 이제 어떻게 대화하고, 검증된 프롬프트를 어떻게 꺼내 쓰고, 좋은 노하우를 어떻게 주고받는지를 단계로 설명합니다. 명령어를 외울 필요는 없습니다."
      variant="appendix"
    >
      {/* 0. 큰 그림 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-2">
          0. 이 매뉴얼을 보는 법
        </p>
        <p className="text-[15px] text-slate-200 leading-relaxed mb-3">
          기억할 것은 세 가지입니다 —{" "}
          <strong className="text-slate-50">① 에이전트가 어떻게 일하는지 알고</strong>,{" "}
          <strong className="text-slate-50">② 잘 부탁하는 요령을 익히고</strong>,{" "}
          <strong className="text-slate-50">
            ③ 좋은 결과를 회사 지식으로 주고받는 것
          </strong>
          입니다.
        </p>
        <BlockFlow
          items={[
            { num: "1", title: "라이프사이클", sub: "SDD · 프롬프트 적용" },
            { num: "2", title: "대화 요령", sub: "프롬프트 라이브러리 · 예시" },
            { num: "3", title: "지식 공유", sub: "가져오기 · 승격 · 내보내기" },
          ]}
        />
        <Callout variant="info" title="ℹ 한 가지만 기억하세요">
          에이전트는 “회사 룰을 먼저 읽고, 적절한 깊이를 스스로 정해서, 결과를 보고”합니다.
          여러분이 <strong>목적·배경·제약</strong>만 분명히 말하면 나머지는 에이전트가
          알아서 맞춰 줍니다.
        </Callout>
      </div>

      {/* 1. 라이프사이클 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          1. 에이전트의 라이프사이클
        </p>
        <p className="text-[14.5px] text-slate-300 leading-relaxed mb-3">
          요청 한 건이 결과로 나오기까지, 에이전트 안에서는 정해진 흐름이 돕니다. 이걸 알면
          “왜 이렇게 답하지?”가 이해됩니다.
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

      {/* 1.1 SDD */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          1.1 SDD 소개 — 같은 흐름, 다른 깊이
        </p>
        <p className="text-[14.5px] text-slate-300 leading-relaxed mb-3">
          SDD(Spec Driven Development)는 “문서부터 쓰는 무거운 방법론”이 아닙니다. 매번
          질문으로 멈추지 않도록 에이전트가 요청의 무게를 보고{" "}
          <strong className="text-slate-100">스스로 적절한 깊이</strong>를 고르는 규칙입니다.
          세 모드는 <strong className="text-slate-100">다른 방법이 아니라 같은 A~Z 흐름을
          얼마나 압축하느냐</strong>의 차이입니다.
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
              <tr className="hover:bg-brand-500/5">
                <Td>
                  <span className="font-mono font-semibold text-slate-200 px-2 py-0.5 rounded bg-slate-700/40">
                    none
                  </span>
                </Td>
                <Td>
                  <code className="text-brand-200">A → C → Z</code>
                </Td>
                <Td>단순 질문, 오타·표현 수정처럼 영향 없는 작은 일</Td>
                <Td>별도 문서 없음 · 결과 보고만</Td>
              </tr>
              <tr className="hover:bg-brand-500/5">
                <Td>
                  <span className="font-mono font-semibold text-emerald-200 px-2 py-0.5 rounded bg-emerald-500/20">
                    lite
                  </span>
                </Td>
                <Td>
                  <code className="text-brand-200">A → C → E → F → G → Z</code>
                </Td>
                <Td>한두 파일 수준 문서/설정 보강, 명확한 작은 변경</Td>
                <Td>간단한 계획 + 변경 후 확인</Td>
              </tr>
              <tr className="hover:bg-brand-500/5">
                <Td>
                  <span className="font-mono font-semibold text-brand-200 px-2 py-0.5 rounded bg-brand-500/20">
                    full
                  </span>
                </Td>
                <Td>
                  <code className="text-brand-200">
                    A → B → C → D → E → F → G → H → Z
                  </code>
                </Td>
                <Td>새 기능·구조 변경, 여러 사람이 이어받는 큰 작업</Td>
                <Td>requirements · design · tasks · review</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <Callout variant="info" title="ℹ 내가 직접 모드를 정하고 싶다면">
          그냥 말로 지정하면 됩니다. <Say>이건 가볍게 lite로 빠르게 해줘</Say>{" "}
          <Say>설계 문서까지 남기는 full로 진행해줘</Say>{" "}
          지정하지 않으면 에이전트가 알아서 고르고, 작업 중 범위가 커지면{" "}
          <strong>스스로 승격</strong>합니다. (단, 파괴적 작업 · 보안 · 비용 · 외부
          배포는 모드와 무관하게 먼저 확인합니다.)
        </Callout>
      </div>

      {/* 1.2 프롬프트 적용 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          1.2 프롬프트가 적용되는 과정 — 5층으로 쌓입니다
        </p>
        <p className="text-[14.5px] text-slate-300 leading-relaxed mb-3">
          에이전트가 보는 “지시”는 내 한 줄 요청만이 아닙니다. 회사 표준이 여러 겹으로 미리
          깔려 있고, 그 위에 내 요청이 얹힙니다.
        </p>
        <Layer
          n="01"
          name="진입점"
          color="brand"
          desc="AGENTS.md · CLAUDE.md · GEMINI.md (룰 포인터)"
        />
        <Layer
          n="02"
          name="회사 룰"
          color="brand"
          desc=".agents/rules/ — 보안 · 출처 · SDD · 아키텍처 · 커밋"
        />
        <Layer
          n="03"
          name="스킬"
          color="emerald"
          desc="코드리뷰 · 회의록 · 커밋메시지 등 작업 절차"
        />
        <Layer
          n="04"
          name="프롬프트"
          color="emerald"
          desc="검증된 프롬프트 골격 (.agents/prompts/)"
        />
        <Layer
          n="05"
          name="내 요청"
          color="amber"
          desc='"이거 해줘" + 목적 · 배경 · 제약 — 여러분이 직접 쓰는 부분'
        />
        <Callout variant="info" title="ℹ 이게 왜 좋은가요?">
          매번 “보안 지켜”, “출처 남겨”, “커밋은 회사 양식으로”를 말하지 않아도 됩니다.
          이미 룰 층에 깔려 있어서, 여러분은 <strong>하고 싶은 일만</strong> 말하면
          됩니다.
        </Callout>
      </div>

      {/* 2. 대화 요령 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          2. 에이전트와의 대화 요령
        </p>
        <p className="text-[14.5px] text-slate-300 leading-relaxed mb-3">
          좋은 결과의 80%는 “잘 부탁하기”에서 나옵니다. 네 가지만 챙기면 됩니다.
        </p>
        <BlockFlow
          items={[
            { num: "🎯", title: "목적", sub: "무엇을 원하나" },
            { num: "👤", title: "대상", sub: "누가 읽나" },
            { num: "📄", title: "배경", sub: "상황·입력 자료" },
            { num: "⚙️", title: "제약·출력", sub: "조건·원하는 형식" },
          ]}
          compact
        />
      </div>

      <CardGrid cols={2}>
        <Card title="🙅 막연한 요청 — 결과 품질 ↓" accent="rose">
          <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-rose-400/20 p-3 text-[12.5px] leading-relaxed text-slate-200 font-mono whitespace-pre mt-1">{`💬 회의록 정리해줘.`}</pre>
          <ul className="list-disc pl-5 mt-2 space-y-0.5 text-[13.5px]">
            <li>회의록이 어디 있나?</li>
            <li>누가 읽는 요약인가? (임원/팀)</li>
            <li>어떤 형식? (불릿/표/문장)</li>
            <li>액션 아이템 표기 룰은?</li>
          </ul>
          <p className="text-[12.5px] text-slate-500 mt-2">
            → AI가 추정으로 채워서 답하므로 매번 결과가 달라짐.
          </p>
        </Card>
        <Card title="🙆 잘 부탁한 요청 — 일관된 결과" accent="emerald">
          <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-emerald-400/20 p-3 text-[12.5px] leading-relaxed text-slate-200 font-mono whitespace-pre mt-1">{`💬 [목적] 어제 회의록을 임원 보고용
요약으로
[대상] CTO 한 명
[배경] 첨부 회의록.docx (45분 분량)
[제약] 5줄 이내 + 액션 아이템 표
       민감 고객사명은 [REDACTED]로`}</pre>
          <p className="text-[12.5px] text-slate-500 mt-2">
            → 같은 패턴으로 부탁하면 결과가 안정적. 잘 동작한 이 프롬프트를 .md로 저장해
            공유 = 다음 사람의 출발점이 됨.
          </p>
        </Card>
      </CardGrid>

      {/* 2.2 프롬프트 예시 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          2.2 프롬프트 예시 — 골격 활용
        </p>
        <p className="text-[14.5px] text-slate-300 leading-relaxed mb-2">
          실제 골격 하나를 보면 감이 옵니다. 아래는{" "}
          <span className="font-mono text-brand-200">dev-implementation.md</span>의 구조 —
          <strong className="text-brand-200"> 대괄호 부분만</strong> 채우면 됩니다.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-brand-500/20 p-3.5 text-[12.5px] leading-relaxed text-slate-200 font-mono whitespace-pre">{`개발 구현 프롬프트 (dev-implementation)
─────────────────────────────────
당신은 Senior Software Engineer이다.
다음 요구사항을 구현한다.

## 요구사항
[구현할 기능 — 민감정보는 placeholder로]

## 개발환경
- OS / Language / Framework / Compiler

## 조건
- 유지보수성 · 성능 · 예외처리 · 주석 포함

## 출력
1. 설계   2. 코드   3. 설명   4. 개선점`}</pre>
        <p className="text-[14px] text-slate-200 mt-3 mb-2">
          직무별로 자주 쓰는 한 줄 요청 예시:
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-800/70 bg-ink-800/40 backdrop-blur">
          <table className="min-w-full text-[14px]">
            <thead className="bg-ink-700/40 text-slate-400 text-[12px] uppercase tracking-wider">
              <tr>
                <Th>직무</Th>
                <Th>이렇게 말하면 됩니다</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              <ExRow job="개발">
                <Say>
                  dev-implementation 골격으로 "CSV 업로드 검증" 기능을 Node로 구현해줘.
                  예외처리·주석 포함.
                </Say>
              </ExRow>
              <ExRow job="기획·PM">
                <Say>
                  product/prd 골격으로 "알림 설정 화면" PRD 초안 잡아줘. 대상은 모바일
                  사용자.
                </Say>
              </ExRow>
              <ExRow job="사업·CS">
                <Say>
                  business/faq 골격으로 환불 정책 FAQ 5개 만들어줘. 고객명은{" "}
                  {`<고객명>`}으로.
                </Say>
              </ExRow>
              <ExRow job="공통">
                <Say>
                  comparison-analysis 골격으로 A안·B안을 표로 비교하고 결론 내줘.
                </Say>
              </ExRow>
            </tbody>
          </table>
        </div>
        <Callout variant="success" title="✓ 잘 통한 프롬프트는 버리지 마세요">
          “이거 좋다” 싶은 프롬프트가 있으면 아래 <strong>3. 내보내기</strong>로 회사
          라이브러리에 올릴 수 있습니다. <Say>이 프롬프트 자산화해줘</Say>라고 말하면
          에이전트가 정리해 줍니다.
        </Callout>
      </div>

      {/* 3. 지식 공유 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          3. 지식 공유 방법
        </p>
        <p className="text-[14.5px] text-slate-300 leading-relaxed mb-3">
          남이 만든 좋은 프롬프트·스킬을 <strong className="text-slate-100">가져오고</strong>
          , 검증된 건 <strong className="text-slate-100">승격</strong>하고, 내 노하우는{" "}
          <strong className="text-slate-100">내보냅니다</strong>. 이 순환이 회사 AI 자산을
          키웁니다.
        </p>
        <BlockFlow
          items={[
            { num: "01", title: "공유 채널", sub: "Drive AI-Knowhow" },
            { num: "02", title: "가져오기", sub: "다운로드/MD" },
            { num: "03", title: "검역·검사", sub: "보안·출처" },
            { num: "04", title: "승격", sub: "공식 자산" },
            { num: "05", title: "내보내기", sub: "내 노하우 정제" },
          ]}
        />
        <Callout variant="warn" title="⚠ 핵심 원칙">
          외부에서 받은 건 <strong>절대 바로 회사 자산처럼 쓰지 않습니다.</strong> 먼저
          검역 구역에 두고, 검증된 것만 승격합니다.
        </Callout>
      </div>

      {/* 3.1 가져오기 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          3.1 가져오기 — 다운로드 / MD 복사
        </p>
        <ol className="space-y-2">
          <Step n={1} title="어디서 받을지 고르기">
            공유 폴더 Google Drive{" "}
            <span className="font-mono text-brand-200">AI-Knowhow/</span> (skills · prompts)
            에서 받거나, GitHub <span className="font-mono">prompts</span>/
            <span className="font-mono">skills</span> 후보 브랜치에서 받습니다.
            <Say>AI-Knowhow/prompts 폴더의 .md 목록을 보여줘.</Say>
          </Step>
          <Step n={2} title="받는 방법 — ① 다운로드 ② MD 복사">
            <strong className="text-slate-100">① 직접 다운로드(권장):</strong> AI 도구에
            Google Drive 커넥터가 연결돼 있으면 에이전트가 .md를 원형 그대로 내려받습니다.
            연결이 없으면 사람이 Drive 웹에서 내려받아{" "}
            <span className="font-mono">AI-Knowhow/</span>에 넣습니다.
            <br />
            <strong className="text-slate-100">② MD 복사:</strong> 짧은 내용은 .md 본문을
            복사해 붙여넣어도 됩니다. (큰 파일을 base64로 옮겨 적는 방식은 피하세요.)
          </Step>
          <Step n={3} title="검역 구역에 두기">
            받은 파일은 곧장 쓰지 않고 아래 위치에 둡니다 — “검증 전 공유본” 보관소.
            <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-brand-500/20 p-3 text-[12.5px] leading-relaxed text-slate-200 font-mono whitespace-pre mt-1.5">{`AI-Knowhow/skills/
AI-Knowhow/prompts/
AI-Knowhow/docs/`}</pre>
          </Step>
          <Step n={4} title="보안검사 받기">
            에이전트가 로컬 파일에서{" "}
            <strong className="text-slate-100">
              민감정보·credential·고객 데이터·출처 누락
            </strong>
            을 점검합니다. 필요하면 가린(redacted) 사본을 만듭니다.
            <Say>
              AI-Knowhow에 받은 이 .md를 보안검사하고, 무슨 자산인지·어디 들어갈지·기존
              파일과 충돌하는지 알려줘.
            </Say>
          </Step>
          <Step n={5} title="확인 후 배치">
            요약 · 배치 위치 · 충돌 여부를 확인하고 컨펌하면, 충돌 시 기본은{" "}
            <strong className="text-slate-100">add-namespaced</strong>(이름공간을 나눠
            나란히 두기)로 안전하게 배치합니다. (다른 선택지: keep-existing /
            rename-proposed / replace-existing)
          </Step>
        </ol>
        <Callout variant="warn" title="⚠ 검역이 필요한 이유">
          외부 .md에는 남의 민감정보가 섞여 있거나, 우리 프로젝트와 다른 가정이 들어 있을
          수 있습니다. <span className="font-mono">AI-Knowhow/</span>는 검토 전 자료가
          실수로 커밋되지 않도록 보호되는 격리 구역입니다.
        </Callout>
      </div>

      {/* 3.2 승격 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          3.2 승격 및 사용 방법
        </p>
        <p className="text-[14.5px] text-slate-300 leading-relaxed mb-3">
          검역 구역의 자료가 여러 사람·여러 작업에서 반복적으로 잘 쓰이면, 운영자 검토를
          거쳐 공식 자산으로 승격합니다.
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-800/70 bg-ink-800/40 backdrop-blur">
          <table className="min-w-full text-[14px]">
            <thead className="bg-ink-700/40 text-slate-400 text-[12px] uppercase tracking-wider">
              <tr>
                <Th>상태</Th>
                <Th>위치</Th>
                <Th>의미</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              <tr className="hover:bg-brand-500/5">
                <Td>
                  <Chip tone="slate">검증 전</Chip>
                </Td>
                <Td>
                  <span className="font-mono text-slate-300">AI-Knowhow/…</span>
                </Td>
                <Td>받아만 둔 공유본 · 내 프로젝트에서 시험 사용</Td>
              </tr>
              <tr className="hover:bg-brand-500/5">
                <Td>
                  <Chip tone="emerald">후보</Chip>
                </Td>
                <Td>
                  GitHub <span className="font-mono">prompts</span>/
                  <span className="font-mono">skills</span> 브랜치
                </Td>
                <Td>공유 후보로 수집됨 · 아직 공식 아님</Td>
              </tr>
              <tr className="hover:bg-brand-500/5">
                <Td>
                  <Chip tone="brand">공식</Chip>
                </Td>
                <Td>
                  <span className="font-mono">main · company-*</span> catalog/profile
                </Td>
                <Td>검증 통과 · 설치 기본 자산으로 배포</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[14px] text-slate-200 mt-3 mb-1.5">
          승격 게이트 (기본값 — governance가 바꾸지 않는 한):
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "사용 ≥ 5회",
            "사용자 ≥ 2명",
            "성공률 ≥ 80%",
            "표현 안정",
            "owner · reviewer",
          ].map((g) => (
            <span
              key={g}
              className="text-[13px] bg-brand-500/15 text-brand-200 ring-1 ring-brand-400/30 rounded-md px-2.5 py-1"
            >
              {g}
            </span>
          ))}
        </div>
        <p className="text-[13.5px] text-slate-400 mt-2.5 leading-relaxed">
          승격은 에이전트가 단독으로 “공식”이라 선언하지 않습니다. 게이트 충족 +{" "}
          <strong className="text-slate-200">운영자 수동 검토</strong>를 거칩니다.
        </p>
        <Say>이 프롬프트, 승격해도 될지 게이트 기준으로 점검하고 승격 제안 정리해줘.</Say>

        <p className="mt-4 mb-2 text-[14.5px] text-amber-200 font-semibold">
          ⚠ 승격 없이 그냥 쓰면 — 한계점
        </p>
        <CardGrid cols={2}>
          <Card title="🔁 자동 배포 안 됨" accent="amber">
            설치/업데이트 대상이 아니라, 새 프로젝트나 동료에게 그대로 따라오지 않습니다.
            매번 수동으로 다시 가져와야 합니다.
          </Card>
          <Card title="🧪 품질 보증 없음" accent="amber">
            회사 검증(보안·출처·중복·품질)을 통과하지 않았습니다. 잘못된 가정이나 빠진
            출처가 있을 수 있습니다.
          </Card>
          <Card title="👤 책임자 불명확" accent="amber">
            owner/reviewer가 없어, 문제가 생기거나 업데이트가 필요할 때 누구에게 물어야
            할지 불분명합니다.
          </Card>
          <Card title="🔀 표류·중복 위험" accent="amber">
            여러 사람이 각자 조금씩 고친 사본이 흩어져, 어느 게 “맞는 버전”인지 알 수
            없게 됩니다 (drift).
          </Card>
        </CardGrid>
        <Callout variant="info" title="한 줄 요약">
          <strong>혼자 잠깐 쓰는 건 OK, 팀 표준으로 삼으려면 반드시 승격.</strong> 적용 시
          에이전트는 항상 “검증 전 공유본”이라고 표시하고 컨펌을 받습니다.
        </Callout>
      </div>

      {/* 3.3 내보내기 */}
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          3.3 내보내기 — 업로드 / MD 추출
        </p>
        <p className="text-[14.5px] text-slate-300 leading-relaxed mb-3">
          내가 잘 쓴 프롬프트·스킬·노하우를 회사 공유 채널로 올리는 단계입니다. 에이전트가
          먼저 <strong className="text-slate-100">정제(민감정보 제거·출처·frontmatter)</strong>
          를 도와준 뒤 올립니다.
        </p>
        <ol className="space-y-2">
          <Step n={1} title="자산화 요청 (MD 추출)">
            대화에 흩어진 내용을 재사용 가능한 .md 한 장으로 뽑아냅니다.
            <Say>방금 그 프롬프트, 공유할 수 있게 .md로 정리해줘.</Say>
            <p className="text-[13px] text-slate-500 mt-1">
              에이전트가 “프롬프트인지 스킬인지” 분류하고, 회사 골격(역할·목적·대상·배경·
              제약·출력)에 맞춰 본문을 정돈합니다.
            </p>
          </Step>
          <Step n={2} title="정제 — 민감정보 제거 · 출처 · frontmatter">
            고객정보·토큰·미공개 자료는 제거하거나{" "}
            <span className="font-mono text-slate-300">{`<placeholder>`}</span>로
            치환합니다. 외부 자료 기반이면 출처/라이선스를 적고, 한 줄 설명과
            frontmatter를 붙입니다.
          </Step>
          <Step n={3} title="업로드 — Google Drive">
            프롬프트는 <span className="font-mono">AI-Knowhow/prompts/</span>, 스킬은{" "}
            <span className="font-mono">AI-Knowhow/skills/</span>에 올립니다.
            <div className="mt-2 flex flex-wrap gap-2">
              <DriveLink href={DRIVE.prompts} label="AI-Knowhow / prompts" />
              <DriveLink href={DRIVE.skills} label="AI-Knowhow / skills" />
              <DriveLink href={DRIVE.root} label="AI-Knowhow (상위)" />
            </div>
            <p className="text-[13px] text-slate-500 mt-1.5 leading-relaxed">
              폴더 이름으로 검색하면 동명 결과가 많이 나옵니다. 위 바로가기 링크로
              여세요(에이전트는 folder ID로 범위를 좁힙니다). 공유드라이브 멤버여야 보입니다.
            </p>
          </Step>
          <Step n={4} title="이력 남기기 — GitHub 후보 브랜치">
            변경 이력·중복 관리를 위해 후보 브랜치에도 남깁니다. (
            <span className="font-mono">main</span> 직접 push 아님)
            <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-brand-500/20 p-3 text-[12.5px] leading-relaxed text-slate-200 font-mono whitespace-pre mt-1.5">{`prompts → uploads/prompts/<name>.md
skills  → uploads/skills/<skill-name>/SKILL.md`}</pre>
          </Step>
        </ol>
      </div>

      <CardGrid cols={2}>
        <Card title="📥 가져오기 요약" accent="brand">
          <ul className="list-disc pl-5 space-y-1">
            <li>Drive / GitHub 후보에서 다운로드 또는 MD 복사</li>
            <li>
              먼저 <span className="font-mono">AI-Knowhow/</span> 검역
            </li>
            <li>보안검사 → 요약·충돌 확인 → 배치</li>
            <li>승격 전엔 “검증 전 공유본”</li>
          </ul>
        </Card>
        <Card title="📤 내보내기 요약" accent="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>대화 → 재사용 .md로 추출</li>
            <li>정제: 민감정보 · 출처 · frontmatter</li>
            <li>
              Drive <span className="font-mono">AI-Knowhow/</span> 업로드
            </li>
            <li>GitHub 후보 브랜치에 이력</li>
          </ul>
        </Card>
      </CardGrid>

      {/* 4. 꼭 지킬 것 + feedbacks */}
      <CardGrid cols={2}>
        <Card title="🚫 민감정보는 넣지·올리지 않기" badge="Must" accent="rose">
          고객 개인정보, 비밀번호·토큰, 미공개 계약·재무·법무 자료는 입력도 업로드도 금지.
          꼭 써야 하면{" "}
          <span className="font-mono text-rose-200">{`<고객명>`}</span> ·{" "}
          <span className="font-mono text-rose-200">{`<API_KEY>`}</span>처럼 가립니다.
        </Card>
        <Card title="✱ 외부 자료는 출처 남기기" badge="Must" accent="brand">
          인터넷 글·문서를 가져와 쓰면 출처(가능하면 라이선스)를 함께 적습니다. 공유 .md
          frontmatter <span className="font-mono">source</span>/
          <span className="font-mono">license</span>에 기록하면 됩니다.
        </Card>
      </CardGrid>

      <Callout variant="success" title="✓ 막히거나 개선 아이디어가 있으면">
        에이전트에게{" "}
        <Say>이 내용 피드백 .md로 정리해서 AI-Knowhow/feedbacks에 올리게 해줘</Say>
        라고 하면, 정리·민감정보 제거를 도와 공유 폴더에 올려 줍니다. 운영자가 보고
        개선합니다.
        <div className="mt-3">
          <DriveLink href={DRIVE.feedbacks} label="AI-Knowhow / feedbacks" />
        </div>
      </Callout>

      <p className="text-[12.5px] text-slate-500 leading-relaxed">
        출처: 이 부록은 번들의 <span className="font-mono">SETUP_WIZARD.md</span>,{" "}
        <span className="font-mono">docs/SHARED_FOLDER_GUIDE.md</span>,{" "}
        <span className="font-mono">
          .agents/rules/developer/spec-driven-development.md
        </span>,{" "}
        <span className="font-mono">.agents/rules/common/knowledge-sharing.md</span>,
        프롬프트 라이브러리(<span className="font-mono">assets/prompts/</span>)와{" "}
        <span className="font-mono">prompt-asset</span>·
        <span className="font-mono">external-doc-asset</span> 스킬을 다크 테마로 옮긴
        것입니다.
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
function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-3.5 py-2.5 align-top text-slate-200 leading-relaxed">
      {children}
    </td>
  );
}
function Say({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-brand-500/15 border border-brand-400/30 text-brand-100 rounded-lg px-2.5 py-1 my-1 mr-1 text-[13.5px]">
      💬 {children}
    </span>
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
      <span className="shrink-0 grid place-items-center h-7 w-7 rounded-md bg-brand-500/20 text-brand-200 font-mono text-[13px] font-bold ring-1 ring-brand-400/30">
        {n}
      </span>
      <div className="flex-1">
        <p className="font-semibold text-slate-100 text-[14.5px] mb-1">{title}</p>
        <div className="text-[13.5px] text-slate-300 leading-relaxed">{children}</div>
      </div>
    </li>
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
    <div
      className={`flex items-start gap-3 rounded-lg border px-3.5 py-2.5 mb-1.5 last:mb-0 ${bg}`}
    >
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
function Chip({
  tone,
  children,
}: {
  tone: "brand" | "emerald" | "slate";
  children: React.ReactNode;
}) {
  const cls =
    tone === "brand"
      ? "bg-brand-500/20 text-brand-200 ring-1 ring-brand-400/30"
      : tone === "emerald"
      ? "bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-400/30"
      : "bg-slate-600/40 text-slate-200 ring-1 ring-slate-500/40";
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[12.5px] font-mono font-semibold ${cls}`}
    >
      {children}
    </span>
  );
}
function ExRow({
  job,
  children,
}: {
  job: string;
  children: React.ReactNode;
}) {
  return (
    <tr className="hover:bg-brand-500/5">
      <td className="px-3.5 py-2.5 align-top text-slate-100 font-semibold whitespace-nowrap">
        {job}
      </td>
      <td className="px-3.5 py-2.5 align-top leading-relaxed">{children}</td>
    </tr>
  );
}
function DriveLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-100 ring-1 ring-emerald-400/30 px-2.5 py-1 text-[13.5px] font-semibold transition"
    >
      📁 {label} <span className="text-[12px] text-emerald-300">↗</span>
    </a>
  );
}
