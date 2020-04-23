import "@babel/polyfill";
import { assert } from "chai";
import request from "supertest";

import app from "../../src/app";

describe("healthcheck", () => {
  it("should return healthy state", done => {
    request(app)
      .get("/healthcheck")
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        assert.equal(res.status, 200);
        assert.isAtLeast(res.body.uptime, 1);

        return done();
      });
  });
});
