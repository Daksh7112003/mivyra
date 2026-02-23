# Mivyra - Production-ready D2C Fashion Jewellery Store

A complete full-stack e-commerce application built with **Next.js + Tailwind + API Routes + MongoDB schemas** for the Mivyra brand launch.

## Features
- Premium, responsive storefront pages: Home, Shop, Product, Cart, Checkout, Auth, Orders, About, Contact, Policies, Admin.
- REST APIs with pagination, auth, order creation, coupon endpoints, and admin analytics.
- JWT auth utilities, role-based model support, zod validation, secure password hashing.
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

## Sample Credentials
- Admin: `admin@mivyra.com` / `admin@123`
- User: `user@mivyra.com` / `user@123`

## API Documentation
Base URL: `http://localhost:3000/api`

### Auth
- `POST /auth/signup`
  - body: `{ "name": "A", "email": "a@mail.com", "password": "secret123" }`
- `POST /auth/login`
  - body: `{ "email": "admin@mivyra.com", "password": "admin@123" }`

### Products
- `GET /products?page=1&limit=10`
- `GET /products/:id`

### Orders
- `GET /orders`
- `POST /orders`
  - body includes cart items, address, totals, payment method

### Coupons
- `GET /coupons`

### Admin
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
- Replace in-memory auth/order stores with DB-backed repositories in API routes.
- Add middleware for protected routes & admin JWT role checks.
- Integrate Razorpay order creation + webhook verification.
- Add transactional email templates and event queue.
- Add observability (Sentry, structured logging, uptime monitoring).
