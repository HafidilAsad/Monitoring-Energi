import express from "express";
import { getAkhirhariStriko2kemarin } from "../controllers/AkhirhariStriko2Controller.js";

const router = express.Router();

router.get("/akhirharikemarinstriko2", getAkhirhariStriko2kemarin);
export default router;
