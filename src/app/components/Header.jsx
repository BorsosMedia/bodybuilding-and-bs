"use client";

import { useState, useEffect } from "react";
import logoImg from "../media/BBLogo.png";
import { BiMenu } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
import { useScrollLock } from "../hooks/useScrollLock";
import tiktokIcon from "../media/Icons/tiktok-icon.svg";
import gmaiIcon from "../media/Icons/gmail.png";

const Header = () => {
  const { lockScroll, unlockScroll } = useScrollLock();

  const [animateMenu, setAnimateMenu] = useState();

  function menuAnimation() {}

  function handleScrollLock(isOpen) {
    setAnimateMenu(!animateMenu);

    if (isOpen === true) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();

  return (
    <div
      className={
        scrollDirection === "down"
          ? "header-container hide-header"
          : "header-container"
      }
    >
      <div className="header-wrapper">
        <div className="logo-container">
          <img src={logoImg} className="logo-img" alt="" />
        </div>

        <div
          className={
            animateMenu
              ? "menu-logo-container hide-menu-button"
              : "menu-logo-container"
          }
          onClick={() => handleScrollLock(true)}
        >
          <BiMenu className="icon" />
        </div>

        <div
          onClick={() => handleScrollLock(false)}
          className={
            animateMenu ? "menu-overlay overlay-active" : "menu-overlay"
          }
        >
          {" "}
        </div>
        <ul
          className={
            animateMenu ? "menu-container menu-active" : "menu-container"
          }
        >
          <li className="menu-item" onClick={() => handleScrollLock(false)}>
            <IoCloseOutline onClick={menuAnimation} className="icon" />
          </li>

          <div className="social-media-container">
            <a href="https://www.instagram.com/johneffer/" target="_blank">
              <div className="icon-sm-container">
                <AiOutlineInstagram className="icon-svg" />
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@johneffer?_t=8XbYgUfs5cT&_r=1"
              target="_blank"
            >
              <div className="icon-sm-container">
                <TbBrandTiktok className="icon-svg" />
              </div>
            </a>
          </div>
          <h4 className="medium-text">
            Stop wasting your time. Join the program…
          </h4>
        </ul>
      </div>
    </div>
  );
};

export default Header;
