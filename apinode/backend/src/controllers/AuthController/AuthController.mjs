import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = "9Xac2GZk3JMmbbr/JpMOI8XEk6inTgU7jDkFsu-HXKzZ4PsSqNirwWAG=1WQ=-0E7qy3QlKG0vJL9YkPtvBpofFL4pwYE8fxNGDE4M7?uu2TSz7EkEA/K?ODcF/zGYmyuW9KjIJgtp?ERYu-jlG4///=QruRAn?j?CHR05RufZplKMxCmwbm4UUgRjiHSc!PDIjAfjoL!ZH2-5grVkW0yzC!0JcPwPbMov3Qic?QKRP3QrWvS2lsI?n4G3x3JC2V";
// Cambia esto por una cadena larga y segura

export async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const passwordMatch = await bcrypt.compare(password, user.password || '');

    if (!passwordMatch) {
      throw new Error('Contraseña incorrecta');
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export default loginUser;
