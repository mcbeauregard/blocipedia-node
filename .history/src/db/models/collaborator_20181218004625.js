'use strict';
module.exports = (sequelize, DataTypes) => {
  var Collaborator = sequelize.define('Collaborator', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  Collaborator.associate = function(models) {
    // associations can be defined here
  };
  return Collaborator;
};