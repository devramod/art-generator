import mongoose from "mongoose";

const connectDatabase = (url) => {
  mongoose.set("strictQuery", true);

  mongoose.connect(url)
  .then(() => console.log("connect to database"))
  .catch((err) => console.log(err))
};

export default connectDatabase;