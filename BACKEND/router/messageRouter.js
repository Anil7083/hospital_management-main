import express from "express"
import { getAllMessages, sendMessage } from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middkewares/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getAll", isAdminAuthenticated, getAllMessages)

export default router;