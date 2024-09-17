import React from 'react';
import Product from './Product';
export default function Card(props) {
  const Products=[
    {id:1,name:'Shirt',price:223},
    {id:2,name:'Pent',price:153},
    {id:3,name:'Shoes',price:223},
    {id:4,name:'Watch',price:113},
  ]
  return (
    <div>
      <h3>UserName : {props.UserName}</h3>
      {Products.map((val,ind)=>(
        <Product 
        key={ind}
        id={val.id}
        name={val.name}
        price={val.price}
        buy={props.buyNow}
        />
      ))}
    </div>
  );
}
