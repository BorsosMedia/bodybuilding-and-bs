"use client";

import { FiArrowUpRight } from "react-icons/fi";

function ConsultationBox() {
  return (
    <div className="inquiry--wrapper consultation--wrapper">
      <div className="inquiry--inner_wrapper">
        <div className="consulation-img_wrapper ">
          {/*  <Image src={Nick} alt="" className="" /> */}
        </div>
        <div className="inquiry--block  mn">
          <h5>GET A FREE 15 MINUTE CONSULTATION CALL</h5>
          <p>
            <strong>Let’s chat</strong> about how you are going to reach your
            goals. No bullshit.
          </p>
          <a
            href="https://payments.bodybuildingandbs.com/phone-consult-15-min"
            target="_blank"
            className="button button--secondary"
          >
            GO TO THE CALENDAR <FiArrowUpRight className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConsultationBox;
