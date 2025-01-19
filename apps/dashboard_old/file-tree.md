frontend/
├── public/
│   └── tokens/
├── src/
    ├── app/
    │   ├── (auth)/
    │   │   ├── login/
    │   │   │   └── page.tsx
    │   │   ├── register/
    │   │   │   └── page.tsx
    │   │   └── layout.tsx
    │   ├── (dashboard)/
    │   │   ├── accounts/
    │   │   │   ├── [id]/
    │   │   │   │   └── page.tsx
    │   │   │   └── page.tsx
    │   │   ├── businesses/
    │   │   │   ├── [id]/
    │   │   │   │   └── page.tsx
    │   │   │   ├── new/
    │   │   │   │   └── page.tsx
    │   │   │   └── page.tsx
    │   │   ├── payments/
    │   │   │   ├── [id]/
    │   │   │   │   └── page.tsx
    │   │   │   └── page.tsx
    │   │   └── layout.tsx
    │   ├── api/
    │   │   ├── auth/
    │   │   │   ├── login/
    │   │   │   │   └── route.ts
    │   │   │   └── register/
    │   │   │       └── route.ts
    │   │   ├── payments/
    │   │   │   ├── invoice/
    │   │   │   │   └── route.ts
    │   │   │   └── session/
    │   │   │       └── route.ts
    │   │   └── webhooks/
    │   │       └── route.ts
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── auth/
    │   │   ├── login-form.tsx
    │   │   └── register-form.tsx
    │   ├── business/
    │   │   ├── business-form.tsx
    │   │   ├── business-card.tsx
    │   │   └── business-charts.tsx
    │   ├── payments/
    │   │   ├── payment-form.tsx
    │   │   └── payment-history.tsx
    │   ├── shared/
    │   │   ├── layouts/
    │   │   │   ├── auth-layout.tsx
    │   │   │   └── dashboard-layout.tsx
    │   │   └── ui/
    │   │       ├── button.tsx
    │   │       ├── input.tsx
    │   │       └── textarea.tsx
    │   └── wallet/
    │       ├── connect-wallet.tsx
    │       └── wallet-card.tsx
    ├── config/
    │   ├── firebase.ts
    │   └── realm.ts
    ├── contexts/
    │   ├── auth-context.tsx
    │   └── wallet-context.tsx
    ├── lib/
    │   ├── constants/
    │   │   └── tokens.ts
    │   ├── contracts/
    │   │   └── abis/
    │   │       ├── escrow.ts
    │   │       └── payment.ts
    │   └── utils/
    │       ├── pdf.ts
    │       ├── validation.ts
    │       └── web3.ts
    ├── services/
    │   ├── auth.ts
    │   ├── database.ts
    │   ├── payment.ts
    │   └── web3.ts
    ├── styles/
    │   ├── globals.css
    │   └── components.css
    ├── types/
    │   ├── auth.ts
    │   ├── business.ts
    │   ├── payment.ts
    │   └── web3.ts
    └── middleware.ts
