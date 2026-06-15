import SlideShell from "@/app/components/SlideShell";
import BlockFlow from "@/app/components/BlockFlow";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function GoogleSlide() {
  return (
    <SlideShell
      number="06"
      eyebrow="INTEGRATION · GOOGLE WORKSPACE"
      title="Google Workspace 연동"
      description="공용 계정의 Google Workspace 이메일은 반드시 연결합니다. Drive 문서를 Claude의 컨텍스트로 붙이고, Gmail/Calendar는 회의록·일정 자동화에 활용합니다."
    >
      <BlockFlow
        items={[
          { num: "01", title: "Workspace 메일", sub: "수발신 검증" },
          { num: "02", title: "Connectors 연결", sub: "Google Drive" },
          { num: "03", title: "Drive 폴더 표준", sub: "/AI-Workspace" },
          { num: "04", title: "Gmail/Calendar", sub: "Apps Script" },
          { num: "05", title: "도메인 보안", sub: "Admin 정책" },
        ]}
      />

      <CardGrid cols={2}>
        <Card title="① Workspace 메일 활성화" accent="brand">
          <span className="font-mono text-brand-200">id@drimaes.com</span> 정상
          수발신 확인. 자동전달, 서명, 그룹별칭 설정.
        </Card>
        <Card title="② Claude → Connectors → Drive" accent="brand">
          Claude 웹/Desktop에서 공용 계정으로 로그인 후 Connectors에서{" "}
          <strong>Google Drive</strong> 연결 (Max 기본 제공).
        </Card>
        <Card title="③ 공용 Drive 폴더 구조" accent="emerald">
          <ul className="list-disc pl-5 space-y-0.5 text-[12.5px]">
            <li>
              <span className="font-mono">/AI-Workspace/{`{account}`}/inbox</span> — 원본 자료
            </li>
            <li>
              <span className="font-mono">/AI-Workspace/{`{account}`}/output</span> — 산출물 백업
            </li>
            <li>
              <span className="font-mono">/AI-Workspace/_shared</span> — 전사 공통 KB
            </li>
          </ul>
        </Card>
        <Card title="④ Gmail / Calendar 자동화" accent="emerald">
          Apps Script · Make · Zapier로 “회의록 메일 → Notion 페이지 → Claude
          요약” 파이프라인. Meet 자동 녹취 + 요약 봇 권장.
        </Card>
        <Card title="⑤ 도메인 단위 보안" accent="amber">
          Google Admin에서 외부 공유는 <strong>드림에이스 도메인 제한</strong>
          기본. Drive 라벨(기밀/내부/공개) 적용으로 데이터 유출 차단.
        </Card>
        <Card title="🔒 점검 체크" accent="rose">
          외부 게스트 공유 시 다른 공용 계정 자료에 접근 못 하도록 폴더 권한 항상
          확인. 분기 1회 권한 감사.
        </Card>
      </CardGrid>

      <Callout variant="warn" title="주의">
        공용 계정으로 외부와 Drive 공유 시, 그 외부인이 다른 공용 계정 자료에
        접근하지 못하도록 폴더 단위 권한을 항상 점검하세요.
      </Callout>
    </SlideShell>
  );
}
