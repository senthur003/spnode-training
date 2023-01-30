const crypto = require("crypto");
exports.seed = async function (knex, Promise) {
  let tableName = "admin";
  let rows = [
    {
      id: crypto.randomUUID(),
      email: "superadmin@mail.com",
      password:
        "9075fd4cc4a77c71603af6c2e777c658d4c20e073f0b7709866b3410fe91751dd196c66908ffcd86b5be21501693925d",
      name: "superadmin",
      gender: 1,
    },
    {
      id: crypto.randomUUID(),
      email: "superadmin@mail.com",
      password:
        "9075fd4cc4a77c71603af6c2e777c658d4c20e073f0b7709866b3410fe91751dd196c66908ffcd86b5be21501693925d",
      name: "superadmin",
      gender: 1,
    },
    {
      id: crypto.randomUUID(),
      email: "xyz@mail.com",
      password: "Qwer@123",
      name: "xyzadmin",
      gender: 1,
    },
    {
      id: crypto.randomUUID(),
      email: "admin@mail.com",
      password: "123456789",
      name: "admin",
      gender: 1,
    },
  ];
  for (index = 0; index < rows.length; index++) {
    let query = knex(tableName)
      .where({ email: rows[index].email.trim() })
      .andWhere("password", rows[index].password.trim());
    let results = await query;
    if (results.length) {
      console.log("value already exist");
    } else {
      await knex.insert(rows[index]).into(tableName);
    }
  }
};
