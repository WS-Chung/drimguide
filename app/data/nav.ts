export type NavItem = {
  id: string;
  label: string;
  group?: string;
};

export const navItems: NavItem[] = [
  { id: "overview", label: "개요" },
  { id: "principles", label: "도입 배경 & 원칙" },
  { id: "accounts", label: "공용 계정 구조" },
  { id: "operation", label: "운영 규칙" },
  { id: "ax-workflow", label: "AX 워크플로우" },
  { id: "integration-google", label: "Google Workspace 연동", group: "통합 가이드" },
  { id: "integration-slack", label: "Slack 연동", group: "통합 가이드" },
  { id: "integration-notion", label: "Notion 연동", group: "통합 가이드" },
  { id: "integration-github", label: "GitHub 연동", group: "통합 가이드" },
  { id: "knowledge", label: "지식 공유 룰" },
  { id: "hardware", label: "사내 HW 활용" },
  { id: "governance", label: "거버넌스 & 보안" },
  { id: "checklist", label: "온보딩 체크리스트" },
  { id: "faq", label: "자주 묻는 질문" },
];
