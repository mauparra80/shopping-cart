import React, {useState, useEffect} from "react";
import APIManager from "../modules/APImanger";
import ShopItem from "../modules/ShopItem";

export default function Shop() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function getItems() {
      const data = await APIManager.fetchData();
      setApiData(data);
    }
    getItems();
  },[])

  
  console.log(apiData);

  return (

    <div id="shop" className="body-container">
      <div className="items">
      {apiData ? (apiData.map((item) => (
        <ShopItem key={item.id} item={item}/>
        ))) : (
          <h1>Loading</h1>
        )
      }
      </div>
    </div>
  );
}