import "./aboutpage.css";
import Link from "next/link";

function Aboutpage() {
  return (
    <div className="aboutpage">
      <div className="header"></div>
      <h1 className="about-title">- About -</h1>
      <div className="aboutContainer">
        <div className="sections">
          <div className="deCube">
            <h2 className="title">- deCube -</h2>
            <h3 className="subtitle">A company that speaks volumes</h3>
            <p className="text">
              deCube is a company that sells aesthetic and decorative cubes.
              Behind deCube is a group of cube enthusiasts that came across this
              idea to create a sleek and exclusive cube for all cool and stylish
              young adults looking for the ultimate interior detail.
            </p>
          </div>
          <img
            src="/aboutDouble.png"
            alt="double logo"
            className="doube-image"
          />
        </div>
        <div className="sectionInternalShapes">
          <img src="/aboutChair.png" alt="chair logo" className="chair-image" />
          <div className="internal-shapes">
            <h2 className="title">- Internal shapes -</h2>
            <p className="text">
              Each deCube arrives in meticulously designed, luxurious packaging,
              accompanied by a certificate of authenticity, ensuring its
              exclusivity and prestige.
            </p>
            <p> .</p>
            <p className="text">
              We offer worldwide shipping, with no returns, reflecting the
              uncompromising quality and rarity of our product.
            </p>
            <Link href="/productpage">
              <button className="buy-button">Buy now</button>
            </Link>
          </div>
          <div className="containerSubtitleInternalShapes">
            <p className="subtitleInternalShapes">
              CUBE/KUB/CUBO/
              <br />
              KUUTIO/立方体
            </p>
          </div>
        </div>
        <div className="sections">
          <div className="astrolight">
            <h2 className="title">- AstroLight -</h2>
            <h3 className="subtitle">Exclusive materials since 1998 </h3>
            <p className="text">
              Astrolite, a rare outer-Earth alloy discovered on the distant
              asteroid Ryugu, was brought back to Earth in an unprecedented
              deep-space mission. When forged under extreme conditions, it
              crystallizes into perfect cubes of unyielding brilliance,
              reflecting an eerie, otherworldly glow.
            </p>
          </div>
          <img
            src="/astrolight 3d.png"
            alt="astrolight logo"
            className="astrolight-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
