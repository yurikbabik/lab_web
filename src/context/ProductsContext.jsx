import React, { createContext, useState, useEffect } from 'react';
const ProductsContext = createContext();


const initialProducts = [
  { id: 1, name: 'Ruby', carat: 1.2, price: 1200, color: 'red', type: 'precious', description: 'Deep red ruby gemstone with exceptional brilliance', image: '/images/ruby.svg' },
  { id: 2, name: 'Emerald', carat: 0.8, price: 900, color: 'green', type: 'precious', description: 'Vivid green emerald with perfect clarity', image: '/images/emerald.svg' },
  { id: 3, name: 'Sapphire', carat: 1.5, price: 1500, color: 'blue', type: 'precious', description: 'Stunning blue sapphire with rich color', image: '/images/sapphire.svg' },
  { id: 4, name: 'Amethyst', carat: 2.0, price: 800, color: 'purple', type: 'semi-precious', description: 'Beautiful purple amethyst crystal' },
  { id: 5, name: 'Diamond', carat: 0.9, price: 2500, color: 'clear', type: 'precious', description: 'Premium quality diamond with VS1 clarity' },
  { id: 6, name: 'Topaz', carat: 1.8, price: 650, color: 'yellow', type: 'semi-precious', description: 'Golden topaz with warm elegant glow' },
  { id: 7, name: 'Opal', carat: 1.3, price: 950, color: 'iridescent', type: 'semi-precious', description: 'Iridescent opal with rainbow effects' },
  { id: 8, name: 'Garnet', carat: 2.2, price: 550, color: 'red', type: 'semi-precious', description: 'Deep red garnet with exceptional shine' },
  { id: 9, name: 'Aquamarine', carat: 1.6, price: 1100, color: 'blue', type: 'precious', description: 'Light blue aquamarine with clarity' }
];


export const ProductsProvider = ({ children }) => {
  const [products] = useState(initialProducts);

  useEffect(() => {
    console.log("fff");
  }, []);

  const getProductById = (id) => products.find((p) => String(p.id) === String(id));


  return (
    <ProductsContext.Provider value={{ products, getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
