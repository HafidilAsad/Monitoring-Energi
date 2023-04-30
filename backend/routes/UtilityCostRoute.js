import express from "express";
import {
  getUtilityCosts,
  getUtilityCostById,
  createUtilityCost,
  updateUtilityCost,
  deleteUtilityCost,
  getUtilityCostNew,
  getUtilityCostNewmin1,
  getUtilityCostNewmin2,
  getUtilityCostNewmin3,
  getUtilityCostNewmin4,
} from "../controllers/UtilityCosts.js";

const router = express.Router();

router.get("/utilitycost", getUtilityCosts);
router.get("/utilitycost/:id", getUtilityCostById);
router.post("/utilitycosts", createUtilityCost);
router.patch("/utilitycosts/:id", updateUtilityCost);
router.delete("/utilitycosts/:id", deleteUtilityCost);
router.get("/utilitycostnew", getUtilityCostNew);
router.get("/utilitycostnewmin1", getUtilityCostNewmin1);
router.get("/utilitycostnewmin2", getUtilityCostNewmin2);
router.get("/utilitycostnewmin3", getUtilityCostNewmin3);
router.get("/utilitycostnewmin4", getUtilityCostNewmin4);
export default router;
