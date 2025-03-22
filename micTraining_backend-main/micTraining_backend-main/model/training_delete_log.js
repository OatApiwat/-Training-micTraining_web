//Reference
const { Sequelize, DataTypes } = require("sequelize");

//SQL Connection
const database = require("../instances/Database");

//Create Table in SQL
//ชื่อตั่วแปร Const ต้องตรงกับข้างล่าง
const training_delete_log_table = database.define(
  // table name
  "training_delete_log",
  {
    timestamp: {
      type: Sequelize.DATE,
    },
    mfgdate: {
      type: Sequelize.DATEONLY,
    },
    time: {
      type: Sequelize.TIME,
    },
    update_by: {
      type: Sequelize.STRING,
    },
    operation: {
      type: Sequelize.STRING,
    },
    rev: {
      type: Sequelize.STRING,
    },
    mfgdate: {
      type: Sequelize.DATEONLY,
    },
    condition: {
      type: Sequelize.STRING,
    },
    cause_name: {
      type: Sequelize.STRING,
    },
    remark: {
      type: Sequelize.STRING,
    },
  },
  {}
);

//True : Delete then Create
//False : Only Check then Create

//ชื่อตั่วแปร await,module.exports  ต้องตรงกับข้างบน
(async () => {
  await training_delete_log_table.sync({ force: false });
})();

module.exports = training_delete_log_table;
