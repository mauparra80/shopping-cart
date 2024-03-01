
class APImanager {
  constructor() {
    this.data = null;
    this.categoryData = null;
  }

  async fetchData() {
    try {
      const rawData = await fetch("https://fakestoreapi.com/products");
      this.data = await rawData.json();
      console.log(this.data);
    } catch (error) {
      console.log(error, "api error");
    } 
    return this.data;
  }

  async fetchCategories() {
    try {
      const rawCategoryData = await fetch("https://fakestoreapi.com/products/categories");
      this.categoryData = await rawCategoryData.json();
      console.log(this.categoryData);
    } catch (error) {
      console.log(error, "api error");
    } 
    return this.categoryData;
  }

  getData() {
    console.log("I am returning this data", this.data);
    return this.data;
  }
  getCategoryData() {
    return this.categoryData;
  }
}

const APIManager = new APImanager();
export default APIManager;


// export default function APImanager() {
//   async function getProducts() {
//     try {
//       console.log("getting data");
//       const rawData = await fetch("https://fakestoreapi.com/products");
//       const data = await rawData.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error, "api error");
//     }
//   }
//   getProducts();
// }