import React ,{useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"

const OrdersKX = () => {
  const[data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5001/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (kx_order_number) => {
    if(window.confirm("Are you sure that you want to delete KX Order ?")){
      axios.delete(`http://localhost:5001/api/remove/${kx_order_number}`)
      
      toast.success("KX Order Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }
  return (
    <div>
        <div class="box-shadow">
  
  <h1><strong><b><u>Knowledge Explorers Orders</u></b></strong></h1>
  

  <table id="customers">
  <tr>
    <th>KX Order Number</th>
    <th>Order Name</th>
    <th>Description</th>
    <th></th>
  </tr>
  
  {data.map((item, index)=> {
    return(
  <tr>
    <td>{item.kx_order_number}</td>
    <td>{item.order_name}</td>
    <td>{item.description}</td>

    <td>
      
      
       <Link to={`/view/${item.kx_order_number}`}>
         <button className='btn btn-view'>View</button>
         </Link>             
         <button className='btn btn-delete' onClick={() => deleteContact(item.kx_order_number)} >Delete</button>       
      </td>
  </tr>
  )
    
})}
  
  </table>

<div id="mybutton4">
<a href="/CreateOrdersKX"><button class="button button1">Create</button></a> 
</div>





</div>
    </div>
  )
}

export default OrdersKX