const { Pokemon, Move, User } = require("./models");

const main = async () => {
  // Delete everything in the database.
  await Pokemon.destroy({
    where: {}
  });
  await Move.destroy({
    where: {}
  });
  await User.destroy({
    where: {}
  });

  const admin = await User.create({
    username: "admin",
    password_digest:
      "$2b$11$J/T6HO7/IHF7TXgu4elqfO.YW6PJIOS9lQdmTQ789Sg7GUPkIer.O"
  });

  const pokemon1 = await Pokemon.create({
    name: "Bulbasaur",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    health: 300
  });

  const move1 = await Move.create({
    name: "Tackle",
    attack: 35,
    isLearned: true
  });

  const move2 = await Move.create({
    name: "Razor Leaf",
    attack: 65,
    isLearned: true
  });

  const move3 = await Move.create({
    name: "Vine Whip",
    attack: 55,
    isLearned: true
  });

  const move4 = await Move.create({
    name: "Solar Beam",
    attack: 120,
    isLearned: false
  });

  const move5 = await Move.create({
    name: "Hyper Beam",
    attack: 150,
    isLearned: false
  });

  // set associations here!
  await pokemon1.addMove(move1);
  await pokemon1.addMove(move2);
  await pokemon1.addMove(move3);
  await pokemon1.addMove(move4);
  await pokemon1.addMove(move5);
  await admin.addPokemon(pokemon1);
  // await ted.addQuote(quote2);
  // await ted.addQuote(quote3);
  // await ted.addQuote(quote3);

  process.exit();
};

main();
