const { Sequelize, DataTypes } = require("sequelize");
const database = require("./../instances/Database");

const NewTraineeRegister = database.define(
  "NewTraineeRegister",
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,    // Number running
      primaryKey: true,
      allowNull: false,       // ยอมให้เป็น null ?
    },
    EmpNo: {
      type: Sequelize.STRING,
      allowNull: false,
    primaryKey: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        len: {
          args: [4],
          msg: "String length is not in this range",
        },
      },
    },
    DIVI_NAME: {
        type: Sequelize.STRING,
        defaultValue: "",
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Required",
          },
          len: {
            args: [4],
            msg: "String length is not in this range (4 digit)",
          },
        },
      }, 
      EMP_NAME: {
        type: Sequelize.STRING,
        allowNull: false,
      //   primaryKey: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Required",
          },
          len: {
            args: [4, 100],
            msg: "String length is not in this range",
          },
        },
      },

      CourseName: {
        type: Sequelize.STRING,
      allowNull: false,
      unique: false,
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

      rfidCard: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        len: {
          args: [4, 10],
          msg: "String length is not in this range (4 digit)",
        },
      },
    }, 

    Scantime: {
      type: Sequelize.STRING,
      allowNull: false,
    //   primaryKey: false,
      validate: {
      type: Sequelize.DATETIME,
      allowNull: false, 
       
      },
    },

  },
  {
    //ห้ามลบ
    //option
  }
);

(async () => {
  await NewTraineeRegister.sync({ force: false });
})();

module.exports = NewTraineeRegister;


