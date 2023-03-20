import express from "express";
import { getUserById, getUsers, saveUser } from "../controllers/userController.js";


const router = express.Router();

router.get("/users", getUsers);
router.post("/users", saveUser);
router.get("/users/:id", getUserById);

export default router;