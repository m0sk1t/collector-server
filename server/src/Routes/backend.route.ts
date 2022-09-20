import Router from "koa-router";

import {
  staticTrackerController,
  trackController,
} from "../Controllers/backend.controller";

const backendRouter = new Router();

backendRouter.post("/track", trackController);
backendRouter.get("/tracker.js", staticTrackerController);

export default backendRouter;
