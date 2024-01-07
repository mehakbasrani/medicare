import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";
import {
  deleteDoctor,
  getAllDoctors,
  getDoctorProfile,
  getSingleDoctor,
  updateDoctor,
} from "../controllers/doctorController.js";
import reviewRouter from "./reviews.js";

const router = express.Router();

//nested route
router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctors);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);
router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);

export default router;
