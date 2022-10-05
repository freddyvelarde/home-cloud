const normalizePath = (pathDir: string): string => {
  if (pathDir === undefined) return "/";
  const paths = pathDir.split("-");
  let result = "";
  for (const item of paths) {
    result += `${item}/`;
  }
  return result;
};

export default normalizePath;
