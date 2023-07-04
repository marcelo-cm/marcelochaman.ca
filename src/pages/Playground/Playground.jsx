import React from "react";
import Card from "../../components/Card/Card";

function Playground() {
  const projects = [
    {
      link: "/Playground/LockedIn",
      image: require("./LockedIn/images/cover.png"),
      title: "Locked In",
      description: "An app for accountability, built for builders",
    },
  ];

  return (
    <div className="content-body gallery">
      {projects.map((card, index) => {
        return (
          <Card
            key={index}
            url={card.link}
            image={card.image}
            title={card.title}
            desc={card.description}
          />
        );
      })}
    </div>
  );
}

export default Playground;
