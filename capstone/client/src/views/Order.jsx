import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@mui/material';

const OrderView = ({ token }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedProducts, setProducts] = useState([]);

    useEffect(() => {
        // Calculate total price when cart items change
        fetch('http://localhost:3000/api/user/cart',{
            method: "GET",
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token,
            },
        })
            .then(response => response.json())
            .then(data => {
                    console.log(data); // Log the fetched products
                    //get data and merge every product that is the same but sum the quantity
                    let products = [];
                    data.forEach(product => {
                            const existingProduct = products.find(p => p.product_id === product.product_id);
                            if (existingProduct) {
                                    existingProduct.quantity += product.quantity;
                            } else {
                                    products.push(product);
                            }
                    });
                    setProducts(products); // Update state with fetched products
            })
            .catch(error => {
                    console.error('Error fetching products:', error);
            });
        let total = 0;
        selectedProducts.forEach(item => {
            total += item.price * item.quantity;
        });
        setTotalPrice(total);
    }, [token, selectedProducts]);

    return (
        <div>
            <h2>Order Summary</h2>
            <ul>
                {selectedProducts.map(item => (
                    <li key={item.id}>
                        <Typography variant="body1">
                            {item.name} - ${item.price} - Quantity: {item.quantity}
                        </Typography>
                    </li>
                ))}
            </ul>
            <Typography variant="body1">Total Price: ${totalPrice.toFixed(2)}</Typography>
            <Button variant="contained" color="primary" >
              Place Order 
            </Button>
        </div>
    );
};

export default OrderView;
