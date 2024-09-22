import express from "express";
import cors from "cors";
import chatRouter from "./routes/chatRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/chat/api", chatRouter);

export default app;
