import express from "express";
import {
  getHenkaten,
  getHenkatenById,
  createHenkaten,
  updateHenkaten,
  deleteHenkaten,
} from "../controllers/HenkatenController.js";

const router = express.Router();

router.get("/henkatens", getHenkaten);
router.get("/henkatens/:id", getHenkatenById);
router.post("/addhenkatens", createHenkaten);
router.patch("/henkatens/:id", updateHenkaten);
router.delete("/henkatens/:id", deleteHenkaten);

export default router;
