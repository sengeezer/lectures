/**
 * Created by falbertin on 7/7/14.
 */

var events = require('events');
var util = require('util');
var fs = require('fs');

var watchDir = './watch';
var processedDir = './done';

function Watcher(watchDir, processedDir) {
    this.watchDir     = watchDir;
    this.processedDir = processedDir;
    this.watch = function(){
      var watcher = this;
      fs.readdir(this.watchDir, function(err, files){
          if(err){
              throw err;
          }
          for(var index in files){
              watcher.emit('process', files[index]);
          }
      })
    };
    this.start = function(){
        var watcher = this;
        fs.watchFile(watchDir, function(){
            watcher.watch();
        })
    };
}



util.inherits(Watcher, events.EventEmitter);
