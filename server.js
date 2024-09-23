import { Server } from "socket.io";
import { connectDB } from "./config/db.js";
import app from "./app.js";
import { setupChatSocket } from "./sockets/chatSocket.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3500;

connectDB();

const expressServer = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const io = new Server(expressServer, {
  cors: {
    origin: "*",
  },
  path: "/chat/api/socket.io/",
});

setupChatSocket(io);
