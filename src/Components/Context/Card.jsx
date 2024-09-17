import React from 'react';
import Product from './Prodcts';
import { UseCart } from './Context'; 

export default function Card() {
  const { userName, products, buyNow } = UseCart();

  return (
    <div>
      <h3>UserName: {userName}
        </h3>
      {products.map((val) => (
        <Product
          key={val.id}
          id={val.id}
          name={val.name}
          price={val.price}
        />
      ))}
    </div>
  );
}
