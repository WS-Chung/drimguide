import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DrimAES AI 활용 거버넌스 가이드",
  description:
    "DrimAES 사내 공용 Claude(Max/Pro) 계정 운영, AX 워크플로우, Slack/Notion/GitHub/Google Workspace 연동 및 사내 하드웨어 활용 안내",
  applicationName: "DrimAES AI Guide",
  authors: [{ name: "DrimAES" }],
  keywords: [
    "DrimAES",
    "Claude",
    "AI 거버넌스",
    "AX 워크플로우",
    "Slack",
    "Notion",
    "GitHub",
    "Google Workspace",
    "MCP",
  ],
  openGraph: {
    title: "DrimAES AI 활용 거버넌스 가이드",
    description:
      "공용 Claude 계정 운영 규칙, 통합 가이드, 사내 HW 활용까지. 모바일/PC 모두 최적화.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3a5dff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
