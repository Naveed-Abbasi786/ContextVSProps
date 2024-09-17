import React from 'react';
import { UseCart } from './Context';

export default function Product(props) {
  const {buyNow}=UseCart()
  return (
    <div style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
      <h4>Product Name : <span>{props.name}</span></h4>
      <p>Price: ${props.price}</p>
      <button onClick={()=>buyNow(props.name)}>Buy Now</button>
    </div>
  );
}
