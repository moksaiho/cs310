const mysql = require("mysql");
const DBconnection = () => {
  const dbConnection = mysql.createConnection({
    host: "mysql-nu-cs310.coyvpckopjmn.us-east-2.rds.amazonaws.com",
    port: 3306,
    user: "riverFinalApp-read-write",
    password: "def456!!",
    database: "riverFinalApp",
    charset: "utf8mb4",
    multipleStatements: true, // allow multiple queries in one call
  });

  dbConnection.on("error", (err) => {
    console.error("Database connection error:", err);
  });

  dbConnection.on("end", () => {
    console.log("Database connection closed.");
  });
  try {
    dbConnection.connect();
    console.log("db connected");
    return dbConnection;
  } catch (error) {
    console.log("db connection failed");
  }
};

module.exports = { DBconnection };

//   const mongoose = require("mongoose");

// const DBconnection = async (MongoURI) => {
//   try {
//     await mongoose.connect(MongoURI);
//
//   } catch (error) {
//     console.log("db connection failed");
//   }
// };
// module.exports = { DBconnection };
