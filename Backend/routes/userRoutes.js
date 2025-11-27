import express from "express";
import { googleLogin, login, register ,getProfile} from "../controllers/userController.js";
const router = express.Router();


router.get("/", (req, res) => {
  res.json({ message: "Users API working!" });
});
router.post("/google",googleLogin)
router.post("/register", register);
router.post("/login", login);

export default router;