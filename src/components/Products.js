import MiniCard from './MiniCard'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';



const Products = ({ match, location }) => {
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json"
    });
    const [loading, setLoading] = useState(true);
    const [sneakers, setSneakers] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const {
      params: {
        key
      }
    } = match;

    useEffect(() => {
      setErrorMessage(null)
      setLoading(true);
      window.scrollTo({
        top: 100,
        behavior: 'smooth'
      })
      fetch("/search/" + key, {
          headers: myHeaders,
        })
        .then(response => response.json())
        .then(jsonResponse => {
          setSneakers(jsonResponse);
          setLoading(false);
          window.scrollTo({
            top: 625,
            behavior: 'smooth'
          })
        })
        .catch(err => setErrorMessage("No Products Found"));
    }, [location]);

    return(
        <div className='product-section'>
          <h2 className='product-title'> Results for <span claclassNamess="product-key">'{key}'</span> </h2>
          <div className='product-page'>
            {loading && !errorMessage ? (
            <Spinner className='spinners' animation="border" variant="secondary" role="status"></Spinner>

            ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
            ) : (
            sneakers.map((sneaker, index) => (

            <MiniCard key={`${index}-${sneaker.shoename}`} sneaker={sneaker} />
            ))
            )}
          </div>
        </div>
      )
}

export default Products;