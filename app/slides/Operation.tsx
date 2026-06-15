import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function Operation() {
  return (
    <SlideShell
      number="04"
      eyebrow="RULES · 운영"
      title="공용 계정 운영 규칙"
      description="여러 명이 한 계정을 공유하기 때문에, 다음 규칙을 지켜야 사용 충돌과 보안 사고를 막을 수 있습니다."
    >
      <CardGrid cols={2}>
        <Card title="🔐 로그인 보안" badge="자율" accent="amber">
          <p className="mb-2">
            현재 공용 계정에는{" "}
            <strong className="text-amber-200">
              2단계 인증 · 로그인 알림 등 강제 정책이 적용되지 않습니다
            </strong>
            . 보안 등급은 의도적으로 낮은 상태(빠른 도입 우선).
          </p>
          <p className="font-semibold text-slate-200 text-[12.5px] mt-1">
            필요 시 자율 그라운드 룰로 도입 권장
          </p>
          <ul className="list-disc pl-5 space-y-0.5 mt-1">
            <li>2단계 인증 + 백업 코드 보관</li>
            <li>1Password / Bitwarden으로 비밀번호 공유</li>
            <li>로그인 알림 수신자 지정</li>
          </ul>
          <p className="text-[11.5px] text-slate-500 mt-2">
            도입 여부와 시점은 팀 자율 · PMO 협의로 결정.
          </p>
        </Card>
        <Card title="⏱ 동시 사용" accent="brand">
          <ul className="list-disc pl-5 space-y-1">
            <li>같은 계정 동시 채팅은 한도 빠르게 소진</li>
            <li>
              장시간 작업 전{" "}
              <span className="font-mono text-brand-200">#ai-{`{account}`}</span>
              에 점유 알림
            </li>
            <li>채팅 히스토리는 모두에게 노출 — 민감 정보 입력 금지</li>
          </ul>
        </Card>
        <Card title="📦 결과물 보관" accent="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>중요 결과는 Notion DB에 즉시 적재</li>
            <li>코드 산출물은 GitHub PR로만 반영</li>
            <li>공용 Drive 백업, 외부 공유는 도메인 제한</li>
          </ul>
        </Card>
        <Card title="🎚 사용 한도 관리" accent="slate">
          <ul className="list-disc pl-5 space-y-1">
            <li>Max는 일정 시간 단위 한도 — 긴 컨텍스트 + 코딩 위주</li>
            <li>한도 임박 시 작업 분할 / 다음 윈도로 미루기</li>
            <li>API 추가 사용은 PMO 승인 후 별도 키 발급</li>
          </ul>
        </Card>
      </CardGrid>

      <Callout variant="warn" title="민감 정보 마스킹 룰">
        고객사 고유명, 인사정보, 비밀번호/토큰, 미공개 사양은 직접 입력 금지.
        필요 시{" "}
        <span className="font-mono text-amber-200">[CUSTOMER_A]</span>,{" "}
        <span className="font-mono text-amber-200">[KEY_REDACTED]</span>처럼
        플레이스홀더로 치환.
      </Callout>
    </SlideShell>
  );
}
