'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('forums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_forum: {
        type: Sequelize.INTEGER
      },
      name_forum: {
        type: Sequelize.STRING
      },
      desc_forum: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('forums');
  }
};