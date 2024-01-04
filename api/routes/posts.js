import express from "express";
import {
  getPosts,
  addPost,
  deletePost,
  getPostsUnverified,
  verifyPost,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/unverified", getPostsUnverified);
router.post("/verify", verifyPost);
router.post("/", addPost);
router.delete("/:id", deletePost);

export default router;
