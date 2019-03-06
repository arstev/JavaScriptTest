var Task = function(name) {
    this.name = name;
    this.completed = true; 
}

Task.prototype.complete = function() {
    this.completed = true;
    console.log('completing task' + this.name);
}

Task.prototype.save = function() {
    console.log('saving task' + this.name);
}

var task1 = new Task('create a demo constructor obj 1');
var task2 = new Task('create a demo modul obj2 ');

task1.complete();
//console.log(task1.completed);
task1.save();
task2.save();
