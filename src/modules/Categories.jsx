import { Link } from "react-router-dom";

export default function Categories({categoryData}) {
  console.log(categoryData);

  
  return (
    <div id="categories-dropdown">
      {categoryData && categoryData.map((category) => (
        <Link to='/shop' state={category} className="category pointer" key={category}>
          <h3>{category}</h3>
        </Link>
      ))}
      
      
    </div>
  )
}