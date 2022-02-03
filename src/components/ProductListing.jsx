import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TemplateCard from './TemplateCard';
import { setTemplates } from "../redux/action/templateActions";


function ProductListing() {
  const templates = useSelector((state) => state);
  const dispatch = useDispatch();

  const FetchTemplates = async () => {
    const response = await axios
      .get("https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setTemplates(response.data));
    // const dataLength = (setTemplates(response.data.length))
    
  };

  useEffect(() => {
    FetchTemplates();
    
  }, );

  console.log("templates:", templates);

  return (
    <div className='product-list-container'>
      <TemplateCard  />
      {/* <TemplateCard />
      <TemplateCard />
      <TemplateCard />
      <TemplateCard />
      <TemplateCard />
      <TemplateCard />
      <TemplateCard />
      <TemplateCard /> */}
    </div>
  );
}

export default ProductListing;
