var add = (function add() { //closures!
    var counter = 0;
    return function() {
        return counter += 1;
    }
})();

var counter2 = 0;

function add2() {
    counter2 += 1;
    return counter2;
}

function someOtherFunction() {
    counter += 10;
}