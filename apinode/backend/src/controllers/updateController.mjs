import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function updatePost(req, res) {
  const { id } = req.params;

  try {
    const { title, content } = req.body;
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: { title, content },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "No se encontro el usuario" });
  }
}
