import AuthRoutes from "./auth";
import { Application } from "express";
import TeamRoutes from './teams';

export default (app: Application) => {
  AuthRoutes(app);
  TeamRoutes(app);
};
