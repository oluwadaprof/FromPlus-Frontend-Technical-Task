import React from 'react';
import { useState } from 'react';

function Pagination() {
  const  [count , setCount] = useState(1);
  const addCount = () =>{
    return setCount(count + 1);
  }
  const minusCount = () =>{
    return setCount(count - 1);
  }
  return (
        <div className='pagination-container'>
            <p onClick={minusCount} className='pagination-text'>Previous</p>
            <div className='button-flex'>
                <button className='button-one'>{count}</button>
                <p className='pagination-text'>of 14</p>
                
            </div>
            <p onClick={addCount} className='pagination-text'>Next</p>
        </div>
  );
}

export default Pagination;
