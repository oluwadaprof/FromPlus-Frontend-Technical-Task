import React from 'react';
import errorIcon from '../assets/errorIcon.png'


function NotificationBar() {
  return (
  <div className='notification-bar'>
        <img src={errorIcon} alt="" />
        <p className='error-message'>Tada! Get started with a 
          free template. Can’t find what 
          you are looking for?
          Search from the 
          1000+ available templates</p>
  </div>
  );
}

export default NotificationBar;
