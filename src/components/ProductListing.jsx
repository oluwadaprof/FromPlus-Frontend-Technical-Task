import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TemplateCard from "./TemplateCard";
import { setTemplates } from "../redux/action/templateActions";
import Pagination from "./Pagination";

function ProductListing() {
  // const templates = useSelector((state) => state);
  const templates = useSelector((state) => state.allTemplates.templates);
  const dispatch = useDispatch();
  const range = templates.slice(0, 10);

  const [loading, setLoading] = useState(false);
 

  const FetchTemplates = async () => {
    setLoading(true);
    const response = await axios
      .get(
        "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
      )
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setTemplates(response.data));
    setLoading(false);
    // const dataLength = (setTemplates(response.data.length))
  };

  useEffect(() => {
    FetchTemplates();
  }, []); 


  console.log("firstArray:", range);

  if ('health' === range.category){
    console.log('health:',range)
  }

  return (
    <>
      <div className='product-list-container'>
        {loading ? (
          <div className='loading-text'>Loading...</div>
        ) : (
          <TemplateCard  loading={loading} />
        )}
        
      </div>

      <Pagination/>
    </>
  );
}

export default ProductListing;
