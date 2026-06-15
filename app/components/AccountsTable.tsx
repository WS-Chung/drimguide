import { accounts, summary } from "@/app/data/accounts";

export default function AccountsTable() {
  return (
    <div className="space-y-3.5">
      <div className="grid grid-cols-3 gap-3">
        <Stat label="Claude Max" value={`${summary.totalMax}`} suffix="개" />
        <Stat label="Claude Pro" value={`${summary.totalPro}`} suffix="개" />
        <Stat label="총 공용계정" value={`${summary.totalAccounts}`} suffix="개" />
      </div>

      <div className="table-scroll overflow-x-auto rounded-xl border border-slate-800/70 bg-ink-800/40 backdrop-blur">
        <table className="min-w-full text-[13px]">
          <thead className="bg-ink-700/40 text-slate-400 text-[12px] uppercase tracking-wider">
            <tr>
              <Th>ID</Th>
              <Th>Google 이메일</Th>
              <Th>초기 할당자</Th>
              <Th>사용 프로젝트</Th>
              <Th>플랜</Th>
              <Th>구분</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70">
            {accounts.map((a) => (
              <tr key={a.id} className="hover:bg-brand-500/5 transition">
                <Td className="font-mono font-semibold text-brand-300">
                  {a.id}
                </Td>
                <Td className="font-mono text-slate-400">{a.email}</Td>
                <Td className="text-slate-200">{a.owner}</Td>
                <Td className="text-slate-200">
                  {a.project}
                  {a.notes && (
                    <span className="block text-[11px] text-slate-500 mt-0.5">
                      {a.notes}
                    </span>
                  )}
                </Td>
                <Td>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                      a.plan === "MAX"
                        ? "bg-brand-500/20 text-brand-200 ring-1 ring-brand-400/30"
                        : "bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-400/30"
                    }`}
                  >
                    {a.plan}
                  </span>
                </Td>
                <Td className="text-slate-400">{a.team}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[11.5px] text-slate-500 leading-relaxed">
        ※ 초기 할당자는 “해당 계정을 처음 받아 셋업한 사람”입니다. 팀별 계정 수와
        공동 사용 멤버 구성은 운영 중 변동될 수 있으며, 변경 시{" "}
        <span className="font-mono text-slate-300">#ai-governance</span>에 통지합니다.
      </p>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left px-3.5 py-2.5 font-semibold whitespace-nowrap">
      {children}
    </th>
  );
}

function Td({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td className={`px-3.5 py-2.5 align-top whitespace-nowrap ${className}`}>
      {children}
    </td>
  );
}

function Stat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div className="rounded-xl glass px-3.5 py-2.5">
      <p className="text-[11px] text-slate-400 uppercase tracking-wider">{label}</p>
      <p className="mt-0.5 text-xl font-bold text-slate-50">
        {value}
        {suffix && <span className="text-sm text-slate-400 ml-1">{suffix}</span>}
      </p>
    </div>
  );
}
