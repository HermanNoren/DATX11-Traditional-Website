"use client";

import React from "react";
import { useCart } from "../components/cartlogic";
import "./products.css";

interface Product {
  id: string;
  name: string;
  price: number;
  dimensions: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: "petite",
    name: "PETITE",
    price: 4999,
    dimensions: "10x10x10 cm",
    image: "/petit.png",
  },
  {
    id: "regal",
    name: "REGAL",
    price: 7999,
    dimensions: "20x20x20cm",
    image: "/regal.png",
  },
  {
    id: "imperial",
    name: "IMPERIAL",
    price: 9999,
    dimensions: "30x30x30cm",
    image: "/imperial.png",
  },
];

const ProductPage: React.FC = () => {
  const { cartItems, addItem } = useCart();

  return (
    <div className="product-page">
      <div className="product-header"></div>
      <h1 className="products-title">- Products -</h1>
      <p className="product-text">
        Experience deCube — a revolutionary decorating cube crafted from
        Astrolite, an exclusive <br />
        material from the depths of space. With its sleek, modern aesthetic and
        cutting-edge <br />
        composition, deCube stands as a testament to innovation and
        sophistication.
      </p>

      <div className="product-grid">
        {/* PETITE */}
        <div className="product-card">
          <img src="/petit.png" alt="Petite Cube" className="product-image" />
          <div className="product-details">
            <h2 className="product-title">PETITE</h2>
            <p className="product-description">
              The Petite, a refined choice for those who value rarity in a
              compact <br />
              form. A favorite among collectors looking to own a rare piece of
              the <br />
              future. Whether displayed on a desk or stored as a long-term
              asset, <br />
              it carries the unmistakable presence of something beyond Earth.
            </p>
            <p className="product-dimensions">
              <strong>Dimensions:</strong> 10x10x10 cm
            </p>
            <p className="product-price">
              <strong>Price:</strong>&nbsp;&nbsp;4999 SEK
            </p>
            <button
              className="product-button"
              onClick={() => addItem(PRODUCTS.find((p) => p.id === "petite")!)}
              disabled={cartItems.some((item) => item.id === "petite")}
            >
              ADD TO CART
            </button>
          </div>
        </div>

        {/* REGAL */}
        <div className="product-card">
          <img src="regal.png" alt="Regal Product" className="product-image" />
          <div className="product-details">
            <h2 className="product-title">REGAL</h2>
            <p className="product-description">
              The Regal, a perfect balance of rarity and prestige, the go-to
              choice <br />
              for industry leaders and forward-thinkers. Coveted yet attainable,
              it's
              <br />
              the cube that moves industries and closes deals. When a Regal is
              in
              <br />
              your hands, you hold more than metal—you hold progress.
            </p>
            <p className="product-dimensions">
              <strong>Dimensions:</strong> 20x20x20cm
            </p>
            <p className="product-price">
              <strong>Price:</strong>&nbsp;&nbsp;7999 SEK
            </p>
            <button
              className="product-button"
              onClick={() => addItem(PRODUCTS.find((p) => p.id === "regal")!)}
              disabled={cartItems.some((item) => item.id === "regal")}
            >
              ADD TO CART
            </button>
          </div>
        </div>

        {/* IMPERIAL */}
        <div className="product-card">
          <img
            src="imperial.png"
            alt="Imperial Product"
            className="product-image mb-5"
          />
          <div className="product-details">
            <h2 className="product-title">IMPERIAL</h2>
            <p className="product-description">
              The Imperial, the largest and boldest, a monolith of Astrolite,
              commanding <br />
              attention whether placed in a corporate headquarters, or private
              collection. <br />
              Its sheer presence is a testament to those who operate on a
              grander scale. <br />
              To own an Imperial is to stake a claim in the future itself.
            </p>
            <p className="product-dimensions">
              <strong>Dimensions:</strong> 30x30x30cm
            </p>
            <p className="product-price">
              <strong>Price:</strong>&nbsp;&nbsp;9999 SEK
            </p>
            <button
              className="product-button"
              onClick={() =>
                addItem(PRODUCTS.find((p) => p.id === "imperial")!)
              }
              disabled={cartItems.some((item) => item.id === "imperial")}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="margin">.</div>
    </div>
  );
};

export default ProductPage;
