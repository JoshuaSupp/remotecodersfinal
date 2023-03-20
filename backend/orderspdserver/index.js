const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");   
const cors = require("cors");

 //mysql connection
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "remotecodersdb"
});


module.exports = db;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//table pd_orders (getting data from pd_orders)
app.get("/api/get", (req,res) =>{
    const sqlGet = "SELECT * FROM pd_orders";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})

//Add pd_orders Data
app.post("/api/post", (req,res)=>{
    const {pd_order_number,order_name,description} = req.body;
    const sqlInsert = 
    "INSERT INTO pd_orders (pd_order_number,order_name,description) VALUES (?,?,?)";
    db.query(sqlInsert, [pd_order_number,order_name,description], (error, result)=>{
        if(error){
            console.log(error);
        }
    });

});

//Delete pd_orders Data from username
app.delete("/api/remove/:pd_order_number", (req,res)=>{
    const {pd_order_number} = req.params;
    const sqlRemove =
     "DELETE FROM pd_orders WHERE pd_order_number = ?";
    db.query(sqlRemove, pd_order_number, (error, result)=>{
        if(error){
            console.log(error);
        }
    })

})



app.get("/", (req,res)=>{
    // const sqlInsert = "INSERT INTO pd_orders (pd_order_number,order_name,description) VALUES ('PD0001','Chasis','Quantity - 10 & Price - Rs.2000')";
    // db.query(sqlInsert,(error,result)=>{
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("Hello Express")
    // })
    
})


//loclhost 5000 connect query
app.listen(5000, () => {
    console.log("Server is running on port 5000 (orderspdserver)");
})