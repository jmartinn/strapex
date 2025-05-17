import { PrismaClient } from "@prisma/client"

// Use a clearer TypeScript pattern for global variables
declare global {
  var prisma: PrismaClient | undefined;
}

// Use globalThis instead of global for better TypeScript compatibility
export const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
