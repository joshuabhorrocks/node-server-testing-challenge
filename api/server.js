const express = require("express");

const SongsRouter = require("../songs/songs-router");

const server = express();

server.use(express.json());
server.use("/songs", SongsRouter);

server.get("/", (req, res) => {
    res.status(200).json("Server is running!");
});

module.exports = server;