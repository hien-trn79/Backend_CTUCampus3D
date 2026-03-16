import express from "express";
import diController from "../controllers/di.controller.js";

const router = express.Router();
// Định nghĩa route riêng cho từng router
router.get("/", diController.findAll);
router.post("/", diController.create);
router.delete("/", diController.deleteAll);
router.get("/:id", diController.findOne);
router.put("/:id", diController.update);
router.delete("/:id", diController.deleteOne);

export default router;
