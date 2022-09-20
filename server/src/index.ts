import mongoose from "mongoose";

import backendApp from "./apps/backendApp";
import frontendApp from "./apps/frontendApp";

import { mongoDbConnectionString, serverConfig } from "./config";

backendApp
  .listen(serverConfig.NODE_BACKEND_PORT, async () => {
    await mongoose.connect(mongoDbConnectionString);

    console.log(`Backend server listening on port ${serverConfig.NODE_BACKEND_PORT}`);
  });

frontendApp
  .listen(serverConfig.NODE_FRONTEND_PORT);
