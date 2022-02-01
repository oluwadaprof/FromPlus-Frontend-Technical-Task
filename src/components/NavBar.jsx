import React from "react";
import { RiSearchLine } from "react-icons/ri";


function NavBar() {
  return (
    <nav>
      <div className="search-container">
        <input className='search-input' placeholder='Search Templates' />
        <RiSearchLine className='search-icon' />
      </div>
      <div className="sort-container">
        <p>Sort by:</p>
        <div className="input-grid">
          <label>Category</label>
          <select className="category-input-box">
            <option value="">Grapefruit</option>
            <option value="">Grape</option>
            <option value="">orange</option>
          </select>
    
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
