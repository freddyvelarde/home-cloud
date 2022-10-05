import fs from "fs-extra";
import path from "path";

export default async function createMainPath() {
  const file = path.join(__dirname, "../../cloud");
  try {
    await fs.ensureDir(file);
  } catch (err) {
    console.error(err);
  }
}
