export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact us</h2>
      <h3>Message Us</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
        voluptates eos rerum quod nobis eaque consectetur incidunt deserunt odio
        animi?
      </p>
      <p>(location Icon)156 Sixth Avenue, Nashik Nagar, NN 20990</p>
      <p>(Email Icon) ShringaarContact@gmail.com</p>
      <p>(phone Icon)+91 959595959</p>

      <div className="contactForm">
        <form action="">
          <label htmlFor="firstName">
            <input type="text" placeholder="First Name" />
          </label>
          <label htmlFor="secondName">
            <input type="text" placeholder="Last Name" />
          </label>
          <label htmlFor="message">
            <textarea id="story" name="story"
              rows="5" cols="30">
              Once I gifted Shringaar jwellery to...
            </textarea>
          </label>
          <button>Send</button>
        </form>
      </div>
    </section>
  );
}
