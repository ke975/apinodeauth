import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllUser(req, res) {
  try {
    const user = await prisma.user.findMany();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "No se encontro el usuario" });
  }
}
