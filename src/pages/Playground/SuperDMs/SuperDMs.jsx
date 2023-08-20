import Carousel from "../../../components/Carousel/Carousel";
// import * from "./images";
import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import { Helmet } from "react-helmet";

function SuperDMs() {
  const images = [
    {
      image: require("./images/SuperDMs.png"),
      alt: "Landing Page",
      video: false,
    },
    {
      image: "https://youtube.com/embed/b1NnX2fyqxU",
      alt: "Demo 1",
      video: true,
    },
    {
      image: "https://youtube.com/embed/S4AFpeddyQ8",
      alt: "Demo 2",
      video: true,
    },
  ];

  return (
    <div className="content-body">
      <div className="max-w-[1000px] w-full flex flex-col gap-2">
        <Carousel items={images} />
        <div>
          <h2 className="flex flex-row items-center justify-between">
            Memoria{" "}
            <div>
              🔗{" "}
              <a href="https://memoria.live/" className="underline text-sm">
                memoria.live
              </a>
            </div>
          </h2>
          <h3 className="opacity-50">My First Startup. Story & Learnings.</h3>
        </div>
        <hr className="border-[#343434] mb-4" />
        <div className="flex md:flex-row flex-col gap-2 md:gap-10">
          <div className="flex flex-col">
            <div className="mb-4">
              <h3 className="text-xs opacity-50">MY ROLE</h3>
              <p>Back End Developer</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xs opacity-50">TECH STACK</h3>
              <p>Python3</p>
              <p>Flask</p>
              <p>Heroku</p>
              <p>Slack API</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xs opacity-50">DATE</h3>
              <p>August 2023</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <div className="mb-4">
              <h3 className="text-xs opacity-50">WHAT IS SUPERDMS?</h3>
              <p>
                SuperDMs is a Slack App built on Flask that solves a real
                problem for all large organizations and accelerator
                programs/fellowships. For any organizations looking to implement
                this please message me!
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xs opacity-50">PROBLEM</h3>
              <p>
                Running an accelerator creates a very large slack workspace that
                can become hard to navigate over time. When you want to catch up
                with hundreds of people, you have to personally DM each one
                – and even copy & pasting a message takes hours. When you want
                to DM somebody while in a conversation with somebody else you
                have to context switch while you search for their DM channel or
                look up their name just to ask a simple question.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xs opacity-50">SOLUTION</h3>
              <p>
                This app enables you to send mass personalized DMs from your
                account to everyone in a certain channel, or to specific people,
                all through a slash commands – /superdm. The slack app is only
                available for use to authorized users across various workspaces
                (Internal Slack, and Accelerator Slack) with ease. You can
                allowed others to send messages from your account using your
                password, and get notification every time your account is used
                with the message that was sent and where. <br />
                <ul className="ml-4">
                  <li className="list-decimal">
                    To send a personal DM to each person in a channel, excluding
                    a few /superdm #channel @ExcludedPerson1 @ExcludedPerson2{" "}
                    {"<>"}
                    message [{"<>"} pswd] (optional)
                    <iframe
                      className="border-8 rounded-3xl my-4 w-full border-[#dedede]/10"
                      height="520"
                      src="https://youtube.com/embed/S4AFpeddyQ8"
                    ></iframe>
                  </li>
                  <li className="list-decimal">
                    To send a personal DM to various people at once /superdm
                    @Person1 @Person2 {"<>"} message [{"<>"} pswd] (optional)
                    <iframe
                      className="border-8 rounded-3xl my-4 w-full border-[#dedede]/10"
                      height="520"
                      src="https://youtube.com/embed/b1NnX2fyqxU"
                    ></iframe>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperDMs;
