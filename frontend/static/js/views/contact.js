import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("contact");
    }

    async getHtml(){
       return `
        
<section class="contact" id="contact">
<h1 class="heading"><span>Contact</span> Us </h1>

<div class="row">

  <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.266645463376!2d35.7212734!3d0.0522494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1780a7f0a4976cdf%3A0x85cf8238fb44c06b!2sTaidys%20restaurant%20ltd!5e0!3m2!1sen!2ske!4v1717069709768!5m2!1sen!2ske" width="800" height="430" allowfullscreen="" loading="lazy"></iframe>

<div class="contact-container">
    <form action="submit_form.php" method="post">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required>
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <div class="form-group">
            <input type="submit" value="Submit">
        </div>
    </form>
</div>

</div>

</section>
       `;
    }
}