"use client";

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MonthlyPlan = () => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        {/*  <div className='item-price'>Starting at $100 </div>
         */}
        <h2 className="medium-text">Normie</h2>

        <p className="paragraph-text">
          Custom programming in the most afforable way possible
        </p>
        <h4 className="card-text-price">
          $100 <span className="price-description">/month</span>
        </h4>
        <ul>
          {/* ‣ Custom diet and workout regimen ‣ Bi-weekly programming tweaks ‣ E-Mail John directly */}
          <li className="card-list">Custom workout regimen and diet</li>
          <li className="card-list">Bi-weekly programming tweaks</li>
          <li className="card-list">E-mail and text me directly</li>
        </ul>
        <button className="button">
          <AiOutlineShoppingCart className="icon" /> Purchase
        </button>
      </div>

      <div className="card-container">
        {/*     <div className='item-price'>$200 monthly</div> */}
        <h2 className="medium-text">Ascending</h2>
        <p className="paragraph-text">
          Custom programming with constant feedback and more tweaks
        </p>
        <h4 className="card-text-price">
          $200 <span className="price-description">/month</span>
        </h4>
        <ul>
          {/* ‣ Custom diet and workout regimen ‣ Bi-weekly programming tweaks ‣ E-Mail John directly */}
          <li className="card-list">Custom workout regimen and diet</li>
          <li className="card-list">Weekly programming tweaks</li>
          <li className="card-list">E-mail and text me directly</li>
        </ul>
        <button className="button">
          <AiOutlineShoppingCart className="icon" /> Purchase
        </button>
      </div>

      <div className="card-container">
        {/*   <div className='item-price'>$250 monthly</div> */}
        <h2 className="medium-text">Srs - Bodybuild</h2>
        <p className="paragraph-text">
          Custom programming with constant feedback and prep secrets
        </p>
        <h4 className="card-text-price">
          $250 <span className="price-description">/month</span>
        </h4>
        <ul>
          {/* ‣ Custom diet and workout regimen ‣ Bi-weekly programming tweaks ‣ E-Mail John directly */}
          <li className="card-list">Custom workout regimen and diet</li>
          <li className="card-list">Unlimited programming tweaks</li>
          <li className="card-list">Posing lessons and prep tips</li>
        </ul>
        <button className="button">
          <AiOutlineShoppingCart className="icon" /> Purchase
        </button>
      </div>
    </div>
  );
};

export default MonthlyPlan;
