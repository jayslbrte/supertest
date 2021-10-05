import supertest from "supertest";
import { expect } from "chai";
import { interfaces, it } from "mocha";
const request = supertest(
  "https://private-anon-87a2e80e45-swyftx.apiary-mock.com/"
);