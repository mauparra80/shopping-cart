import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './shopStyle.css'
import APIManager from "../../modules/APImanger";
import ShopItem from "../../modules/ShopItem";

export default function Shop() {
  const [apiData, setApiData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await APIManager.fetchData();
        const selectedCategory = location.state || "none";
        const filteredData = filterData(data, selectedCategory);
        setApiData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [location.state]);

  return (
    <div id="shop" className="body-container">
      <div className="items">
        {apiData.length > 0 ? (
          apiData.map((item) => (
            <ShopItem key={item.id} item={item}/>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}

// Filter shop items using category
const filterData = (data, category) => {
  if (category === "none") {
    return data;
  }
  return data.filter((item) => item.category === category);
};