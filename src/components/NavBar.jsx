import React, {useState} from "react";
import {useSelector} from 'react-redux'
import { RiSearchLine } from "react-icons/ri";
import templateSearch from "../redux/utils/templateSearch";
import useTemplateSearch from "../redux/utils/templateSearch";
// import useState from 'react'


function NavBar () {
  const templates = useSelector((state) => state.allTemplates.templates);
  const [query, setQuery] = useState('')
  const [pageNUmber, setPageNumber] = useState(1)

//  const {template, hasMore, loading, error} = useTemplateSearch(query, pageNUmber);

  function handleSearch(e){
    setQuery(e.target.value)
    setPageNumber(1)
  }
  // const [inputValue, setInputValue] = useState("");

  // function handleSearch(e) {
  //   const queryResult = query(e.target.value )
  //   if(queryResult === templates.category[0]){
  //     return <div>{templates.category}</div>
  //   }
  // }
  // handleSearch();

 

  return (
    <nav>
      <div className="search-container">
        <input className='search-input' onChange={handleSearch}  placeholder='Search Templates' />
        <RiSearchLine className='search-icon' />
      </div>
      <div className="sort-container">
        <p>Sort by:</p>
        <div className="input-grid">
          <div className="category-container">
            <label>Category</label>
            <select  className="category-input-box">
              <option id='#ddlProducts' value="health">Grapefruit</option>
              <option value="e-commerce">Grape</option>
              <option value="education">orange</option>
            </select>
          </div>

          <div className="category-container">
            <label>Order</label>
            <select  className="category-input-box">
              <option value="health">Default</option>
              <option value="e-commerce">Grape</option>
              <option value="education">orange</option>
            </select>
          </div>
         
          <div className="category-container">
            <label>Date</label>
            <select className="category-input-box">
              <option value="health">Default</option>
              <option value="e-commerce">Grape</option>
              <option value="education">orange</option>
            </select>
          </div>
         
    
          {/* <div className="category-container">
            <input className="category-input-box" />
            <p>category</p>
          </div>
          <div className="category-container">
            <input className="category-input-box" />
            <p>category</p>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
