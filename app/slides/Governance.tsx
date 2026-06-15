import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";

export default function Governance() {
  return (
    <SlideShell
      number="11"
      eyebrow="GOVERNANCE · 보안"
      title="거버넌스 & 보안"
      description="공용 계정은 편하지만 위험합니다. 다음 항목은 PMO가 분기별로 점검합니다."
    >
      <CardGrid cols={3}>
        <Card title="결제·청구" icon="₩" accent="brand">
          법인카드 1개로 통합. 매월 비용 리포트는{" "}
          <span className="font-mono text-brand-200">#ai-governance</span>에
          자동 게시.
        </Card>
        <Card title="계정 회수 절차" icon="↩" accent="rose">
          퇴사·이동 시 24시간 내 비밀번호 교체, 1Password 권한 회수, 외부 세션
          강제 로그아웃.
        </Card>
        <Card title="데이터 분류" icon="◈" accent="amber">
          Public / Internal / Confidential / Restricted. <strong>Restricted는
          Claude 입력 금지</strong>.
        </Card>
        <Card title="감사 로그" icon="◇" accent="emerald">
          Workspace · GitHub · Notion 감사로그 월 단위 보관, 이상 활동 알림 자동화.
        </Card>
        <Card title="라이선스·저작권" icon="©" accent="slate">
          Claude 생성 코드의 라이선스 충돌 PR 시 점검. OSS는{" "}
          <span className="font-mono">scancode</span>/<span className="font-mono">FOSSA</span>로 스캔.
        </Card>
        <Card title="고객 데이터" icon="🔒" accent="rose">
          고객사 데이터는 별도 격리된 워크스페이스/레포에서만. 공용 계정에 상시
          노출 금지.
        </Card>
      </CardGrid>

      <div className="rounded-2xl glass p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-3">
          분기 점검 체크리스트
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-[13.5px] text-slate-200">
          <li>□ 모든 공용 계정 비밀번호 12개월 이상 미변경 여부</li>
          <li>□ MFA 백업 코드 보관 위치 확인</li>
          <li>□ 1Password 공유 멤버 정합성</li>
          <li>□ Drive 외부 공유 링크 잔존 여부</li>
          <li>□ Slack 외부 게스트 채널 접근 권한</li>
          <li>□ GitHub 조직 outside collaborator 정리</li>
          <li>□ Notion 외부 게스트 공간 정리</li>
          <li>□ 감사 로그 이상 활동 회고</li>
        </ul>
      </div>
    </SlideShell>
  );
}
