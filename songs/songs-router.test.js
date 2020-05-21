const supertest = require("supertest");

const Songs = require("../api/server");
const db = require("../database/dbConfig");

afterEach(async () => {
    await db("songs").truncate();
});

describe("songs", () => {
    it("can run the tests", () => {
      expect(true).toBeTruthy();
    });
  
    describe("GET / songs", () => {
        it("Should return http status code 200 OK", () => {
            return (
            supertest(Songs)
                .get("/songs")
                .then(response => {
                expect(response.status).toBe(200);
                })
            );
        });
    });

    describe("GET / array of songs", () => {
        it("Should return an array of songs", () => {
            return supertest(Songs)
                .get("/songs")
                .then(response => {
                    expect(Array.isArray(response.body)).toBe(true);
                })
        });
    });

    describe("POST / songs", () => {
        it("Should return http status code 201 OK", () => {
            let songData = {
                name: "Mississippi Queen",
                artist: "Mountain"
            }
            return (
            supertest(Songs, songData)
                .post("/songs")
                .then(response => {
                expect(response.status).toBe(201);
                })
            );
        });
    });
});