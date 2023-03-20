import React from 'react'
import './Home.css'

const home = () => {
  return (
    <div>
      
      <div class="sidebar">
       
       <h2>MEULABS</h2>
       <a href="/Orders">
           Orders
       </a>
       
       <a href="/Products">
           Products 
       </a>
       <a href="/Suppliers">
           Suppliers
       </a>
       <a href="/Profile">
           Profile
       </a>
       <a href="/">
           Logout?   
       </a>
      
       </div>
       <div class="pagecontent">
           <div class="pagetext">
           <h2>hello!</h2>
           </div>
       </div>
    </div>
  )
}

export default home
