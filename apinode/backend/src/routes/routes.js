import express from "express";
import { getAllUser } from "../controllers/userController.mjs";
import { createPost } from "../controllers/posController.mjs";
import { postgetController } from "../controllers/postgetController.mjs";
import { deletePost } from "../controllers/deleteController.mjs";
import { updatePost } from "../controllers/updateController.mjs";
import { getPostsAndUsers } from "../controllers/postWithUser.mjs";
import { getOneController } from "../controllers/getoneController.mjs";
import { createUser } from "../controllers/createUser.mjs";
import { loginUser } from '../controllers/AuthController/AuthController.mjs';
import { authenticateToken } from '../middleware/authmidleware.mjs';

const router = express.Router();

router.get("/", getAllUser);
router.post("/login",loginUser,authenticateToken)
router.post("/post", createPost);
router.post("/createuser", createUser);
router.get("/getpost", postgetController);

router.get("/getpost/:id", getOneController);
router.delete("/deletepost/:id", deletePost);

router.put("/updatepost/:id", updatePost);

router.get("/postsWithUsers", async (req, res) => {
  try {
    const postsWithUsers = await getPostsAndUsers();
    res.status(200).json(postsWithUsers);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener posts con usuarios" });
  }
});

export default router;
