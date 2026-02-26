# Mivyra - Production-ready D2C Fashion Jewellery Store

A complete full-stack e-commerce application built with **Next.js + Tailwind + API Routes + MongoDB schemas** for the Mivyra brand launch.

## Features
- Premium, responsive storefront pages: Home, Shop, Product, Cart, Checkout, Auth, Orders, About, Contact, Policies, Admin.
- REST APIs with pagination, auth, order creation, coupon endpoints, and admin analytics.
- JWT auth with secure cookie sessions, zod validation, and bcrypt password hashing.
- Role-based access control (RBAC) with database-backed admin checks for frontend and backend.
- MongoDB schema models: User, Product, Category, Order, Review, Coupon, Admin.
- Dummy catalog data and seed script.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Node.js runtime (Next.js API routes)
- MongoDB + Mongoose

## Local Run
1. Install deps:
   ```bash
   npm install
   ```
2. Setup env:
   ```bash
   cp .env.example .env.local
   ```
3. Start app:
   ```bash
   npm run dev
   ```
4. (Optional) Seed DB:
   ```bash
   npm run seed
   ```

## Auth & Role Rules
- Signup/Login pages:
  - `/auth/signup`
  - `/auth/login`
- User dashboard: `/dashboard`
- Admin dashboard: `/admin`
- Admin access is always verified from the `User.role` value in MongoDB, never hardcoded in route logic.
- Non-admin users are redirected away from admin UI and blocked from admin APIs.

## Seeded Credentials
- Admin: `7daksh2003@gmail.com` / `admin@123`
- User: `user@mivyra.com` / `user@123`

## API Documentation
Base URL: `http://localhost:3000/api`

### Auth
- `POST /auth/signup`
  - body: `{ "name": "A", "email": "a@mail.com", "password": "secret123" }`
- `POST /auth/login`
  - body: `{ "email": "7daksh2003@gmail.com", "password": "admin@123" }`
- `GET /auth/me` (requires auth cookie)
- `POST /auth/logout`

### Products
- `GET /products?page=1&limit=10`
- `GET /products/:id`

### Orders
- `GET /orders`
- `POST /orders`
  - body includes cart items, address, totals, payment method

### Coupons
- `GET /coupons`

### Admin (admin-only)
- `GET /admin/stats`
- `GET /admin/products`
- `POST /admin/products`
- `PATCH /admin/orders`
- `POST /admin/coupons`

## Deployment
### Frontend/API (Vercel)
- Import repo into Vercel
- Add env vars from `.env.example`
- Build command: `npm run build`, output: `.next`

### Database + Services (Render/AWS)
- Host MongoDB Atlas cluster or managed MongoDB on AWS
- Configure SMTP and Razorpay keys
- Optional: use Cloudinary for production image uploads

## Production hardening checklist
- Add CSRF tokens for authenticated write endpoints.
- Integrate Razorpay order creation + webhook verification.
- Add transactional email templates and event queue.
- Add observability (Sentry, structured logging, uptime monitoring).
