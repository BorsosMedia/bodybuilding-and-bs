"use client";

import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
import RumbleLogo from "../media/rumble-logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/*   <ul>
          <li className=''>Home</li>
          <li className=''>Testimonials</li>
          <li className=''>Clothing</li>
          <li className=''>Coaching plans</li>
          <li className=''>About me</li>
        </ul> */}
      <div>
        <div className="social-media-container">
          <a href="https://www.instagram.com/bodybuildingandbs" target="_blank">
            <div className="icon-sm-container">
              <BsInstagram className="icon-svg" />
            </div>
          </a>
          <a href="https://www.tiktok.com/@bodybuildingandbs" target="_blank">
            <div className="icon-sm-container">
              <FaTiktok className="icon-svg" />
            </div>
          </a>
          <a href="https://rumble.com/user/bodybuildingandbs" target="_blank">
            <div className="icon-sm-container">
              <Image src={RumbleLogo} className="icon-svg" alt="" />
            </div>
          </a>
        </div>
        <h4 className="medium-text">Become the best version of yourself</h4>
      </div>
      <p className="paragraph-text txt-lnks">
        Website designed and developed by{" "}
        <a href="https://www.borsosmedia.com" target="_blank">
          Borsos Media
        </a>
      </p>
      <p className="paragraph-text">Bodybuilding & BS - All rights reserved</p>
    </footer>
  );
};

export default Footer;
