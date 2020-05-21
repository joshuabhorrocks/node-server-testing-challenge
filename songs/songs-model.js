const db = require('../database/dbConfig.js');

module.exports = {
  getAll,
  findById,
  insert,
  remove,
};

function getAll() {
  return db('songs');
}

function findById(id) {
    return db("songs").where("id", id);
}

async function insert(song) {
  return db("songs")
    .insert(song, "id")
    .then(ids => {
      return findById(ids[0])
    });
}

function remove(id) {
  return db("songs").where("id", id).del();
}
