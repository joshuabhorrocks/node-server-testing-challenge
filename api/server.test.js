const supertest = require("supertest");

const server = require("./server.js");
const db = require("../database/dbConfig.js");

afterEach(async () => {
    await db("songs").truncate();
});

describe("server", () => {
    it("can run the tests", () => {
      expect(true).toBeTruthy();
});

    describe("GET /", () => {
        it("should return http status code 200", () => {
            return (
                supertest(server)
                .get("/")
                // .expect(200) // from supertest
                .then(response => {
                    // from jest
                    expect(response.status).toBe(200);
                })
            );
        })
    })
});
