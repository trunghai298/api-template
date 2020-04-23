import AuthRoutes from "./auth";
import { Application } from "express";

export default (app: Application) => {
  AuthRoutes(app);
};
