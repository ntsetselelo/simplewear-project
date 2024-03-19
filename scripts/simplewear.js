const products = [{
    image:'images/products/nike-black-shorts.webp',
    name: 'Nike Woven Lined Flow Shorts - Black | Pavement - Pavement NZ',
    rating:{
        stars: 4.5,
        count: 87
    },
    priceCents: 40095
},{
    image:'images/products/white-hoodie.jpeg',
    name: 'Plain simple t-shirt',
    rating:{
        stars: 4.5,
        count: 87
    },
    priceCents: 18900
},{
    image:'images/products/airforce-white.jpg',
    name: 'Shop Nike Air Force 1 Shadow Womens Shoes White',
    rating:{
        stars: 4.5,
        count: 87
    },
    priceCents: 239999 
},{
    image:'images/products/bloodline-shirt.jpg',
    name: 'Men Summer Oversized Casual T-shirts Bloodline ',
    rating:{
        stars: 4.5,
        count: 87
    },
    priceCents: 35090
},{
    image:'images/products/nike-tracksuit.jpeg',
    name: 'Boys Nike Dri-Fit Academy23 Tricot Black Football Pants ',
    rating:{
        stars: 4.5,
        count: 87
    },
    priceCents: 74995
},{
    image:'images/products/nike-shirt.webp',
    name: 'NIKE SOLO SWOOSH T-SHIRT White',
    rating:{
        stars: 4.5,
        count: 87
    },
    priceCents: 160099
}];

let productsHTML  = '';

products.forEach((product) => {
   productsHTML += `
     <div class="product-container">
        <div class="product-image-container">
            <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>

        <div class="product-rating-container">
            <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
        </div>

        <div class="product-price">
           ${product.priceCents / 100}
        </div>

        <div class="product-quantity-container">
            <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
        </div>

        <button class="add-to-cart-button button-primary">
            Add to Cart
        </button>
    </div>
    `;    
  
});

console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML 
= productsHTML;