import {testDatabaseConnection} from "./src/services/database";

(async () => {
  await testDatabaseConnection();
})();