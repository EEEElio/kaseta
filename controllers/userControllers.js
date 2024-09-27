const catchAsync = require("../util/carchAsync");
const UserServices = require("../services/UserServices");
const config = require("../config")[process.env.NODE_ENV || "development"];

console.log(config);
const userServices = new UserServices(config.postgres.client);

exports.getUser = catchAsync(async (req, res, next) => {
  try {
    const user = await userServices.getUsers();
    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: err,
    });
  }
});
