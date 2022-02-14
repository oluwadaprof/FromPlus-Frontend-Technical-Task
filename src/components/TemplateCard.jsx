import React from "react";
import { useSelector, useState } from "react-redux";

const TemplateCard = ()  => {
  
  const templates = useSelector((state) => state.allTemplates.templates);

  const range = templates.slice(0, 10);
  console.log("firstArray:", range);
  


  const renderTemplateList = range.map((template, index) => {
    const { name, description, link} = template;
    return (
      <div className='template-card' key={index}>
        <p className='template-card-title'>{name}</p>
        <p className='template-card-content'>{description}</p>
        <div className='use-template-container'>
          <a href={link} className='use-template-text'>Use Template</a>
        </div>
      </div>
    );
  });
  return <>{renderTemplateList}</>;
}

export default TemplateCard;
