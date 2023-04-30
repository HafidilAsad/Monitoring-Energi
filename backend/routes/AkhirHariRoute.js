import express from "express";
import {
  getAkhirhari,
  getAkhirhariById,
  createAkhirhari,
  updateAkhirhari,
  deleteAkhirhari,
  getAkhirharikemarin,
} from "../controllers/AkhirhariController.js";

const router = express.Router();

router.get("/akhirhari", getAkhirhari);
router.get("/akhirhari/:id", getAkhirhariById);
router.post("/addakhirhari", createAkhirhari);
router.patch("/akhirhari/:id", updateAkhirhari);
router.delete("/akhirhari/:id", deleteAkhirhari);
router.get("/akhirharikemarin", getAkhirharikemarin);
export default router;
