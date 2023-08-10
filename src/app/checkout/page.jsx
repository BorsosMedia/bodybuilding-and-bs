"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Checkout() {
  const [CheckoutToken, setCheckoutToken] = useState("Successful");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    const authorizeTransaction = async () => {
      const checkout_token = window.location.href.split("=").pop();
      const response = await axios.post("/api/checkout", {
        checkout_token,
      });
      setTransactionId(response.data.transactionId);
    };
    authorizeTransaction();
  }, []);

  return (
    <div className="results--page">
      <h5>Your payment was {CheckoutToken}</h5>
      <h6>Your reference ID is: {transactionId}</h6>
      <Link href="/">
        <button className="button button--return">
          <AiOutlineArrowLeft className="icon" />
          Go Back to the Homepage
        </button>
      </Link>
    </div>
  );
}

export default Checkout;
