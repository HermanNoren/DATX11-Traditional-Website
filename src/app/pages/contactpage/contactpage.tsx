import "./contactpage.css";

function Contactpage() {
    return (
        <div className="contactpage">
            <div className="header"></div>
            <h1 className="contact-title">- Contact -</h1> 
            <div className="contactContainer"></div>

            <div className="sections">
            <img
            src="/TransparentCube.png"
            className="transparent-image"
          />

          <div className="deCube">
            <h2 className="title">- deCube HQ -</h2>
            <h3 className="subtitle">contact & location</h3>
            <div className="square">
                <div className="info">
                    <div><span className="bold">Phone:</span> <span className="text">+46 123 456 789</span></div>
                    <div><span className="bold">Email:</span> <span className="text">deCube@deCube.com</span></div>
                    <div><span className="bold">Address:</span> <span className="text">decube street, Gothenburg Sweden</span></div>
                    <div><span className="bold">Socials:</span> <span className="text"></span></div>
                </div>
            </div>
          </div>
          
          <img
            src="/ContactHQ.png"
            className="HQimage"
          />
        </div>

           
           </div>
            );
}

            export default Contactpage;
