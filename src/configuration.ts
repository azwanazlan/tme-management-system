
interface AppConfig {
    DB_HOST: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;
    PORT: number;
}

export const ENV: AppConfig = {
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_NAME: process.env.POSTGRES_DB || "tme-management-system",
  DB_USER: process.env.DB_USER || "local",
  DB_PASSWORD: process.env.DB_PASSWORD || "local",
  PORT: parseInt(process.env.PORT || "3000", 10),
};
