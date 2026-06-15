export type NavItem = {
  id: string;
  label: string;
  number?: string;
  group?: string;
  appendix?: boolean;
};

export const navItems: NavItem[] = [
  { id: "overview", label: "개요", number: "01" },
  { id: "principles", label: "도입 배경 & 원칙", number: "02" },
  { id: "accounts", label: "공용 계정 구조", number: "03" },
  { id: "operation", label: "운영 규칙", number: "04" },
  { id: "ax-workflow", label: "AX 워크플로우", number: "05" },
  { id: "integration-google", label: "Google Workspace", number: "06", group: "통합 가이드" },
  { id: "integration-slack", label: "Slack", number: "07", group: "통합 가이드" },
  { id: "integration-notion", label: "Notion", number: "08", group: "통합 가이드" },
  { id: "integration-github", label: "GitHub", number: "09", group: "통합 가이드" },
  { id: "knowledge", label: "지식 공유 룰", number: "10" },
  { id: "governance", label: "거버넌스 & 보안", number: "11" },
  { id: "checklist", label: "온보딩 체크리스트", number: "12" },
  { id: "faq", label: "자주 묻는 질문", number: "13" },
  { id: "appendix-hw", label: "사내 HW 활용", number: "A", group: "부록", appendix: true },
];

export const idToIndex = Object.fromEntries(navItems.map((n, i) => [n.id, i]));
