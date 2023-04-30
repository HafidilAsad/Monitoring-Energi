import express from "express";
import {
  getReport,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
  createReportSekaliSehari,
} from "../controllers/ReportController.js";

const router = express.Router();

router.get("/reports", getReport);
router.get("/reports/:id", getReportById);
router.post("/addreports", createReport);
router.patch("/reports/:id", updateReport);
router.delete("/reports/:id", deleteReport);
router.post("/addreportsekalisehari", createReportSekaliSehari);

// router.get('/users/:id', getUserById);
// router.post('/users', createUser);
// router.patch('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);
//router.post('/addcost', createCost);

export default router;
