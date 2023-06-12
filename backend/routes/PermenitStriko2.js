import express from "express";
import { getPermenitStriko2hariini2jamterahir } from "../controllers/PermenitStriko2Controller.js";

const router = express.Router();

router.get(
  "/permenitstriko2hariini2jamterahir",
  getPermenitStriko2hariini2jamterahir
);

export default router;
