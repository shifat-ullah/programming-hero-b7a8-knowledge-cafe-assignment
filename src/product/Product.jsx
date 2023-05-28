/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import Showdata from '../showdata/Showdata';
import './Product.css'

const Product = () => {
    const[product, setProduct]=useState([])
    useEffect(()=>{
        fetch('Fakeapidata.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='main-section'>
           <div className='product-container'>
           {
                product.map(product => <Showdata product={product}></Showdata>)
            }
           </div>

            <div>
                <h2>Spent time on read : 177 min</h2>
            </div>
        </div>

    );
};

export default Product;