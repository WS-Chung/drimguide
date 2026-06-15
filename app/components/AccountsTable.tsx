import { accounts, summary } from "@/app/data/accounts";

export default function AccountsTable() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-3 gap-3">
        <Stat label="Claude Max" value={`${summary.totalMax}개`} />
        <Stat label="Claude Pro" value={`${summary.totalPro}개`} />
        <Stat label="총 공용계정" value={`${summary.totalAccounts}개`} />
      </div>

      <div className="table-scroll overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300">
            <tr>
              <Th>ID</Th>
              <Th>Google 이메일</Th>
              <Th>초기 할당자</Th>
              <Th>사용 프로젝트</Th>
              <Th>플랜</Th>
              <Th>구분</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-950/40">
            {accounts.map((a) => (
              <tr key={a.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-900/40">
                <Td className="font-mono font-semibold text-brand-700 dark:text-brand-300">
                  {a.id}
                </Td>
                <Td className="font-mono text-slate-600 dark:text-slate-300">
                  {a.email}
                </Td>
                <Td>{a.owner}</Td>
                <Td>
                  {a.project}
                  {a.notes && (
                    <span className="block text-xs text-slate-400 mt-0.5">
                      {a.notes}
                    </span>
                  )}
                </Td>
                <Td>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
                      a.plan === "MAX"
                        ? "bg-brand-100 text-brand-700 dark:bg-brand-900/60 dark:text-brand-200"
                        : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200"
                    }`}
                  >
                    {a.plan}
                  </span>
                </Td>
                <Td className="text-slate-500">{a.team}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400">
        ※ 초기 할당자는 “해당 계정을 처음 받아 셋업한 사람”입니다. 팀별 계정 수와 공동
        사용 멤버 구성은 운영 중 변동될 수 있으며, 변경 시{" "}
        <span className="font-mono">#ai-governance</span> 채널에 통지합니다.
      </p>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">
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
    <td className={`px-4 py-3 align-top whitespace-nowrap ${className}`}>
      {children}
    </td>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 px-4 py-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-50">
        {value}
      </p>
    </div>
  );
}
