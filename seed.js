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

  const pokemon2 = await Pokemon.create({
    name: "Ivysaur",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
    health: 300
  });

  const pokemon3 = await Pokemon.create({
    name: "Venusaur",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
    health: 300
  });

  const pokemon4 = await Pokemon.create({
    name: "Charmander",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    health: 300
  });

  const pokemon5 = await Pokemon.create({
    name: "Charmeleon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
    health: 300
  });

  const pokemon6 = await Pokemon.create({
    name: "Charizard",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
    health: 300
  });

  const pokemon7 = await Pokemon.create({
    name: "Squirtle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
    health: 300
  });

  const pokemon8 = await Pokemon.create({
    name: "Wartortle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
    health: 300
  });

  const pokemon9 = await Pokemon.create({
    name: "Blastoise",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
    health: 300
  });

  const pokemon10 = await Pokemon.create({
    name: "Caterpie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
    health: 300
  });

  const pokemon11 = await Pokemon.create({
    name: "Metapod",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
    health: 300
  });

  const pokemon12 = await Pokemon.create({
    name: "Butterfree",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
    health: 300
  });

  const pokemon13 = await Pokemon.create({
    name: "Weedie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
    health: 300
  });

  const pokemon14 = await Pokemon.create({
    name: "Kakuna",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png",
    health: 300
  });

  const pokemon15 = await Pokemon.create({
    name: "Beedrill",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
    health: 300
  });

  const pokemon16 = await Pokemon.create({
    name: "Pidgey",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
    health: 300
  });

  const pokemon17 = await Pokemon.create({
    name: "Pidgeotto",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
    health: 300
  });

  const pokemon18 = await Pokemon.create({
    name: "Pidgeot",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
    health: 300
  });

  const pokemon19 = await Pokemon.create({
    name: "Rattata",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png",
    health: 300
  });

  const pokemon20 = await Pokemon.create({
    name: "Raticate",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png",
    health: 300
  });

  const pokemon21 = await Pokemon.create({
    name: "Spearow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png",
    health: 300
  });

  const pokemon22 = await Pokemon.create({
    name: "Fearow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png",
    health: 300
  });

  const pokemon23 = await Pokemon.create({
    name: "Ekans",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png",
    health: 300
  });

  const pokemon24 = await Pokemon.create({
    name: "Arbok",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png",
    health: 300
  });

  const pokemon25 = await Pokemon.create({
    name: "Pikachu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    health: 300
  });

  const pokemon26 = await Pokemon.create({
    name: "Raichu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/26.png",
    health: 300
  });

  const pokemon27 = await Pokemon.create({
    name: "Sandshrew",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/27.png",
    health: 300
  });

  const pokemon28 = await Pokemon.create({
    name: "Sandslash",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/28.png",
    health: 300
  });

  const pokemon29 = await Pokemon.create({
    name: "Nidoran",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/29.png",
    health: 300
  });

  const pokemon30 = await Pokemon.create({
    name: "Nidorina",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png",
    health: 300
  });

  const pokemon31 = await Pokemon.create({
    name: "Nidoqueen",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/31.png",
    health: 300
  });

  const pokemon32 = await Pokemon.create({
    name: "Nidoran",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/32.png",
    health: 300
  });

  const pokemon33 = await Pokemon.create({
    name: "Nidorino",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/34.png",
    health: 300
  });

  const pokemon35 = await Pokemon.create({
    name: "Nidoking",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
    health: 300
  });

  const pokemon36 = await Pokemon.create({
    name: "Clefairy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/36.png",
    health: 300
  });

  const pokemon37 = await Pokemon.create({
    name: "Clefable",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/37.png",
    health: 300
  });

  const pokemon38 = await Pokemon.create({
    name: "Vulpix",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png",
    health: 300
  });

  const pokemon39 = await Pokemon.create({
    name: "Ninetales",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png",
    health: 300
  });

  const pokemon40 = await Pokemon.create({
    name: "Jigglypuff",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png",
    health: 300
  });

  const pokemon41 = await Pokemon.create({
    name: "Wigglypuff",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/41.png",
    health: 300
  });

  const pokemon42 = await Pokemon.create({
    name: "Zubat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/42.png",
    health: 300
  });

  const pokemon43 = await Pokemon.create({
    name: "Golbat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/43.png",
    health: 300
  });

  const pokemon44 = await Pokemon.create({
    name: "Oddish",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/44.png",
    health: 300
  });

  const pokemon45 = await Pokemon.create({
    name: "Gloom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/45.png",
    health: 300
  });

  const pokemon46 = await Pokemon.create({
    name: "Vileplume",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/46.png",
    health: 300
  });

  const pokemon47 = await Pokemon.create({
    name: "Paras",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/47.png",
    health: 300
  });

  const pokemon48 = await Pokemon.create({
    name: "Parasect",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/48.png",
    health: 300
  });

  const pokemon49 = await Pokemon.create({
    name: "Venonat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/49.png",
    health: 300
  });

  const pokemon50 = await Pokemon.create({
    name: "Venomoth",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/50.png",
    health: 300
  });

  const pokemon51 = await Pokemon.create({
    name: "Diglett",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/51.png",
    health: 300
  });

  const pokemon52 = await Pokemon.create({
    name: "Dugtrio",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/52.png",
    health: 300
  });

  const pokemon53 = await Pokemon.create({
    name: "Meowth",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/53.png",
    health: 300
  });

  const pokemon54 = await Pokemon.create({
    name: "Persian",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/54.png",
    health: 300
  });

  const pokemon55 = await Pokemon.create({
    name: "Psyduck",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/55.png",
    health: 300
  });

  const pokemon56 = await Pokemon.create({
    name: "Golduck",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/56.png",
    health: 300
  });

  const pokemon57 = await Pokemon.create({
    name: "Mankey",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/57.png",
    health: 300
  });

  const pokemon58 = await Pokemon.create({
    name: "Primeape",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/58.png",
    health: 300
  });

  const pokemon59 = await Pokemon.create({
    name: "Growlithe",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/59.png",
    health: 300
  });

  const pokemon60 = await Pokemon.create({
    name: "Arcanine",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/60.png",
    health: 300
  });

  const pokemon61 = await Pokemon.create({
    name: "Poliwag",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/61.png",
    health: 300
  });

  const pokemon62 = await Pokemon.create({
    name: "Poliwrath",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/62.png",
    health: 300
  });

  const pokemon63 = await Pokemon.create({
    name: "Abra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/63.png",
    health: 300
  });

  const pokemon64 = await Pokemon.create({
    name: "Kadabra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/64.png",
    health: 300
  });

  const pokemon65 = await Pokemon.create({
    name: "Alakazam",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/65.png",
    health: 300
  });

  const pokemon66 = await Pokemon.create({
    name: "Machop",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/66.png",
    health: 300
  });

  const pokemon67 = await Pokemon.create({
    name: "Machoke",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/67.png",
    health: 300
  });

  const pokemon68 = await Pokemon.create({
    name: "Machamp",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/68.png",
    health: 300
  });

  const pokemon69 = await Pokemon.create({
    name: "Bellsprout",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/69.png",
    health: 300
  });

  const pokemon70 = await Pokemon.create({
    name: "Weepinbell",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/70.png",
    health: 300
  });

  const pokemon71 = await Pokemon.create({
    name: "Victreebel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/71.png",
    health: 300
  });

  const pokemon72 = await Pokemon.create({
    name: "Tentacool",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/72.png",
    health: 300
  });

  const pokemon73 = await Pokemon.create({
    name: "Tentacruel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/73.png",
    health: 300
  });

  const pokemon74 = await Pokemon.create({
    name: "Geodude",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/74.png",
    health: 300
  });

  const pokemon75 = await Pokemon.create({
    name: "Graveler",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/75.png",
    health: 300
  });

  const pokemon76 = await Pokemon.create({
    name: "Golem",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png",
    health: 300
  });

  const pokemon77 = await Pokemon.create({
    name: "Ponyta",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/77.png",
    health: 300
  });

  const pokemon78 = await Pokemon.create({
    name: "Rapidash",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/78.png",
    health: 300
  });

  const pokemon79 = await Pokemon.create({
    name: "Slowpoke",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/79.png",
    health: 300
  });

  const pokemon80 = await Pokemon.create({
    name: "Slowbro",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/80.png",
    health: 300
  });

  const pokemon81 = await Pokemon.create({
    name: "Magnemite",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/81.png",
    health: 300
  });

  const pokemon82 = await Pokemon.create({
    name: "Magneton",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/82.png",
    health: 300
  });

  const pokemon83 = await Pokemon.create({
    name: "Farfetch'd",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/83.png",
    health: 300
  });

  const pokemon84 = await Pokemon.create({
    name: "Doduo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/84.png",
    health: 300
  });

  const pokemon85 = await Pokemon.create({
    name: "Dodrio",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/85.png",
    health: 300
  });

  const pokemon86 = await Pokemon.create({
    name: "Seel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/86.png",
    health: 300
  });

  const pokemon87 = await Pokemon.create({
    name: "Dewgong",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/87.png",
    health: 300
  });

  const pokemon88 = await Pokemon.create({
    name: "Grimer",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/88.png",
    health: 300
  });

  const pokemon89 = await Pokemon.create({
    name: "Muk",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/89.png",
    health: 300
  });

  const pokemon90 = await Pokemon.create({
    name: "Shellder",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/90.png",
    health: 300
  });

  const pokemon91 = await Pokemon.create({
    name: "Cloyster",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/91.png",
    health: 300
  });

  const pokemon92 = await Pokemon.create({
    name: "Gastly",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/92.png",
    health: 300
  });

  const pokemon93 = await Pokemon.create({
    name: "Haunter",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/93.png",
    health: 300
  });

  const pokemon94 = await Pokemon.create({
    name: "Gengar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png",
    health: 300
  });

  const pokemon95 = await Pokemon.create({
    name: "Onix",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/95.png",
    health: 300
  });

  const pokemon96 = await Pokemon.create({
    name: "Drowzee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/96.png",
    health: 300
  });

  const pokemon97 = await Pokemon.create({
    name: "Hypno",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/97.png",
    health: 300
  });

  const pokemon98 = await Pokemon.create({
    name: "Krabby",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/98.png",
    health: 300
  });

  const pokemon99 = await Pokemon.create({
    name: "Kingler",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/99.png",
    health: 300
  });

  const pokemon100 = await Pokemon.create({
    name: "Voltorb",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/100.png",
    health: 300
  });

  const pokemon101 = await Pokemon.create({
    name: "Electrode",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/101.png",
    health: 300
  });

  const pokemon102 = await Pokemon.create({
    name: "Exeggcute",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/102.png",
    health: 300
  });

  const pokemon103 = await Pokemon.create({
    name: "Exeggutor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/103.png",
    health: 300
  });

  const pokemon104 = await Pokemon.create({
    name: "Cubone",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/104.png",
    health: 300
  });

  const pokemon105 = await Pokemon.create({
    name: "Marowak",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/105.png",
    health: 300
  });

  const pokemon106 = await Pokemon.create({
    name: "Hitmonlee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/106.png",
    health: 300
  });

  const pokemon107 = await Pokemon.create({
    name: "Hitmonchan",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/107.png",
    health: 300
  });

  const pokemon108 = await Pokemon.create({
    name: "Lickitung",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/108.png",
    health: 300
  });

  const pokemon109 = await Pokemon.create({
    name: "Koffing",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/109.png",
    health: 300
  });

  const pokemon110 = await Pokemon.create({
    name: "Weezing",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/110.png",
    health: 300
  });

  const pokemon111 = await Pokemon.create({
    name: "Rhyhorn",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/111.png",
    health: 300
  });

  const pokemon112 = await Pokemon.create({
    name: "Rhydon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/112.png",
    health: 300
  });

  const pokemon113 = await Pokemon.create({
    name: "Chansey",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/113.png",
    health: 300
  });

  const pokemon114 = await Pokemon.create({
    name: "Tangela",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/114.png",
    health: 300
  });

  const pokemon115 = await Pokemon.create({
    name: "Kangaskhan",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/115.png",
    health: 300
  });

  const pokemon116 = await Pokemon.create({
    name: "Horsea",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/116.png",
    health: 300
  });

  const pokemon117 = await Pokemon.create({
    name: "Seadra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/117.png",
    health: 300
  });

  const pokemon118 = await Pokemon.create({
    name: "Goldeen",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/118.png",
    health: 300
  });

  const pokemon119 = await Pokemon.create({
    name: "Seaking",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/119.png",
    health: 300
  });

  const pokemon120 = await Pokemon.create({
    name: "Staryu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/120.png",
    health: 300
  });

  const pokemon121 = await Pokemon.create({
    name: "Starmie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/121.png",
    health: 300
  });

  const pokemon122 = await Pokemon.create({
    name: "Mr.Mime",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/122.png",
    health: 300
  });

  const pokemon123 = await Pokemon.create({
    name: "Scyther",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/123.png",
    health: 300
  });

  const pokemon124 = await Pokemon.create({
    name: "Jynx",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/124.png",
    health: 300
  });

  const pokemon125 = await Pokemon.create({
    name: "Electabuzz",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/125.png",
    health: 300
  });

  const pokemon126 = await Pokemon.create({
    name: "Magmar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/126.png",
    health: 300
  });

  const pokemon127 = await Pokemon.create({
    name: "Pinsir",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/127.png",
    health: 300
  });

  const pokemon128 = await Pokemon.create({
    name: "Tauros",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/128.png",
    health: 300
  });

  const pokemon129 = await Pokemon.create({
    name: "Magikarp",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/129.png",
    health: 300
  });

  const pokemon130 = await Pokemon.create({
    name: "Gyarados",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/130.png",
    health: 300
  });

  const pokemon131 = await Pokemon.create({
    name: "Lapras",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/131.png",
    health: 300
  });

  const pokemon132 = await Pokemon.create({
    name: "Ditto",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
    health: 300
  });

  const pokemon133 = await Pokemon.create({
    name: "Eevee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/133.png",
    health: 300
  });

  const pokemon134 = await Pokemon.create({
    name: "Vaporeon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/134.png",
    health: 300
  });

  const pokemon135 = await Pokemon.create({
    name: "Jolteon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/135.png",
    health: 300
  });

  const pokemon136 = await Pokemon.create({
    name: "Flareon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/136.png",
    health: 300
  });

  const pokemon137 = await Pokemon.create({
    name: "Porygon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/137.png",
    health: 300
  });

  const pokemon138 = await Pokemon.create({
    name: "Omanyte",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/138.png",
    health: 300
  });

  const pokemon139 = await Pokemon.create({
    name: "Omastar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/139.png",
    health: 300
  });

  const pokemon140 = await Pokemon.create({
    name: "Kabuto",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/140.png",
    health: 300
  });

  const pokemon141 = await Pokemon.create({
    name: "Kabutops",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/141.png",
    health: 300
  });

  const pokemon142 = await Pokemon.create({
    name: "Aerodactyl",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/142.png",
    health: 300
  });

  const pokemon143 = await Pokemon.create({
    name: "Snorlax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png",
    health: 300
  });

  const pokemon144 = await Pokemon.create({
    name: "Articuno",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/144.png",
    health: 300
  });

  const pokemon145 = await Pokemon.create({
    name: "Zapdos",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/145.png",
    health: 300
  });

  const pokemon146 = await Pokemon.create({
    name: "Moltres",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/146.png",
    health: 300
  });

  const pokemon147 = await Pokemon.create({
    name: "Dratini",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/147.png",
    health: 300
  });

  const pokemon148 = await Pokemon.create({
    name: "Dragonair",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/148.png",
    health: 300
  });

  const pokemon149 = await Pokemon.create({
    name: "Dragonite",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/149.png",
    health: 300
  });

  const pokemon150 = await Pokemon.create({
    name: "Mewtwo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png",
    health: 300
  });

  const pokemon151 = await Pokemon.create({
    name: "Mew",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/151.png",
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
  // await admin.addPokemon(pokemon1);
  // await ted.addQuote(quote2);
  // await ted.addQuote(quote3);
  // await ted.addQuote(quote3);

  process.exit();
};

main();
