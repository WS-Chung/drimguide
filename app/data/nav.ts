export type NavItem = {
  id: string;
  label: string;
  number?: string;
  group?: string;
  appendix?: boolean;
  isNew?: boolean;
};

export const navItems: NavItem[] = [
  { id: "overview", label: "개요", number: "01" },
  { id: "principles", label: "원칙 & 로드맵", number: "02" },
  { id: "governance-v2", label: "거버넌스 v2 — 전환", number: "03", isNew: true },
  { id: "seats", label: "팀 시트 구성", number: "04" },
  { id: "operation", label: "운영 규칙", number: "05" },
  { id: "ax-workflow", label: "AX 워크플로우", number: "06" },
  { id: "integration-google", label: "Google Workspace", number: "07", group: "통합 가이드" },
  { id: "integration-slack", label: "Slack", number: "08", group: "통합 가이드" },
  { id: "integration-notion", label: "Notion", number: "09", group: "통합 가이드" },
  { id: "integration-github", label: "GitHub", number: "10", group: "통합 가이드" },
  { id: "uc-overview", label: "First UC — 개요", number: "11", group: "First Use Case", isNew: true },
  { id: "uc-agent-standard", label: "UC1 · Agent 표준 룰셋", number: "12", group: "First Use Case", isNew: true },
  { id: "knowledge", label: "지식 공유 룰", number: "13" },
  { id: "governance", label: "거버넌스 & 보안", number: "14" },
  { id: "checklist", label: "온보딩 체크리스트", number: "15" },
  { id: "faq", label: "자주 묻는 질문", number: "16" },
  { id: "appendix-hw", label: "사내 HW 활용", number: "A", group: "부록", appendix: true },
];

export const idToIndex = Object.fromEntries(navItems.map((n, i) => [n.id, i]));
