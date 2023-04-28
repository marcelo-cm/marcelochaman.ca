import React from "react";
import s from "../stylesheets/Playground.module.css"

function Playground() {
  // Use require.context to dynamically load the images from the GalleryImages folder
  const imageContext = require.context("../images/film", false, /\.(jpe?g|png|gif|svg)$/);
  const images = imageContext.keys().map(imageContext);

  // Render the image gallery
  return (
    <div className="content-body">
        <div className={s.imgGallery}>
            <div className={s.galleryTitle}>
            <p className="rotateNinetyCounter">film photography</p>
            </div>
            {images.map((image, index) => (
                <img key={index} src={image} alt="" />
            ))}
        </div>
    </div>
  );
}

export default Playground;
