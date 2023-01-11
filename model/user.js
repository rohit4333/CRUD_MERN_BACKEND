import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

// how our document look like
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: Number,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "Cruduser");
// we need to turn it into a model
const postUser = mongoose.model("Cruduser", userSchema);

export default postUser;
