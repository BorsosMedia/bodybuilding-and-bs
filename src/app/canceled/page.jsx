"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Canceled() {
  return (
    <div className="results--page">
      You canceled your order
      <Link href="/">
        <button className="button button--return">
          <AiOutlineArrowLeft className="icon" />
          Go Back to the Homepage
        </button>
      </Link>
    </div>
  );
}

export default Canceled;
