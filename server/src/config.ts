import path from "path";

import dotenv from "dotenv";

dotenv.config();

export const serverConfig = {
  NODE_BACKEND_PORT: process.env.NODE_BACKEND_PORT || "8001",
  NODE_FRONTEND_PORT: process.env.NODE_FRONTEND_PORT || "8000",
  CLICK_PAGE_LOCATION: path.resolve(
    __dirname,
    process.env.CLICK_PAGE_LOCATION || "../static/index.html"
  ),
  TRACKER_FILE_LOCATION: path.resolve(
    __dirname,
    process.env.TRACKER_FILE_LOCATION || "../static/tracker.js"
  ),
};

export const databaseConfig = {
  DB_HOST: process.env.MONGODB_HOST || "",
  DB_PORT: process.env.MONGODB_PORT || "",
  DB_USER: process.env.MONGODB_USER || "",
  DB_PASS: process.env.MONGODB_PASS || "",
  DB_BASE: process.env.MONGODB_BASE || "",
};

export const mongoDbConnectionString = `mongodb://${databaseConfig.DB_HOST}:${databaseConfig.DB_PORT}/${databaseConfig.DB_BASE}`;
