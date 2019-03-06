// old way 
var Task = require('./task');

//using ecma script 2015
//var Task = require('./classES2015');

var Repo = require('./modulepattern');

var task1 = new Task(Repo.get(1));

var task1 = new Task({name: 'create a demo constructor obj 1'});
var task2 = new Task({name:'create a demo modul obj2 '});
var task3 = new Task({name:'create a demo signlton obj 3'});
var task4 = new Task({name:'create a demo prototype obj4 '});

// added factory pattern
task1.complete();
//console.log(task1.completed);
task1.save();
task2.save();

