import express from "express";
import {
  getPesanNotifikasi,
  getPesanNotifikasiById,
  createPesanNotifikasi,
  updatePesanNotifikasi,
  deletePesanNotifikasi,
  getPesanNotifikasiKemarin,
} from "../controllers/PesanNotifikasiController.js";

const router = express.Router();

router.get("/pesannotifikasi", getPesanNotifikasi);
router.get("/pesannotifikasi/:id", getPesanNotifikasiById);
router.post("/addpesannotifikasi", createPesanNotifikasi);
router.patch("/pesannotifikasi/:id", updatePesanNotifikasi);
router.delete("/pesannotifikasi/:id", deletePesanNotifikasi);
router.get("/pesannotifikasikemarin", getPesanNotifikasiKemarin);
export default router;
