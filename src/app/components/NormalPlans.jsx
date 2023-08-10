"use client";

import { useState, useEffect } from "react";
import { TbShoppingCart } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import AffirmLogo from "../media/affirm-logo.webp";
import Image from "next/image";

const NormalPlans = ({ TypeOfPlan }) => {
  const baseUrl = process.env.BASE_URL;
  function HandleAffirmButton() {
    useEffect;
    affirm.checkout({
      merchant: {
        user_confirmation_url: `${baseUrl}/checkout`,
        user_cancel_url: `${baseUrl}/canceled`,
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
          display_name: (() => {
            switch (TypeOfPlan) {
              case "a":
                return "Monthly";
              case "b":
                return "3-month";
              case "d":
                return "6-Month";
              case "e":
                return "Annual";
            }
          })(),
          sku: "ABC-123",
          unit_price: (() => {
            switch (TypeOfPlan) {
              case "a":
                return 39900;
              case "b":
                return 79900;
              case "c":
                return 149900;
              case "d":
                return 149900;
              case "e":
                return 239900;
              default:
                return 10000;
            }
          })(),
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
      total: (() => {
        switch (TypeOfPlan) {
          case "a":
            return 39900;
          case "b":
            return 79900;
          case "c":
            return 149900;
          case "d":
            return 149900;
          case "e":
            return 239900;
          default:
            return 10000;
        }
      })(),
    });

    affirm.checkout.open();
  }

  return (
    <div className="card-wrapper mn">
      <div
        className={
          TypeOfPlan === "a"
            ? "card-container"
            : "card-container card-container__offer"
        }
      >
        {(() => {
          switch (TypeOfPlan) {
            case "a":
              return (
                <div
                  className={
                    TypeOfPlan === "a"
                      ? "discount__offer discount__offer_hidden"
                      : "discount__offer discount__offer_active"
                  }
                >
                  <span>10% OFF!</span>
                </div>
              );
            case "b":
              return (
                <div
                  className={
                    TypeOfPlan === "a"
                      ? "discount__offer "
                      : "discount__offer discount__offer_active"
                  }
                >
                  <span>10% OFF!</span>
                </div>
              );
            case "d":
              return (
                <div
                  className={
                    TypeOfPlan === "a"
                      ? "discount__offer "
                      : "discount__offer discount__offer_active"
                  }
                >
                  <span>15% OFF!</span>
                </div>
              );
            case "e":
              return (
                <div
                  className={
                    TypeOfPlan === "a"
                      ? "discount__offer "
                      : "discount__offer discount__offer_active"
                  }
                >
                  <span>20% OFF!</span>
                </div>
              );
          }
        })()}

        <h2 className="medium-text">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "Monthly";
              case "b":
                return "3-month";
              case "d":
                return "6-Month";
              case "e":
                return "Annual";
            }
          })()}
          <br />
          Coaching Plan
        </h2>

        {(() => {
          switch (TypeOfPlan) {
            case "a":
              return null;
            case "b":
              return (
                <p className="discount__total">
                  <span>Before $975.00</span>
                </p>
              );

            case "d":
              return (
                <p className="discount__total">
                  <span>Before $1950.00</span>
                </p>
              );
            case "e":
              return (
                <p className="discount__total">
                  <span>Before $3900.00</span>
                </p>
              );
          }
        })()}

        <h4 className="card-text-price">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return (
                  <span>
                    $325.<span>00</span>
                  </span>
                );
              case "b":
                return (
                  <span>
                    $877.<span>50</span>
                  </span>
                );

              case "d":
                return (
                  <span>
                    $1657.<span>50</span>
                  </span>
                );
              case "e":
                return (
                  <span>
                    $3120.<span>00</span>
                  </span>
                );
            }
          })()}
          <span className="price-description">
            {(() => {
              switch (TypeOfPlan) {
                case "a":
                  return "/month";
                case "b":
                  return "/3 months";
                case "d":
                  return "/6 months";
                case "e":
                  return "/year";
              }
            })()}
          </span>
        </h4>
        <ul>
          <li className="card-list">Flexible and Frequent Check-Ins</li>
          <li className="card-list">Tailored Training and Nutrition Plans</li>
          <li className="card-list">Cutting-Edge PED Programming</li>
          <li className="card-list">Health Monitoring Through PEDs</li>
          <li
            className={
              TypeOfPlan === "a" ? "card-list " : "card-list card-list-hidden"
            }
          >
            No Initial Phone Consultation
          </li>
          <li
            className={
              TypeOfPlan === "a" ? "card-list card-list-hidden" : "card-list "
            }
          >
            Includes Initial Phone Consultation
          </li>
        </ul>
        <a
          target="_blank"
          className="purchase-button-link"
          href={(() => {
            switch (TypeOfPlan) {
              case "a":
                return "https://payments.bodybuildingandbs.com/full-time-coaching-monthly";
              case "b":
                return "https://payments.bodybuildingandbs.com/full-time-coaching-3-months";
              case "d":
                return "https://payments.bodybuildingandbs.com/full-time-coaching-6-months";
              case "e":
                return "https://payments.bodybuildingandbs.com/full-time-coaching-annual";
            }
          })()}
        >
          <button className="button">
            <TbShoppingCart className="icon" /> Purchase
          </button>
        </a>
        {/*  <Elements stripe={stripePromise}>
          <PaymentMethodMessagingElement
            options={{
              amount: 9900,
              currency: "USD",
              paymentMethodTypes: ["affirm"],
              countryCode: "US",
            }}
          />
        </Elements> */}
        <a className="purchase-button-link">
          <button
            className="button button--affirm"
            onClick={HandleAffirmButton}
          >
            Pay with
            <Image src={AffirmLogo} alt="Affirm Logo" className="img--afirm" />
          </button>
        </a>
      </div>
      <div className="faq--block">
        <div className="faq--item">
          <h5 className="faq--heading">Lifestyle</h5>
          <p className="faq--description">
            Your well-being is my main priority. I will help you make the
            necessary adjustments to achieve peak form and stay as healthy as
            you can be.
          </p>
        </div>
        <div className="faq--item">
          <h5 className="faq--heading">Contest Prep</h5>
          <p className="faq--description">
            Strength and physique competitions demand rigorous preparation,
            including specific goal setting, targeted training, precision
            nutrition, and caloric manipulation.
          </p>
        </div>
        <div className="faq--item">
          <h5 className="faq--heading">Off-Season</h5>
          <p className="faq--description">
            The off season is critical to prepare between competitions, so we
            will focus on recovery, muscle building, strength training, and
            nutritional adjustments.
          </p>
        </div>
        <div className="faq--item">
          <h5 className="faq--heading">Custom Goals</h5>
          <p className="faq--description">
            Whatever we set out to do, I can help you achieve it. From aesthetic
            progress to lifestyle improvements, I will provide support to help
            you stay focused.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NormalPlans;
