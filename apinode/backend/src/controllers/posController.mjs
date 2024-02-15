// postController.mjs
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createPost(req, res) {
  const { title, content, authorId, Published } = req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
        Published,
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error); // Agregar esta línea para imprimir el error en la consola
    res.status(500).json({ error: "No hemos podido guardar el post" });
  }
}
