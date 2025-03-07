import React from "react";
import "./products.css";

const ProductPage: React.FC = () => {
  return (
    <div className="product-page">
      <div className="header"></div>
      <h1 className="about-title">- Products -</h1>
      <p className="text">
        Experience deCube—a revolutionary decorating cube crafted from
        Astrolite, an exclusive <br />
        material from the depths of space. With its sleek, modern aesthetic and
        cutting-edge <br />
        composition, deCube stands as a testament to innovation and
        sophistication.
      </p>

      <div className="line"></div>
      <div className="product-grid">
        {/* PETITE */}
        <div className="product-card">
          <img src="/petit.png" alt="Petite Cube" className="product-image" />
          <div className="product-details">
            <h2 className="product-title">PETITE</h2>
            <p className="description">
              The Petit, a refined choice for those who value rarity in a
              compact <br />
              form. A favorite among collectors looking to own a rare piece of
              the <br />
              future. Whether displayed on a desk or stored as a long-term
              asset, <br />
              it carries the unmistakable presence of something beyond Earth.
            </p>
            <p className="dimensions">
              <strong>Dimensions:</strong> 10x10x10 cm
            </p>
            <p className="price">
              <strong>Price:</strong>&nbsp;&nbsp;4999 SEK
            </p>
            <button className="buy-button">Add to Cart</button>
          </div>
        </div>

        {/* REGAL */}
        <div className="product-card">
          <img src="regal.png" alt="Regal Product" className="product-image" />
          <div className="product-details">
            <h2 className="product-title">REGAL</h2>
            <p className="description">
              The Regal, a perfect balance of rarity and prestige, the go-to
              choice <br />
              for industry leaders and forward-thinkers.Coveted yet attainable,
              it's
              <br />
              the cube that moves industries and closes deals. When a Regal is
              in
              <br />
              your hands, you hold more than metal—you hold progress.
            </p>
            <p className="dimensions">
              <strong>Dimensions:</strong> 20x20x20cm
            </p>
            <p className="price">
              <strong>Price:</strong>&nbsp;&nbsp;7999 SEK
            </p>
            <button className="buy-button">Add to Cart</button>
          </div>
        </div>

        {/* IMPERIAL */}
        <div className="product-card">
          <img
            src="imperial.png"
            alt="Imperial Product"
            className="product-image"
          />
          <div className="product-details">
            <h2 className="product-title">IMPERIAL</h2>
            <p className="description">
              The Imperial, the largest and boldest, A monolith of Astrolite,
              commanding <br />
              attention whether placed in a corporate headquarters, or private
              collection. <br />
              Its sheer presence is a testament to those who operate on a
              grander scale. <br />
              To own an Imperial is to stake a claim in the future itself.
            </p>
            <p className="dimensions">
              <strong>Dimensions:</strong> 30x30x30cm
            </p>
            <p className="price">
              <strong>Price:</strong>&nbsp;&nbsp;9999 SEK
            </p>
            <button className="buy-button">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="margin">.</div>
    </div>
  );
};

export default ProductPage;
