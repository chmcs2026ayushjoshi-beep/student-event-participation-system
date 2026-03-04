import express from "express";
import { getAllParticipations, getParticipationById, createParticipation, updateParticipation, deleteParticipation } from "../controllers/participationController.js";

const router = express.Router();

router.get("/", getAllParticipations)
router.get("/:id", getParticipationById)
router.post("/", createParticipation)
router.put("/:id", updateParticipation)
router.delete("/:id", deleteParticipation)

export default router;
