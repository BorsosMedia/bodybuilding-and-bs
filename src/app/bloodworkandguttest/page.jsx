"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Nick from "../media/nick.png";
import BBLogo from "../media/BBLogo.png";
import USflag from "../media/usflag.png";
import IFBB from "../media/ifbb.png";
import AffirmLogo from "../media/affirm-logo.webp";

function GutServiceScreen() {
  // const navigate = useNavigate();
  const GutRef = useRef();
  const handleCTA = () => {
    GutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
          // item_image_url: "http://merchantsite.com/images/awesome-pants.jpg",
          // item_url: "http://merchantsite.com/products/awesome-pants.html",
          // categories: [
          //   ["Home", "Bedroom"],
          //   ["Home", "Furniture", "Bed"],
          // ],
        },
      ],
      // discounts: {
      //   RETURN5: {
      //     discount_amount: 500,
      //     discount_display_name: "Returning customer 5% discount",
      //   },
      //   PRESDAY10: {
      //     discount_amount: 1000,
      //     discount_display_name: "President's Day 10% off",
      //   },
      // },
      metadata: {
        // shipping_type: "UPS Ground",
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
    <>
      <main className="hero-section hero-section__gutwork">
        <div className="heroImg"></div>
        {/*  <img src={Nick} className="nick-crop" alt="" /> */}
        {/*  <img src={maskGroup} className="maskImg" alt="" /> */}
        <div className="hero-container">
          <div className="hero-text">
            <Link href="/">
              <img src={BBLogo} className="bbs--logo" alt="" />
            </Link>
            <h1 className="heading-text">
              Boost your <br />
              wellness game
            </h1>
            <button onClick={handleCTA} className="button button--robinson">
              Get started
            </button>
          </div>
        </div>
        <div className="hero__bullet-points">
          <div>
            <img src={IFBB} alt="" />
            <p>IFBB Pro</p>
          </div>
          <div className="">
            <img src={USflag} alt="" />
            <p>Former Mr. Usa</p>
          </div>
        </div>
      </main>
      <div className="gut-service__wrapper">
        <div className="gut--service__block" ref={GutRef}>
          <h2 className="mn--title">
            <span className="primary-color-accent">Essential Insight</span> Into
            Your Health
          </h2>
          <p>
            <span className="primary-color-accent">Nutrition</span> is based on
            sound science. In collaboration with healthcare professionals, we
            use blood work analysis and gut health tests to address any issues
            that might appear.
          </p>
          <div className="card-wrapper mn">
            <div className="card-container card-container--bloodwork">
              <h2 className="medium-text">Bloodwork</h2>

              <h4 className="card-text-price">$249</h4>
              <ul>
                <li className="card-list">
                  One Time Plan to improve condition
                </li>
                <li className="card-list">Supplements and remedy protocols</li>
                <li className="card-list">Dietary adjustments</li>
                <li className="card-list">Advice of lifestyle habits</li>
                <li className="card-list">Training if needed</li>
              </ul>
              <a
                target="_blank"
                className="purchase-button-link"
                href="https://payments.bodybuildingandbs.com/bloodwork"
              >
                <button className="button">Purchase</button>
              </a>
              {/* <a className="purchase-button-link">
                <button
                  className="button button--affirm"
                  onClick={() => HandleAffirmButton("Bloodwork", 24900)}
                >
                  Pay with
                  <img
                    src={AffirmLogo}
                    alt="Affirm Logo"
                    className="img--afirm"
                  />
                </button>
              </a> */}
            </div>

            <div className="blood-gut-text">
              <p>
                We use data about cholesterol and hormone levels, nutritional
                deficiencies and more to identify potential health risks, make
                dietary considerations, and adjust our training programs to
                support your well-being. 
              </p>
              <br />
              <br />
              <p>
                You can bring your most recent blood work to be evaluated or we
                can arrange a new blood work test at a trusted clinic for an
                extra fee.
              </p>
              {/*  <img src={Blood} alt="" /> */}
            </div>
          </div>
          <div className="card-wrapper card-wrapper--gut mn">
            <div className="blood-gut-text">
              <p>
                It’s important to understand your gut microbiome composition,
                and we test for parasites, bacteria, and any other digestive
                problems. These tests help me make dietary adjustments and
                recommendations to promote better digestion.
              </p>
            </div>
            <div className="card-container card-container--gutcard-container--gut">
              <h2 className="medium-text">Gut Health Test</h2>

              <h4 className="card-text-price">$349</h4>
              <ul>
                <li className="card-list">Test analysis</li>
                <li className="card-list">Full report</li>
                <li className="card-list">
                  Follow up consultation to act on findings
                </li>
              </ul>
              <a
                target="_blank"
                className="purchase-button-link"
                href="https://payments.bodybuildingandbs.com/gut-service"
              >
                <button className="button">Purchase</button>
              </a>
              {/* <a className="purchase-button-link">
                <button
                  className="button button--affirm"
                  onClick={() => HandleAffirmButton("Gut Health Test", 34900)}
                >
                  Pay with
                  <img
                    src={AffirmLogo}
                    alt="Affirm Logo"
                    className="img--afirm"
                  />
                </button>
              </a> */}
            </div>
          </div>
        </div>
        <Link href="/">
          <button className="button button--return">
            <AiOutlineArrowLeft className="icon" />
            Go Back to the Homepage
          </button>
        </Link>
      </div>
    </>
  );
}

export default GutServiceScreen;
