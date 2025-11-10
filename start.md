# Getting Started (Local)

## Which package manager?
- Use **pnpm**. The repo includes `pnpm-lock.yaml`, and scripts assume pnpm (`pnpm dev`, `pnpm build`, etc.).
- If pnpm is not installed globally, run `corepack enable` (Node 18+ bundles pnpm) or install pnpm 9 manually.

## Prerequisites
- Node.js 18.18 or newer (matches Vite 6 support matrix).
- Access to TapPay / Apple Pay / Google Pay credentials for the `.env` file.

## Environment variables
Create `.env` (or `.env.local`) at the project root before running the app:
```
VITE_TAPPAY_APP_ID=            # numeric TapPay App ID
VITE_TAPPAY_APP_KEY=           # TapPay App Key (keep secret)
VITE_APPLE_MERCHANT_ID=        # Apple Pay merchant identifier
VITE_GOOGLE_MERCHANT_ID=       # Google Pay merchant ID
VITE_TAPPAY_ENV=               # 'production' (default) or 'sandbox' to pick TapPay mode
```
These are read in `src/pages/Confgive.tsx` during `TPDirect.setupSDK`; missing values will keep Pay integrations from initializing.

## Install & run
```bash
pnpm install        # installs deps from pnpm-lock
pnpm dev            # starts Vite on http://localhost:5173
```

## Optional workflows
- `pnpm lint` – ESLint 9 over the entire repo.
- `pnpm build` – type-check + production build into `dist/`.
- `pnpm preview` – serve the built assets locally to verify production output.

If the dev server fails to start, confirm the env vars are present and that no other process occupies port 5173; use `pnpm dev --host` if you need LAN access.
