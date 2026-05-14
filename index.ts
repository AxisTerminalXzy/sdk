import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signalRoutes from "./routes/signals";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/signals", signalRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Axis Terminal Backend Running on ${PORT}`);
});
