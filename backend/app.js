const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;
const dbConnection = mysql.createConnection({
  host: "mysql-nu-cs310.coyvpckopjmn.us-east-2.rds.amazonaws.com",
  port: 3306,
  user: "riverFinalApp-read-write",
  password: "def456!!",
  database: "riverFinalApp",
  multipleStatements: true, // allow multiple queries in one call
});

dbConnection.connect();

dbConnection.on("error", (err) => {
  console.error("Database connection error:", err);
});

dbConnection.on("end", () => {
  console.log("Database connection closed.");
});
// Define a route
app.get("/users", async (req, res) => {
  //   res.send("Hello, Express!");
  let sql = `select * from users`;

  dbConnection.query(sql, [], (err, results, _) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ status: "fail", msg: err });
    } else {
      console.log("result是", results);
      return res.status(200).send({ status: "success", data: results });
    }
  });
});
app.get("/messages", async (req, res) => {
  //   res.send("Hello, Express!");
  let sql = `select * from messages order by timestamp DESC`;

  dbConnection.query(sql, [], (err, results, _) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ status: "fail", msg: err });
    } else {
      console.log("result是", results);
      return res.status(200).send({ status: "success", data: results });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
