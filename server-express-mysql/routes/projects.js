var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  models.Project.findAll().then(projects => res.json(projects));
});

router.post("/", function(req, res, next) {
  let newProject = new models.Project();
  newProject.name = req.body.name;
  newProject.createdBy = req.body.createdBy;
  newProject.save().then(project => res.json(project));
});

router.delete("/:id", function(req, res, next) {
  let projectId = parseInt(req.params.id);
  models.Project.findByPk(projectId)
    .then(project => project.destroy())
    .then(() => res.send({ projectId }))
    .catch(err => res.status(400).send(err));
});

router.put("/:id", function(req, res, next) {
  models.Project.update(
    {
      name: req.body.name,
      createdBy: req.body.createdBy
    },
    {
      where: { id: parseInt(req.params.id) }
    }
  ).then(result => res.json(result));
});

module.exports = router;
