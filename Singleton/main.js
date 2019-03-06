var taskHandler = require('./taskHandler');

var myrepo = require('./Repo');
//var myrepo = repo();

//repo.save('fromMain2');

myrepo.save('fromMain');
myrepo.save('fromMain');
myrepo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();

