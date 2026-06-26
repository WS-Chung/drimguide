import BlockFlow from "@/app/components/BlockFlow";

export default function Overview() {
  return (
    <article className="slide-enter min-h-screen">
      <div className="px-6 sm:px-10 lg:px-14 pt-12 sm:pt-20 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold text-brand-200 backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-300 animate-pulse" />
          Internal · v3 · KIT 배포 기반
        </div>

        <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
          DrimAES <span className="gradient-text">AI 활용</span>
          <br />
          가이드
        </h1>

        <p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed">
          회사가 룰을 내려보내는 가이드가 아닙니다. 각자에게{" "}
          <strong className="text-slate-100">압축 KIT</strong>를 제공해 직무·프로젝트에
          맞게 설치하고, AI 활용 노하우를 공유 드라이브로 주고받으며{" "}
          <strong className="text-slate-100">우리 회사의 AI 활용 스킬셋을 함께 다듬어 가는</strong>{" "}
          상향식 진화 방식입니다.
        </p>

        <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Fact label="Claude 계정" value="8" suffix="개" hint="개인용 그대로" />
          <Fact label="KIT 프로필" value="4" suffix="종" hint="minimal · dev · product · business" />
          <Fact label="지식 공유 채널" value="1" suffix="곳" hint="Google 공유드라이브만" />
          <Fact label="필수 운영 룰" value="2" suffix="개" hint="민감정보·출처" />
        </dl>

        <div className="mt-10">
          <p className="text-[12px] uppercase tracking-[0.18em] text-slate-500 mb-3">
            가이드 흐름 한눈에
          </p>
          <BlockFlow
            items={[
              { num: "01", title: "KIT 받기", sub: "압축 파일" },
              { num: "02", title: "설치", sub: "AI에게 부탁" },
              { num: "03", title: "사용", sub: "직무 페르소나" },
              { num: "04", title: "공유", sub: "Drive AI-Knowhow" },
              { num: "05", title: "진화", sub: "스킬셋 다듬기" },
            ]}
            compact
          />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          <Pillar title="자율 활용" body="회사가 룰을 내리지 않습니다. 도구를 받고 자유롭게 써본 뒤, 좋은 방법을 공유합니다." />
          <Pillar title="프로젝트 최적화" body="하나의 룰로 모든 직무·프로젝트를 커버할 수 없습니다. KIT는 매 프로젝트마다 따로 설치·최적화됩니다." />
          <Pillar title="페르소나 구성" body="개발·PM·마케터·지원 등 사용 목적에 맞춰 KIT 프로필을 선택해 목표에 맞는 AI 페르소나를 만듭니다." />
        </div>
      </div>
    </article>
  );
}

function Fact({
  label,
  value,
  suffix,
  hint,
}: {
  label: string;
  value: string;
  suffix?: string;
  hint?: string;
}) {
  return (
    <div className="rounded-xl glass px-3.5 py-3 backdrop-blur">
      <dt className="text-[11.5px] uppercase tracking-wider text-slate-400">
        {label}
      </dt>
      <dd className="mt-1 text-[25px] font-bold text-slate-50">
        {value}
        {suffix && <span className="text-[15px] text-slate-400 ml-1">{suffix}</span>}
      </dd>
      {hint && (
        <p className="mt-1 text-[11.5px] text-slate-500 leading-tight">{hint}</p>
      )}
    </div>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl glass p-4">
      <p className="text-[14.5px] font-semibold text-slate-100 mb-1.5">{title}</p>
      <p className="text-[13.5px] text-slate-400 leading-relaxed">{body}</p>
    </div>
  );
}
