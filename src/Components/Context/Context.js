import { createContext, useContext } from 'react';

const CartContext = createContext();

export const UseCart = () => useContext(CartContext);

export const CardProvider = ({ children }) => {
  const userName = 'Naveed Abbasi'

  const products = [
    { id: 1, name: 'Shirt', price: 223 },
    { id: 2, name: 'Pent', price: 153 },
    { id: 3, name: 'Shoes', price: 223 },
    { id: 4, name: 'Watch', price: 113 }
  ];

  const buyNow = (productName) => {
    alert(`You have bought ${productName}!`);
  };

  return (
    <CartContext.Provider value={{ userName, products, buyNow }}>
      {children}
    </CartContext.Provider>
  );
};
