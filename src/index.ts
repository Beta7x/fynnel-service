import "dotenv/config";
import "newrelic";
import { app } from "./infrastructure/http/express.app";
import { logger } from "./infrastructure/logger/logger";


const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  console.log(`Server running on port ${PORT}`);
});

