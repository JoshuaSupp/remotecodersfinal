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

//table pd_orders (getting data from pd_orders)
app.get("/api/get", (req,res) =>{
    const sqlGet = "SELECT * FROM pd_products";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})

//Add pd_products Data
app.post("/api/post", (req,res)=>{
    const {pd_product_id,product_name,description} = req.body;
    const sqlInsert = 
    "INSERT INTO pd_products (pd_product_id,product_name,description) VALUES (?,?,?)";
    db.query(sqlInsert, [pd_product_id,product_name,description], (error, result)=>{
        if(error){
            console.log(error);
        }
    });

});

//Delete kx_products Data  
app.delete("/api/remove/:pd_product_id", (req,res)=>{
    const {pd_product_id} = req.params;
    const sqlRemove =
     "DELETE FROM pd_products WHERE pd_product_id = ?";
    db.query(sqlRemove, pd_product_id, (error, result)=>{
        if(error){
            console.log(error);
        }
    })

})


app.get("/", (req,res)=>{
    // const sqlInsert = "INSERT INTO pd_products (pd_product_id,product_name,description) VALUES ('PD1','Arduino ','Quantity - 5 In Stock')";
    // db.query(sqlInsert,(error,result)=>{
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("Hello Express")
    // })
    
})


//loclhost 5002 connect query
// app.listen(5002, () => {
//     console.log("Server is running on port 5002 (productspdserver)");
// })

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});