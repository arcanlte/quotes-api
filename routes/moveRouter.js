const { Router } = require("express");
//Merge Params gives us accesds to nested Parameters
//Preserve the req.params values from the parent router
//If the parent adn the child have conflicting param names.
//the child's value take the precedence
const moveRouter = Router({ mergeParams: true });
const { Move, Pokemon } = require("../models.js");

//index
moveRouter.get("/", async (req, res) => {
  const pokemonId = req.params.pokemonId;
  const moves = await Move.findAll({
    where: {
      pokemonId
    }
  });
  res.json({ moves });
});

//show  --> will be http://localhost:3000/speakers/:speakerId/quotes/:id
// quoteRouter.get("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const quote = await Quote.findByPk(id);
//     res.json({ quote });
//   } catch (e) {
//     console.error(e.message);
//     res.json(e.message);
//   }
// });

//create --> route will be http://localhost:3000/speakers/:speakerId/quotes
// quoteRouter.post("/", async (req, res) => {
//   const speakerId = req.params.speakerId;
//   const data = req.body;
//   const speaker = await Speaker.findByPk(speakerId);
//   const quote = await Quote.create(data);
//   await quote.setSpeaker(speaker);
//   res.json({ quote });
// });

//update
// quoteRouter.put("/:id", async (req, res) => {
//   const id = req.params.id;
//   const data = req.body;
//   const quote = await Quote.findByPk(id);
//   await quote.update(data);
//   res.json({ quote });
// });

//delete
// quoteRouter.delete("/:id", async (req, res) => {
//   const id = req.params.id;
//   const quote = await Quote.findByPk(id);
//   await quote.destroy();
//   res.json({ quote });
// });

module.exports = moveRouter;
