/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question_answer', {
    idquestion_answer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'question_answer'
  });
};
