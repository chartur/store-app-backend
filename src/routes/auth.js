import express from "express";
const router = express.Router();

import {
    AuthController,
    AuthValidator,
} from "../controllers/auth.controller.js";

router.post('/register', AuthValidator.login, AuthController.login);

export default router;