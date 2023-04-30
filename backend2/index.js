const client = require("./connection.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
//const io = require("socket.io");

//import dependency socket io
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(bodyParser.json());
app.use(cors());

server.listen(3300, () => {
  console.log("Sever is now listening at port 3300");
});

//get all user===============================================================================
app.get("/users", (req, res) => {
  client.query(`Select * from users`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

//get user by ID===============================================================================
app.get("/users/:id", (req, res) => {
  client.query(
    `Select * from users where id=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

//add new user==================================================================================
app.post("/users", (req, res) => {
  const user = req.body;
  let insertQuery = `insert into users(id, firstname, lastname, location) 
                       values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//update user ======================================================================================
app.put("/users/:id", (req, res) => {
  let user = req.body;
  let updateQuery = `update users
                       set firstname = '${user.firstname}',
                       lastname = '${user.lastname}',
                       location = '${user.location}'
                       where id = ${user.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//delete=============================================================================================
app.delete("/users/:id", (req, res) => {
  let insertQuery = `delete from users where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//get  daya from ==================================================================================

// app.get("/daya", async (req, res) => {
//   client.query(`Select * from monitoring_sdb`, (err, result) => {
//     if (!err) {
//       // Kirim data ke client melalui Socket.io
//       io.emit("data", result.rows);
//       //kirim data ke client dengan http response
//       res.send(result.rows);
//     }
//   });
//   client.end;
// });

app.get("/daya", async (req, res) => {
  client.query(`Select * from monitoring_sdb`, (err, result) => {
    if (!err) {
      // Kirim data ke client melalui Socket.io
      io.emit("data", result.rows);
      //kirim data ke client dengan http response
      res.send(result.rows);
    }
  });
});

// Endpoint untuk menerima koneksi Socket.io dari client
io.on("connection", (socket) => {
  //console.log("A user connected");

  // Kirim data ke client setiap kali terjadi koneksi
  client.query(`Select * from monitoring_sdb`, (err, result) => {
    if (!err) {
      socket.emit("data", result.rows);
    }
  });

  // Tangani pemutusan koneksi
  socket.on("disconnect", () => {
    //console.log("A user disconnected");
  });
});

//get daya by id========================================================================================
app.get("/daya/:id", (req, res) => {
  client.query(
    `Select * from monitoring_sdb where id=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

//update daya by id ====================================================================================
app.put("/users/:id", (req, res) => {
  let monitoring = req.body;
  let updateQuery = `update monitoring_sdb
                         set sdb = '${monitoring.sdb}',
                         daya = '${monitoring.lastname}'
                         where id = ${monitoring.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//add new sdb============================================================================================
app.post("/daya", (req, res) => {
  const monitoring = req.body;
  let insertQuery = `insert into monitoring_sdb(id, sdb, daya) 
                         values(${monitoring.id}, '${monitoring.sdb}', '${monitoring.daya}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//delete Daya By ID========================================================================================
app.delete("/daya/:id", (req, res) => {
  let insertQuery = `delete from monitoring_sdb where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//select  all data from monitoring perjam=================================================================
app.get("/perjam", (req, res) => {
  client.query(`Select * from sdb1_perjam`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

//select data perjam by id ===============================================================================
app.get("/perjam/:id", (req, res) => {
  client.query(
    `Select * from sdb1_perjam where id=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

//post data perjam========================================================================================
app.post("/perjam", (req, res) => {
  const sdb = req.body;
  let insertQuery = `insert into sdb1_perjam(daya) 
                       values(${sdb.daya})`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

client.connect();
