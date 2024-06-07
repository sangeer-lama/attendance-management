import Users from "./repository/users";
import UserAttendance from "./repository/userAttendance";
import { PrismaClient } from "@prisma/client";

// Prisma Connection
export const prisma = new PrismaClient();
prisma.$connect();
console.info("Postgres: Connected");

