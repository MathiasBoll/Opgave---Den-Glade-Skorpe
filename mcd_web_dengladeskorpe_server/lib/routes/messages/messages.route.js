import express from "express";
import auth from "../../middleware/auth.middleware.js";
import { getMessages } from "../../handlers/messages/messages.handler.js";

const messagesRouter = express.Router();
messagesRouter.get("/messages", auth, async (req, res) => {
  try {
    const result = await getMessages();

    if (result.status === "ok") {
      return res.status(200).send(result);
    }

    return res.status(500).send(result);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default messagesRouter;
