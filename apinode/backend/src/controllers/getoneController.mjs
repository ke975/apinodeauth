import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getOneController(req, res) {
  const Postid = parseInt(req.params.id);
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Postid,
      },
      select: {
        title: true,
        content: true,
      },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "No se encontro el usuario" });
  }
}
