const Sequelize = require("sequelize");
const sequelize = new Sequelize("MIC_TrainingDB", "sa", "sa@admin", {
   // host: "10.121.1.123",     // IP database
   host: "192.168.0.128",     // IP database
   dialect: "mssql",         // connect with MSSQL
   dialectOptions: {
      //requestTimeout: 30000 ,
      options: {
         instanceName: "SQLEXPRESS",

      },
   },
});

(async () => {
   await sequelize.authenticate();
})();
module.exports = sequelize;
