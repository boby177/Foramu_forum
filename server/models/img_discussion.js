"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class img_discussion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  img_discussion.init(
    {
      id_img: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      img_link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "img_discussions",
      modelName: "Img_Discussion",
    }
  );
  return img_discussion;
};
