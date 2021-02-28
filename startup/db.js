const Sequelize = require("sequelize");
const postsModel = require("../models/posts");

const sequelize = new Sequelize("alkemy-challenge", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  dialectOptions: {
    multipleStatements: true,
  },
});

const Post = postsModel(sequelize, Sequelize);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("all set");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = {
  Post,
  sequelize,
};
