"use client";

import { useState } from "react";
import SlideShell from "@/app/components/SlideShell";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "기존에 쓰던 회사 이메일로 그대로 Team Plan에 합류할 수 있나요? 새로 만든 9개 공용 계정은 어떻게 되나요?",
    a: (
      <>
        네, 기존 회사 이메일(<span className="font-mono text-brand-200">name@drimaes.com</span>)로
        그대로 합류할 수 있습니다. Anthropic{" "}
        <a
          href="https://support.anthropic.com/en/articles/9267247-how-do-i-get-started-with-the-team-plan"
          className="underline decoration-dotted text-brand-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Team Plan 가이드
        </a>
        에 따르면, Team 조직에 도메인을 등록하면 그 도메인의 어떤 이메일이든 초대
        가능합니다. 기존 개인 Pro/Max를 쓰던 분은 초대 수락 시 (a) 데이터를 Team
        조직으로 마이그레이션, (b) 분리 유지(Personal ↔ Work toggle) 중 선택할 수
        있습니다.
        <br />
        <br />
        새로 만든 9개 공용 계정(<span className="font-mono">robot1@</span>,{" "}
        <span className="font-mono">server@</span> 등)은 Team 전환 후{" "}
        <strong>1주차에 정리</strong>합니다 — Workspace에서 폐기하거나 그룹 별칭으로
        재활용. Workspace 시트 비용(9계정 × 단가)이 즉시 절감됩니다.
      </>
    ),
  },
  {
    q: "Premium 4명은 한 번 정하면 못 바꾸나요?",
    a: (
      <>
        아니요, 어드민이 언제든 재할당 가능합니다. Anthropic{" "}
        <a
          href="https://support.anthropic.com/en/articles/12004354-how-to-purchase-and-manage-premium-seats"
          className="underline decoration-dotted text-brand-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Team 좌석 관리 문서
        </a>
        : <em>"If you want to upgrade an existing member from Standard to Premium,
        you don't need to purchase a new seat. Use the seat tier reassignment in
        Organization settings → Organization."</em> 새 좌석 구매 없이 등급만 바꾸면
        됩니다.
        <br />
        <br />
        변경 시 잔여 청구 주기에 대해 <strong>일할 청구</strong>됩니다. 헤비 작업이
        일시적으로 발생한 사람에게 한 달만 Premium을 부여하는 것도 가능. 분기
        리뷰에서 사용량 데이터를 보고 정식 재배분합니다.
      </>
    ),
  },
  {
    q: "Team Plan으로 옮기면 기존 8개 공용 계정의 채팅 히스토리는?",
    a: (
      <>
        Week 1 단계에서 <strong>“읽기 전용 보존” 모드</strong>로 백업한 뒤, Week 3
        종료 시점에 권한 회수합니다. 필요하면 PMO에서 백업 export 받을 수 있습니다.
      </>
    ),
  },
  {
    q: "Standard와 Premium의 실질적 차이는?",
    a: (
      <>
        Premium은 <strong>Claude Code(CLI)</strong>와 5× 더 많은 usage가 포함됩니다.
        코드 헤비 작업이 주력이면 Premium, 채팅·기획 위주면 Standard 권장.
      </>
    ),
  },
  {
    q: "민감한 1회성 작업 채팅이 동료에게 보이지 않게 하려면?",
    a: (
      <>
        Team Plan에서도 <strong>Claude Projects</strong>를 분리해 만들고 본인만
        멤버로 두면 됩니다. 사내 RAG/로컬 LLM(부록) 활용도 가능.
      </>
    ),
  },
  {
    q: "외부 고객 PC에서 좌석으로 로그인해도 되나요?",
    a: "금지입니다. 회사 관리 디바이스에서만 로그인합니다. 어드민 콘솔에서 IP 정책으로 추가 제한 가능.",
  },
  {
    q: "API 키가 필요한 자동화는?",
    a: (
      <>
        자동화 워크플로우용 API 키는 PMO가 발급합니다.{" "}
        <span className="font-mono text-brand-200">#ai-governance</span>에 사용
        목적/예상 호출량을 적으면 됩니다. 좌석 세션 토큰 재사용 금지.
      </>
    ),
  },
  {
    q: "평소 가벼운 사용으로도 Standard 한도가 부족하면?",
    a: "분기 리뷰에서 Premium 업그레이드 신청 가능. 그 사이에는 작업 분할 또는 사내 RAG/로컬 LLM(부록) 보조 사용.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SlideShell
      number="19"
      eyebrow="FAQ"
      title="자주 묻는 질문"
      description="실제 운영에서 자주 나온 질문들. 답이 없으면 #ai-governance에 올려주세요."
    >
      <div className="space-y-2.5">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`rounded-xl border transition ${
                isOpen
                  ? "bg-brand-500/5 border-brand-400/30"
                  : "glass hover:border-brand-400/30"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left flex items-start justify-between gap-3 px-4 py-3.5"
                aria-expanded={isOpen}
              >
                <span className="flex items-start gap-3 text-[14.5px] font-semibold text-slate-100">
                  <span
                    className={`mt-[1px] text-[10px] font-mono ${
                      isOpen ? "text-brand-300" : "text-slate-500"
                    }`}
                  >
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{f.q}</span>
                </span>
                <span
                  className={`shrink-0 text-brand-300 text-xl leading-none transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 -mt-1 text-[13.5px] text-slate-300 leading-relaxed pl-[3.25rem]">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SlideShell>
  );
}
