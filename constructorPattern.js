
var Task = function(name) {
    this.name = name;
    this.completed = true;

    this.complete = function() {
        this.completed = true;
        console.log('completed task' + this.name);
    }
    
    this.save = function() {
        console.log('saving task' + this.name);
    }
}

var task1 = new Task('create a demo constructor');
 var task2 = new Task('create a demo module');

task1.complete();
//console.log(task1.completed);
task1.save();
task2.save();

