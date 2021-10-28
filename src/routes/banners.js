import express from "express";
import { BannersController } from "../controllers/banners.controller.js";
const router = express.Router();

router.get('/all', BannersController.getAll);

export default router;