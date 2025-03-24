import "./homepage.css";
import Link from "next/link";

function Homepage() {
  return (
    <>
      <div className="homepage">
        <div className="start">
          <h1 className="brand-home">
            <span className="deC">deC</span>
            <span className="ube">ube</span>
          </h1>
          <h2 className="slogan">
            <span className="slogan1">"Because everything i</span>
            <span className="slogan2">s better in cube form"</span>
          </h2>
          <Link href="/products">
            <button className="homepage-buy-button">Buy now</button>
          </Link>
        </div>
        <div className="sections">
          <img src="/Chair.png" alt="double logo" className="chair-image" />
          <div className="luxurious-decorations">
            <h2 className="title">- Luxurious decorations -</h2>
            <p className="text">
              Acquiring a cube is more than a purchase, it's an entry into a
              world of luxury and refinement. Each Astrolite cube is
              precision-forged, certified, and delivered with the assurance of
              authenticity. Designed for collectors, pioneers, and visionaries,
              deCube offers a seamless way to own a piece of the extraordinary.
              In a market where the exceptional is never ordinary, deCube sets
              the standard.
            </p>
            <Link href="/products">
              <button className="homepage-section-button">Products</button>
            </Link>
          </div>
        </div>
        <div className="sections">
          <div className="sizes">
            <h2 className="title">- Astrolight in three sizes -</h2>
            <p className="text">
              Astrolite cubes come in three exclusive sizes, each a symbol of
              rarity and prestige. Petit, a true gem refined, and collected by
              those who understand true value. Regal, a true power move, the
              standard for elites who shape industries and technology. Imperial,
              the ultimate achievement, nearly unobtainable, and whispered about
              in only the highest circles of influence.
            </p>
          </div>
          <img src="/Three sizes.png" alt="cube logo" className="cubes-image" />
          <div className="containerSubtitleInternalShapes"></div>
        </div>
        <div className="sections">
          <img
            src="/astrolight 3d.png"
            alt="astrolight logo"
            className="astrolight-image"
          />
          <div className="astrolight">
            <h2 className="title">- AstroLight -</h2>
            <h3 className="subtitle">Exclusive materials since 1998 </h3>
            <p className="text">
              A rare outer-Earth alloy discovered on the distant asteroid Ryugu,
              brought back to Earth in an unprecedented deep-space mission.
              Forged under extreme conditions, to form perfect cubes of
              unyielding brilliance.
            </p>
          </div>
        </div>
        <div className="margin">.</div>
      </div>
    </>
  );
}

export default Homepage;
