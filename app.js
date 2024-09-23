const express = require("express");
const morgan = require("morgan");

const movieRouter = require("./routes/movieRouter");
const userRouter = require("./routes/userRouter");

const app = express();

//Development logging
app.use(morgan());

//Routs

app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/user", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
