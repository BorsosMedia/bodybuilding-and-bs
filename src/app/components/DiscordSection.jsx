"use client";

import { FiArrowUpRight } from "react-icons/fi";
import NickDiscord from "../media/NickDiscord.jpg";

function DiscordSection() {
  return (
    <div className="discord--block mn">
      <div className="discord--img">
        <img src={NickDiscord} alt="Discord logo on top of Nick's Face" />
      </div>
      <div className="discord--text">
        <h2>
          <span className="primary-color-accent">hard workers</span> have a
          discord server
        </h2>
        <p>
          <strong>Join the community</strong> that will help you in your journey
          of reaching your fitness goals.
          <br />
          <br />
          What you will find in our server:
        </p>
        <ul className="list">
          <li>More people like you with all their experience.</li>
          <li>More information to focus on what works for you.</li>
          <li>A positive environment for daily motivation.</li>
        </ul>
        <a
          href="https://discord.com/invite/2K7m4mPJH2"
          target="_blank"
          className="button button--yellow button__robinson"
        >
          Join The Server
          <FiArrowUpRight className="icon" />
        </a>
      </div>
    </div>
  );
}

export default DiscordSection;
