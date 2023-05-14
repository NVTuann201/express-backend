"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Province.init(
    {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true 
      },
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      geom: DataTypes.GEOMETRY,
    },
    {
      sequelize,
      modelName: "Province",
      timestamps: false,
    }
  );
  return Province;
};
