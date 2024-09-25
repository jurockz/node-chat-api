import cron from "node-cron";
import { MessageGroup } from "../models/MessageGroup.js";

const messageGroups = [
  {
    username: "jurek",
    color: "#c5839a",
    messages: [
      {
        id: "6cfd7c11-e7ca-4bea-aac0-8955c991457e",
        message: "Hallo, wie gehts?",
        date: 1727295456307,
      },
      {
        id: "d4e564cc-c5cb-4595-8322-b4b9aad7b361",
        message:
          "Keine sorge die Nachrichten werden alle 24 Stunden gelöscht ! Also verschicke ruhig eine Nachricht und probiere die Chat-App aus.",
        date: 1727295470713,
      },
    ],
  },
  {
    username: "jurek_english",
    color: "#7aa8c2",
    messages: [
      {
        id: "e980cf06-6ceb-4e01-9ea3-3ea4b9836c2c",
        message: "Hello, how are you?",
        date: 1727295501678,
      },
      {
        id: "92ed758a-d3e4-4517-b854-3c985980769e",
        message:
          "Don't worry, the messages are deleted every 24 hours! So feel free to send a message and try out the chat app.",
        date: 1727295506924,
      },
    ],
  },
];

export default () => {
  console.log("Message Delete Cron Job initiated");

  cron.schedule("0 0 * * *", async () => {
    try {
      await MessageGroup.deleteMany({});
      await MessageGroup.insertMany(messageGroups);
      console.log("All messages deleted successfully");
    } catch (err) {
      console.error("Error deleting messages:", err);
    }
  });
};
