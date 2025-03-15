import "./contactpage.css";

function Contactpage() {
  return (
    <div className="contactpage">
      <div className="header"></div>
      <h1 className="contact-title">- Contact -</h1>
      <p className="contact-text">Customer Service opening hours & contact details<br></br>
        Monday - Friday: 08.00 - 19.00 CET <br></br>
        Weekends & public holidays: Closed<br></br>
        You can reach us as follows:<br></br>
        <strong>Phone:</strong>  +46 123 456 789<br></br>
        <strong>Email:</strong>  deCube@deCube.com
      </p>
      <p className="contact-text"><strong>FAQ</strong></p>

      <div className="containerA">
        <p className="FAQ-text-L"><strong>Q: How long does shipping take?</strong><br></br>A: Standard shipping takes 5-10 business days, while express shipping is available in 2-4 business days.
        You'll receive a tracking number once your order is shipped.</p>
      </div>

      <div className="containerB">
        <p className="FAQ-text-R"><strong>Q: Can I modify or cancel my order after placing it?</strong><br></br> A: Orders can be modified or canceled within 24 hours of purchase. 
        Please contact our support team as soon as possible.</p>
      </div>

      <div className="containerA">
        <p className="FAQ-text-L"><strong>Q: Do you offer free returns?</strong><br></br> A: No, return shipping costs are the responsibility of the customer 
        unless the item is defective or incorrect.</p>
      </div>

    </div>
  );
}

export default Contactpage;
