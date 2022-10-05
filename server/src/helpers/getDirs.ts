import fs from "fs-extra";
import path from "path";
import normalizePath from "./nomalizePath";

interface GetFiles {
  success: boolean;
  dirs: string[] | any;
  message: string;
}

const getFiles = (dir: string): GetFiles => {
  try {
    const pathDir = path.join(__dirname, `../../cloud/${dir}`);
    return { dirs: fs.readdirSync(pathDir), success: true, message: "" };
  } catch (err) {
    return {
      dirs: [],
      success: false,
      message: `file: ${dir} doesn't exist`,
    };
  }
};

const isDirectory = (file: string): boolean => {
  return !/[.*]/g.test(file);
};

interface GetDataFromCloud {
  content: string[];
  path: string;
  fullPath?: string;
  message: string;
}

export default function getDataFromCloud(dir: string): GetDataFromCloud {
  const cleanPath = normalizePath(dir);
  const directories = getFiles(cleanPath);
  const fullPath = path.join(__dirname, `../../cloud/${cleanPath}`);
  const content: any = { files: [], dirs: [] };

  for (const dir of directories.dirs) {
    if (isDirectory(dir)) {
      content.dirs.push(dir);
    } else {
      content.files.push(dir);
    }
  }
  return {
    content,
    path: dir ? dir : "/",
    message: directories.message,
    fullPath,
  };
}
