function functionName(parameter1, parameter2) {
    //do something
    return parameter1 * parameter2;
}
alert(functionName(2, 3));

//Function without "return"
function functionWithOutReturn(p1, p2) {
    alert("This is a function without return statement.");
}
functionWithOutReturn(2, 5, 7, 8);

//Parameter Defaults
function functionName2(x, y) {
    if (y === undefined) {
        y = 0;
    }
}
functionName2(3);

//The Arguments Object
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    var i, max = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}