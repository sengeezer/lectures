
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
        * (parallel) flow control
        * once again tasks in an array but in random order
        * handler function keeps track of overall progress and then passes off to a next step
        * multiple tasks can be performed simultaneously
    * using npm modules for either
        * e.g. nimble, step, sec
* Node web applications
    * HTTP interface
        * incoming HTTP requests
            * for every request, callback function is invoked with new request and response objects (usually abbreviated as req and res)
            * before the callback is triggered, Node will analyze the request up to the HTTP headers and include them in the req object
            * won't start parsing the body until after
                * enables handling body during parsing
            * response has to be ended with `res.end()`
        * response usually consists of `res.write()` and `res.end()`, but the latter can be used as a shortcut for the combination of both
        * response defaults:
            * Status 200
            * Default response headers
        * should also send others such as the content type
            `var body = 'Hello World';`
            `res.setHeader('Content-Length', body.length);`
            `res.setHeader('Content-Type', 'text/plain');`
            `res.end(body);`
        * headers can be added or removed only up to the first .write or .end (when they're flushed)
    * RESTful web service
        * implementing CRUD (Create, Read, Update, Delete) by repurposing HTTP verbs
        * while request data is being parsed by Node, data is available in chunks provided by data events
            * events provide (binary) buffer objects by default
            * can be overridden by forcing them to be strings with `req.setEncoding('utf8');`
                * to get entire string, concatenate chunks until end event occurs and deposit it in the items array
            * see todo.js exercise for example code
        * response sped up / efficiency increased through use of Content-length header
            * faster because it bypasses Node's chunking.
            * should be represented by byte length, not character length to, for example, deal with multibyte characters
        * removing resources
            * can use parse function of `req.url` to form command
            
        