import React, { useEffect, useState } from 'react';
import "./Home.css";

import { getallproductRoute } from './../../utils/APIRoutes';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [s, ss] = useState(0);
const navigate=useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(getallproductRoute);
        setProducts(response.data); // Update state with fetched products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Call the fetchProducts function when the component mounts
  }, []);

const ln=(e)=>{
ss(s+e);
}

console.log(s);

const un=()=>{
  navigate('/Checkout', { state: { totalAmount: s } });
}

  return (
    <>
    <div className="homepage">
      <div className="hnav">
         <div className="hnavname qt">ARADHNA</div>
         <div className="habout qt">About Us</div>
         <div className="habout qt">
          <a href ="/Login"> Logout </a>
          </div>
      </div>
      <div className="hbody">
        <div className="hframe"></div>
        <div className="hproducts">
          <div className="allpro">
            All Products
          </div>
          <div className="hallpro">
          {products.map(product => (
              <div key={product._id} className="productItem">
                <h3 className='pi'>{product.name}</h3>
                <p className='pi'>Quantity: {product.quantity}</p>
                <p className='pi'>Price: ${product.price}</p>
                <button className='buy pi' onClick={() => ln(product.price)}>BUY</button>
                {/* Add more details or styling as needed */}
              </div>
            ))}
          </div>
          <div className="checkout">
            <button className='hcheck' onClick={un}>CHECKOUT</button>
          </div>
        </div>

      </div>
      <div className="hfooter">

      </div>
    </div>
    </>
  )
}

export default Home
