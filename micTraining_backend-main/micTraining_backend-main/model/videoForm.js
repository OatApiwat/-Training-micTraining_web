const { Sequelize, DataTypes } = require("sequelize");
const database = require("./../instances/Database");

const videoForm = database.define(
    "videoForm",
    {
      // attributes
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,    // Number running
        primaryKey: true,
        allowNull: false,       // ยอมให้เป็น null ?
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
    await videoForm.sync({ force:false }); 
  })();
  
  module.exports = videoForm;
  