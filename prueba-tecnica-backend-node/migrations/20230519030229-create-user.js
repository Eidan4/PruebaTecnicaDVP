'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING
      },
      iduser: {
        type: Sequelize.INTEGER
      },
      node_id: {
        type: Sequelize.STRING
      },
      avatar_url: {
        type: Sequelize.TEXT
      },
      gravatar_id: {
        type: Sequelize.TEXT
      },
      url: {
        type: Sequelize.TEXT
      },
      html_url: {
        type: Sequelize.TEXT
      },
      followers_url: {
        type: Sequelize.TEXT
      },
      following_url: {
        type: Sequelize.TEXT
      },
      gists_url: {
        type: Sequelize.TEXT
      },
      starred_url: {
        type: Sequelize.TEXT
      },
      subscriptions_url: {
        type: Sequelize.TEXT
      },
      organizations_url: {
        type: Sequelize.TEXT
      },
      repos_url: {
        type: Sequelize.TEXT
      },
      events_url: {
        type: Sequelize.TEXT
      },
      received_events_url: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      },
      site_admin: {
        type: Sequelize.BOOLEAN
      },
      score: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('users');
  }
};