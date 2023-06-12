import express from "express";
import { getAkhirhariStriko3kemarin } from "../controllers/AkhirhariStriko3Controller.js";

const router = express.Router();

router.get("/akhirharikemarinstriko3", getAkhirhariStriko3kemarin);
export default router;
