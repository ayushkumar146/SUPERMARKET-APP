import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./Productsales.css";
import { useState } from 'react';
import axios from 'axios';
import { updateproductRoute } from '../../utils/APIRoutes';
const Productsales = () => {
    
    const location = useLocation();
    const { userData } = location.state;
    // console.log(userData.products[0]);
    const data=userData.products[0];
    const [product, setProduct] = useState(data);
  const navigate=useNavigate();
    const rd = {
        name: "Random Product",
        quantity: "7",
        price: "$99.99"
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };
console.log(product.name);
    const ds= userData ? data : rd;
    const hsub=async()=>{
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const response = await axios.put(`${updateproductRoute}/${data._id}`,product, config);

            console.log(response.data); // Log response from PUT request
            // Optionally handle success message or redirect after update
        } catch (error) {
            console.error('Error updating product:', error);
            // Handle error (e.g., show error message to user)
        }
    }

const bn=()=>{
    navigate('/Sales');
    }

  return (
    <div className='mainproduct'>
        <div className="prona">
            Product Information.
        </div>
        <div className="pc">
            <div className="pic"></div>
            <div className="pname op">
  Product Name:{product.name}
                                 </div>
            <div className="pquant op">
            Product Quantity   :   <input
                        type="text"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleInputChange}
                    />            
                                 </div>
            <div className="pprice op">
            Product Price:{product.price}
            </div>
            <div className="proupd">
                <button onClick={hsub}>UPDATE PRODUCT</button>
                <button onClick={bn}>HOME</button>
            </div>
        </div>
      
    </div>
  )
}

export default Productsales;
