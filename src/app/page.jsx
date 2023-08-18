"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nick from "./media/nick.webp";
import BBLogo from "./media/BBLogo.webp";
import USflag from "./media/usflag.png";
import IFBB from "./media/ifbb.png";
import Lift from "./media/lift.svg";
import Health from "./media/health.svg";
import Protein from "./media/protein.svg";
import PaintStroke from "./media/PaintStroke.png";
import NormalPlans from "./components/NormalPlans";
import CustomPlans from "./components/CustomPlans";
import DiscordSection from "./components/DiscordSection";
import Bloodwork from "./components/Bloodwork";
import InquiryMessage from "./components/InquiryMessage";
import Services from "./components/Services";
import GoogleReviews from "./components/GoogleReviews";
import InstagramWidget from "./components/InstagramWidget";
import GutSection from "./components/GutSection";
import { useLayoutEffect } from "react";
import ConsultationBox from "./components/ConsultationBox";

function HomeScreen() {
  const [IsGutActive, setIsGutActive] = useState(false);
  const [TypeOfPlan, setTypeOfPlan] = useState("a");
  const ref = useRef();
  const handleCTA = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <main className="hero-section">
        <div className="heroImg"></div>
        <Image src={Nick} className="nick-crop" alt="Nick" />

        <div className="hero-container">
          <div className="hero-text">
            <Link href="/">
              <Image
                src={BBLogo}
                className="bbs--logo"
                alt="Bodybuilding & BS Logo"
              />
            </Link>
            <h1 className="heading-text">
              Become The Best <br />
              Version Of Yourself
            </h1>
            <button onClick={handleCTA} className="button button--robinson">
              Get started
            </button>
          </div>
        </div>
        <div className="hero__bullet-points">
          <div>
            <Image src={IFBB} alt="IFBB Logo" />
            <p>IFBB Pro</p>
          </div>
          <div className="">
            <Image src={USflag} alt="USA Flag" />
            <p>Former Mr. Usa</p>
          </div>
        </div>
      </main>

      <section className="pricing-container">
        <div className="bg__text--background">
          <Image src={PaintStroke} />
          <h2 className="big-text">CONSISTENCY IS THE NAME OF THE GAME</h2>
        </div>
        <p className="paragraph-text hero-paragraph">
          <span className="primary-color-accent">Get ready</span> to tear down
          any obstacles your body and mind will find. As an IFBB pro and former
          Mr. USA, I've gained enough experience to help you achieve your
          fitness goals and change your life through:
        </p>

        <div className="bullet--block_wrapper">
          <div className="bullet--facts">
            <Image src={Lift} alt="Lift Ilustration" />
            <h5>Hard Work</h5>
            <p>
              <span className="primary-color-accent">The real secret</span> of
              success
            </p>
          </div>
          <div className="bullet--facts">
            <Image src={Health} alt="Heart Ilustration" />
            <h5>Healthy Nutrition</h5>
            <p>
              <span className="primary-color-accent">High powered</span> diets
              to fuel your body
            </p>
          </div>
          <div className="bullet--facts">
            <Image src={Protein} alt="Protein Ilustration" />
            <h5>Accountability</h5>
            <p>
              <span className="primary-color-accent">Support and advice</span>{" "}
              to keep you on track
            </p>
          </div>
        </div>

        <h2 className="big-text big-text__white" ref={ref}>
          FULL TIME <span className="primary-color-accent">COACHING PLANS</span>
        </h2>
        {/*       <h2 className="big-text">Purchase now, start whenever you want!</h2> */}
        <div className="plan-toggle">
          <button
            className={
              TypeOfPlan === "a"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("a")}
          >
            <h6 className="medium-text">Monthly</h6>
          </button>
          <button
            className={
              TypeOfPlan === "b"
                ? "plan-type-container color-accent"
                : "plan-type-container"
            }
            onClick={() => setTypeOfPlan("b")}
          >
            <h6 className="medium-text">3 Months</h6>
          </button>

          <button
            className={
              TypeOfPlan === "d"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("d")}
          >
            <h6 className="medium-text">6 Months</h6>
          </button>

          <button
            className={
              TypeOfPlan === "e"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("e")}
          >
            <h6 className="medium-text">Annual</h6>
          </button>
          {/*     <div
        className={
          TypeOfPlan === "c"
            ? "plan-type-container color-accent"
            : "plan-type-container "
        }
        onClick={() => setTypeOfPlan("c")}
      >
        <h4 className="medium-text">Contest Prep </h4>
      </div> */}
        </div>

        <NormalPlans TypeOfPlan={TypeOfPlan} />
        <ConsultationBox />
        <CustomPlans />
        <InquiryMessage />
        <Bloodwork />
        <GutSection IsGutActive={IsGutActive} setIsGutActive={setIsGutActive} />
        <Services />
        <DiscordSection />
        <GoogleReviews />
        <InstagramWidget />
      </section>
    </>
  );
}

export default HomeScreen;
