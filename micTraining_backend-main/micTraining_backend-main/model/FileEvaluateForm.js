const { Sequelize, DataTypes } = require("sequelize");
const database = require("../instances/Database");

const FileEvaluateForm = database.define(
    "FileEvaluateForm",
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
          
        },
      },

      fileType: {
        type: Sequelize.STRING,
        allowNull: true,
    },
  
      FileDetail: {
        type: Sequelize.BLOB,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Required",
          },
         
        },
      },
      
    },
    {
      
      //ห้ามลบ
      //option
    }
  );
  
  (async () => {
    await FileEvaluateForm.sync({ force:false }); 
  })();
  
  module.exports = FileEvaluateForm;
  