const { Sequelize, DataTypes } = require("sequelize");
const database = require("./../instances/Database");

const CourseMaster = database.define(
  "CourseMaster",
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    CourseID: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        len: {
          args: [1, 2],
          msg: "String length is not in this range",
        },
      },
    },
    CourseName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        len: {
          args: [4, 255],
          msg: "String length is not in this range",
        },
      },
    },
    
    updateBy: {
      type: Sequelize.STRING,
      defaultValue: "Admin",
      allowNull: false,
    },

  },
  {
    //option
  }
);

(async () => {
  await CourseMaster.sync({ force: false });
})();

module.exports = CourseMaster;

