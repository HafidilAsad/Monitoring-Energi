import express from "express";
import { getPermenitSwiftAsiahariini2jamterahir } from "../controllers/PermenitSwiftAsiaController.js";

const router = express.Router();

router.get(
  "/permenitswiftasiahariini2jamterahir",
  getPermenitSwiftAsiahariini2jamterahir
);

export default router;
