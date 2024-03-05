
class APImanager {
  constructor() {
    this.data = null;
    this.categoryData = null;
  }

  async fetchData() {
    try {
      const rawData = await fetch("https://fakestoreapi.com/products");
      this.data = await rawData.json();
    } catch (error) {
      console.log(error, "api error");
    } 
    return this.data;
  }

  async fetchCategories() {
    try {
      const rawCategoryData = await fetch("https://fakestoreapi.com/products/categories");
      this.categoryData = await rawCategoryData.json();
    } catch (error) {
      console.log(error, "api error");
    } 
    return this.categoryData;
  }

  getData() {
    return this.data;
  }
  getCategoryData() {
    return this.categoryData;
  }
}

const APIManager = new APImanager();
export default APIManager;
