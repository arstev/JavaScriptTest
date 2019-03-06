// var repo = function () {

//     var db = {};

//     return {
//         get: function (id) {
//             console.log('Gettin taskg' + id);
//             return {
//                 name: 'new task from db'
//             };
//         },
//         save: function(task) {
//             console.log('Saving ' + task.name + ' to the db');
//         }

//     };
// };

// module.exports = repo();


//-----reveling module pattern--------------------------------------

var repo = function () {

    var db = {};

    var get = function (id) {
        console.log('Gettin taskg' + id);
        return {
            name: 'new task from db'
        };
    }
    var save = function(task) {
        console.log('Saving ' + task.name + ' to the db');
    }
    //list oft the mothiods
    return {
        get: get,
        save: save
    }
}

module.exports = repo();