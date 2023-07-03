import React, { useState } from "react";
import styles from "../stylesheets/About.module.css";
import * as Img from "../images";
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
  const [cardsShown, setCardsShown] = useState("present");

  const cardsPresent = [
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
    {
      url: "https://www.cucai.ca",
      image: Img.CUCAICard,
      orgName: "CUCAI | 320 Delegate Conference on AI",
      positionName: "Co-President",
    },
    {
      url: "https://recalcacademy.com/",
      image: Img.RecalcCard,
      orgName: "Recalc Academy",
      positionName: "AI Research Analyst",
    },
  ];

  const cardsPast = [
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

  const cardsCur = cardsShown === "present" ? cardsPresent : cardsPast;

  return (
    <div className={"content-body"}>
      <div className={styles["home-hero"]}>
        <div className={styles["home-hero-text"]}>
          <h2>Hey! I'm Marcelo Chaman Mallqui</h2>
          <p>
            Second-year Commerce & Computing student at Queen’s University in
            Kingston, ON. I’m extremely passionate about tech, social impact,
            and art. I'm a self-taught front-end developer and aspire to be a
            successful startup founder and product manager. <br />
            <br />
            Currently, I'm the Managing Director of Operations at{" "}
            <a target="_blank" rel="noreferrer" href="https://www.qmind.ca/">
              QMIND,
            </a>
            Canada's largest undergraduate organization on AI & ML. I am
            building{" "}
            <a target="_blank" rel="noreferrer" href="https://memoria.live/">
              Memoria
            </a>
             – an AI tool to record, transcribe and talk to your thoughts
            – alongside a good friend and 2 ex-Google PMs, and represent Queen’s
            in international case competition!
            <br />
            <br />
            When I’m not doing any of that I’m watching superhero movies,
            shooting film, or learning and random new things such as making this
            website!
            <br />
            <br />
            My story with tech begins with iOS 7, and if you want to know
            more...
          </p>
          <div className={styles["button-container"]}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles["button"]}
              target="_blank"
              href="mailto: marcechaman@gmail.com"
            >
              <p>Email Me!</p>
            </motion.a>
          </div>
        </div>
        <div className={styles["hero-image-container"]}>
          <img
            className={styles["hero-image"]}
            src={Img.HeroImage}
            alt="Me and the Golden Gate Bridge"
          />
        </div>
      </div>
      <div className={"nav-bar"}>
        <button
          onClick={() => setCardsShown("past")}
          className={`${styles["button"]} ${
            cardsShown == "past" ? styles["button-active"] : ""
          }`}
        >
          Past
          <span
            style={{
              paddingLeft: "0.5rem",
              fontSize: "8pt",
              alignSelf: "center",
            }}
          >
            ({cardsPast.length})
          </span>
        </button>
        <button
          onClick={() => setCardsShown("present")}
          className={`${styles["button"]} ${
            cardsShown == "present" ? styles["button-active"] : ""
          }`}
        >
          Present
          <span
            style={{
              paddingLeft: "0.5rem",
              fontSize: "8pt",
              alignSelf: "center",
            }}
          >
            ({cardsPresent.length})
          </span>
        </button>
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
    </div>
  );
}

export default Home;
