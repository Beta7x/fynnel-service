'use strict'

exports.config = {
  app_name: [process.env.NEW_RELIC_APP_NAME],
  license_key: process.env.NEW_RELIC_LICENSE_KEY,
  logging: {
    level: 'info',
  },

  // Distributed tracing
  distributed_tracing: {
    enabled: true,
  },

  // Application logging
  application_logging: {
    enabled: true,
    forwarding: {
      enabled: true,
      max_sample_stored: 10000,
    },
    metrics: {
      enabled: true,
    },
    local_decorating: {
      enabled: true,
    }
  },

  // Custom instrumentation
  custom_instrumentation_editor: {
    enabled: true,
  },

  allow_all_headers: true,
  attributes: {
    include: [
      "request.headers.cookie",
      "request.headers.authorization",
    ],
  },
};
