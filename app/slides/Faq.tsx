"use client";

import { useState } from "react";
import SlideShell from "@/app/components/SlideShell";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "공용 계정인데 내 채팅이 동료에게 보이지 않게 하려면?",
    a: (
      <>
        기본적으로 같은 계정 = 같은 히스토리입니다. 민감한 1회성 작업은{" "}
        <strong>Claude Projects</strong>를 분리해 만들고 작업 후 삭제하거나, 개인
        작업은 사내 RAG/로컬 LLM(부록 참조)으로 분리하세요.
      </>
    ),
  },
  {
    q: "동시 사용 한도는 어떻게 분배하나요?",
    a: "같은 계정 동시 사용은 한도를 빠르게 소진합니다. 채널에 점유 알림 후 중요한 일을 우선 처리하고, 나머지는 다음 윈도로 미루는 것을 권장합니다.",
  },
  {
    q: "Pro와 Max 사용을 섞어도 되나요?",
    a: "planner1(Pro)은 비개발 기획·운영 전용입니다. 개발팀이 Pro에 임시 로그인하지 않습니다. 라이선스/한도가 다릅니다.",
  },
  {
    q: "외부 고객 PC에서 공용 계정으로 로그인해도 되나요?",
    a: "금지입니다. 회사 관리 디바이스에서만 로그인합니다.",
  },
  {
    q: "API 키가 필요한 자동화는 어떻게 받나요?",
    a: (
      <>
        <span className="font-mono text-brand-200">#ai-governance</span>에 사용
        목적/예상 호출량을 작성하면 PMO가 별도 키를 발급합니다. 공용 계정의 세션
        토큰 재사용 금지.
      </>
    ),
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SlideShell
      number="13"
      eyebrow="FAQ"
      title="자주 묻는 질문"
      description="실제 운영에서 가장 많이 들어온 질문들. 답이 없으면 #ai-governance에 올려주세요."
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
