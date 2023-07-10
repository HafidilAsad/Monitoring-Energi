import express from "express";
import {
  getAttendance,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance,
} from "../controllers/AttendanceController.js";

const router = express.Router();

router.get("/attendances", getAttendance);
router.get("/attendances/:id", getAttendanceById);
router.post("/addattendances", createAttendance);
router.patch("/attendances/:id", updateAttendance);
router.delete("/attendances/:id", deleteAttendance);

export default router;
