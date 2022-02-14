import React ,{useSelector, useDispatch,  useEffect} from 'react';
import { useState } from 'react';
import axios from 'axios';
import DynamicHeader from '../components/DynamicHeader';
import NavBar from '../components/NavBar';
import NotificationBar from '../components/NotificationBar';
import Pagination from '../components/Pagination';
import ProductListing from '../components/ProductListing';
import { setTemplates } from "../redux/action/templateActions";


function HomePage() {

 
 
  return(
    <div className='home' >
      <NavBar />
      <NotificationBar />
      <DynamicHeader />
      <ProductListing />
      {/* <Pagination  /> */}
    </div>
   
  );
}

export default HomePage;
