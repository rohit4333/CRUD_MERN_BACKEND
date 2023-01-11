import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.jubop8h.mongodb.net/?retryWrites=true&w=majority`;

  try {
    // 1 - Current URL string parser is deprecated, and will be removed in a future version.
    // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
