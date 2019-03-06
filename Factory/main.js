var Task = require('./task');
var repoFactory = require('./repoFactory');

////var taskRepo = require('./taskRepository');
////var userRepo = require('./userRepository');
///var projectRepo =   require('./projectRepository');

var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('order').get(1));

var user = repoFactory.getRepo('task').get(1);
var project = repoFactory.getRepo('project').get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();
