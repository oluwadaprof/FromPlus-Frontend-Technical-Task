import React from "react";
import { useSelector } from "react-redux";



function TemplateCard  ()  {
  const templates = useSelector((state) => state.allTemplates.templates);

  const renderTemplateList = templates.map((template) => {
    const {  link, name, description } = template;
    return (
      <div className='template-card' key={description}>
        <p className='template-card-title'>{name}</p>
        <p className='template-card-content'>{description}</p>
        <div className='use-template-container'>
          <p className='use-template-text'>Use Template</p>
        </div>
      </div>
    );
  });
  return (<>{renderTemplateList}</>);
}

export default TemplateCard;
