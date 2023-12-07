const express = require("express");
const { DBconnection } = require("./database");
const app = express();
const server = require('http').createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
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

io.on("connection", socket => {
  /* 
  Message Listener
  Description: whenever received messages, we enter this callback. The function will 
  (1) update the database
  (2) broadcast the message to other client sockets
  
  Input:  msg
  msg is a json file 
  */
  socket.on('message', msg => {
    const {userid, content, image} = msg
    let time = new Date().toISOString().replace("T", " ").substring(0, 19);
    let sql = `
    INSERT INTO messages (userid, timestamp, content, image) VALUES (?, ?, ?, ?);
    `;

    dbConnection.connect();

    // Insert the message in database
    dbConnection.query(sql, [userid, time, content], (err, results, _) => {
      if (err) {
        console.log(err);
        socket.emit("error", "sql insertion error");
      } else { // If insert sucessfully, broadcast the message to every user
        console.log("result是", results);
        io.emit('message', msg); // broadcast it to user
      }
    })

    dbConnection.close();
  })
})

// Start the server
server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});