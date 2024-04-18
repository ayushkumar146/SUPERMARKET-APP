// import React from 'react';
import React, { useState } from 'react';
import axios from "axios";
import {getproductRoute} from './../../utils/APIRoutes';
import { Navigate, useNavigate } from 'react-router-dom';
import "./Sales.css";
const Sales = () => {



  const [f, sf] = useState(2); 
  const [val,setval]=useState("");
  const navigate=useNavigate();

  const an=()=>{
    sf(3);
  }
  const kn=(e)=>{
    setval(e);
}
  const jn=async()=>{
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.get(`${getproductRoute}?${val}`, config);
      console.log(response.data);
      navigate('/Productsales', { state: { userData: response.data } });
      
      // Handle successful response (e.g., show success message, redirect, etc.)
    } catch (error) {
      console.error('Error occurred while submitting form:', error);
      // Handle error (e.g., show error message to user)
    }
  }
  const sandlesubmit=()=>{
    jn();
    sf(2);
  }
  return (
    <div className='salespage'>
<div className="hnav">
         <div className="hnavname qt">ARADHNA</div>
         <div className="habout qt">About Us</div>
         <div className="habout qt">
          <a href ="/Login"> Logout </a>
          </div>
      </div>
            <div className="msales"></div>
       {f===3?(<div className="searchpro">
          <div className="sph">Search Product</div>
          <div className="sn">
            Search : <input type="text" onChange={(e)=>{kn(e.target.value)}}/>
          </div>
          <div className="sbtn">
            <button onClick={sandlesubmit}>Search</button>
          </div>
        </div>):(<div className="search">
            <button onClick={an}>Search Product</button>
          </div>)}
    </div>
  )
}

export default Sales
