const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "pokemon_db",
  dialect: "postgres",
  define: {
    underscored: true
  }
});

class Pokemon extends Sequelize.Model {}
// class Quote extends Sequelize.Model {}

Pokemon.init(
  {
    name: Sequelize.STRING,
    image_url: Sequelize.TEXT
  },
  {
    sequelize,
    modelName: "pokemon"
  }
);

// Quote.init(
//   {
//     text: Sequelize.TEXT
//   },
//   {
//     sequelize,
//     modelName: "quote"
//   }
// );

// Pokemon.hasMany(Quote, { onDelete: "cascade" });
// Quote.belongsTo(Speaker);

module.exports = {
  Pokemon,
  // Quote,
  sequelize
};
