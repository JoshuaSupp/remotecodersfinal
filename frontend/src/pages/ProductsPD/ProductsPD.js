import React ,{useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"

const ProductsPD = () => {
  
  const[data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5002/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (pd_product_id) => {
    if(window.confirm("Are you sure that you want to delete PD Product ?")){
      axios.delete(`http://localhost:5002/api/remove/${pd_product_id}`)
      
      toast.success("PD Product Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }

  return (
    <div>
         <div class="box-shadow">
  
  <h1><strong><b><u>Product Design Products</u></b></strong></h1>
  
  <table id="customers">
  <tr>
    <th>ID</th>
    <th>PD Product Number</th>
    <th>Product Name</th>
    <th>Description</th>
    <th></th>
  </tr>
  {data.map((item, index)=> {
    return(
  <tr>
    <td>{item.id}</td>
    <td>{item.pd_product_id}</td>
    <td>{item.product_name}</td>
    <td>{item.description}</td>

    <td>
      
      
       <Link to={`/view/${item.username}`}>
         <button className='btn btn-view'>View</button>
         </Link>             
         <button className='btn btn-delete' onClick={() => deleteContact(item.pd_product_id)} >Delete</button>       
      </td>
  </tr>
  )
    
})}
  </table>


<div id="mybutton4">
<a href="/CreateProductsPD"><button class="button button1">Create</button></a> 
</div>



</div>
    </div>
  )
}

export default ProductsPD