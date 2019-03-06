var Repo = require('./modulepattern');

var Task = function(data) {
    this.name = data.name;
    this.completed = true; 
}

Task.prototype.complete = function() {
    this.completed = true;
    console.log('completing task' + this.name);
}

Task.prototype.save = function() {
    console.log('saving task' + this.name);
    Repo.save(this);

}

module.exports = Task;
