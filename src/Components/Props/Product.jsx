import React from 'react';

function Product(props) {
  return (
    <div style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
      <h4 > Product Name : <span>{props.name}</span></h4>
      <p>Price: ${props.price}</p>
      <button onClick={()=>props.buy(props.name)}>BuyNow</button>
    </div>
  );
}

export default Product;
