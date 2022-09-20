import Router from "koa-router";

import { staticHtmlController } from "../Controllers/frontend.controller";

const frontendRouter = new Router();

frontendRouter.get("/", staticHtmlController);
frontendRouter.get(/\d+.html/, staticHtmlController);

export default frontendRouter;
