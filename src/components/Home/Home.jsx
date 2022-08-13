import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myImage from "/assets/abbas-dev.png";
import "./home.css";

function Home() {
  return (
    <>
      <Box className="intro-box " bgColor={"#141E27"}>
        <div className="left-info">
        <div>
          <FontAwesomeIcon icon={"address-book"} />
          </div>
          <p className="work">
            Design {">>"} Build {">>>>"} Improve 👍
          </p>
          <h1 className="intro-word">
            <Typical
              steps={[
                "I am Abdulwahab abbas",
                2000,
                "Experienced Fullstack Developer",
                2000,
                "MERN STACK DEVELOPER",
                2000,
                "open source collaborator",
                2000,
              ]}
              loop={Infinity}
            />
          </h1>
          <p className="leading-[24px] md:text-[20px] opacity-70 mb-[44px]">
            {" "}
            I create Beautiful Websites with High User Retention and amazing
            User Experience
          </p>
          <div className="flex  flex-col md:flex-row items-center justify-center gap-[34px]">
            <a href="/assets/abbas-tech-CV.pdf" download={"abbas-tech-CV.pdf"}>
              <button className="intro-contact">check my Resume</button>
            </a>
            <Link to={"/Contact-us"} className="intro-contact">
              Discuss with Me
            </Link>
          </div>
       
        </div>
        <div className="right-img">
          <img src={myImage} alt="abdulwahab abbas" className="intro-image" />
        </div>
      </Box>
    </>
  );
}

export default Home;
