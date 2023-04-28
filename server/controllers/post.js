import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import postSchemaModel from "../database/models/posts.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const getPosts = await postSchemaModel.find({});
    res.status(200).send(JSON.stringify({ alert: true, data: getPosts }));
  } catch (error) {
    res
      .status(500)
      .send(JSON.stringify({ alert: false, message: error.message }));
  }
};

// Create a Post
export const createPost = async (req, res) => {
  try {
    const { name, prompt, image } = req.body;
    const imageUrl = await cloudinary.uploader.upload(image);

    const newPost = new postSchemaModel({
      name,
      prompt,
      image: imageUrl.url,
    });
    const saveData = newPost.save();
    res.status(201).send(JSON.stringify({ alert: true, data: newPost }));
  } catch (error) {
    res
      .status(500)
      .send(JSON.stringify({ alert: false, message: error.message }));
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    await postSchemaModel.findByIdAndDelete(postId);
    res
      .status(200)
      .send(JSON.stringify({ id: postId,  message: "Post deleted successfully" }));
  } catch (error) {
    res.status(500).send(JSON.stringify({ message: error.message }));
  }
};
