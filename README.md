# MMAI Monorepo

Production-oriented SaaS scaffold for Myanmar AI business chatbot.

## Stack
- Turborepo monorepo
- Next.js 15 web app
- Cloudflare Workers + Hono API
- Shared packages for schema, AI prompt, and contracts

## Apps
- `apps/web`: dashboard + auth UI with Supabase client login
- `apps/api`: Hono API with auth endpoint shell and health endpoint

## Packages
- `packages/shared`: Zod contracts and shared types
- `packages/database`: Drizzle PostgreSQL schema with tenant columns and pgvector embeddings
- `packages/ai`: system prompt policy for Burmese-first assistant

## Setup
1. `pnpm install`
2. Copy `.env.example` to `.env`
3. `pnpm dev`

## Architecture Notes
- Every tenant-scoped table includes `organization_id`.
- Authentication uses Supabase Auth.
- API and UI are strict TypeScript.
