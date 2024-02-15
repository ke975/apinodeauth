import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function postgetController(req, res) {
  try {
    const post = await prisma.post.findMany({
      select: {
        title: true,
        content: true,
      },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "No se encontro el su post" });
  }
}
