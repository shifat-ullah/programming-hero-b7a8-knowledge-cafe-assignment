/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

import './Showdata.css';


const Showdata = (props) => {

    const{img, name, photo, title ,readTime}=props.product;
    const Eventhandler =props.Eventhandler;
    const totaltime =props.totaltime;

    return (
        <div>
            <div className=''>
                 <img className='rounded' src={img} alt="" />

                 <div className='flex mt-5'>
                    <img className='photo rounded-full' src={photo} alt="" />
                    <div className='ml-3 flex justify-between w-[70%]'>
                        <div>
                        <h4 className='text-2xl'>{name}</h4>
                        <p>Mar 14 (4 Days ago)</p>
                        </div>

                        <div>
                            <p>{readTime} min read
                             <FontAwesomeIcon onClick={()=>Eventhandler(props.product)} icon={faBookmark} /></p>
                        </div>
                    </div>
                 </div>
                 <h1 className='mt-3 font-bold heading'>{title}</h1>
                 <br />
                 {/* <a className='mt-5 cursor-pointer'  onClick={()=> Makeread(time)}><u>Mark as read</u></a> */}
                 <a className='mt-5 cursor-pointer'  onClick={()=> totaltime(readTime)}><u>Mark as read</u></a>
            </div>

        </div>
    );
};

export default Showdata;