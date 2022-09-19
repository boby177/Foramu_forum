'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('discussions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_post: {
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      id_forum: {
        type: Sequelize.INTEGER
      },
      id_subforum: {
        type: Sequelize.INTEGER
      },
      title_post: {
        type: Sequelize.STRING
      },
      desc_post: {
        type: Sequelize.STRING
      },
      img_post: {
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
    await queryInterface.dropTable('discussions');
  }
};