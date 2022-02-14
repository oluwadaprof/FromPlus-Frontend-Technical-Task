import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { setTemplates } from "../redux/action/templateActions";

const Pagination = ({ templatesPerPage, totalTemplate, paginate }) => {
  const templates = useSelector((state) => state.allTemplates.templates);
  // const range = templates.slice(0, 15);
  console.log("all-data:", templates);

  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(totalTemplate / templatesPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  let [count, setCount] = useState(1);

  const addCount = () => {
    if (count <= 13) {
      return setCount(count + 1);
    }
  };
  const minusCount = () => {
    if (count > 1) {
      return setCount(count - 1);
    }
  };

  return (
    <div className='pagination-container'>
    
       
          <p onClick={minusCount} className='pagination-text'>Previous</p>
          <div  className='button-flex'>
            <button className='button-one'>{count}</button>
            <p className='pagination-text-two'>of 14</p>
          </div>
          <p onClick={addCount} className='pagination-text'>
            Next
          </p>
       
   
    </div>
  );
};

export default Pagination;
