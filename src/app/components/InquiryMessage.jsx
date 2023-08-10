"use client";

import TopLayer from "../media/top-layer.png";
import BottomLayer from "../media/bottom-layer.png";
import { FiArrowUpRight } from "react-icons/fi";

function InquiryMessage() {
  return (
    <div className="inquiry--wrapper">
      <div className="inquiry--block mn">
        <h5>Get Answers for All Your Questions Right Away</h5>
        <p>
          I know you can have a lot of questions even before beginning your
          fitness journey. However, I'm here to answer all of them quickly, at
          no <strong>additional cost.</strong>
        </p>
        <div className="inquiry-email">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/ACSZJwg3R1pHmXny3sFM"
            style={{
              width: "100%",
              border: "none",
            }}
            marginHeight="0"
            marginWidth="0"
            id="inline-ACSZJwg3R1pHmXny3sFM"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Inquiry Box"
            data-height="400"
            data-layout-iframe-id="inline-ACSZJwg3R1pHmXny3sFM"
            data-form-id="ACSZJwg3R1pHmXny3sFM"
            title="Inquiry Box"
          ></iframe>
          <script src="https://link.msgsndr.com/js/form_embed.js"></script>
        </div>
        {/*  <a
          href="https://bodybuildingandbs.com/coaching-intake-form/"
          className="button button--secondary"
        >
          Start Now
          <FiArrowUpRight className="icon" />
        </a> */}
      </div>
    </div>
  );
}

export default InquiryMessage;
