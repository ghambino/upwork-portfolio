import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { serviceDetails } from "../icons";
import Typical from "react-typical";
import React from "react";
import myImage from "/assets/abbas-dev.png";
import "./home.css";

function Home() {
  return (
    <>
      <Box className="intro-box " bgColor={"#141E27"}>
        <div className="left-info">
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
      <Box
        h={{
          base: "auto",
          md: "auto",
          lg: "100vh",
        }}
        w="100%"
        padding={{
          base: "1rem 1.5rem",
          md: "2rem 4rem",
          lg: "2rem 4rem",
        }}
        bgColor={"#f1f1f1"}
        textColor={"black"}
      >
        <Text
          as={"h1"}
          fontSize="4xl"
          textAlign="center"
          fontWeight={"bold"}
          lineHeight={"9"}
          letterSpacing={"wide"}
          mb="6rem"
          mt="2rem"
        >
          Everything you need for a perfect website
        </Text>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          columnGap="3rem"
          rowGap="4rem"
        >
          {serviceDetails.map((section, index) => (
            <>
              <GridItem key={index} display={"flex"} gap={8}>
                <Box
                  h="3rem"
                  w="3rem"
                  bgColor={"#0F3D3E"}
                  padding="8"
                  display={"flex"}
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="lg"
                  textColor={"white"}
                >
                  {<section.icon />}
                </Box>
                <Box mt="-5px">
                  <Text as="h1" fontSize="2xl" fontWeight="bold" mb=".5rem">
                    {section.title}
                  </Text>
                  <Text as="p" fontSize="1.1rem" lineHeight="tall">
                    {section.text}
                  </Text>
                </Box>
              </GridItem>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Home;
