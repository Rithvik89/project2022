const ServerInit = require('./HTTP/ServerInit')
const routeInit = require('./HTTP/RouteInit')
const SinkErrorFor = require('./HTTP/ErrorSinkInit');   


const app = ServerInit();
routeInit(app);
SinkErrorFor(app);