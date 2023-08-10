"use client";

import Link from "next/link";
import Image from "next/image";
import GutEnzime from "../media/gut-enzime.jpg";
import GutMicrobiome from "../media/gut-microbiome.jpg";
import GutBacteria from "../media/gut-bacteria.jpg";

function GutSection({ IsGutActive, setIsGutActive }) {
  const HandleGutButton = () => {
    setIsGutActive(true);
    console.log(IsGutActive);
  };
  return (
    <div className="gut--section-wrapper">
      <h2 className="text--white mn--title">
        What About Your <br />
        <span className="primary-color-accent">Gut Health?</span>
      </h2>
      <p className="text--white">
        Your gut microbiome plays a key role in your digestion and immune
        function. Knowing about your composition will help me adjust your diet
        to optimize your nutrition.
      </p>
      {/* <p className="text--white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        maximus vel orci a tristique.
      </p> */}
      <div className="gut-section--container">
        <Image src={GutEnzime} alt="" />
        <Image src={GutMicrobiome} alt="" />
        <Image src={GutBacteria} alt="" />
      </div>
      <Link href="/bloodworkandguttest">
        <button className="button" onClick={HandleGutButton}>
          LEARN MORE
        </button>
      </Link>
    </div>
  );
}

export default GutSection;
