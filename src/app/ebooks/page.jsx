"use client";

import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Mock from "../media/mock.png";

function page() {
  return (
    <div className="ebook-screen mn v-align-gap-1">
      <h2 className="colored-white text-center">
        Take Your Training <br />
        <span className="colored-primary">To The Next Level</span>
      </h2>

      <p className="colored-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        sapiente corporis reprehenderit, beatae necessitatibus sunt?
      </p>

      <div className="ebooks-container v-align-gap-1">
        <div className="ebook v-align-gap-1">
          <Image src={Mock} className="mock-img" />
          <h5 className="ebook-heading">Grow Your Head Fast</h5>
          <h5 className="ebook-pricing">$30</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quia?
          </p>
          <Link href="/" className="button">
            Purchase
          </Link>
        </div>
        <div className="ebook v-align-gap-1">
          <Image src={Mock} className="mock-img" />
          <h5 className="ebook-heading">Grow Your Head Fast</h5>
          <h5 className="ebook-pricing">$30</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quia?
          </p>
          <Link href="/" className="button">
            Purchase
          </Link>
        </div>
        <div className="ebook v-align-gap-1">
          <Image src={Mock} className="mock-img" />
          <h5 className="ebook-heading">Grow Your Head Fast</h5>
          <h5 className="ebook-pricing">$30</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quia?
          </p>
          <Link href="/" className="button">
            Purchase
          </Link>
        </div>
        <div className="ebook v-align-gap-1">
          <Image src={Mock} className="mock-img" />
          <h5 className="ebook-heading">Grow Your Head Fast</h5>
          <h5 className="ebook-pricing">$30</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quia?
          </p>
          <Link href="/" className="button">
            Purchase
          </Link>
        </div>
      </div>

      <Link href="/">
        <button className="button button--return">
          <AiOutlineArrowLeft className="icon" />
          Go Back to the Homepage
        </button>
      </Link>
    </div>
  );
}

export default page;
