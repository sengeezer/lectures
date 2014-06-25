var fs = require('fs');
// var path = 'elvis.txt';

module.exports = function(path, text) {

    fs.writeFile(path, text, function (err, content) {
        if (err) {
            return console.error(err);
            console.log(content.toString());
        }
        fs.readFile(path, function (err, content) {
            if (err) return console.error(err);
            console.log(content.toString());
            fs.unlink(path, function (err) {
                if (err) throw err;
                console.log('successfully deleted');
            });
        });
    });

};