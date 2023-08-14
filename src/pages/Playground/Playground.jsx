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
      properties: "UX, Product, Design",
    },
    {
      link: "/Playground/Memoria",
      image: require("./Memoria/images/MEMORIA-COVER.png"),
      title: "Memoria",
      description: "My First Startup. Story & Learnings.",
      properties: "Reactjs, Product, AI",
    },
    {
      link: "https://medium.com/@marcelochaman/easy-recipe-ux-ui-case-study-124a7992597e",
      image: require("./Easy Recipe/EasyRecipe-mobile1.gif"),
      title: "Easy Recipe",
      description: "An App College Students. UX Case Study.",
      properties: "UX, Product, Design",
    },
    {
      link: "https://www.qmind.ca",
      image: require("./QMIND/QMINDv1.gif"),
      title: "QMIND's Official Website",
      description: "Queen's University AI Hub",
      properties: "UX, Design, Reactjs",
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
