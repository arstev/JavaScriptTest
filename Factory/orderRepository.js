
var order = function () {

    var db = {};

    var get = function (id) {
        console.log('Getting order ' + id);
        return {
            name: 'new order from db'
        }
    };

    var save = function (order) {
        console.log('Saving ' + order.name + ' to the db');
    };
    
    console.log('newing up order repo');
    return {
        get: get,
        save: save
    };
 
};

module.exports = order;