const { Sequelize, DataTypes } = require("sequelize");
const database = require("./../instances/Database");

const DivisionMaster = database.define(
  "DivisionMaster",
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    divisionCode: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        len: {
          args: [4, 6],
          msg: "String length is not in this range",
        },
      },
    },
    divisionName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        len: {
          args: [4, 60],
          msg: "String length is not in this range",
        },
      },
    },
    plantCode: {
      type: Sequelize.STRING,
      allowNull: false,
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
  await DivisionMaster.sync({ force: false });
})();

module.exports = DivisionMaster;
