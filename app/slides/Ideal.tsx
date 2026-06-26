import SlideShell from "@/app/components/SlideShell";
import BlockFlow from "@/app/components/BlockFlow";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function Ideal() {
  return (
    <SlideShell
      number="07"
      eyebrow="IDEAL USAGE · 이상적인 활용"
      title="잘 부탁하는 4가지 요소 + 노하우를 자산으로"
      description="좋은 결과의 80%는 잘 부탁하기에서 나옵니다. 네 가지(목적·대상·배경·제약)만 챙기면 됩니다. 그리고 잘 동작한 결과는 회사 자산으로 흘려보내고, 막힌 케이스도 똑같이 공유합니다."
    >
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          좋은 요청의 4요소
        </p>
        <BlockFlow
          items={[
            { num: "🎯", title: "목적", sub: "무엇을 원하나" },
            { num: "👤", title: "대상", sub: "누가 읽나" },
            { num: "📄", title: "배경", sub: "상황·입력 자료" },
            { num: "⚙️", title: "제약·출력", sub: "조건·형식" },
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
            → 같은 패턴으로 부탁하면 결과가 안정적. 잘 동작한 이 프롬프트를 .md로 저장해서
            공유 = 다음 사람의 출발점이 됨.
          </p>
        </Card>
      </CardGrid>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[12px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          노하우를 자산으로 — 흐름
        </p>
        <BlockFlow
          items={[
            { num: "01", title: "사용", sub: "내 프로젝트" },
            { num: "02", title: "검토", sub: "잘 동작했나" },
            { num: "03", title: "정리", sub: ".md로" },
            { num: "04", title: "공유", sub: "Drive 업로드" },
            { num: "05", title: "승격", sub: "정식 자산" },
          ]}
        />
      </div>

      <CardGrid cols={3}>
        <Card title="✅ 공유할 가치 있는 것" accent="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>여러 번 재사용한 프롬프트 골격</li>
            <li>회사 도메인 특화 작업 절차</li>
            <li>실패하다가 풀어낸 케이스</li>
            <li>특정 직무·프로젝트 페르소나 조합</li>
          </ul>
        </Card>
        <Card title="📦 공유 형식" accent="brand">
          <ul className="list-disc pl-5 space-y-1">
            <li>제목 한 줄 + 목적</li>
            <li>입력 예시 + 출력 예시</li>
            <li>주의 사항</li>
            <li>출처(있다면) · 작성자</li>
          </ul>
          <p className="mt-1.5 text-[12.5px] text-slate-500">
            AI에게 형식을 만들어 달라고 부탁해도 됩니다.
          </p>
        </Card>
        <Card title="🚫 공유하지 말 것" accent="rose">
          <ul className="list-disc pl-5 space-y-1">
            <li>고객 PII · 계약 자료</li>
            <li>비밀번호 · 토큰 · API 키</li>
            <li>미공개 사양 · 재무 자료</li>
            <li>출처가 불명확한 외부 자료</li>
          </ul>
        </Card>
      </CardGrid>

      <Callout variant="info" title="ℹ 회사가 강제하는 KPI는 없습니다">
        매주 회고, 월간 데모데이, 분기 리뷰 같은 강제 일정은 운영하지 않습니다. 잘 쓴
        프롬프트와 결과가 자연스럽게 공유되어 자산이 되는 모델을 지향합니다. 강제 없는 공유가
        가능하려면 <strong className="text-brand-200">한 번 더 신경 써서 .md로 남겨 두는 습관</strong>이
        가장 중요합니다.
      </Callout>
    </SlideShell>
  );
}
