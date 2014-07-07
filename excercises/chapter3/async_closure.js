/**
 * Created by albertin on 07/07/14.
 */

function asyncFunction(callback) {
    setTimeout(callback, 200);
}
var color = 'blue';

// captures color as blue by making it local (would become green before sF executes otherwise)

(function(color) {
    asyncFunction(function() {
        console.log('The color is ' + color);
    })
})(color);

color = 'green';