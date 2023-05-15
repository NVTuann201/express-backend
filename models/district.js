"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  District.init(
    {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true 
      },
      district_name: DataTypes.STRING,
      geom: DataTypes.GEOMETRY,
      state: DataTypes.STRING,
      state_code: DataTypes.INTEGER,
      district_code: DataTypes.INTEGER,
      c_code2011: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "District",
      timestamps: false,
    }
  );
  return District;
};
