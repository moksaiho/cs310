const express = require("express");
var aws = require("aws-sdk");

const { DBconnection } = require("./database");
const app = express();

aws.config.update({
  secretAccessKey: "LAvBsv3n970qGGIDDL5TjfKpcoWyDy77iyDQYQeR",
  accessKeyId: "AKIAZIE3H4OV6BKBL4F4",
  region: "us-east-2",
});
var s3 = new aws.S3();

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
  // 2.18;
  //   res.send("Hello, Express!");
  // dbConnection.connect();
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

app.post("/upload", (req, res, next) => {
  console.log(req.body, "in upload");
  const { image } = req.body;
  const buffer = Buffer.from(image, "base64");

  const params = {
    Bucket: "photoapp-rivermu-cs310",
    Key: `River310App/${Date.now()}.jpg`, // 指定存储在 S3 上的文件名
    Body: buffer,
    ContentType: "image/jpeg",
    ACL: "public-read",
  };

  s3.upload(params, (err, data) => {
    if (err) {
      res.status(500).send({ msg: "Error uploading to S3", error: err });
    } else {
      res.status(200).send({ msg: "File uploaded successfully", data: data });
    }
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
