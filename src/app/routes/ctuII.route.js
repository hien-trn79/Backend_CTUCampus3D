import express from "express";
import ctuIIController from "../controllers/ctuII.controller.js";

const router = express.Router();

// Định nghĩa route riêng cho từng router
router.get("/", ctuIIController.findAll);
router.post("/", ctuIIController.create);
router.delete("/", ctuIIController.deleteAll);
router.get("/:id", ctuIIController.findOne);
router.put("/:id", ctuIIController.update);
router.delete("/:id", ctuIIController.deleteOne);

export default router;
