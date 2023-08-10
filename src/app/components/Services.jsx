"use client";

import { useState } from "react";
import LSCoaching from "../media/services/lifestyle-coaching-min.png";
import CPrep from "../media/services/competition-prep-min.png";
import MProgram from "../media/services/mass-program-min.png";
import SProgram from "../media/services/shred-program-min.png";
import NPlans from "../media/services/nutrition-plan-min.png";
import Protocols from "../media/services/protocols-minB.png";

function Services() {
  const [ActiveImage, setActiveImage] = useState("a");

  return (
    <div className="mn services--block mn">
      <h2 className="mn--title">This is What I Do</h2>
      <p>
        As a certified nutritionist with more than{" "}
        <span className="primary-color-accent">
          20 years of professional experience in bodybuilding
        </span>
        , I began my career at age 16, winning Top Teen at the Bodybuilding Team
        Nationals. I continued my award-winning career moving on to become an
        IFBB Pro and winning the highly coveted Mr. USA title in 2014.
      </p>

      <div className="services--block__container">
        <ul className="services--grid">
          <li
            className={ActiveImage == "a" && "active"}
            onClick={() => setActiveImage("a")}
          >
            <span>Lifestyle Coaching</span>

            <img src={LSCoaching} alt="" />
          </li>
          <li
            className={ActiveImage == "b" && "active"}
            onClick={() => setActiveImage("b")}
          >
            <span>Shred program</span>
            <img src={SProgram} alt="" />
          </li>
          <li
            className={ActiveImage == "c" && "active"}
            onClick={() => setActiveImage("c")}
          >
            <span>Competition Prep</span>
            <img src={CPrep} alt="" />
          </li>
          <li
            className={ActiveImage == "d" && "active"}
            onClick={() => setActiveImage("d")}
          >
            <span>Nutrition Plans</span>
            <img src={NPlans} alt="" />
          </li>
          <li
            className={ActiveImage == "e" && "active"}
            onClick={() => setActiveImage("e")}
          >
            <span>Mass Program</span>
            <img src={MProgram} alt="" />
          </li>
          <li
            className={ActiveImage == "f" && "active"}
            onClick={() => setActiveImage("f")}
          >
            <span>Protocols and more</span>
            <img src={Protocols} alt="" />
          </li>
        </ul>
        <ul className="services--img">
          <li className={ActiveImage == "a" && "span--img-active"}>
            <img src={LSCoaching} alt="" />
            <div>
              <p>
                Building the best version of ourselves is something we need to
                work on every day. I will use my experience to help you succeed!
              </p>
            </div>
          </li>
          <li className={ActiveImage == "b" && "span--img-active"}>
            <img src={SProgram} alt="" />
            <div>
              <p>
                Get lean and ripped. We will work on lowering your body fat
                while preserving your muscle mass.
              </p>
            </div>
          </li>
          <li className={ActiveImage == "c" && "span--img-active"}>
            <img src={CPrep} alt="" />
            <div>
              <p>
                Get in peak form. With intensive training and customized
                nutrition, I will prepare you for elite competition.
              </p>
            </div>
          </li>
          <li className={ActiveImage == "d" && "span--img-active"}>
            <img src={NPlans} alt="" />
            <div>
              <p>
                Different physiques and specific goals require tailored
                nutrition plans to optimize your health goals.
              </p>
            </div>
          </li>
          <li className={ActiveImage == "e" && "span--img-active"}>
            <img src={MProgram} alt="" />
            <div>
              <p>
                Gain muscle and size. We will increase high volume training and
                I will recommend supplementation.
              </p>
            </div>
          </li>
          <li className={ActiveImage == "f" && "span--img-active"}>
            <img src={Protocols} alt="" />
            <div>
              <p>
                I have procedures in place to support our training plan and I
                will guide you through proper use of supplements to boost
                results.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
