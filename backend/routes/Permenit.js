import express from "express";
import {
  getPermenit,
  getPermenitById,
  createPermenit,
  updatePermenit,
  deletePermenit,
  getPermenithariini,
  getPermenithariini2jamterahir,
  getKemarin2359,
} from "../controllers/PermenitController.js";

const router = express.Router();

router.get("/permenit", getPermenit);
router.get("/permenit/:id", getPermenitById);
router.post("/addpermenit", createPermenit);
router.patch("/permenit/:id", updatePermenit);
router.delete("/permenit/:id", deletePermenit);
router.get("/permenithariini", getPermenithariini);
router.get("/permenithariini2jamterahir", getPermenithariini2jamterahir);
router.get("/kemarin2359", getKemarin2359);

export default router;
