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
class User extends Sequelize.Model {}

User.init(
  {
    username: Sequelize.STRING,
    password_digest: Sequelize.STRING,
    trainername: Sequelize.TEXT
  },
  {
    sequelize,
    modelName: "user"
  }
);

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
    attack: Sequelize.INTEGER,
    isLearned: Sequelize.BOOLEAN
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
