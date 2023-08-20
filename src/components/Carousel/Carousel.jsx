import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../pages/Home/Home.module.css";
// import { CarouselItem } from "./CarouselItem";

const Carousel = ({ items, auto }) => {
  const iconAnimate = {
    hover: { rotate: 360, transition: { ease: "easeOut", duration: 0.6 } },
    click: { rotate: 0, transition: { ease: "easeOut", duration: 0.6 } },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      console.log("wrapped to back");
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      console.log("wrapped to front");
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        updateIndex((prevIndex) => {
          if (prevIndex + 1 >= items.length) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <div className={"carousel self-center"}>
      <div className={"carouselWrapper"}>
        <div
          className={"carouselInner"}
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => {
            return (
              <div
                className={`${"carouselItem"} ${
                  item.video ? "w-[calc(100%-4rem)] h-full bg-transparent" : ""
                }`}
              >
                {item.video ? (
                  <iframe
                    className="carouselImg"
                    src={item.image}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                ) : (
                  <img className={"carouselImg"} src={item.image} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={"nav-bar"}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={iconAnimate}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className={styles["button"]}
        >
          Back
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={iconAnimate}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className={styles["button"]}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

export default Carousel;
