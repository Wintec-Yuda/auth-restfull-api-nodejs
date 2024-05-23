import express from "express";
import userController from "../controller/user";
import { verifyOnlyAdmin, verifyToken } from "../middleware";

const router = express.Router();

router.post("/api/register", userController.register);
router.post("/api/login", userController.login);
router.get("/api/users", verifyToken, userController.getUsers);
router.delete("/api/users/:id", verifyOnlyAdmin, userController.deleteUserById);

export default router;
