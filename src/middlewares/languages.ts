import { SUPPORTED_LANGUAGES } from "../constants/languages";
import { Response, NextFunction } from "express";

export const initLanguages = () => async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const supported =
    (process.env.LANGUAGES || "").split(",") || SUPPORTED_LANGUAGES;
  req.lang = req.acceptsLanguages(supported) || SUPPORTED_LANGUAGES[0];
  req.ctx.lang = req.lang;
  next();
};
