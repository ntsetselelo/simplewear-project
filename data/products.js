import { formatCurrency } from "../scripts/utils/money.js";

export function getProduct(productId){
  let matchingProduct;
  
  products.forEach((product) => {
  if(product.id === productId){
      matchingProduct = product;
  }
  });

  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;


  constructor(productDetails){
     this.id = productDetails.id;
     this.image = productDetails.image;
     this.name = productDetails.name;
     this.rating = productDetails.rating;
     this.priceCents = productDetails.priceCents;
  }

  getStarUrl(){
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice(){
    return `R${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML(){
    return '';
  }
}

class Clothing extends Product {
   sizeChartLink;

   constructor(productDetails){
     super(productDetails);  //calls the parent class contructor
     this.sizeChartLink = productDetails.sizeChartLink;
   }

   extraInfoHTML(){
    return `
      <a href="${this.sizeChartLink}" target = "_blank">
      Size chart
      </a>`;
   }
}


export const products = [{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  image:'images/products/nike-black-shorts.webp',
  name: 'Nike Woven Lined Flow Shorts - Black | Pavement - Pavement NZ',
  rating:{
      stars: 4.5,
      count: 87
  },
  priceCents: 40095
},{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c8",
  image:'images/products/white-hoodie.jpeg',
  name: 'Plain simple t-shirt',
  rating:{
      stars: 4.5,
      count: 87
  },
  priceCents: 18900
},{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c9",
  image:'images/products/airforce-white.jpg',
  name: 'Shop Nike Air Force 1 Shadow Womens Shoes White',
  rating:{
      stars: 4.5,
      count: 87
  },
  priceCents: 239999 
},{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c10",
  image:'images/products/bloodline-shirt.jpg',
  name: 'Men Summer Oversized Casual T-shirts Bloodline ',
  rating:{
      stars: 4.5,
      count: 87
  },
  priceCents: 35090,
  keyword: [
     "tshirts",
     "apparel",
     "mens"
  ],
  type: "clothing",
  sizeChartLink: "images/clothing-size-chart.png"
},{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c11",
  image:'images/products/nike-tracksuit.jpeg',
  name: 'Boys Nike Dri-Fit Academy23 Tricot Black Football Pants ',
  rating:{
      stars: 4.5,
      count: 87
  },
  priceCents: 74995
},{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c12",
  image:'images/products/nike-shirt.webp',
  name: 'NIKE SOLO SWOOSH T-SHIRT White',
  rating:{
      stars: 4.5,
      count: 87
  },
  priceCents: 160099
}].map((productDetails) => {
  if(productDetails.type === 'clothing'){
    return new Clothing(productDetails);
  }
   return new Product(productDetails);
});

