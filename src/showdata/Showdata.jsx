/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Showdata.css';

const Showdata = (props) => {

    const{img, name, photo, title}=props.product;
    console.log(props)
    return (
        <div>
            <div className=''>
                 <img className='rounded' src={img} alt="" />

                 <div className='flex mt-5'>
                    <img className='photo rounded-full' src={photo} alt="" />
                    <div className='ml-3'>
                        <div>
                        <h4 className='text-2xl'>{name}</h4>
                        <p>Mar 14 (4 Days ago)</p>
                        </div>

                        <div>
                            
                        </div>
                    </div>
                 </div>
                 <h1 className='mt-3 font-bold'>{title}</h1>
            </div>

        </div>
    );
};

export default Showdata;