import React from "react";

export const CarouselItem = ({ item }) => {
  return (
    <div className={"carouselItem"}>
      <img className={"carouselImg"} src={item.image} />
    </div>
  );
};
