import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { serviceDetails } from "../components/icons";
import "../components/Home/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Aboutme() {
  return (
    <>
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
        className="flex justify-center border-b-8"
      >
        <div className="md:w-[45%] pt-[25px] md:pt-[50px]">
          <h2 className="mb-4 text-[20px] uppercase font-bold">A bit about me.</h2>
          <p className="mb-4">
            Young and enthusiastic Frontend Developer eager to contribute to
            team success through relentless dedication, Paying attention to
            design details and effective coordination skills. clear
            understanding of task and continuous learning and growth to become a
            world class developer are my personal impetus.
          </p>
          <p className="mb-8">
            over 2yrs+ professional experience working with several programming
            tools to deliver quality results to clients. my area of expertise
            are focused on frontend engineering, backend engineering and web3
            development
          </p>
          <div className="flex gap-[24px] md:gap-[52px] list-none uppercase">
            <div>
              <h2 className="text-[18px] font-bold mb-2">languages</h2>
              <div className="ml-4">
                <li className="flex gap-2">
                  <FontAwesomeIcon icon={faAngleRight} className="hamburger text-[#0F3D3E]" />
                  <span>HTML</span>
                </li>
                <li className="flex gap-2">
                  <FontAwesomeIcon icon={faAngleRight} className="hamburger text-[#0F3D3E]" />
                  <span>CSS</span>
                </li>
                <li className="flex gap-2">
                  <FontAwesomeIcon icon={faAngleRight} className="hamburger text-[#0F3D3E]" />
                  <span>JAVASCRIPT</span>
                </li>
              </div>
            </div>
            <div>
              <h2 className="text-[18px] font-bold mb-2">Technologies</h2>
              <div className="ml-4">
                <li className="flex gap-2">
                  <FontAwesomeIcon icon={faAngleRight} className="hamburger" />
                  <span>React</span>
                </li>
                <li className="flex gap-2">
                  <FontAwesomeIcon icon={faAngleRight} className="hamburger" />
                  <span>Redux</span>
                </li>
                <li className="flex gap-2">
                  <FontAwesomeIcon icon={faAngleRight} className="hamburger" />
                  <span>Node</span>
                </li>
                <li className="flex gap-2">
                  <FontAwesomeIcon icon={faAngleRight} className="hamburger" />
                  <span>Tailwindcss</span>
                </li>
                <li className="flex gap-2">
                  <FontAwesomeIcon icon={faAngleRight} className="hamburger" />
                  <span>Git</span>
                </li>
              </div>
            </div>
          </div>
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
          Services rendered to client
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

export default Aboutme;
