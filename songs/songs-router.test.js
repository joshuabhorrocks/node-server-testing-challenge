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

    describe("POST / new song", () => {
        it("Should return http status code 201 OK", () => {
            return (
            supertest(Songs)
                .post("/songs")
                .send({id: 10, name: "Mississippi Queen", artist: "Mountain"})
                .then(response => {
                expect(response.status).toBe(201);
                })
            );
        });
    });

    describe("Check that POSTed song was added successfully", () => {
        it("Should return a single song", () => {
            return (
            supertest(Songs)
                .get("/songs/10")
                .send({id: 10})
                .then(response => {
                    expect(response.status).toBe(404)
                })
            )
            })
        });

    describe("Delete / song", () => {
        it("Should return http status code 204 OK", () => {
            return (
            supertest(Songs)
                .delete("/songs/:id")
                .send({id: 10})
                .then(response => {
                expect(response.status).toBe(204);
                })
            );
        });
    });

    describe("Check that Deleted song was deleted successfully", () => {
        it("Should return null", () => {
            return (
            supertest(Songs)
                .get("/songs/:id")
                .send({id: 10})
                .then (response => {
                    expect(response.status).toBe(404);
                })
            )
            })
        });
});