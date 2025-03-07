import "./confirmation.css";
import Link from "next/link";

const ConfirmationPage: React.FC = () => {
  return (
    <div className="confirmation-page">
      <div className="checkout-navbar">
        <Link href="/checkoutpage">
          <div className="back-arrow">
          <img src="/back-arrow.png" alt="Back" className="back-icon" />
        </div>
        </Link>
        <Link href="/homepage">
        <h2 className="top-text">deCude</h2>
        </Link>
      </div>
      <div className="body">
        <img src="/confirmation-cube.png" alt="Confirmation Cube" className="confirmation-cube" />
        <div className="text">
          <h3 className="text">Thank you for</h3>
          <h3 className="text">checking out deCube!</h3>
          <p className="instruction-text">Press the button below to get to the start of the site</p>
        </div>
      </div>
      <div className="button-wrapper">
        <Link href="/homepage">
          <button className="button">deCube.com</button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;