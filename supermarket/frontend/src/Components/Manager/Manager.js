import React, { useState } from 'react';
import "./Manager.css";
import axios from "axios";
import { createproductRoute,getproductRoute} from './../../utils/APIRoutes';
import { Navigate, useNavigate } from 'react-router-dom';

const Manager = () => {
  const [values, setValues] = useState({ name: "", quantity: "", price: "" });
  const [flag, setFlag] = useState(0); 
  const [f, sf] = useState(2); 
  const [val,setval]=useState("");
const navigate=useNavigate();
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const fn = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(createproductRoute, values, config);
      console.log(response.data);
      // Handle successful response (e.g., show success message, redirect, etc.)
    } catch (error) {
      console.error('Error occurred while submitting form:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleSubmit = () => {
    fn(); // Call fn function
    setFlag(0); // Set flag to 0 to switch to the other view
  };

  const gn =() => {
    setFlag(1); // Set flag to 1 to switch back to the initial view
  };
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
      navigate('/Product', { state: { userData: response.data } });
      
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
    <div className="managerpage">
      <div className="hnav">
         <div className="hnavname qt">ARADHNA</div>
         <div className="habout qt">About Us</div>
         <div className="habout qt">
          <a href ="/Login"> Logout </a>
          </div>
      </div>
      <div className="managerbody">
        {flag === 1 ? (
          <div className="createpro">
            <h1 className="cph">Order Product</h1>
            <div className="pn">
              Product name: <input type="text" placeholder='' name="name" onChange={handleChange} />
            </div>
            <div className="pn">
              Quantity: <input type="text" name="quantity" onChange={handleChange} />
            </div>
            <div className="pn">
              Price: <input type="text" name="price" onChange={handleChange} />
            </div>
            <div className="btn">
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        ) : (
          <div className="order">
            <button onClick={gn}>Order</button>
          </div>
        )}
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
      <div className="managerfoot">
        {/* Additional content for manager footer */}
      </div>
    </div>
  );
};

export default Manager;
