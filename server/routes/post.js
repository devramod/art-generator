import express from "express";

import { getAllPosts, createPost, deletePost } from "../controllers/post.js";

const router = express.Router();

// Get all posts
router.get('/', getAllPosts)

// Create a posts
router.post('/', createPost)

// Delete a post
router.delete('/:postId', deletePost)


export default router;
