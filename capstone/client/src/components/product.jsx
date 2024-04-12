// ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  const { name, image_links, price } = product;

  return (
    <Card sx={{ width: '70vw', marginRight: 2 }}>
      <div style={{ display: 'flex' }}>
        <CardMedia
          component="img"
          height="140"
          image={image_links[1]} // URL of the product image
          alt={name} // Alt text for accessibility
          style={{ width: 140, flexShrink: 0 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name} {/* Product name */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${price} {/* Product price */}
          </Typography>
          <Button variant="contained" color="primary">
            Add to Cart {/* Button to add the product to the cart */}
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProductCard;
