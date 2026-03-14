import app from "./app";
import config from "./config/config";

const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`url: http://localhost:${PORT}/api`);
});
