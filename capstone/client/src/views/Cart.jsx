import React from 'react';
import { Typography } from '@mui/material';
import ProductCard from '../components/product';
import React, { useEffect } from 'react';

const CartView = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the fetched products
                setProducts(data); // Update state with fetched products
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
        }, []);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {selectedProducts.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        selectedProducts.map(product => (
            <ProductCard key={product.product_id} product={product} />
        ))
      )}
    </div>
  );
};

export default CartView;
