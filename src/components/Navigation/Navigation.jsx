import React from "react";
import * as Icons from "./icons";
import styles from "./Navigation.module.css";
import { motion } from "framer-motion";
import { useMatch, useResolvedPath } from "react-router-dom";
import { Link } from "react-router-dom";

const Navigation = () => {
  const iconAnimate = {
    hover: { rotate: 360, transition: { ease: "easeOut", duration: 0.6 } },
    click: { rotate: 0, transition: { ease: "easeOut", duration: 0.6 } },
  };

  const CustomLink = ({ to, children, props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <Link to={to} {...props}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={isActive ? "nav-item-active" : "nav-item"}
        >
          <p>{children}</p>
        </motion.div>
      </Link>
    );
  };

  return (
    <div className={"banner"}>
      <div>
        <p className={styles.webtitle}>marcelo chaman mallqui</p>
      </div>
      <div className={"nav-icons-div"}>
        <motion.a
          whileHover="hover"
          whileTap="click"
          variants={iconAnimate}
          className={"nav-icon"}
          target="_blank"
          href="https://twitter.com/marcelochaman"
        >
          <Icons.Twitter />
        </motion.a>
        <motion.a
          whileHover="hover"
          whileTap="click"
          variants={iconAnimate}
          className={"nav-icon"}
          target="_blank"
          href="https://www.linkedin.com/in/marc-cham/"
        >
          <Icons.LinkedIn />
        </motion.a>
        <motion.a
          whileHover="hover"
          whileTap="click"
          variants={iconAnimate}
          className={"nav-icon"}
          target="_blank"
          href="https://github.com/marcelo-cm"
        >
          <Icons.GitHub />
        </motion.a>
        <motion.a
          whileHover="hover"
          whileTap="click"
          variants={iconAnimate}
          className={"nav-icon"}
          target="_blank"
          href="mailto:marcechaman@gmail.com"
        >
          <Icons.Email />
        </motion.a>
        <motion.a
          whileHover="hover"
          whileTap="click"
          variants={iconAnimate}
          className={"nav-icon"}
          target="_blank"
          href="https://drive.google.com/file/d/1PAtoZa13BoS6FjoTnvfv5tKPZGmosgsS/view?usp=sharing"
        >
          <Icons.CV />
        </motion.a>
        <motion.a
          whileHover="hover"
          whileTap="click"
          variants={iconAnimate}
          className={"nav-icon"}
          target="_blank"
          href="https://rooms.xyz/marcelo/bedroom"
        >
          <Icons.Room />
        </motion.a>
      </div>
      <div className={"nav-bar float-middle"}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Gallery">Gallery</CustomLink>
        <CustomLink to="/Playground">Playground</CustomLink>
      </div>
    </div>
  );
};

export default Navigation;
