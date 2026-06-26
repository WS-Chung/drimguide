import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function Operation() {
  return (
    <SlideShell
      number="03"
      eyebrow="RULES · 운영 규칙"
      title="꼭 지킬 것은 단 2가지 — 나머지는 자율"
      description="회사 차원의 탑다운 룰은 정하지 않습니다. 보안과 출처, 이 두 가지만 지키면 나머지는 각자 프로젝트에 맞게 자유롭게 운영합니다. 거버넌스는 운영 데이터가 충분히 쌓인 뒤 정립합니다."
    >
      <CardGrid cols={2}>
        <Card title="① 민감정보 입력 금지" badge="Must" icon="🚫" accent="rose">
          <p className="mb-1.5">
            <strong className="text-slate-100">고객 개인정보, 비밀번호·토큰, 미공개 계약·재무 자료</strong>는
            AI에 직접 입력하지 않습니다.
          </p>
          <p>
            꼭 써야 하는 경우{" "}
            <span className="font-mono text-rose-200">{`<고객명>`}</span>,{" "}
            <span className="font-mono text-rose-200">[KEY_REDACTED]</span>처럼 가려서
            사용합니다.
          </p>
        </Card>
        <Card title="② 외부 자료는 출처 남기기" badge="Must" icon="✱" accent="brand">
          <p className="mb-1.5">
            인터넷 글·문서 등 <strong className="text-slate-100">외부 자료를 가져와 쓰면</strong>{" "}
            출처를 함께 적어 둡니다.
          </p>
          <p>
            결과물에 외부 인용이 있을 때, 어디서 가져왔는지 한 줄이라도 남기는 습관이 회사
            자산의 신뢰성을 만듭니다.
          </p>
        </Card>
      </CardGrid>

      <Callout variant="info" title="ℹ 나머지는 모두 자율">
        Claude 계정 운영 방식, 작업 시간대, 프롬프트 작성 스타일, 결과물 공유 빈도 등은
        모두 각자/팀 자율로 결정합니다. 회사가 강제하는 KPI(주간 회고, 데모데이 등)는{" "}
        <strong className="text-brand-200">설정하지 않습니다</strong>. 잘 쓴 사례가 자연스럽게
        공유되고 검증되어 자산이 되는 방식을 지향합니다.
      </Callout>

      <CardGrid cols={3}>
        <Card title="🔓 계정 운영" accent="slate">
          기존에 부여된 Claude <strong className="text-slate-100">개인 계정 8개</strong>를
          그대로 사용합니다. Team Plan 전환·시트 재배분 등의 계획은 현재 없습니다.
        </Card>
        <Card title="📂 지식 공유" accent="slate">
          공유 채널은 <strong className="text-slate-100">Google 공유 드라이브 한 곳</strong>
          만 사용합니다. Slack 채널 운영, Notion 템플릿 DB 같은 추가 채널은 운영하지
          않습니다.
        </Card>
        <Card title="🧭 거버넌스" accent="slate">
          정식 거버넌스 체계는 운영 데이터(KIT 사용 패턴·자주 쓰는 프롬프트·실제 문제 사례)가
          충분히 쌓인 뒤에 정립합니다. 지금은 <strong className="text-slate-100">결정 보류</strong>.
        </Card>
      </CardGrid>

      <Callout variant="warn" title="⚠ 막혔을 때 가장 빠른 길">
        문제가 생기면 화면의 오류 메시지를 그대로 AI에게 붙여넣고 “이거 어떻게 해결해?”
        라고 물어보세요. 그래도 안 풀리면 AI에게 피드백을 .md로 정리하게 해서{" "}
        <span className="font-mono text-amber-200">AI-Knowhow/feedbacks</span>에 올리면
        다른 사람도 같은 문제를 공유합니다.
      </Callout>
    </SlideShell>
  );
}
