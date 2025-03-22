const { Sequelize, DataTypes } = require("sequelize");
const database = require("./../instances/Database");  //เชื่อม Database

const manpower_master = database.define(     // ชื่อตัวแปรตั้งเอง,ต้องตั้งให้เกี่ยวข้องกันตาราง
  "manpower_master",                        // ชื่อ table ที่สร้าง
  {
    // attributes เป็นคอลัมน์ในตาราง
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    empNumber_number: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        
      },
    },
    employee_title_name: {
        type: Sequelize.STRING,
        allowNull: false,
       
      },

      employee_first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
      },
    },

    employee_last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
      },
    },

    divisionCode: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        len: {
          args: [4, 4],
          msg: "String length is not in this range (4 digit)",
        },
      },
    },
    
  },
  {
    //option ต้องมีไว้ห้ามลบออก  
  }
);

(async () => {
  await manpower_master.sync({ force: false });
})();

// manpower_master ต้องตรงกัน
module.exports = manpower_master;    