import path from "path";
import fs from "fs-extra";
import normalizePath from "./nomalizePath";

interface Mkdir {
  message: string;
  success: boolean;
}

export default function mkdir(pathDir: string): Mkdir {
  const pathClean = normalizePath(pathDir);
  try {
    fs.ensureDirSync(path.join(__dirname, `../../cloud/${pathClean}`));
    return { message: `directory ${pathClean} created`, success: true };
  } catch (err) {
    console.log(err);
    return { message: `Error creating ${pathClean}`, success: false };
  }
}
