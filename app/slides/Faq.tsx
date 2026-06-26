"use client";

import { useState } from "react";
import SlideShell from "@/app/components/SlideShell";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Claude 계정은 어떻게 사용하나요? Team Plan으로 바꾸나요?",
    a: (
      <>
        Team Plan 전환 계획은 없습니다.{" "}
        <strong className="text-slate-100">기존에 부여된 개인용 Claude 계정 8개를 그대로 사용</strong>
        합니다. KIT는 어떤 AI 도구(Claude · Codex · Gemini · Kiro 등)에서도 같은 의미로
        동작하도록 설계되어 있어, 계정 운영 방식이 바뀌어도 영향 없습니다.
      </>
    ),
  },
  {
    q: "지식 공유는 어디서 하나요? Slack 채널이나 Notion DB는 안 만드나요?",
    a: (
      <>
        Slack 채널·Notion 템플릿 DB 같은 추가 채널은 운영하지 않습니다.{" "}
        <strong className="text-slate-100">Google 공유 드라이브의 AI-Knowhow 폴더 한 곳</strong>
        에서만 스킬·프롬프트·노하우·피드백을 주고받습니다. 각자의 AI에이전트를 Google
        Drive MCP에 연결해 대화로 가져오고 내보냅니다.
      </>
    ),
  },
  {
    q: "KIT는 어떤 형태로 받나요? 설치는 누가 하나요?",
    a: (
      <>
        담당자가{" "}
        <span className="font-mono text-brand-200">company-agent-kit.zip</span>{" "}
        압축 파일로 배포합니다. 설치는 사람이 직접 하지 않고{" "}
        <strong className="text-slate-100">AI에게 SETUP_WIZARD.md를 건네면 AI가 합니다</strong>.
        명령어를 외울 필요 없고, 미리보기(dry-run)로 먼저 확인한 뒤 설치되므로 잘못
        눌러도 안전합니다. 자세한 시각 가이드는 INSTALL_GUIDE.html.
      </>
    ),
  },
  {
    q: "한 사람이 여러 프로젝트에서 다른 KIT를 쓸 수 있나요?",
    a: (
      <>
        네, 그게 KIT의 핵심입니다. 하나의 룰로 다양한 직무·프로젝트를 커버할 수 없기
        때문에, KIT는 <strong className="text-slate-100">매 프로젝트마다 따로 설치되어 그 폴더 안에서만 적용</strong>
        됩니다. 한 사람이 PM 프로젝트에는 product 프로필, 개인 PoC에는 developer 프로필을
        각각 쓸 수 있습니다.
      </>
    ),
  },
  {
    q: "직무별 페르소나는 어떻게 만들어지나요?",
    a: (
      <>
        KIT 프로필 4종(<span className="font-mono text-brand-200">minimal · developer · product · business</span>)을
        단독 또는 조합으로 선택하면 됩니다. 마케터는 business 단독, PM이 백엔드 PoC를
        할 때는 product + developer 같은 식입니다. 기대 효과 슬라이드의 시나리오 표를
        참고하세요.
      </>
    ),
  },
  {
    q: "회사가 매주 회고나 KPI를 강제하나요?",
    a: (
      <>
        강제하지 않습니다. 매주 회고, 월간 데모데이, 분기 거버넌스 리뷰 같은 일정은{" "}
        <strong className="text-slate-100">설정하지 않습니다</strong>. 잘 쓴 사례가
        자연스럽게 공유되고 검증되어 자산이 되는 상향식 모델을 지향합니다. 거버넌스는
        운영 데이터가 충분히 쌓인 뒤에 정립합니다.
      </>
    ),
  },
  {
    q: "막힌 케이스나 실패 사례는 어떻게 하나요?",
    a: (
      <>
        막힌 사례도 자산입니다. AI에게 "이 내용을 피드백 .md로 정리해서{" "}
        <span className="font-mono text-brand-200">AI-Knowhow/feedbacks</span>에
        올릴 수 있게 해줘"라고 부탁하면, AI가 어디서 어떻게 막혔는지 정리해 줍니다.
        다음 KIT 배포본의 개선 트리거가 됩니다.
      </>
    ),
  },
  {
    q: "민감 정보를 실수로 입력했어요. 어떻게 해야 하나요?",
    a: (
      <>
        대화 히스토리에서 해당 메시지를 즉시 삭제하고, 회사 비밀번호·토큰·고객
        PII였다면 담당자에게 보고해 키 회전 등 사후 조치를 진행합니다. 앞으로는{" "}
        <span className="font-mono text-rose-200">{`<고객명>`}</span>,{" "}
        <span className="font-mono text-rose-200">[KEY_REDACTED]</span>처럼 마스킹한
        뒤 사용하세요.
      </>
    ),
  },
  {
    q: "설치가 자꾸 안 됩니다",
    a: (
      <>
        zip 안의 <span className="font-mono text-brand-200">SETUP_WIZARD.md</span>의
        "설치가 안 될 때" 섹션을 AI에게 함께 보여주면 원인을 짚어 줍니다. 직접 명령으로
        설치한다면 Node.js LTS ≥ 18 설치, 폴더 쓰기 권한, 경로의 공백 처리(Windows에서{" "}
        <code className="text-brand-200">"C:\My Projects\repo"</code>) 정도를 먼저
        확인하세요.
      </>
    ),
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SlideShell
      number="09"
      eyebrow="FAQ"
      title="자주 묻는 질문"
      description="실제 운영에서 자주 나오는 질문들. 답이 없으면 Google 공유 드라이브의 AI-Knowhow/feedbacks에 올려주세요."
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
