import express from "express";
import { getUser , getUserByUserName, updateUser} from "../controllers/user.js";

const router = express.Router()

router.get("/find/:userId", getUser)
router.put("/", updateUser)
router.get("/search/:username", getUserByUserName)

export default router