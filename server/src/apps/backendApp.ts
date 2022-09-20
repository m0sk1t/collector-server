import Koa from "koa";
import cors from "koa-cors";
import body from "koa-body";

import backendRouter from "../Routes/backend.route";

const backendApp = new Koa();

backendApp.use(cors());
backendApp.use(body());
backendApp.use(backendRouter.routes());

export default backendApp;
