import { Request, Response } from "express";
import getDataFromCloud from "../helpers/getDirs";
import mkdir from "../helpers/mkdir";
import moveFile from "../helpers/move";

export const getDirectories = (req: Request, res: Response) => {
  const { path } = req.params;
  const files = getDataFromCloud(path);
  res.send(files);
};

export const createDirectory = (req: Request, res: Response) => {
  const { path } = req.params;
  const response = mkdir(path);
  res.send(response);
};

export const uploadFiles = (req: Request, res: Response) => {
  const files: any = req.files;
  const { path } = req.params;
  if (files.length < 1) {
    res.send({ message: "No files uploaded" });
    return;
  }
  for (const file of files) {
    moveFile(file, path);
  }
  res.send("moved");
};
