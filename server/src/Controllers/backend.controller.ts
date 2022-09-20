import Router from "koa-router";

import { serverConfig } from "../config";
import eventModel from '../Models/event.model';
import { DbService } from '../Services/db.service';
import { staticFileProvider } from "../utils/staticFile.provider";

export const trackController: Router.IMiddleware<any, any> = async (ctx) => {
  console.log(ctx.request.body);

  await DbService.save(eventModel, ctx.request.body);

  ctx.body = {
    status: 'success',
  }
};

export const staticTrackerController: Router.IMiddleware = (ctx) => {
  ctx.body = staticFileProvider(serverConfig.TRACKER_FILE_LOCATION);
};
