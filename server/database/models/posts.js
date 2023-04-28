import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  image: { type: String, required: true },
});

const postSchemaModel = mongoose.model("Post", postSchema);

export default postSchemaModel;
