const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");   
const cors = require("cors");

 //mysql connection
 const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "remotecodersdb"
  })
  


module.exports = db;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//table pd_orders (getting data from pd_orders)
app.get("/api/get", (req,res) =>{
    const sqlGet = "SELECT * FROM kx_products";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})

//Add kx_products Data
app.post("/api/post", (req,res)=>{
    const {kx_product_id,product_name,description} = req.body;
    const sqlInsert = 
    "INSERT INTO kx_products (kx_product_id,product_name,description) VALUES (?,?,?)";
    db.query(sqlInsert, [kx_product_id,product_name,description], (error, result)=>{
        if(error){
            console.log(error);
        }
    });

});

//Delete kx_products Data  
app.delete("/api/remove/:kx_product_id", (req,res)=>{
    const {kx_product_id} = req.params;
    const sqlRemove =
     "DELETE FROM kx_products WHERE kx_product_id = ?";
    db.query(sqlRemove, kx_product_id, (error, result)=>{
        if(error){
            console.log(error);
        }
    })

})


app.get("/", (req,res)=>{
    // const sqlInsert = "INSERT INTO kx_products (kx_product_id,product_name,description) VALUES ('KX1','Magicbit ','Quantity - 20 In Stock')";
    // db.query(sqlInsert,(error,result)=>{
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("Hello Express")
    // })
    
})


//loclhost 5003 connect query
// app.listen(5003, () => {
//     console.log("Server is running on port 5003 (productskxserver)");
// })

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});