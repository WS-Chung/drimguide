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
  { id: "roadmap", label: "로드맵", number: "02" },
  { id: "operation", label: "운영 규칙", number: "03" },
  { id: "install", label: "KIT 설치", number: "04" },
  { id: "drive", label: "공유드라이브 연결", number: "05" },
  { id: "lifecycle", label: "KIT 사용법", number: "06" },
  { id: "ideal", label: "이상적인 활용", number: "07" },
  { id: "benefit", label: "기대 효과", number: "08" },
  { id: "faq", label: "자주 묻는 질문", number: "09" },
  { id: "install-guide", label: "설치 가이드", number: "A1", group: "부록", appendix: true },
  { id: "usage-guide", label: "사용 가이드", number: "A2", group: "부록", appendix: true },
];

export const idToIndex = Object.fromEntries(navItems.map((n, i) => [n.id, i]));
