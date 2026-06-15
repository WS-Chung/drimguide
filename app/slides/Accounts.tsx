import SlideShell from "@/app/components/SlideShell";
import AccountsTable from "@/app/components/AccountsTable";
import Callout from "@/app/components/Callout";

export default function Accounts() {
  return (
    <SlideShell
      number="03"
      eyebrow="ACCOUNTS"
      title="공용 계정 구조"
      description="9개 공용 계정을 전사 표준으로 사용합니다. 각 계정에는 초기 할당자 1명이 지정되어 셋업·로그인 이슈·MFA 코드 수신을 1차로 책임집니다. 팀별 계정 수와 멤버 구성은 운영 중 변동될 수 있습니다."
    >
      <AccountsTable />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        <Callout variant="info" title="할당 원칙">
          <ul className="list-disc pl-5 space-y-1">
            <li>개발 8개 계정 × 2인 = 총 16명 1차 매칭</li>
            <li>기획·운영 1개 계정(planner1) × 최대 7명 공용</li>
            <li>업무 변동 시 자유 이동 — 해당 계정의 초기 할당자에게 통지</li>
            <li>
              계정 이메일은{" "}
              <span className="font-mono text-brand-200">id@drimaes.com</span>{" "}
              패턴
            </li>
          </ul>
        </Callout>

        <Callout variant="danger" title="절대 금지">
          <ul className="list-disc pl-5 space-y-1">
            <li>공용 계정 비밀번호의 외부 메신저/메일 평문 공유</li>
            <li>개인 Google 계정으로 회사 결과물 저장</li>
            <li>공용 계정의 Workspace 이메일 미연결 상태로 사용</li>
          </ul>
        </Callout>
      </div>
    </SlideShell>
  );
}
