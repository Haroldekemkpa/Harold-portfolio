import express from "express";
import dotenv from "dotenv";
import { createHireMeTable } from "./model/hiremeModel.js";
import { createTestimonialTable } from "./model/testimonialModel.js";
import { createAdminTable } from "./model/adminModel.js";

// ROUTES
import hireRouter from "./routes/hiremeRoute.js";
import testimonialRouter from "./routes/testimonialRoute.js";
import adminRouter from "./routes/adminRoutes.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());
await createHireMeTable();
await createTestimonialTable();
await createAdminTable();
app.use("/api/hires", hireRouter);
app.use("/api/comments", testimonialRouter);
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  console.log("hello world");
  return res.status(200).json({ message: "Hey harold" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
