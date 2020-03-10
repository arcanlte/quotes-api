const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "pokemon_db",
  dialect: "postgres",
  define: {
    underscored: true
  }
});

class Pokemon extends Sequelize.Model {}
class Move extends Sequelize.Model {}

Pokemon.init(
  {
    name: Sequelize.STRING,
    frontImage: Sequelize.STRING,
    backImage: Sequelize.STRING,
    health: Sequelize.INTEGER
  },
  {
    sequelize,
    modelName: "pokemon"
  }
);

Move.init(
  {
    name: Sequelize.TEXT,
    attack: Sequelize.INTEGER
  },
  {
    sequelize,
    modelName: "move"
  }
);

Pokemon.hasMany(Move, { onDelete: "cascade" });
Move.belongsTo(Pokemon);

module.exports = {
  Pokemon,
  Move,
  sequelize
};
