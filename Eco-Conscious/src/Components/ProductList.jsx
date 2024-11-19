import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";  // Import axios for API calls

const SearchResults = () => {
  const { term } = useParams();  // Get the search term from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // To handle loading state
  const [error, setError] = useState(null);  // To handle error state

  useEffect(() => {
    // Fetch the products from the API
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");  // Retrieve token from localStorage

        // Make the request with axios, passing the token in the Authorization header
        const response = await axios.get(`http://localhost:3000/api/products/${term}`, {
          headers: {
            Authorization: `Bearer ${token}`,  // Send the token in the header
          },
        });

        setProducts(response.data);  // Update the state with fetched products
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);  // Handle error
      } finally {
        setLoading(false);  // Stop loading when the fetch is complete
      }
    };

    fetchProducts();
  }, [term]);  // Re-fetch when the search term changes

  return (
    <div>
      <h2>Search Results for "{term}"</h2>
      
      {/* Loading and error states */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      {/* Display products or message if none are found */}
      <div>
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product._id}>{product.name}</li>  
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
