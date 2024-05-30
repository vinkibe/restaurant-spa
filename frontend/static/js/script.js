import Home from "./views/Home.js";
import about from "./views/about.js";
import Services from "./views/Services.js";
import reviews from "./views/reviews.js";
import contact from "./views/contact.js";


const navigateTo = url =>{
    history.pushState(null, null, url);
    router();
};

const router = async () =>{
    const routes = [
        {path: "/", view: Home},
        {path: "/about", view: about},
        {path: "/services", view: Services},
        {path: "/reviews", view: reviews},
        {path: "/contact", view: contact},
    ];

    // test each route for potential match
    const potentialMatches = routes.map(route =>{
        return{
            route: route,
            isMatch: location.pathname === route.path
        };
    });
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view(); 

    document.querySelector("#app").innerHTML = await view.getHtml();

};

window.addEventListener("popstate",router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href); 
        }
    });

    router();
});











let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
} 