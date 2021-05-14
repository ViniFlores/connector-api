'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('searches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.ENUM('Javascript', 'Java', 'Python', 'React', 'Ruby', 'Go'),
        allowNull: false
      },
      location: {
        type: Sequelize.ENUM('Chicago', 'San Francisco', 'Phoenix', 'London', 'Beijing', 'Paris'),
        allowNull: false
      },
      ip: {
        allowNull: false,
        type: Sequelize.STRING
      },
      time: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('searches');
  }
};