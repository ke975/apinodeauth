import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPostsAndUsers() {
  try {
    const postsWithUsers = await prisma.post.findMany({
      include: {
        author: true, // Incluye los datos del usuario asociado a cada post
      },
    });
    return postsWithUsers;
  } catch (error) {
    throw new Error("No se pudieron obtener los posts con usuarios");
  }
}
