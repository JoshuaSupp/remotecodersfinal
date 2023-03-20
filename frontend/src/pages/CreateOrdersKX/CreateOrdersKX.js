import React, {useState, useEffect}  from 'react'
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {toast} from 'react-toastify'

const initialState = {
  kx_order_number:"",
  order_name: "",
  description: "",
}


const CreateOrdersKX = () => {
  
  const [state, setState] = useState(initialState);

  const {kx_order_number,order_name,description} = state;

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!kx_order_number || !order_name || !description  ){
      toast.error("Please provide value into each field")
    }else{
      axios.post("http://localhost:5001/api/post", {
        kx_order_number,
        order_name,
        description,
       
      }).then(() => {
        setState({kx_order_number:"",order_name:"",description:""})
      })
      .catch((error) => toast.error(error.response.data));
      setTimeout(() => navigate.push("/OrdersKX"), 500);
    }
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({ ...state, [name]: value });
  }



  return (
    <div>
         <div id='createform'>
         <h4 class='create'>Create Orders KX</h4>
    <form onSubmit={handleSubmit}>
      <label for="fname">KX Orders ID  </label>
      <input 
      type="text" 
      id="kx_order_number" 
      name="kx_order_number" 
      placeholder="KX Product ID.."
      value={kx_order_number}
      onChange={handleInputChange}
      />
      <br/>
  
      <label for="name">Order Name   </label>
      <input 
      type="text" 
      id="order_name" 
      name="order_name" 
      placeholder="Order Name.."
      value={order_name}
      onChange={handleInputChange}
      />
     <br/>
      <label for="phone">Description</label>
      <input 
      type="text"
      id="description" 
      name="description" 
      placeholder="Description.."
      value={description}
      onChange={handleInputChange}
      />
    <br/>
     
      <input type="submit" value="Create"/>
    </form>

  </div>
    </div>
  )
}

export default CreateOrdersKX