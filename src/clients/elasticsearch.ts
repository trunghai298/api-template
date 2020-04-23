import elasticsearch from "elasticsearch";

export const ESClient = new elasticsearch.Client({
  host: process.env.ES_URL,
  apiVersion: process.env.ES_VERSION,
  maxRetries: 10,
  keepAlive: true,
  // log: "trace"
});
