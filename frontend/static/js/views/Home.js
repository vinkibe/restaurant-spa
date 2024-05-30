import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Home");
    }

    async getHtml(){
       return `
       <!-- Home section starts -->
       <section class="home" id="home">
         <div class="content">
           <h3>Amazing food every hour</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolore magna aliqua. Ut enim ad minim veniam, quis 
           nostrud exercitation ullamco do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           <a href="#" class="btn">Get yours now</a>
         </div>
       </section>`;
    }
}