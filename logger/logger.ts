const SimpleNodeLogger = require('simple-node-logger'),
    opts = {
        logFilePath:'logfile.log',
        timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
    },
    log = SimpleNodeLogger.createSimpleFileLogger( opts );
    log.setLevel('warn');

export default log;