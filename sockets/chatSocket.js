import { addMessage } from "../controllers/chatController.js";

export const setupChatSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("sendMessage", (messageGroup) => {
      addMessage(messageGroup);
      io.emit("all", messageGroup);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};
