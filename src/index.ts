import type { Request, Response } from "express";
import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (res: Response) => {
  res.json({
    message: "PSTrack Server!",
  });
});

app.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
