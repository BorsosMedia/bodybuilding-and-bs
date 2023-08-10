"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

function RedirectPage() {
  return (
    <div className="redirect--block">
      <h1>Looks like you're lost</h1>
      <Link href="/">
        <button className="button button--return">
          <AiOutlineArrowLeft className="icon" />
          Go Back to the Homepage
        </button>
      </Link>
    </div>
  );
}

export default RedirectPage;
