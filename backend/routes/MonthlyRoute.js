import express from "express";
import {
  getmonthlys,
  getmonthlyById,
  createmonthly,
  updatemonthly,
  deletemonthly,
  getmonthlyshasil,
} from "../controllers/monthly.js";

const router = express.Router();

router.get("/monthlys", getmonthlys);
router.get("/monthlys/:id", getmonthlyById);
router.post("/monthlys", createmonthly);
router.patch("/monthlys/:id", updatemonthly);
router.delete("/monthlys/:id", deletemonthly);

export default router;
