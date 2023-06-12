import express from "express";
import { getPermenitStriko3hariini2jamterahir } from "../controllers/PermenitStriko3Controller.js";

const router = express.Router();

router.get(
  "/permenitstriko3hariini2jamterahir",
  getPermenitStriko3hariini2jamterahir
);

export default router;
