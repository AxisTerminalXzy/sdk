import { Router } from "express";
import { generateSignal } from "../agents/signalAgent";

const router = Router();

router.get("/", async (_, res) => {
  const signal = await generateSignal();

  res.json(signal);
});

export default router;
