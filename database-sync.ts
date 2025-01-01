import {testDatabaseConnection} from "@/services/database";

(async () => {
  await testDatabaseConnection();
})();