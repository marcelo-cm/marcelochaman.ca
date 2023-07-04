import React from "react";

const Card = ({ url, image, orgName, positionName }) => {
    return (
      <div className={"card"}>
        <a href={url}>
        <img src={image} alt="Organization Graphic" />
        <div>{orgName}</div>
        <div>{positionName}</div>
        </a>
      </div>
    );
  };
  
  export default Card;