import express from "express";

import { createImage } from "../controllers/home.js";

const router = express.Router();

router.post("/", createImage);

export default router;
