import Navigation from "../assets/Navigation/Navigation";
import s from "../stylesheets/Playground.module.css";
import React from "react";

function Playground() {
  // Use require.context to dynamically load the images from the GalleryImages folder
  const filmContext = require.context(
    "../images/film",
    false,
    /\.(jpe?g|`png|gif|svg)$/
  );
  const film = filmContext.keys().map(filmContext);

  const ustudiosContext = require.context(
    "../images/ustudios",
    false,
    /\.(jpe?g|png|gif|svg)$/
  );
  const ustudios = ustudiosContext.keys().map(ustudiosContext);

  // Render the image gallery
  return (
    <div className="content-body">
      <div className={s.imgGallery}>
        <div className={s.galleryTitle}>
          <p className="rotateNinetyCounter">photos</p>
        </div>
        {film.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
      <div className={s.imgGallery}>
        <div className={s.galleryTitle}>
          <p className="rotateNinetyCounter">ustudios</p>
        </div>
        {ustudios.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Playground;
