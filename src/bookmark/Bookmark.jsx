/* eslint-disable react/jsx-key */
/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
// import Product from '../product/Product';
import './Bookmark.css'


const Bookmark = ({bookmark,totalTime}) => {

    console.log(bookmark)
    console.log(totalTime)


   let totalreadtime =0;
   
   {
    totalTime.map(time => {
        totalreadtime = totalreadtime + time;
        console.log(time)
    })
   }
    
    return (
        <div className='card'>
            <div>

            <div className='totalreadtime shadow-md'><h2 className='text-xl spantime w-full h-10 mb-3 '>Spent time on read : {totalreadtime}  min</h2></div>
                     <p className='text-2xl '>Bookmarked Blogs : {bookmark.length}</p>
                    <div>
                        {
                            bookmark.map(singleBookmark => <h4 className='title'>{singleBookmark.title}</h4>)
                        }
                    </div>
            </div>
                
        </div>
    );
};

export default Bookmark;