import express from "express";
import bodyParser from "body-parser";

import Routes from "./routes";
import * as AuthCtrl from "./controllers/auth";
import { initPassport } from "./middlewares/passport";
import { initLogger } from "./middlewares/logger";
import { initCORS } from "./middlewares/cors";
import { initSecurity } from "./middlewares/security";
import { initCtx } from "./middlewares/context";
import { initIP } from "./middlewares/ip";
import { initLanguages } from "./middlewares/languages";
import { initHC } from "./middlewares/healthcheck";
import { authenticateJWT } from "./middlewares/passport";
import { NodeEnv } from "./constants/server";

const app = express();

// Express configuration
app.set("trust proxy", process.env.USE_PROXY === "true");

// Healthcheck
app.use("/healthcheck", initHC());

// Third party middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(initPassport());

// Custom middlewares
process.env.NODE_ENV !== NodeEnv.Test && app.use(initLogger());
app.use(initCORS());
app.use(initSecurity());
app.use(initCtx());
app.use(initIP());
app.use(initLanguages());

// Allow to generate anonymous JWT for new user
app.post("/auth/anonymous", AuthCtrl.anonymous);

// JWT verification
app.use(authenticateJWT());

// Routes
Routes(app);

app.get("/", (req, res) => res.send("Hello World"));

export default app;
