import express from "express";
import { ProductsController } from "../controllers/products.controller.js";
const router = express.Router();

router.get('/best', ProductsController.getBestSellers);

export default router;