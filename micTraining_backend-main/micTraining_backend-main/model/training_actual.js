//Reference
const { Sequelize, DataTypes } = require("sequelize");

//SQL Connection
const database = require("../instances/Database");

//Create Table in SQL
//ชื่อตั่วแปร Const ต้องตรงกับข้างล่าง
const training_actual_table = database.define(
  // table name
  "training_actual",
  {
    rev: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
   
    mfgdate: {
      type: Sequelize.DATEONLY, 
      primaryKey: true,
    },   
    cause_name: {
      type: Sequelize.STRING,
    },
    
  },
  {

  }
);

//True : Delete then Create 
//False : Only Check then Create 

//ชื่อตั่วแปร await,module.exports  ต้องตรงกับข้างบน
(async () => {
  await training_actual_table.sync({ force: false });
})();

module.exports = training_actual_table;