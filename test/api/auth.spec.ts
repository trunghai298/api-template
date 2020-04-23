import "@babel/polyfill";
import request from "supertest";

import * as DBUtils from "../utils/database";
import app from "../../src/app";
import { assert } from 'chai'

describe("api/auth", () => {
  before(async () => {
    return DBUtils.setup();
  });

  describe("#anonymous", () => {
    let jwt: any = null;

    it("should create a anonymous jwt", done => {
      request(app)
        .post("/auth/anonymous")
        .set("Accept", "application/json")
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          jwt = res.body.jwt;

          assert.equal(res.status, 200)
          assert.exists(jwt)

          return done();
        });
    });

    it("Login", done => {
      request(app)
        .get("/auth/jwt")
        .set("Accept", "application/json")
        .set("Authorization", `bearer ${jwt}`)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          assert.exists(res.body.iat)

          return done();
        });
    });
  });
});
