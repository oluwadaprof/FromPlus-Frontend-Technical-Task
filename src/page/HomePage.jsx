import React from "react";
// import { useState } from 'react';
// import axios from 'axios';
import DynamicHeader from "../components/DynamicHeader";
import NavBar from "../components/NavBar";
import NotificationBar from "../components/NotificationBar";

import ProductListing from "../components/ProductListing";

function HomePage() {
  return (
    <div className='home'>
      <NavBar />
      <NotificationBar />
      <DynamicHeader />
      <ProductListing />
      {/* <Pagination  /> */}
    </div>
  );
}

export default HomePage;
