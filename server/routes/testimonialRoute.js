import express from "express";
import {
  getAllTestimonialController,
  deleteTestimonialController,
  createTestimonialController,
} from "../controllers/testimonialController.js";

const testimonialRouter = express.Router();

testimonialRouter.get("/", getAllTestimonialController);
testimonialRouter.delete("/delete/:id", deleteTestimonialController);
testimonialRouter.post("/create", createTestimonialController);

export default testimonialRouter;
