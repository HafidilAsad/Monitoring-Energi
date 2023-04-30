import express from "express";
import {
  getStriko1,
  getStriko1ById,
  createStriko1,
  updateStriko1,
  deleteStriko1,
} from "../controllers/Striko1Controller.js";

const router = express.Router();

router.get("/striko1s", getStriko1);
router.get("/striko1s/:id", getStriko1ById);
router.post("/addstriko1s", createStriko1);
router.patch("/striko1s/:id", updateStriko1);
router.delete("/striko1s/:id", deleteStriko1);

export default router;
