import { MessageGroup } from "../models/MessageGroup.js";

export const getMessages = async (req, res) => {
  try {
    const allMessages = await MessageGroup.find({});
    res.json(allMessages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

export const addMessage = async (messageGroup) => {
  try {
    const existingGroup = await MessageGroup.findOne({
      username: messageGroup.username,
    });
    if (existingGroup) {
      existingGroup.messages.push(messageGroup.messages[0]);
      await existingGroup.save();
    } else {
      const newMessageGroup = new MessageGroup(messageGroup);
      await newMessageGroup.save();
    }
  } catch (error) {
    console.error("Error adding message:", error);
  }
};
