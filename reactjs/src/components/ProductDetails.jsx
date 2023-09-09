import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  // Use useParams to access route parameters
  const { productId } = useParams();

  // State to store product details
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Define an async function to fetch product details
    async function fetchProductDetails() {
      try {
        const response = await axios.get(`http://localhost:8082/product/${productId}`);
        // Assuming the response data is an object with product details
        setProduct(response.data);
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    }

    // Call the function to fetch product details when the component mounts
    fetchProductDetails();
  }, [productId]); // Make sure to include productId in the dependency array

  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <div>
          <p>Product ID: {productId}</p>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>Volume: {product.volume}</p>
          <p>Rating: {product.rating}</p>
          {/* Display other product details here */}
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetails;
