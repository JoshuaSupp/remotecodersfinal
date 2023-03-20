import React, {useState, useEffect}  from 'react'
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {toast} from 'react-toastify'


const initialState = {
  pd_product_id:"",
  product_name: "",
  description: "",
}

const CreateProductsPD = () => {

  const [state, setState] = useState(initialState);

  const {pd_product_id,product_name,description} = state;

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!pd_product_id || !product_name || !description  ){
      toast.error("Please provide value into each field")
    }else{
      axios.post("http://localhost:5002/api/post", {
        pd_product_id,
        product_name,
        description,
       
      }).then(() => {
        setState({pd_product_id:"",product_name:"",description:""})
      })
      .catch((error) => toast.error(error.response.data));
      setTimeout(() => navigate.push("/ProductsPD"), 500);
    }
  }

  
  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({ ...state, [name]: value });
  }


  return (
    <div>
         <div id='createform'>
         <h4 class='create'>Create Products PD</h4>
    <form  onSubmit={handleSubmit}>
      <label for="fname">PD Product ID  </label>
      <input type="text"
       id="pd_product_id"
       name="pd_product_id"
       placeholder="PD Product ID.."
       value={pd_product_id}
       onChange={handleInputChange}
      />
      <br/>
      <label for="name">Product Name   </label>
      <input 
      type="text"
      id="product_name" 
      name="product_name" 
      placeholder="Product Name.."
      value={product_name}
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

export default CreateProductsPD