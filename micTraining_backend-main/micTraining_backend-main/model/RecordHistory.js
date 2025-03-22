const { Sequelize, DataTypes } = require("sequelize");
const database = require("./../instances/Database");

const RecordHistory = database.define(
  "Recordhistory",
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,    // Number running
      primaryKey: true,
      allowNull: false,       // ยอมให้เป็น null ?
    },
    FYYear: {
      type: Sequelize.STRING,
      allowNull: false,
    //   primaryKey: false,
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

    Quater: {
        type: Sequelize.STRING,
        allowNull: false,
      //   primaryKey: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Required",
          },
          len: {
            args: [100],
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
    DIVISION: {
      type: Sequelize.STRING,
      allowNull: false,
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
    DIVI_NAME: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        len: {
          args: [4,100],
          msg: "String length is not in this range",
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
    EmpNo: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        len: {
          args: [5],
          msg: "String length is not in this range",
        },
      },
    },

    PLACE_NAME: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    PROCESS: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    SECTION: {
      type: Sequelize.STRING,
      allowNull: false,
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
            args: [10],
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

      TrainingDate: {
        type: Sequelize.DATE,
        allowNull: false,
      //   primaryKey: false,
        validate: {
        type: Sequelize.DATEONLY,
        allowNull: false, 
        },
      },

      FinishDate: {
        type: Sequelize.DATE,
        allowNull: false,
      //   primaryKey: false,
        validate: {
        type: Sequelize.DATEONLY,
        allowNull: false, 
        },
      },
      // createdAt: false,
      // updatedAt: false,
  },
  {
    
    //ห้ามลบ
    //option
  }
);

(async () => {
  await RecordHistory.sync({ force: false });
})();

module.exports = RecordHistory;
