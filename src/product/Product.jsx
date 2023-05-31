/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import Showdata from '../showdata/Showdata';
import './Product.css'
import Bookmark from '../bookmark/Bookmark';
import { ToastContainer, toast } from 'react-toastify';

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
        toast("Wow so easy!");
        const newbookmark =[...bookmark,product];
        setbookmark(newbookmark)
    }

    

    return (
        <div className='main-section '>
           <div className='product-container '>
           {
                product.map(product => <Showdata product={product} totaltime={totaltime} key={product.id} Eventhandler={Eventhandler}></Showdata>)
            }
           </div>

            <div className='card2 sticky shadow-xl mt-0 '>
                <Bookmark
                 bookmark={bookmark} totalTime={times} ></Bookmark>    
            </div>

            <div className='mt-5'>
                <div>
                <h2>1. What is the difference between props and state?</h2>
                <br />
                <p>Answer: Props are used to pass data from a parent component to a child component and are immutable.
                            State represents the internal data of a component and is mutable, allowing the component to manage and update its own data. </p>
                </div>

                <div>
                    <h2>2. usestate how it wark?</h2>
                    <br />
                    <p>useState is a React hook that allows functional components to manage state. It works by returning an array with two elements: the current state value and a function to update that value. The state value can be accessed and updated using the provided function.</p>
                </div>

                <div>
                    <h2>3. useEffect ডাটা লোড করা ছাড়া আর কি কাজ করতে পারে ?</h2>
                    <br />
                    <p>Dependencies, Cleanup etc</p>
                </div>


                <div>
                    <h2>4. How React works</h2>
                    <br />
                    <p>
                    React works by creating reusable UI components that can have their own state and behavior. It uses a virtual DOM to efficiently update the user interface based on changes to the underlying data. React uses JSX syntax to describe the UI structure and transpiles it into JavaScript code. When a component is rendered, it returns a description of the UI, which is then reconciled with the actual DOM to update only the necessary parts.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Product;