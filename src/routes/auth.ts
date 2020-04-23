import { Application } from "express";
import { fetch } from "../controllers/auth";

export default (app: Application) => {
  app.get("/auth/jwt", fetch);
};
