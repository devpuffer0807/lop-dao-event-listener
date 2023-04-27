const { createLogger, format, transports } = require("winston");

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  defaultMeta: {
    service: "lop-event-listener",
  },
  transports: [new transports.Console({}), new transports.File({ filename: "logs.log" })],
  exceptionHandlers: [new transports.File({ filename: "exceptions.log" })],
  rejectionHandlers: [new transports.File({ filename: "rejections.log" })],
});

module.exports = logger;
