import React from "react";
import { motion } from "framer-motion";

const Card = ({ url, image, title, desc, properties }) => {
  const iconAnimate = {
    hover: { rotate: 360, transition: { ease: "easeOut", duration: 0.6 } },
    click: { rotate: 0, transition: { ease: "easeOut", duration: 0.6 } },
  };

  const propertiesMappable = properties ? properties.split(", ") : [];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      variants={iconAnimate}
    >
      <a href={url}>
        <div className={"card"}>
          <div className={"card-image"}>
            <img src={image} alt="Card Cover" />
          </div>
          <div className={"name-details"}>
            <div className="organization">
              <p>{title}</p>
            </div>
            <div className="position">
              <p>{desc}</p>
            </div>
            <div className="flex flex-row gap-2 pt-2">
              {propertiesMappable?.map((property) => (
                <div className="nav-item-active text-xs">{property}</div>
              ))}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default Card;
