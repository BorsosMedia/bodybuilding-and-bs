"use client";

import React from "react";
import AffirmLogo from "../media/affirm-logo.webp";
import Image from "next/image";

function CustomPlans() {
  function HandleAffirmButton(name, price) {
    affirm.checkout({
      merchant: {
        user_confirmation_url: "https://bodybuilding-bs.vercel.app/checkout",
        user_cancel_url: "https://bodybuilding-bs.vercel.app/canceled",
        user_confirmation_url_action: "GET",
        name: "Bodybuilding & BS",
      },
      shipping: {
        name: {
          first: "Joe",
          last: "Doe",
        },
        address: {
          line1: "633 Folsom St",
          line2: "Floor 7",
          city: "San Francisco",
          state: "CA",
          zipcode: "94107",
          country: "USA",
        },
        phone_number: "4153334567",
        email: "joedoe@123fakestreet.com",
      },
      billing: {
        name: {
          first: "Joe",
          last: "Doe",
        },
        address: {
          line1: "633 Folsom St",
          line2: "Floor 7",
          city: "San Francisco",
          state: "CA",
          zipcode: "94107",
          country: "USA",
        },
        phone_number: "4153334567",
        email: "joedoe@123fakestreet.com",
      },
      items: [
        {
          display_name: name,
          sku: "ABC-123",
          unit_price: price,
          qty: 1,
        },
      ],
      metadata: {
        mode: "modal",
      },
      order_id: "JKLMO4321",
      currency: "USD",
      financing_program: "flyus_3z6r12r",
      shipping_amount: 0,
      tax_amount: 0,
      total: price,
    });

    affirm.checkout.open();
  }

  return (
    <div className="plans--container plans--container__custom mn">
      <h3 className="heading text--white mn--title">
        One Time <span className="primary-color-accent">Custom Plans</span>
      </h3>
      <p className="text--white">
        Everybody has different goals and I can help you achieve all of them.
        Choose any of my custom plans depending on your needs.
      </p>
      <div className="plan--block-wrapper">
        <div className="plan--block__container">
          <h3>3-month bulking plan</h3>
          <p>Get bigger, stronger, and more powerful than you ever have.</p>
          <h4>$499</h4>
          <ul>
            <li>Specialized Diet</li>
            <li>Training Routine</li>
            <li>Tracking & Accountability App</li>
            <li>Customized</li>
            <li>Fast Delivery</li>
            <li>No Check-ins</li>
          </ul>
          <div className="buttons--wrapper buttons--wrapper__horizontal">
            <a className="purchase-button-link">
              <button
                className="button button--affirm"
                onClick={() =>
                  HandleAffirmButton("3-month bulking plan", 49900)
                }
              >
                Pay with
                <Image
                  src={AffirmLogo}
                  alt="Affirm Logo"
                  className="img--afirm"
                />
              </button>
            </a>
            <a
              href="https://payments.bodybuildingandbs.com/3-months-bulking-plan"
              target="_blank"
              className="button button--cta"
            >
              Purchase
            </a>
          </div>
        </div>

        <div className="plan--block__container">
          <h3>3-month shredding plan</h3>
          <p>
            Time to build yourself up. Get in top shape for contests and catch
            the attention of everybody everywhere.
          </p>
          <h4>$499</h4>
          <ul>
            <li>Specialized Diet</li>
            <li>Training Routine</li>
            <li>Tracking & Accountability App</li>
            <li>Customized</li>
            <li>Fast Delivery</li>
            <li>Does not include check-ins</li>
          </ul>
          <div className="buttons--wrapper buttons--wrapper__horizontal">
            <a className="purchase-button-link">
              <button
                className="button button--affirm"
                onClick={() =>
                  HandleAffirmButton("3-month shredding plan", 49900)
                }
              >
                Pay with
                <Image
                  src={AffirmLogo}
                  alt="Affirm Logo"
                  className="img--afirm"
                />
              </button>
            </a>
            <a
              href="https://payments.bodybuildingandbs.com/3-months-shredding-plan"
              target="_blank"
              className="button button--cta"
            >
              Purchase
            </a>
          </div>
        </div>
        <div className="plan--block__container">
          <h3>3-month body recomposition plan</h3>
          <p>
            Building muscle and getting stronger while burning body fat is
            possible, you just need the right plan.
          </p>
          <h4>$499</h4>
          <ul>
            <li>Specialized Diet</li>
            <li>Training Routine</li>
            <li>Tracking & Accountability App</li>
            <li>Customized</li>
            <li>Fast Delivery</li>
            <li>No Check-ins Included</li>
          </ul>
          <div className="buttons--wrapper buttons--wrapper__horizontal">
            <a className="purchase-button-link">
              <button
                className="button button--affirm"
                onClick={() =>
                  HandleAffirmButton("3-month body recomposition plan", 49900)
                }
              >
                Pay with
                <Image
                  src={AffirmLogo}
                  alt="Affirm Logo"
                  className="img--afirm"
                />
              </button>
            </a>
            <a
              href="https://payments.bodybuildingandbs.com/3-months-body-recomposition-plan"
              target="_blank"
              className="button button--cta"
            >
              Purchase
            </a>
          </div>
        </div>
        <div className="plan--block__container">
          <h3>6-week reverse diet plan</h3>
          <p>
            Focus on increasing your calorie intake without the risk of losing
            progress or regaining body fat.
          </p>
          <h4>$299</h4>
          <ul>
            <li>Specialized Diet</li>
            <li>Training Routine</li>
            <li>Tracking & Accountability App</li>
            <li>Customized</li>
            <li>Fast Delivery</li>
            <li>No Check-ins</li>
          </ul>
          <div className="buttons--wrapper buttons--wrapper__horizontal">
            <a className="purchase-button-link">
              <button
                className="button button--affirm"
                onClick={() => {
                  HandleAffirmButton("6-week reverse diet plan", 29900);
                }}
              >
                Pay with
                <Image
                  src={AffirmLogo}
                  alt="Affirm Logo"
                  className="img--afirm"
                />
              </button>
            </a>
            <a
              href="https://payments.bodybuildingandbs.com/6-week-revers-diet-plan"
              target="_blank"
              className="button button--cta"
            >
              Purchase
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomPlans;
