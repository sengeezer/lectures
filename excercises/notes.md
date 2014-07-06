
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
    