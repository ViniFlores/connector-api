'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class search extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  search.init({
    description: DataTypes.ENUM('Javascript', 'Java', 'Python', 'React', 'Ruby', 'Go'),
    location: DataTypes.ENUM('Chicago', 'San Francisco', 'Phoenix', 'London', 'Beijing', 'Paris'),
    ip: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: true,
    createdAt: 'time',
    updatedAt: false,
    modelName: 'search',
  });
  return search;
};