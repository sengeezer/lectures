
## currency exercise

* exports is short for module.exports

* module finding priority rule when no path is specified in require statement (descending order) (fig. 3.5 in book)
    * core module?
    * in node_modules in current directory?
    * parent directory
        * if exists
        * has node_modules?
    * system-wide default directory?
* module file naming in module directory
    * index.js
    * package.json with main element
        * e.g. `{ "main": "./currency.js" }`
* module caching
    * two identical requires -> first caches module as object
    * second require can modify cached data 
    * -> another module can modify the first module's behavior
* asynchronous programming
    * callbacks for one-time events
    * event listeners for repeating events
* event emitters
    * use .on for repeated response, and .once for a one time response
    * events
        * keys that can have any value, e.g. data, channel
        * reserved: error
    * error handling
        * good idea to emit an error type event instead of simply throwing an error
        * see `execises/error_handling_emit.js` for example
        * in the absence of event listener, a stack trace will be output and the application is terminated.
            * unique behavior for error type events
            * other emissions simply vanish into null
    * listener soft limit of 10
        * use `channel.setMaxListeners(50);` to avoid warnings
    * `util.inherits` ~~ `Watcher.prototype = new events.EventEmitter();`
* async caveats
    * see async-[closure](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Closures).js
* async sequencing
    * serial
        * flow control
            * can use nimble (see serial_flow_nimble.js)
    * parallel
        