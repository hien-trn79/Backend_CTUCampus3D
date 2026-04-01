import express from "express";
import buildingCTUController from "../controllers/buildingCTU.controller.js";

const router = express.Router();

router.get("/:id", buildingCTUController.getBuildingById);
router.put("/:id", buildingCTUController.updateBuildingById);

export default router;
