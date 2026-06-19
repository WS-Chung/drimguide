import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function Operation() {
  return (
    <SlideShell
      number="05"
      eyebrow="RULES · 운영"
      title="개인 좌석 기반 운영 규칙"
      description="각자가 자기 좌석으로 로그인합니다. 동시 사용 충돌·점유 알림 같은 공용 계정 룰은 폐지되며, 좌석 단위 보안과 결과물 보관 룰만 남습니다."
    >
      <CardGrid cols={2}>
        <Card title="🔐 로그인 보안" badge="자율" accent="amber">
          <p className="mb-2">
            Team Plan에선 <strong>회사 Workspace SSO 연동</strong>으로 로그인. 별도
            비밀번호 관리 불필요.
          </p>
          <p>
            2단계 인증·로그인 알림 등 추가 강화는 회사 Workspace 정책에 종속. 필요 시
            그라운드룰로 도입 가능.
          </p>
        </Card>
        <Card title="📦 결과물 보관" accent="brand">
          <ul className="list-disc pl-5 space-y-1">
            <li>중요 결과는 Notion DB에 즉시 적재</li>
            <li>코드 산출물은 GitHub PR로만 반영</li>
            <li>공용 Drive에 백업, 외부 공유는 도메인 제한</li>
            <li>개인 디바이스에 결과물 누적 금지</li>
          </ul>
        </Card>
        <Card title="🎚 사용 한도 관리" accent="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>좌석별 한도는 Team 어드민 콘솔에서 모니터링</li>
            <li>Standard 한도 임박 시 작업 분할 / Premium 업그레이드 제안</li>
            <li>API 추가 사용 필요 시 PMO 별도 키 발급</li>
          </ul>
        </Card>
        <Card title="⚠ 민감 정보 마스킹" badge="Must" accent="rose">
          고객사 고유명·인사정보·비밀번호/토큰·미공개 사양은 직접 입력 금지. 필요 시{" "}
          <span className="font-mono text-rose-200">[CUSTOMER_A]</span>,{" "}
          <span className="font-mono text-rose-200">[KEY_REDACTED]</span>처럼
          플레이스홀더로 치환.
        </Card>
      </CardGrid>

      <Callout variant="info" title="ℹ Team 전환으로 사라지는 룰">
        “공용 계정 점유 알림”, “동시 사용 한도 분쟁 회피”는 더 이상 불필요. 각자
        자기 좌석에서 자유롭게 사용. 이전 가이드 v1의{" "}
        <span className="font-mono text-brand-200">{`#ai-{account}`}</span>{" "}
        채널은 Project 채널로 자연 흡수.
      </Callout>
    </SlideShell>
  );
}
