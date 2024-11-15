const catchAsync = require("../util/catchAsync");
const UserServices = require("../services/UserServices");
const config = require("../config")[process.env.NODE_ENV || "development"];

const userServices = new UserServices(config.postgres.client);

exports.createUser = catchAsync(async (req, res, next) => {
  try {
    const user = await userServices.createUser(req.body);
    res.send(user);
  } catch (err) {
    return next(err);
  }
});

exports.getUser = catchAsync(async (req, res, next) => {
  try {
    const user = await userServices.getUser(req.body.id);
    res.status(200).json({
      status: "success",
      data: {
        data: user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: err,
    });
  }
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  try {
    const users = await userServices.getAllUsers();
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: err,
    });
  }
});

exports.getAllUsersAttributes = catchAsync(async (req, res, next) => {
  try {
    const users = await userServices.getAllUsersAttributes(req.body.id);
    res.status(200).json({
      status: "success",
      data: {
        data: users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: err,
    });
  }
});

exports.updateUser = catchAsync(async (req, res, next) => {
  try {
    const msg = await userServices.updateUser(req.body);
    res.status(200).json({
      status: "success",
      msg: msg,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: err,
    });
  }
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  try {
    const msg = await userServices.deleteUser(req.body.id);
    res.status(200).json({
      status: "success",
      msg: msg,
    });
  } catch (err) {
    res.status(404).json({
      status: "success",
      data: msg,
    });
  }
});
