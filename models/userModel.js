const knex = require("../knex");

const dotenv = require("dotenv");
dotenv.config();

class Users {
  static async list() {
    try {
      // let query = knex("user");
      // let results = await query;
      let query = knex("admin");
      let results = await query;
      // let query1 = knex("user").whereNull('phone');
      // let results1 = await query1;
      // if (!results1) {
      //   console.log('no empty data found')
      // }
      // else {
      //   console.log(results1,"kjkj")
      // }

      console.log(results.length);

      if (!results) {
        return { success: false, message: "no user found", data: {} };
      }
      return {
        success: true,
        message: "user list successfully",
        data: results,
      };
    } catch (err) {
      console.log("model");
      return { success: false, message: err.message, data: {} };
    }
  }
  static async adduser(req) {
    console.log("model");
    let name1 = knex
      .select("name")
      .from("user")
      .where({ name: req.name.trim() });
    let results1 = await name1;
    console.log(results1.length);
    if (results1.length) {
      return { success: 0, message: "user already exist", data: [] };
    } else {
      try {
        let query = knex("user").insert({ name: req.name, phone: req.phone });
        let results = await query;
        console.log(results);
        if (!results) {
          return { success: false, message: "no user found", data: {} };
        }
        return {
          success: true,
          message: "user list successfully",
          data: [],
        };
      } catch (err) {
        console.log("model catch");
        return { success: false, message: err.message, data: {} };
      }
    }
  }
  static async Delete(req) {
    console.log("model delete", req.params);
    // let query = knex("user").where({ name: req.params.name }).del();
    // await query;
    let query = knex("admin").where({ id: req.params.id }).del();
    await query;
    console.log(req.params.id);
    return {
      success: true,
      message: "deleted successfully",
      data: [],
    };
  }
  static async Update(req) {
    console.log("model update", req);
    let query = knex("user").where({ name: req.name }).update({
      phone: req.phone,
    });
    await query;
    return {
      success: true,
      message: "updated successfully",
      data: [],
    };
  }
}
module.exports = Users;
