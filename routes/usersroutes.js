module.exports = () => {
  const express = require("express");
  const morgan = require("morgan");

  const usercontroller = require("../controllers/usercontroller");
  const usersroutes = require("express-promise-router")();
  // const passport = require('passport');

  const dotenv = require("dotenv");

  dotenv.config();
  const app = express();

  usersroutes.route("/list").get(usercontroller.list);
  usersroutes.route("/adduser").post(usercontroller.adduser);
  // usersroutes.route("/delete/:name").delete(usercontroller.Delete);
  usersroutes.route("/delete/:id").delete(usercontroller.Delete);
  usersroutes.route("/update/").put(usercontroller.Update);

  //   usersroutes
  //     .route("/names") // assignname
  //     .post(
  //       validateBody(schemas.NameSchema),
  //       helpers.isFCMExist(process.env.USERS, 1, 1),
  //       usersControllers.AssignName
  //     );

  return usersroutes;
};
