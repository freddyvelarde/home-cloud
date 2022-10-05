import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import createMainPath from "./helpers/createMainPath";
import routers from "./code/cloud.routers";
const app: Application = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
createMainPath();

// settings
app.set("port", process.env.PORT || 8000);

// routers

app.use("/api/files", routers);

app.get("/", (req: Request, res: Response) => {
  // createMainPath();
  res.send({ message: "server is up" });
});

export default app;
