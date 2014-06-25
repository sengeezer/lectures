module.exports = function(config) {
    return {
     get: function (config)
    {
        (function solution1b(config){
        if (config.start <= config.end) {
            console.log(config.start);
            config.start++;
            solution1b(config.start);
        }})();
    }


}
};




/*
var number = 0;

(function solution1b(number) {
    if (number <= 50) {
        console.log(number);
        number++;
        solution1b(number);
    }
})(number);

    */