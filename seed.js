const { Pokemon, Move } = require("./models");

const main = async () => {
  // Delete everything in the database.
  await Pokemon.destroy({
    where: {}
  });
  await Move.destroy({
    where: {}
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
    attack: 35
  });

  const move2 = await Move.create({
    name: "Razor Leaf",
    attack: 65
  });

  // set associations here!
  await pokemon1.addMove(move1);
  // await ted.addQuote(quote2);
  // await ted.addQuote(quote3);
  // await ted.addQuote(quote3);

  process.exit();
};

main();
