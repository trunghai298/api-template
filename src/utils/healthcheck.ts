import { MySQLClient } from "../clients/mysql";
import { ESClient } from "../clients/elasticsearch";

const checkMySQL = () => MySQLClient.authenticate();

const checkElasticsearch = () => ESClient.ping({});

export default {
  checkMySQL,
  checkElasticsearch
};
