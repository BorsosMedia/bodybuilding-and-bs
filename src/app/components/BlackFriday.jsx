"use client";

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const BlackFriday = ({ TypeOfPlan }) => {
  return (
    <div className="card-wrapper black-friday-wrapper">
      <div
        className={
          TypeOfPlan === "bf"
            ? "black-friday-card card-container"
            : "card-hidden"
        }
      >
        <div className="item-price">
          {/* <div className="item-price-tail"></div> */}
          <h2 className="medium-text">20% OFF!</h2>
        </div>
        <h2 className="medium-text">
          Ascending <br /> 1 month
        </h2>

        <p className="paragraph-text">
          Custom programming in the most affordable way possible
        </p>
        <p className="BF-deal">
          Before <br />
          <span>$200</span>
        </p>
        <h4 className="card-text-price">
          $160
          <span className="price-description"> /month</span>
        </h4>
        <ul>
          <li className="card-list">Custom workout regimen and diet</li>
          <li className="card-list">Weekly programming tweaks</li>
          <li className="card-list">E-mail and text me directly</li>
        </ul>
        <p className="second-cta">Start the program when you want </p>
        <a
          target="_blank"
          className="purchase-button-link"
          href="https://effercoaching.com/ascending-monthly-bf"
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>

      <div
        className={
          TypeOfPlan === "bf"
            ? "black-friday-card card-container"
            : "card-hidden"
        }
      >
        <div className="item-price">
          {/* <div className="item-price-tail"></div> */}
          <h2 className="medium-text">30% OFF!</h2>
        </div>
        <h2 className="medium-text">
          Ascending <br /> 3 months
        </h2>

        <p className="paragraph-text">
          Custom programming in the most affordable way possible
        </p>
        <p className="BF-deal">
          Before <br />
          <span>$550</span>
        </p>
        <h4 className="card-text-price">
          $385
          <span className="price-description"> /3 months</span>
        </h4>
        <ul>
          <li className="card-list">Custom workout regimen and diet</li>
          <li className="card-list">Weekly programming tweaks</li>
          <li className="card-list">E-mail and text me directly</li>
        </ul>
        <p className="second-cta">Start the program when you want </p>
        <a
          target="_blank"
          className="purchase-button-link"
          href="https://effercoaching.com/ascending-3-months-bf"
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>

      <div
        className={
          TypeOfPlan === "bf"
            ? "black-friday-card card-container"
            : "card-hidden"
        }
      >
        <div className="item-price">
          {/* <div className="item-price-tail"></div> */}
          <h2 className="medium-text">40% OFF!</h2>
        </div>
        <h2 className="medium-text">
          Ascending <br /> 6 months
        </h2>

        <p className="paragraph-text">
          Custom programming in the most affordable way possible
        </p>
        <p className="BF-deal">
          Before <br />
          <span>$1000</span>
        </p>
        <h4 className="card-text-price">
          $600
          <span className="price-description"> /6 months</span>
        </h4>
        <ul>
          <li className="card-list">Custom workout regimen and diet</li>
          <li className="card-list">Weekly programming tweaks</li>
          <li className="card-list">E-mail and text me directly</li>
        </ul>
        <p className="second-cta">Start the program when you want </p>
        <a
          target="_blank"
          className="purchase-button-link"
          href="https://effercoaching.com/ascending-6-months-bf"
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>

      <div
        className={
          TypeOfPlan === "bf"
            ? "black-friday-card card-container"
            : "card-hidden"
        }
      >
        <div className="item-price">
          {/* <div className="item-price-tail"></div> */}
          <h2 className="medium-text">50% OFF!</h2>
        </div>
        <h2 className="medium-text">
          Ascending <br /> Annual
        </h2>

        <p className="paragraph-text">
          Custom programming in the most affordable way possible
        </p>
        <p className="BF-deal">
          Before <br />
          <span>$1950</span>
        </p>
        <h4 className="card-text-price">
          $975
          <span className="price-description"> /year</span>
        </h4>
        <ul>
          <li className="card-list">Custom workout regimen and diet</li>
          <li className="card-list">Weekly programming tweaks</li>
          <li className="card-list">E-mail and text me directly</li>
        </ul>
        <p className="second-cta">Start the program when you want </p>
        <a
          target="_blank"
          className="purchase-button-link"
          href="https://effercoaching.com/ascending-annual-bf"
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>
    </div>
  );
};

export default BlackFriday;
