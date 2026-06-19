import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";

export default function Governance() {
  return (
    <SlideShell
      number="17"
      eyebrow="GOVERNANCE · 보안"
      title="거버넌스 & 보안"
      description="개인 좌석 + Team 어드민 콘솔 모델로 전환되어 점검 항목이 단순해졌습니다. 룰 변경은 자율 제안 → 합의 후 적용."
    >
      <CardGrid cols={3}>
        <Card title="↩ 계정 회수" icon="↩" accent="rose">
          퇴사·이동 시 24시간 내 Team 좌석 회수 + Workspace 외부 세션 강제 로그아웃.
          SSO 폐기.
        </Card>
        <Card title="◈ 데이터 분류" icon="◈" accent="amber">
          Public / Internal / Confidential / Restricted.{" "}
          <strong>Restricted는 Claude 입력 금지</strong>.
        </Card>
        <Card title="◇ 감사 로그" icon="◇" accent="emerald">
          Workspace · GitHub · Notion · Claude Team 어드민 감사로그 월 단위 보관.
        </Card>
        <Card title="© 라이선스·저작권" icon="©" accent="slate">
          Claude 생성 코드의 라이선스 충돌 PR 시 점검.{" "}
          <span className="font-mono">scancode</span>/<span className="font-mono">FOSSA</span>{" "}
          스캔.
        </Card>
        <Card title="🔒 고객 데이터" icon="🔒" accent="rose">
          고객사 데이터는 별도 격리 Project. 공용 워크스페이스 노출 금지.
        </Card>
        <Card title="⇪ 변경 관리" icon="⇪" accent="brand">
          룰 변경 · 좌석 재배분 · 한도 조정 →{" "}
          <span className="font-mono text-brand-200">#ai-governance</span> 제안 →
          분기 리뷰에서 합의 후 적용.
        </Card>
      </CardGrid>

      <div className="rounded-2xl glass p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-3 font-semibold">
          분기 점검 체크리스트
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-[13.5px] text-slate-200">
          <li>□ Team 좌석별 사용량 분포 (Premium 활용도, Standard 한도 임박)</li>
          <li>□ Notion Member/Guest 정합성 재확인</li>
          <li>□ Drive 외부 공유 링크 잔존 여부</li>
          <li>□ Slack 외부 게스트 채널 접근 권한</li>
          <li>□ GitHub 조직 outside collaborator 정리</li>
          <li>□ Claude Team 어드민 감사 로그 이상 활동 회고</li>
          <li>□ 룰 개정 제안 검토 / 반영</li>
        </ul>
      </div>
    </SlideShell>
  );
}
