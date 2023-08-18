"use client";

import TopLayer from "../media/top-layer.png";
import BottomLayer from "../media/bottom-layer.png";
import { FiArrowUpRight } from "react-icons/fi";

function ConsultationBox() {
  return (
    <div className="inquiry--wrapper consultation--wrapper">
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
  );
}

export default ConsultationBox;
