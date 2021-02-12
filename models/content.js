'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Content = loader.database.define('contents', {
  contentId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  contentTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contentType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contentStartDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contentEndDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: false,
  });

module.exports = Content;