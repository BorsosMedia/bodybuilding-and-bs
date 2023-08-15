"use client";
import Link from "next/link";
import Image from "next/image";
import GutEnzime from "../media/gut-enzime.webp";
import GutMicrobiome from "../media/gut-microbiome.webp";
import GutBacteria from "../media/gut-bacteria.webp";
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

      <div className="gut-section--container">
        <Image src={GutEnzime} alt="Enzime Example" />
        <Image src={GutMicrobiome} alt="Microbiome Example" />
        <Image src={GutBacteria} alt="Gut Bacteria" />
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
