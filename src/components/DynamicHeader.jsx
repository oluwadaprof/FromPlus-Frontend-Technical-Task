import {  useSelector } from "react-redux";


function DynamicHeader() {
 
  const templateLength= useSelector((state) =>state.allTemplates.templates.length);
  return (
  <div className='dynamic-header'>
      <p className='all-template'>All Templates</p>
      <p className='dynamic-template-text'>{templateLength} Templates</p>
  </div>
  );
}

export default DynamicHeader;
