// authMiddleware.mjs
import jwt from 'jsonwebtoken';

const JWT_SECRET = '9Xac2GZk3JMmbbr/JpMOI8XEk6inTgU7jDkFsu-HXKzZ4PsSqNirwWAG=1WQ=-0E7qy3QlKG0vJL9YkPtvBpofFL4pwYE8fxNGDE4M7?uu2TSz7EkEA/K?ODcF/zGYmyuW9KjIJgtp?ERYu-jlG4///=QruRAn?j?CHR05RufZplKMxCmwbm4UUgRjiHSc!PDIjAfjoL!ZH2-5grVkW0yzC!0JcPwPbMov3Qic?QKRP3QrWvS2lsI?n4G3x3JC2V'; // Misma clave secreta que se usó para firmar el token

export function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.userId = decoded.userId;
    next();
  });
}

export default authenticateToken;
