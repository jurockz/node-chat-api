import express from "express";
import { getMessages } from "../controllers/chatController.js";

const chatRouter = express.Router();

chatRouter.get("/", (req, res) => {
  res.json({ message: "Success" });
});

chatRouter.get("/messages", getMessages);

export default chatRouter;
