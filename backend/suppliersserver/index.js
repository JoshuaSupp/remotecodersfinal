const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");   
const cors = require("cors");

 //mysql connection
const db = mysql.createPool({
    host: "localhost",
    user: "192.168.1.48",
    password: "root",
    database: "remotecodersdb"
});


module.exports = db;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//table suppliers (getting data from suppliers)
app.get("/api/get", (req,res) =>{
    const sqlGet = "SELECT * FROM suppliers";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})

//Add suppliers Data
app.post("/api/post", (req,res)=>{
    const {supplier_name,supplier_email,supplier_phoneno,orders_by_supplier} = req.body;
    const sqlInsert = 
    "INSERT INTO suppliers (supplier_name,supplier_email,supplier_phoneno,orders_by_supplier) VALUES (?,?,?,?)";
    db.query(sqlInsert, [supplier_name,supplier_email,supplier_phoneno,orders_by_supplier], (error, result)=>{
        if(error){
            console.log(error);
        }
    });

});

//Delete kx_products Data  
app.delete("/api/remove/:supplier_name", (req,res)=>{
    const {supplier_name} = req.params;
    const sqlRemove =
     "DELETE FROM suppliers WHERE supplier_name = ?";
    db.query(sqlRemove, supplier_name, (error, result)=>{
        if(error){
            console.log(error);
        }
    })

})


app.get("/", (req,res)=>{
    // const sqlInsert = "INSERT INTO suppliers (supplier_name,supplier_email,supplier_phoneno,orders_by_supplier) VALUES ('Magicbit','Magicbit123@gmail.com ','07734834','10 Magicbit')";
    // db.query(sqlInsert,(error,result)=>{
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("Hello Express")
    // })
    
})


//loclhost 5004 connect query
// app.listen(5004, () => {
//     console.log("Server is running on port 5004 (suppliers)");
// })

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});