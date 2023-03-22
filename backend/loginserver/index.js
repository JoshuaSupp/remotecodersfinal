const express = require("express")
const mysql = require("mysql2")
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "192.168.1.48",
  password: "root",
  database: "remotecodersdb"
})



//for register
// app.post("/register", (req,res) => {

//   const username = req.body.username
//   const password = req.body.password

//   db.query(
//     "INSERT INTO user_information (username,password) VALUES (?,?)",
//     [username,password],
//     (err, result) => {
//       console.log(err);
//     }
//    ); 
// });


//for login
app.post("/login", (req,res) => {

  const username = req.body.username
  const password = req.body.password

  db.query(
    "SELECT * FROM admin WHERE username = ? AND password = ?",
    [username,password],
    (err, result) => {

      if (err){
        res.send({err: err});
      } 
        if (result.length>0){
          res.send(result)
        } 
        else{
          res.send({message: "Wrong Username/Password"})
        }
    }
   ); 
});


// app.listen(3002,() =>{
//   console.log("3002")
// });

const PORT = process.env.PORT || 3003

app.listen(PORT, () => console.log('loginserver '+ PORT));
