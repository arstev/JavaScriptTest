
//closure that variable in the method get save has access to the 
// every method get or save has acces to the db object but nothing else
// from outside

var repo = function () {

    var db = {};
    
    return {
        get: function (id) {
            console.log('Gettin taskg' + id);
            return {
                name: 'new task from db'
            };
        },
        save: function(task) {
            console.log('Saving ' + task.name + ' to the db');
        }

    };
};

module.exports = repo();



/// ..................................


// Global variables can be made local (private) with closures.
let a = 3
 function addTwo(x) {
  let ret = x + 2
   return ret
 }
 let b = addTwo(a)
 console.log(b)


// !!! something elese !!!!
function person(name) {

    var timesGreeted = 0;

    var personObject = {
        name: name,
         
        greetGuest: function(guestName) {
            var greeting = "Hi" + guestName;
            timesGreeted ++;
            console.log('greeting',greeting);
            console.log('timesGreeted',timesGreeted);
            return greeting;
        }

    }
}

var guests = ['Bill','Jane','Bob'];
var joe = person('Joe');
var sally = person('sally');

guests.forEach(joe.greetGuest.bind(joe));
guests.forEach(sally.greetGuest.bind(sally));

// console.log("2+3+4",sumTwo(2,3));