import * as newrelic from "newrelic";
import winston from "winston";

const addTrace = winston.format((info) => {
  const { traceId, spanId } = newrelic.getTraceMetadata();

  info.traceId = traceId;
  info.spanId = spanId;
  return info;
});

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    addTrace(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: {
    service: process.env.NEW_RELIC_APP_NAME || "express-app",
  },
  transports: [
    // Console transport for development
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),

    // File transport for production
    new winston.transports.File({
      filename: 'logs/error.log',
    }),
    new winston.transports.File({
      filename: 'logs/combine.log',
    }),
  ],
});

