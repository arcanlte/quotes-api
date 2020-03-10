const express = require("express");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

//import route from speakerRouter
const pokemonRouter = require("./routes/pokemonRouter.js");
//import route from quoteRouter
const quoteRouter = require("./routes/quoteRouter.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/pokemons", pokemonRouter);
app.use("/speakers/:speakerId/quotes", quoteRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
