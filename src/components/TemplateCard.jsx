import React from "react";
import { useSelector } from "react-redux";



function TemplateCard  ()  {
  const templates = useSelector((state) => state.allTemplates.templates);
  const templateLength= useSelector((state) =>state.allTemplates.templates.length);

  const range = templates.slice(0,10);
  console.log('firstArray:',range);

  




  const renderTemplateList = range.map((template, index) => {
    const {    name, description } = template;
    return (
      <div className='template-card' key={index} >
        <p className='template-card-title'>{name}</p>
        <p className='template-card-content'>{description}</p>
        <div className='use-template-container'>
          <p className='use-template-text'>{templateLength}</p>
        </div>
      </div>
    );
  });
  return (<>{renderTemplateList}</>);
}

export default TemplateCard;
