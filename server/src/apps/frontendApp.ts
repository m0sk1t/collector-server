import Koa from "koa";

import frontendRouter from "../Routes/frontend.route";

const frontendApp = new Koa();

frontendApp.use(frontendRouter.routes());

export default frontendApp;
