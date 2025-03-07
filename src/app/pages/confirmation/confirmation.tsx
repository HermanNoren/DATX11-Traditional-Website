import "./confirmation.css";

const ConfirmationPage: React.FC = () => {
  return (
    <div className="confirmation-page">
      <div className="checkout-navbar">
        <div className="back-arrow">
          <img src="/back-arrow.png" alt="Back" className="back-icon" />
        </div>
        <h2 className="top-text">deCude</h2>
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
              <button className="button">
                deCube.com
              </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;