import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DrimAES AI 활용 가이드",
  description:
    "프로젝트별로 설치·최적화하는 압축 KIT, Google 공유 드라이브 단일 채널, 직무별 프로필(minimal · developer · product · business)과 SDD 기반 라이프사이클을 안내합니다.",
  applicationName: "DrimAES AI Guide",
  authors: [{ name: "DrimAES" }],
  keywords: [
    "DrimAES",
    "AI 활용 가이드",
    "Agent KIT",
    "SDD",
    "Spec Driven Development",
    "Google 공유 드라이브",
    "AI-Knowhow",
    "프롬프트 자산화",
    "스킬 공유",
    "Claude · Codex · Gemini · Kiro",
  ],
  openGraph: {
    title: "DrimAES AI 활용 가이드",
    description:
      "KIT 설치 · 공유 드라이브 연결 · 프롬프트와 스킬 공유 흐름까지 — 슬라이드 한 페이지씩.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0e1a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark">
      <body className="bg-ink-900 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
