import express from "express";
import {
  getReport,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
  createReportSekaliSehari,
  getReportConsumptKemarin,
  getReportperbulanini,
  getReportperbulaniniswiftasia,
} from "../controllers/ReportController.js";

const router = express.Router();

router.get("/reports", getReport);
router.get("/reports/:id", getReportById);
router.post("/addreports", createReport);
router.patch("/reports/:id", updateReport);
router.delete("/reports/:id", deleteReport);
router.post("/addreportsekalisehari", createReportSekaliSehari);
router.get("/reportsconsumptkemarin", getReportConsumptKemarin);
router.get("/reportsperbulanini", getReportperbulanini);
router.get("/reportsperbulaniniswiftasia", getReportperbulaniniswiftasia);

export default router;
