# DrimAES AI 활용 거버넌스 가이드 (사내용)

DrimAES 임직원을 위한 단일 페이지 가이드. 공용 Claude(Max/Pro) 계정 운영, AX 워크플로우, Slack/Notion/GitHub/Google Workspace 연동, 사내 유휴 하드웨어 활용 방안을 담았습니다.

## 기술 스택
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel 배포 (zero-config)

## 로컬 실행
```bash
npm install
npm run dev
# http://localhost:3000
```

## 빌드
```bash
npm run build
npm run start
```

## Vercel 배포
1. 이 디렉터리를 GitHub 사내 조직 레포에 푸시
2. Vercel 대시보드 → New Project → 해당 레포 선택
3. Framework Preset: **Next.js** 자동 인식 → 그대로 Deploy
4. (선택) 커스텀 도메인 연결: 예) `ai-guide.drimaes.com`

> 배포 후 URL은 `#ai-announcement` Slack 채널 상단 고정.

## 콘텐츠 수정 가이드
- 계정 표 데이터: `app/data/accounts.ts`
- 좌측 네비 항목: `app/data/nav.ts`
- 본문 섹션: `app/page.tsx` (각 `<Section>` 블록)
- 디자인 토큰/색상: `tailwind.config.ts`

## 보안 / 공개 범위
- 본 사이트는 사내 전용. 공개 인덱싱 차단을 원하면 `app/layout.tsx`의 `metadata`에 `robots: { index: false }`를 추가하거나, Vercel의 Password Protection(Pro 플랜) 사용.
- 외부 노출이 우려된다면 Cloudflare Access / Vercel Firewall로 도메인 단위 IP·SSO 제한 적용.
