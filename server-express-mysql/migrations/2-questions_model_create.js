'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "create" to table "questions"
 *
 **/

var info = {
    "revision": 2,
    "name": "questions_model_create",
    "created": "2019-10-10T21:24:41.040Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "questions",
        "create",
        {
            "type": Sequelize.STRING,
            "field": "create",
            "allowNull": false
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
