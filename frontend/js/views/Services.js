import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Services");
    }

    async getHtml(){
       return `
       <section class="menu" id="menu">
       <h1 class="heading"> Our <span>menu</span></h1>
       <div class="box-container">
         <div class="box">
           <img src="static/fried.jpg" alt="">
           <h3>Tasty and Healthy</h3>
           <div class="price">$15.99 <span>20.99</span></div>
           <a href="#" class="btn">Add to Cart</a>
         </div>
     
         <div class="box">
           <img src="static/food-6.jpg" alt="">
           <h3>Tasty and Healthy</h3>
           <div class="price">$15.99 <span>20.99</span></div>
           <a href="#" class="btn">Add to Cart</a>
         </div>
     
         <div class="box">
           <img src="static/food-5.jpg" alt="">
           <h3>Tasty and Healthy</h3>
           <div class="price">$15.99 <span>20.99</span></div>
           <a href="#" class="btn">Add to Cart</a>
         </div>
     
         <div class="box">
           <img src="static/food-1.jpg" alt="">
           <h3>Tasty and Healthy</h3>
           <div class="price">$15.99 <span>20.99</span></div>
           <a href="#" class="btn">Add to Cart</a>
         </div>
     
         <div class="box">
           <img src="static/food-4.jpg" alt="">
           <h3>Tasty and Healthy</h3>
           <div class="price">$15.99 <span>20.99</span></div>
           <a href="#" class="btn">Add to Cart</a>
         </div>
     
         <div class="box">
           <img src="static/food-3.jpg" alt="">
           <h3>Tasty and Healthy</h3>
           <div class="price">$15.99 <span>20.99</span></div>
           <a href="#" class="btn">Add to Cart</a>
         </div>
       </div>
     </section>
       `;
    }
}