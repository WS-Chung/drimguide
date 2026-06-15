export type Account = {
  id: string;
  email: string;
  owner: string;
  project: string;
  plan: "MAX" | "PRO";
  team: "개발" | "기획/운영";
  notes?: string;
};

export const accounts: Account[] = [
  {
    id: "robot1",
    email: "robot1@drimaes.com",
    owner: "웨이드",
    project: "HD현대로보틱스",
    plan: "MAX",
    team: "개발",
  },
  {
    id: "robot2",
    email: "robot2@drimaes.com",
    owner: "파머",
    project: "컨버전스팀",
    plan: "MAX",
    team: "개발",
  },
  {
    id: "drimsim",
    email: "drimsim@drimaes.com",
    owner: "트루먼",
    project: "드림심",
    plan: "MAX",
    team: "개발",
  },
  {
    id: "application1",
    email: "application1@drimaes.com",
    owner: "퍼즐",
    project: "앱개발 (프론트엔드)",
    plan: "MAX",
    team: "개발",
  },
  {
    id: "application2",
    email: "application2@drimaes.com",
    owner: "조슈아",
    project: "스마트인프라팀",
    plan: "MAX",
    team: "개발",
  },
  {
    id: "server",
    email: "server@drimaes.com",
    owner: "이안",
    project: "백엔드",
    plan: "MAX",
    team: "개발",
  },
  {
    id: "kernel",
    email: "kernel@drimaes.com",
    owner: "조니",
    project: "BSP / 커널",
    plan: "MAX",
    team: "개발",
  },
  {
    id: "analyze",
    email: "analyze@drimaes.com",
    owner: "산골",
    project: "오토에버 검증 / 개발 분석",
    plan: "MAX",
    team: "개발",
    notes: "초기엔 오토에버향, 이후 분석/기타 용도로 자유 사용",
  },
  {
    id: "planner1",
    email: "planner1@drimaes.com",
    owner: "볼트",
    project: "사업기획 (비개발)",
    plan: "PRO",
    team: "기획/운영",
  },
];

export const summary = {
  totalMax: accounts.filter((a) => a.plan === "MAX").length,
  totalPro: accounts.filter((a) => a.plan === "PRO").length,
  totalAccounts: accounts.length,
};
