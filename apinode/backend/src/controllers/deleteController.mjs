import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deletePost(req, res) {
  const postId = parseInt(req.params.id); // Obtener el ID del post de los parámetros de la URL

  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id: postId,
      },
    });
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(500).json({ error: "No se pudo eliminar el post" });
  }
}
