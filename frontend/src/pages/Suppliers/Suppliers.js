import React ,{useState, useEffect} from 'react'
import './Suppliers.css'
import axios from "axios"
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"

const Suppliers = () => {

  const[data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5004/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (supplier_name) => {
    if(window.confirm("Are you sure that you want to a supplier?")){
      axios.delete(`http://localhost:5004/api/remove/${supplier_name}`)
      
      toast.success("Supplier Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }

  return (
    <div id='suppliers' >
      <h2>Supplier Details</h2>
<table>
  <tr>
    <th>Supplier Name</th>
    <th>Supplier Email</th>
    <th>Supplier Phone Number</th>
    <th>Order By Supplier</th>
    <th></th>
  </tr>
  {data.map((item, index)=> {
    return(
  <tr>
    <td>{item.supplier_name}</td>
    <td>{item.supplier_email}</td>
    <td>{item.supplier_phoneno}</td>
    <td>{item.orders_by_supplier}</td>

    <td>
      
      
       <Link to={`/view/${item.username}`}>
         <button className='btn btn-view'>View</button>
         </Link>             
         <button className='btn btn-delete' onClick={() => deleteContact(item.supplier_name)}  >Delete</button>       
      </td>
  </tr>
  )
    
})}
 
  </table>

  <div>
    <a href='/CreateSupplier' >
  <button class="button button2">Create Supplier</button>
  </a>
  </div>

  
</div>
  )
}

export default Suppliers