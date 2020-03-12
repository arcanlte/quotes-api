const { Router } = require("express");
const pokemonRouter = Router();
const { Pokemon } = require("../models.js");
const { restrict } = require("../services/auth");

//index
pokemonRouter.get("/", async (req, res) => {
  const pokemons = await Pokemon.findAll();
  res.json({ pokemons });
});

//show
pokemonRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const pokemon = await Pokemon.findByPk(id);
  res.json({ pokemon });
});

//create
// pokemonRouter.post("/", async (req, res) => {
//   const data = req.body;
//   const pokemon = await Pokemon.create(data);
//   res.json({ pokemon });
// });

//update
pokemonRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const pokemon = await Pokemon.findByPk(id);
  await pokemon.update(data);
  res.json({ pokemon });
});

//delete
pokemonRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const pokemon = await Pokemon.findByPk(id);
  await pokemon.destroy();
  res.json({ pokemon });
});

pokemonRouter.get("/trainer/:trainerid", async (req, res) => {
  const userId = req.params.trainerid;
  const pokemon = await Pokemon.findAll({
    where: { userId }
  });
  res.json({ pokemon });
});

pokemonRouter.route("/").post(restrict, async (req, res) => {
  try {
    const pokemon = await Pokemon.create({
      ...req.body,
      userId: res.locals.user.id
    });
    res.json(pokemon);
  } catch (e) {
    res.json({ error: e.message });
  }
});

module.exports = pokemonRouter;
