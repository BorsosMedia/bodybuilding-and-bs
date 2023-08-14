"use client";

import Blood from "../media/blood.png";
import Link from "next/link";
import Image from "next/image";

function Bloodwork() {
  return (
    <div className="blood-work--block mn">
      <div className="work--block__img">
        <Image src={Blood} alt="blood sample" />
      </div>
      <div className="work--block__text">
        <h3>
          Have You Done <br />
          Your Blood Work?
        </h3>
        <p>
          Blood work analyses provide a lot of key information about a person's
          health, and I work in collaboration with healthcare professionals to
          address potential risks, and make dietary changes as necessary.
        </p>

        <p>
          Tracking these results will help me recommend adjustments in our
          training to optimize results and ensure continued progress.
        </p>
        <Link href="/bloodworkandguttest">
          <button className="button button--robinson button__black">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Bloodwork;
