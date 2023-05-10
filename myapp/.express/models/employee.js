'use strict';

// Define a model for employee table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    designationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alternateEmail: {
      type: DataTypes.STRING
    },
    dateOfJion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    modified: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    tableName: 'employee'
  });
  // Adding a class level method.
  Model.associate = function (models) {
    this.roleId = this.belongsTo(models.role)
    this.roleId = this.belongsTo(models.designation)
  };
  return Model;
};