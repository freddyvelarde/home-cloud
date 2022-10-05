import { Router } from "express";
import { upload } from "../middlewares/multer";
import {
  createDirectory,
  getDirectories,
  uploadFiles,
} from "./cloud.controllers";
const router = Router();

router.get("/find/:path?", getDirectories);
router.get("/mkdir/:path?", createDirectory);
router.post("/upload/:path?", upload.array("files", 100), uploadFiles);

export default router;
