"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class subforum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  subforum.init(
    {
      id_subforum: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      // id_forum: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
      // },
      name_subforum: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desc_subforum: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "subforums",
      modelName: "Subforum",
    }
  );
  return subforum;
};
