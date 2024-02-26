
class APImanager {
  constructor() {
    this.data = null;
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

  getData() {
    console.log("I am returning this data", this.data);
    return this.data;
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