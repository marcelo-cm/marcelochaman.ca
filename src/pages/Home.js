import React from "react";
import stylesheets from "../stylesheets/Home.css";
import * as Icons from "../icons";
import * as Img from "../images";

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
      url: "https://memoria-ai.github.io/buildspace/",
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

  const rows = [];

  for (let i = 0; i < cardsCur.length; i += 3) {
    rows.push(cardsCur.slice(i, i + 3));
  }

  return (
    <div className={"body"}>
      <div className={"viewer"}>
        {/* <!-- This is the header of the website – AKA, the banner. --> */}
        <div className={"banner"}>
          <div>
            <p>marcelo chaman mallqui</p>
          </div>
          <div className={"nav-bar float-middle"}>
            <a className={"nav-item-active"} href="">
              <p>Home</p>
            </a>
            <a className={"nav-item"} href="">
              <p>Playground</p>
            </a>
          </div>
          <div className={"nav-icons-div"}>
            <a
              className={"nav-icon"}
              target="_blank"
              href="https://twitter.com/marcelochaman"
            >
              <Icons.Twitter />
            </a>
            <a
              className={"nav-icon"}
              target="_blank"
              href="https://www.linkedin.com/in/marc-cham/"
            >
              <Icons.LinkedIn />
            </a>
            <a
              className={"nav-icon"}
              target="_blank"
              href="https://github.com/marcelo-cm"
            >
              <Icons.GitHub />
            </a>
            <a
              className={"nav-icon"}
              target="_blank"
              href="mailto:marcechaman@gmail.com"
            >
              <Icons.Email />
            </a>
            <a
              className={"nav-icon"}
              target="_blank"
              href="https://drive.google.com/file/d/1PAtoZa13BoS6FjoTnvfv5tKPZGmosgsS/view?usp=sharing"
            >
              <Icons.CV />
            </a>
            <a
              className={"nav-icon"}
              target="_blank"
              href="https://rooms.xyz/marcelo/bedroom"
            >
              <Icons.Room />
            </a>
          </div>
        </div>
        {/* <!-- This is the body of the website's content --> */}
        <div className={"content-body"}>
          <div className={"short-about-me"}>
            <div className={"marcelo-pics"}>
              <img src={Img.Headshot} alt="My Headshot" />
            </div>
            <div className={"marcelo-bio"}>
              <p>
                I’m Marcelo! 19 year old Commerce & Computing student at Queen’s
                University, passionate about tech, social impact, and art. I’m
                currently leading{" "}
                <a target="_blank" href="https://qmind.ca/">
                  QMIND,
                </a>
                Canada’s largest undergraduate organization on AI, and building
                an AI powered second brain,{" "}
                <a
                  target="_blank"
                  href="https://memoria-ai.github.io/buildspace/"
                >
                  Memoria.
                </a>{" "}
                I’m an aspiring product manager, artist, and self taught front
                end developer... but you can learn more below.
              </p>
            </div>
            <div className={"nav-bar"}>
              <a className={"nav-item"} href="">
                <p>About Me</p>
              </a>
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
        </div>
      </div>
    </div>
  );
}

export default Home;
