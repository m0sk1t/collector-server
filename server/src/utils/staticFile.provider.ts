import fs from "fs";

export const staticFileProvider = (filePath: string) =>
  fs.readFileSync(filePath).toString();
