const express = require("express");
const morgan = require("morgan");

const movieRouter = require("./routes/movieRouter");
const userRouter = require("./routes/userRouter");

const app = express();

module.exports = (config) => {
  const log = config.log();

  app.use(express.json());

  //Development logging
  app.use(morgan("dev"));
  if (app.get("env") === "development") {
    app.use((req, res, next) => {
      log.debug(`${req.method}: ${req.url}`);
      return next();
    });
  }

  //Routs
  // app.use("/api/v1/movies", movieRouter);
  app.use("/api/v1/user", userRouter);

  app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    // Log out the error to the console
    log.error(error);
    return res.json({
      error: {
        message: error.message,
      },
    });
  });
  return app;
};
