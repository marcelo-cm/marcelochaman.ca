import s from "./Playground.module.css";
import React from "react";
import * as LockedIn from "./LockedIn/images";

const Card = ({ link, image, title, description }) => {
  return (
    <div>
      <a href={link}>
        <div className={"card"}>
          <div className={"card-image"}>
            <img src={image} />
          </div>
          <div className={"name-details"}>
            <div className="organization">
              <p>{title}</p>
            </div>
            <div className="position">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

function Playground() {
  const projects = [
    {
      link: "/Playground/LockedIn",
      image: require("./LockedIn/images/LOCKEDIN-COVER.png"),
      title: "Locked In",
      description: "An app for accountability, built for builders",
    },
  ];

  return (
    <div className="content-body">
      {projects.map((card, index) => {
        return (
          <Card
            key={index}
            link={card.link}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        );
      })}
    </div>
  );
}

export default Playground;
