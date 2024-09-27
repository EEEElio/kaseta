const dotenv = require("dotenv");
const http = require("http");

//connect to database

const config = require("./config")[process.env.NODE_ENV || "development"];
const connectToPostgres = require("./util/connectToPostgres");

config.postgres.client = connectToPostgres();

const app = require("./app")(config);

dotenv.config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
  console.log("UNHANDELED EXEPTION! Shutting down...");
  console.log(err);
  process.exit(1);
});

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`App running on port ${port}....`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDELED REJECTION! Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
