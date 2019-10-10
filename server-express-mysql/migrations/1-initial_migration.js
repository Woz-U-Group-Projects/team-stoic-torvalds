'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "questions", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2019-10-10T20:38:16.107Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "questions",
        {
            "idquestions": {
                "type": Sequelize.INTEGER(11),
                "field": "idquestions",
                "primaryKey": true,
                "allowNull": false
            }
        },
        {}
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
