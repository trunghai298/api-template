import HCUtils from "../utils/healthcheck";
import { Response, NextFunction } from "express";

const uptime = new Date().getTime();

export const initHC = () => async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    await Promise.all([HCUtils.checkElasticsearch()]);

    res.json({
      uptime: new Date().getTime() - uptime
    });
  } catch (e) {
    next(e);
  }
};
