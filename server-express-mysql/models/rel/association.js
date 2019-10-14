module.export = function (models) {
    models.questions.belongsToMany(models.film,
        {
            through: models.question_answer,
            foreignKey: 'questions_questionsid'
        });
    models.answer.belongsToMany(models.film,
        {
            through: models.question_answer,
            foreignKey: 'film_idanswer'
        });
}