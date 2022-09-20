import Router from "koa-router";

import { serverConfig } from "../config";
import { staticFileProvider } from "../utils/staticFile.provider";

export const staticHtmlController: Router.IMiddleware = async (ctx) => {
  ctx.body = staticFileProvider(serverConfig.CLICK_PAGE_LOCATION);
};
