module.exports = (sequelize, type) => {
  return sequelize.define("posts", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: type.STRING,
    content: type.STRING,
    image: type.STRING,
    category: type.STRING,
    date: type.DATEONLY,
  });
};
