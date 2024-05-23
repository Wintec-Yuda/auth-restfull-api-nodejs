import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userService = {
  register: async (data: any) => await prisma.user.create({ data }),
  login: async (email: string) => await prisma.user.findUnique({ where: { email } }),
  getAll: async () => await prisma.user.findMany(),
  delete: async (id: string) => await prisma.user.delete({ where: { id } }),
};

export default userService;
