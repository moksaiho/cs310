const express = require("express");
const { DBconnection } = require("./database");
const app = express();
app.use(express.json());
const port = 3000;
console.log(DBconnection);
const dbConnection = DBconnection();
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
//
app.post("/messages", async (req, res) => {
  2.18;
  //   res.send("Hello, Express!");
  dbConnection.connect();
  console.log(req.body);
  const { userid, content } = req.body;
  let time = new Date().toISOString().replace("T", " ").substring(0, 19);
  let sql = `
  INSERT INTO messages (userid, timestamp, content) VALUES (?, ?, ?);
  `;

  dbConnection.query(sql, [userid, time, content], (err, results, _) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ status: "fail", msg: err });
    } else {
      console.log("result是", results);
      return res
        .status(200)
        .send({ status: "success", data: {}, msg: "insert success" });
    }
  });
  // dbConnection.close();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
