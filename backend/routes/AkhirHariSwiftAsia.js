import express from "express";
import { getAkhirhariSwiftAsiakemarin } from "../controllers/AkhirhariSwiftAsiaController.js";

const router = express.Router();

router.get("/akhirharikemarinswiftasia", getAkhirhariSwiftAsiakemarin);
export default router;
