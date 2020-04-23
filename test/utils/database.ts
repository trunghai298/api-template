import { MySQLClient } from "../../src/clients/mysql";

export const setup = () => {
  return MySQLClient.sync({ force: true });
};
