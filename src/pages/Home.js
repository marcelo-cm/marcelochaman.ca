import React from "react";
import stylesheets from "../stylesheets/Home.css";
import * as Icons from "../icons";
import { MarceloChamanMallquiResume1 as Resume } from "../assets/MarceloChamanMallquiResume1.pdf";

function Home() {
  return (
    <div className={"body"}>
      <div className={"viewer"}>
        {/* <!-- This is the header of the website – AKA, the banner. --> */}
        <div className={"header"}>
          <div>
            <p>marcelo chaman mallqui</p>
          </div>
          <div className={"nav-bar"}>
            <div className={"nav-item"}>
              <p>Home</p>
            </div>
            <div className={"nav-item"}>
              <p>Playground</p>
            </div>
          </div>
          <div className={"nav-icons-div"}>
            <a
              className={"nav-icon"}
              target="_blank"
              href="https://twitter.com/marcelochaman"
            >
              <Icons.Twitter />
            </a>
            <a
              className={"nav-icon"}
              target="_blank"
              href="https://www.linkedin.com/in/marc-cham/"
            >
              <Icons.LinkedIn />
            </a>
            <a
              className={"nav-icon"}
              target="_blank"
              href="https://github.com/marcelo-cm"
            >
              <Icons.GitHub />
            </a>
            <a
              className={"nav-icon"}
              target="_blank"
              href="mailto:marcechaman@gmail.com"
            >
              <Icons.Email />
            </a>
            <a
              className={"nav-icon"}
              target="_blank"
              href="https://drive.google.com/file/d/1PAtoZa13BoS6FjoTnvfv5tKPZGmosgsS/view?usp=sharing"
            >
              <Icons.CV />
            </a>
            <a
              className={"nav-icon"}
              target="_blank"
              href="https://rooms.xyz/marcelo/bedroom"
            >
              <Icons.Room />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
