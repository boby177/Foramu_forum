'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('img_forums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_img: {
        type: Sequelize.INTEGER
      },
      img_link: {
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
    await queryInterface.dropTable('img_forums');
  }
};