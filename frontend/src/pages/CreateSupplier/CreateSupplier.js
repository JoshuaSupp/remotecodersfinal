import React, {useState, useEffect}  from 'react'
import './CreateSupplier.css'
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {toast} from 'react-toastify'

const initialState = {
  supplier_name:"",
  supplier_email: "",
  supplier_phoneno: "",
  orders_by_supplier: "",
}

const CreateSupplier = () => {

  const [state, setState] = useState(initialState);

  const {supplier_name,supplier_email,supplier_phoneno,orders_by_supplier} = state;

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!supplier_name || !supplier_email || !supplier_phoneno || !orders_by_supplier ){
      toast.error("Please provide value into each field")
    }else{
      axios.post("http://localhost:5004/api/post", {
        supplier_name,
        supplier_email,
        supplier_phoneno,
        orders_by_supplier,
       
      }).then(() => {
        setState({supplier_name:"",supplier_email:"",supplier_phoneno:"",orders_by_supplier:""})
      })
      .catch((error) => toast.error(error.response.data));
      setTimeout(() => navigate.push("/Suppliers"), 500);
    }
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({ ...state, [name]: value });
  }


  return (
    <div id='createform'>
         <h4 class='create' >Create Supplier</h4>
    <form onSubmit={handleSubmit}>
      <label for="fname" >Supplier Name  </label>
      <input 
      type="text" 
      id="supplier_name" 
      name="supplier_name" 
      placeholder="Supplier Name.."
      value={supplier_name}
      onChange={handleInputChange}
      />
      <br/>
  
      <label for="email">Supplier Email  </label>
      <input 
      type="text" 
      id="supplier_email" 
      name="supplier_email" 
      placeholder="Supplier email.."
      value={supplier_email}
      onChange={handleInputChange}
      />
     <br/>
      <label for="phone">Supplier Phone No </label>
      <input 
      type="text" 
      id="supplier_phoneno" 
      name="supplier_phoneno" 
      placeholder="Supplier phone no.."
      value={supplier_phoneno}
      onChange={handleInputChange}
      />
    <br/>
      <label for="order">Order By Supplier</label>
      <input 
      type="text" 
      id="orders_by_supplier" 
      name="orders_by_supplier" 
      placeholder="Order by supplier.."
      value={orders_by_supplier}
      onChange={handleInputChange}
      />

      <br/>
      <input type="submit" value="Create"/>
    </form>

  </div>
  
  )
}

export default CreateSupplier