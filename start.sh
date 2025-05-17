#!/usr/bin/env bash
set -e

echo "Stopping existing Supabase instance (if any)..."
pnpx supabase stop --project-id database || true # Continue if it fails (e.g., no instance was running)

echo "Starting Supabase..."
pnpx supabase start

echo "Starting Docker services (katana, contracts) in detached mode..."
docker compose up -d

echo "Setting up database environment variables..."
# Ensuring the script changes to the correct directory and back, or runs in a subshell
(cd packages/database && pnpm run setup-env)

echo "Syncing Prisma schema with the database..."
(cd packages/database && pnpx prisma db push)

echo "Starting frontend development server (www)..."
# This will be the last command and will run in the foreground
pnpm www:dev
