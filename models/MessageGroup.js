import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  username: String,
  color: String,
  messages: [
    {
      id: String,
      message: String,
      date: Number,
    },
  ],
});

export const MessageGroup = mongoose.model("message", messageSchema);
