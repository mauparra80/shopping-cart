import React, {useState, useEffect} from "react";
import APIManager from "../modules/APImanger";

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

    <div id="shop">
      <div className="items">
      {apiData ? (apiData.map((item) => (
        <div className="item" key={item.id}>
          <div className="img-container">
            <img src={item.image} alt="" />
          </div>
          
          <div className="text-container">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-price">{item.price}</p>
          </div>
          
        </div>
        ))) : (
          <h1>Loading</h1>
        )
      }
      </div>
    </div>
  );
}