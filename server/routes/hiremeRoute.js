import express from "express";
import { createHireController } from "../controllers/hiremeController.js";

const hireRouter = express.Router();

// hireRouter.get("/", getAllHireRequest);

hireRouter.post("/create", createHireController);

export default hireRouter;
