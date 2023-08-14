import s from "../Playground/Playground.module.css";
import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";

mixpanel.init("2b837b3806273e1cc3e621de8faee49e", {
  debug: true,
  // track_pageview: true,
  persistence: "localStorage",
  ignore_dnt: true,
});

function Gallery() {
  // Use require.context to dynamically load the images from the GalleryImages folder
  const filmContext = require.context(
    "./photos",
    false,
    /\.(jpe?g|`png|gif|svg)$/
  );
  const film = filmContext.keys().map(filmContext);

  const ustudiosContext = require.context(
    "./ustudios",
    false,
    /\.(jpe?g|png|gif|svg)$/
  );
  const ustudios = ustudiosContext.keys().map(ustudiosContext);

  useEffect(() => {
    mixpanel.track("View on Gallery");
  }, []);

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
          <p className="rotateNinetyCounter">fashion</p>
        </div>
        {ustudios.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
