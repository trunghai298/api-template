import app from "./app";

import { LogClient } from "./clients/logger";
import { SERVER_PORT, NodeEnv, APP_NAME_DEFAULT } from "./constants/server";
import { MySQLClient } from "./clients/mysql";

const PORT = process.env.SERVER_PORT || SERVER_PORT;

async () => {
  app.set("port", PORT);
  const appName = process.env.APP_NAME || APP_NAME_DEFAULT;

  await MySQLClient.sync();

  app.listen(PORT, () => {
    LogClient.info(
      `${appName} is running at http://localhost:${PORT} in ${process.env.NODE_ENV || NodeEnv.Development} mode`
    );
  });
};
