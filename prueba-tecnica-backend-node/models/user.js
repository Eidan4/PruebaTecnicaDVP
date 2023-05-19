'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
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
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};
