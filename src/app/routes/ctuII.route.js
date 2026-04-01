import express from "express";
import ctuIIController from "../controllers/ctuII.controller.js";
import buildingRouter from "./building.route.js";
const router = express.Router();

// Định nghĩa route riêng cho từng router
router.get("/", ctuIIController.findAll);
router.post("/", ctuIIController.create);
router.delete("/", ctuIIController.deleteAll);

router.get("/:tablename", ctuIIController.findOne);
router.put("/:tablename", ctuIIController.update);
router.delete("/:tablename", ctuIIController.deleteOne);

// Sử dụng router con cho các route liên quan đến building
router.use("/building", buildingRouter);

export default router;
