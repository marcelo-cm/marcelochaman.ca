import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import mixpanel from "mixpanel-browser";

mixpanel.init("2b837b3806273e1cc3e621de8faee49e", {
  debug: true,
  // track_pageview: true,
  persistence: "localStorage",
  ignore_dnt: true,
});

function Playground() {
  const projects = [
    {
      link: "/Playground/LockedIn",
      image: require("./LockedIn/images/cover.png"),
      title: "Locked In",
      description: "An app for accountability, built for builders",
      properties: "UX, Product, Figma",
    },
    {
      link: "/Playground/Memoria",
      image: require("./Memoria/images/MEMORIA-COVER.png"),
      title: "Memoria",
      description: "My First Startup. Story & Learnings.",
      properties: "Frontend, Product, AI",
    },
  ];

  useEffect(() => {
    mixpanel.track("View on Playground");
  }, []);

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
            properties={card.properties}
          />
        );
      })}
    </div>
  );
}

export default Playground;
