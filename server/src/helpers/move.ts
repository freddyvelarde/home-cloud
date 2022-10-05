import fs from "fs-extra";
import path from "path";
import normalizePath from "./nomalizePath";

export default function moveFile(file: any, storagePath: string) {
  const filePath = file.path;
  const dest = path.join(
    __dirname,
    `/../../cloud/${normalizePath(storagePath)}/${file.filename}`
  );
  fs.move(filePath, dest, { overwrite: true }, (err) => {
    if (err) return console.log(err);
    console.log(`file saved in:`, dest);
  });
}
