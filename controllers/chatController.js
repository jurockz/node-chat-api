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
    const allGroups = await MessageGroup.find({});
    const lastGroup = allGroups[allGroups.length - 1];
    if (
      allGroups &&
      allGroups.length > 0 &&
      lastGroup.username === messageGroup.username
    ) {
      lastGroup.messages.push(messageGroup.messages[0]);
      await lastGroup.save();
    } else {
      const newMessageGroup = new MessageGroup(messageGroup);
      await newMessageGroup.save();
    }
  } catch (error) {
    console.error("Error adding message:", error);
  }
};
