exports.seed = function (knex) {
  return knex("songs")
    .insert([
      {name: "The Devil's Bleeding Crown", artist: "Volbeat"},
      {name: "Stricken", artist: "Disturbed"},
      {name: "Rooster", artist: "Alice in Chains"},
    ]).then(() => console.log("\n== Seed data for songs table added. ==\n"));
};