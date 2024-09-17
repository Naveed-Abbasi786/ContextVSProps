import React from 'react'
import Card from './Cart'
export default function Home(porps) {
    const BuyNow=(productPrice)=>{
        alert(`You have bought ${productPrice}!`);    }
  return (
    <div>
        <Card UserName="Naveed Abbasi" buyNow={BuyNow}/>
    </div>
  )
}
