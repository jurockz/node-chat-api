import { addMessage } from "../controllers/chatController.js";

export const setupChatSocket = (io) => {
  const chatNamespace = io.of("/chat/api");

  chatNamespace.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("sendMessage", (messageGroup, callback) => {
      console.log("MESSAGE_SEND");
      addMessage(messageGroup);
      chatNamespace.emit("all", messageGroup);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};
