'use strict'

class Task {
    constructor(name) {
    this.name = name;
    this.completed = true; 
    };
    complete() {
        this.completed = true;
        console.log('completing task' + this.name);
    };
    save() {
        console.log('saving task' + this.name);
    };
}

module.exports = Task;
