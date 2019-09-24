"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      createdBy: DataTypes.STRING
    },
    {}
  );
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};
