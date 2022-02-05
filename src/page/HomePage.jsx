import React from 'react';
import DynamicHeader from '../components/DynamicHeader';
import NavBar from '../components/NavBar';
import NotificationBar from '../components/NotificationBar';
import Pagination from '../components/Pagination';
import ProductListing from '../components/ProductListing'
function HomePage() {
  return(
    <div className='home' >
      <NavBar />
      <NotificationBar />
      <DynamicHeader />
     <ProductListing />
     <Pagination />
    </div>
   
  );
}

export default HomePage;
