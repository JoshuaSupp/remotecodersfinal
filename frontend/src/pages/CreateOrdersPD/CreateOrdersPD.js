import React, {useState, useEffect}  from 'react'
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {toast} from 'react-toastify'

const initialState = {
  pd_order_number:"",
  order_name: "",
  description: "",
}


const CreateOrdersPD = () => {
  const [state, setState] = useState(initialState);

  const {pd_order_number,order_name,description} = state;

  const navigate = useNavigate();
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!pd_order_number || !order_name || !description  ){
      toast.error("Please provide value into each field")
    }else{
      axios.post("http://localhost:5000/api/post", {
        pd_order_number,
        order_name,
        description,
       
      }).then(() => {
        setState({pd_order_number:"",order_name:"",description:""})
      })
      .catch((error) => toast.error(error.response.data));
      setTimeout(() => navigate.push("./OrdersPD"), 500);
    }
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({ ...state, [name]: value });
  }

  
  return (
    <div>
         <div id='createform'>
         <h4 class='create'>Create Orders PD</h4>
    <form  onSubmit={handleSubmit}>
      <label for="fname">PD Product ID  </label>
      <input 
      type="text" 
      id="pd_order_number"
      name="pd_order_number" 
      placeholder="PD Product ID.."
      value={pd_order_number}
      onChange={handleInputChange}
      />
      <br/>
  
      <label for="name">Order Name   </label>
      <input type="text" 
      id="order_name" 
      name="order_name" 
      placeholder="Product Name.."
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

export default CreateOrdersPD