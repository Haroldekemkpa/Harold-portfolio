import express from "express";
import dotenv from "dotenv";
import { createHireMeTable } from "./model/hiremeModel.js";

// ROUTES
import hireRouter from "./routes/hiremeRoute.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());
await createHireMeTable();

app.use("/api/hires", hireRouter);

app.get("/", (req, res) => {
  console.log("hello world");
  return res.status(200).json({ message: "Hey harold" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
