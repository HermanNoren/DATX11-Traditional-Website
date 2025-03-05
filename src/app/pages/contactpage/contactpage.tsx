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
           
               <div className="square">
               <h2 className="title">- deCube HQ -</h2>
               <h3 className="subtitle">contact & location</h3>
                    <span className="bold">Phone:</span><br></br> +46 123 456 789 <br></br>
                    <span className="bold">Email:</span><br></br> deCube@deCube.com <br></br>
                    <span className="bold">Adress:</span><br></br> decube street<br></br> Gothenburg Sweden<br></br>
                    <span className="bold">Socials:</span>
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
