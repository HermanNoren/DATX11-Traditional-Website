import "./contactpage.css";

function Contactpage() {
  return (
    <div className="contactpage">
      <div className="header"></div>
      <h1 className="contact-title">- Contact -</h1>
      <div className="contactContainer"></div>

      <div className="contact-sections">
        <img src="/TransparentCube.png" className="transparent-image" />

        <div className="deCube">
          <h2 className="contact-decube-title">- deCube HQ -</h2>
          <h3 className="contact-subtitle">contact & location</h3>
          <div className="square">
            <div className="info">
              <div>
                <span className="bold">Phone:</span>{" "}
                <span className="contact-text">+46 123 456 789</span>
              </div>
              <div>
                <span className="bold">Email:</span>{" "}
                <span className="contact-text">deCube@deCube.com</span>
              </div>
              <div>
                <span className="bold">Address:</span>{" "}
                <span className="contact-text">
                  decube street, Gothenburg Sweden
                </span>
              </div>
              <div>
                <span className="bold">Socials:</span>{" "}
                <span className="contact-text"></span>
              </div>
            </div>
          </div>
        </div>

        <img src="/ContactHQ.png" className="HQimage" />
      </div>
    </div>
  );
}

export default Contactpage;
