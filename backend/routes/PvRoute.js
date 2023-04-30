import express from "express";
import {
  getPvs,
  getPvById,
  createPv,
  updatePv,
  deletePv,
  getPvshasil,
  getPvNewmin1,
  getPvNewmin2,
  getPvNewmin3,
  getPvNewmin4,
  getPvNewmin5,
} from "../controllers/Pv.js";

const router = express.Router();

router.get("/pvs", getPvs);
router.get("/pvs/:id", getPvById);
router.post("/pvs", createPv);
router.patch("/pvs/:id", updatePv);
router.delete("/pvs/:id", deletePv);
router.get("/pvshasil", getPvshasil);
router.get("/pvnewmin1", getPvNewmin1);
router.get("/pvnewmin2", getPvNewmin2);
router.get("/pvnewmin3", getPvNewmin3);
router.get("/pvnewmin4", getPvNewmin4);
router.get("/pvnewmin5", getPvNewmin5);

export default router;
