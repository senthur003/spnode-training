"use strict";
var Users = require("../models/userModel");
require("dotenv").config();

module.exports = {
  list: async (req, res, next) => {
    console.log("controller");
    let results = await Users.list();
    if (results.success) {
      res
        .status(200)
        .send({ status: 1, message: results.message, result: results.data });
    } else {
      res.status(400).send({ status: 0, message: results.message, result: {} });
    }
  },

  adduser: async (req, res, next) => {
    console.log("controller post");
    let results = await Users.adduser(req.body);
    if (results.success) {
      res
        .status(200)
        .send({ status: 1, message: results.message, result: results.data });
    } else {
      res.status(400).send({ status: 0, message: results.message, result: {} });
    }
  },
  Delete: async (req, res, next) => {
    console.log("controller delete");
    let results = await Users.Delete(req);
    if (results.success) {
      res.status(200).send({ status: 1, message: results.message, result: {} });
    } else {
      res.status(400).send({ status: 0, message: results.message, result: {} });
    }
  },
  Update: async (req, res, next) => {
    console.log("controller update", req.body);
    let results = await Users.Update(req.body);
    if (results.success) {
      res.status(200).send({ status: 1, message: results.message, result: {} });
    } else {
      res.status(400).send({ status: 0, message: results.message, result: {} });
    }
  },
};
