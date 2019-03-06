var task = {
title: 'my task',
description: 'my description'
};

// alternative way
//task.toString = function(){
//    return this.title;
//};

Object.defineProperty(task, 'toString', {
  value: function() {
       return this.title + ' ' + this.description;
  },
  writable: false,
  configurable: true,
  enumerable: false
});

// modify after if before configurable: false, 
Object.defineProperty(task, 'toString', {    
    enumerable: true
  });
  

task.toString = 'hi';

//console.log(task);
//console.log(task.toString());

// inheritance 
var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function() {
         return this.title + ' is urgent task';
    },
    writable: false,
    configurable: true,
    enumerable: false
  });

  console.log(urgentTask.toString());