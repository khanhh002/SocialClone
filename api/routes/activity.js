import express from "express";
import { addCommentActivity } from "../controllers/activity.js";
const router = express.Router();

router.post("/", addCommentActivity);

export default router;
