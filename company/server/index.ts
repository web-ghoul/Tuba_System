import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config()

const app = express();
const PORT = 5000;

app.use(cors());
console.log(process.env.VITE_SERVER_URL);

app.get("/api/message", (req: Request, res: Response) => {
  console.log(req);
  res.json({ message: "Hello from Express server!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
