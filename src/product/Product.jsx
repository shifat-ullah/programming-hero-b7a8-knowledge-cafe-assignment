/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import Showdata from '../showdata/Showdata';
import './Product.css'
import Bookmark from '../bookmark/Bookmark';

const Product = () => {
    const[product, setProduct]=useState([])
    const [bookmark, setbookmark]=useState([])
    const [times, setTime]=useState([])
    
    useEffect(()=>{
        fetch('Fakeapidata.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    let readtime=0;
    const totaltime=(time)=>{
       let newTime = [...times, time]
       
       setTime(newTime)
    }
    
    const Eventhandler=(product)=>{
        const newbookmark =[...bookmark,product];
        setbookmark(newbookmark)
    }

    return (
        <div className='main-section'>
           <div className='product-container'>
           {
                product.map(product => <Showdata product={product} totaltime={totaltime} key={product.id} Eventhandler={Eventhandler}></Showdata>)
            }
           </div>

            <div className='card2  shadow-xl mt-0'>
                <Bookmark
                 bookmark={bookmark} totalTime={times} ></Bookmark>    
            </div>

            <div>
            
            </div>
        </div>

    );
};

export default Product;