import React, { useState } from "react";
import stylesheets from "../stylesheets/Home.css";
import * as Icons from "../icons";
import * as Img from "../images";
import Playground from "./Playground.jsx";
import Inspect from "inspx";
import { motion } from "framer-motion";

const Card = ({ url, image, orgName, positionName }) => {
  return (
    <div>
      <a href={url}>
        <div className={"card"}>
          <div className={"card-image"}>
            <img src={image} alt="Organization Graphic" />
          </div>
          <div className={"name-details"}>
            <div className="organization">
              <p>{orgName}</p>
            </div>
            <div className="position">
              <p>{positionName}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

function Home() {
  const cardsCur = [
    {
      url: "https://memoria.live/",
      image: Img.MemoriaCard,
      orgName: "Memoria | AI-Powered Second Brain",
      positionName: "Front-End + Product",
    },
    {
      url: "https://www.qmind.ca",
      image: Img.QMINDCard,
      orgName: "QMIND | Canada's Largest Org. on AI",
      positionName: "Managing Director of Operations",
    },
    {
      url: "https://www.universitymedia.ca",
      image: Img.UMGCard,
      orgName: "University Media Group | 50k Follower Platform",
      positionName: "Co-founder & CSO",
    },
  ];

  const cardsPrev22 = [
    {
      url: "https://www.instagram.com/ustudios__/",
      image: Img.uCard,
      orgName: "ustudios. | Fashion & Fashion Manufacturing",
      positionName: "Founder ['22]",
    },
    {
      url: "https://verycalmstudios.ca",
      image: Img.veryCard,
      orgName: "verycalmstudios | Marketing & Design Studio",
      positionName: "Founder ['22]",
    },
    {
      url: "https://www.instagram.com/bold.conference/",
      image: Img.boldCard,
      orgName: "BOLD | Business Education for Highschoolers",
      positionName: "CEO ['21-'22]",
    },
  ];

  return (
    <div className={"content-body"}>
      <div className={"short-about-me"}>
        <div className={"marcelo-pics"}>
          <img src={Img.Banner1} alt="Me and the Golden Gate Bridge" />
          <img src={Img.Headshot} alt="My Headshot" />
          <img src={Img.Banner2} alt="Me and my brother, Gonza" />
        </div>
        <div className={"marcelo-bio"}>
          <p style={{ textAlign: "center" }}>
            I’m Marcelo! 19 year old Commerce & Computing student at Queen’s
            University, passionate about tech, social impact, and art. I’m
            currently leading{" "}
            <a target="_blank" href="https://qmind.ca/">
              QMIND,
            </a>
            Canada’s largest undergraduate organization on AI, and building an
            AI powered second brain,{" "}
            <a target="_blank" href="https://memoria.live/">
              Memoria.
            </a>{" "}
            I’m an aspiring product manager, artist, and self taught front end
            developer... but you can learn more below.
          </p>
        </div>
        <div className={"nav-bar"}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={"nav-item"}
            target="_blank"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            <p>About Me</p>
          </motion.a>
        </div>
      </div>
      <div className={"gallery"}>
        {cardsCur.map((card, index) => {
          return (
            <Card
              key={index}
              url={card.url}
              image={card.image}
              orgName={card.orgName}
              positionName={card.positionName}
            />
          );
        })}
      </div>
      <p>Previous & Miscellaneous Projects</p>
      <div className={"gallery"}>
        {cardsPrev22.map((card, index) => {
          return (
            <Card
              key={index}
              url={card.url}
              image={card.image}
              orgName={card.orgName}
              positionName={card.positionName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
