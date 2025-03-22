const { Sequelize, DataTypes } = require("sequelize");
const database = require("./../instances/Database");

const user = database.define(
  "user",
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,    // Number running
      allowNull: false,       // ยอมให้เป็น null ?
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        len: {
          args: [4, 20],
          msg: "String length is not in this range",
        },
      },
    },
    empNumber: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        // is: {
        //   args: ["^[a-z]+$", "i"],
        //   msg: "Only letters allowed",
        // },
        len: {
          args: [4, 5],
          msg: "String length is not in this range",
        },
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // levelUser: {
    //   type: Sequelize.STRING,
    //   defaultValue: "guest",
    //   allowNull: false,
    // },
    // divisionCode: {
    //   type: Sequelize.STRING,
    //   defaultValue: "",
    //   allowNull: false,
    //   validate: {
    //     notEmpty: {
    //       args: true,
    //       msg: "Required",
    //     },
    //     len: {
    //       args: [4, 4],
    //       msg: "String length is not in this range (4 digit)",
    //     },
    //   },
    // },
    // email: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   unique: true,
    //   validate: {
    //     isEmail: {
    //       msg: "Must be a valid email address",
    //     },
    //   },
    // },
    // randomKey: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    
  },
  {
    //ห้ามลบ
    //option
  }
);

(async () => {
  await user.sync({ force: false });
})();

module.exports = user;


