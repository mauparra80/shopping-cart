import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './shopStyle.css'
import APIManager from "../../modules/APImanger";
import ShopItem from "../../modules/ShopItem";
import bannerImg from "../../assets/shop-regular-banner.jpg"

export default function Shop() {
  const [apiData, setApiData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Items")
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await APIManager.fetchData();
        const categoryFromLocation = location.state || "All Items"
        setSelectedCategory(categoryFromLocation);
        
        const filteredData = filterData(data, categoryFromLocation);
        setApiData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [location.state]);

  return (
    <div id="shop" className="body-container">
      <div className="banner-container">
        <img src={bannerImg} alt="banner image of accessories" />
        <h1 className="shop-title">{selectedCategory}</h1>
        {console.log("current category", selectedCategory)};
      </div>
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
  if (category === "All Items") {
    return data;
  }
  return data.filter((item) => item.category === category);
};