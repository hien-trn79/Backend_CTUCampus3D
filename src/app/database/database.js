import dotenv from "dotenv";
import config from "../config/config.js";
dotenv.config();

class database {
  connect() {
    config.db
      .connect()
      .then(() => console.log("Connected to PostgreSQL database"))
      .catch((error) =>
        console.error("Error connecting to PostgreSQL database:", error),
      );
  }
}
export default new database();
