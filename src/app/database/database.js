import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

class database {
  connect() {
    pool
      .connect()
      .then(() => console.log("Connected to PostgreSQL database"))
      .catch((error) =>
        console.error("Error connecting to PostgreSQL database:", error),
      );
  }
}
export { pool };
export default new database();
