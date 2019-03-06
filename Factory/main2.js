var Task = require('./task');
// cashing 
var repoFactory = require('./repoFactorywCache');

//var repoFactory = require('./repoFactory');

var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));


var user = repoFactory.getRepo('user').get(1);
var project = repoFactory.getRepo('project').get(1);
var order = repoFactory.getRepo('order').get(6);

task1.user = user;
task1.project = project;
task1.order = order;

//console.log(task1);
task1.save();
