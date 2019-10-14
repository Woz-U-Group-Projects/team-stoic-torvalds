/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('create_answer', {
    idcreate_answer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'create_answer'
  });
};
