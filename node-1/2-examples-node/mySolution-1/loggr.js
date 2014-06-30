module.exports = function(start,end) {
        //this.config = config;
        function subjectB(){
            if (start <= end) {
                console.log(start);
                start++;
                subjectB(start);
            }
        };
        subjectB();

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