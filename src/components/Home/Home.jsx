import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { serviceDetails } from "../icons";
import React from "react";
import myImage from "../../images/abbas-dev.png";
import "./home.css";

function Home() {
  return (
    <>
      <Box className="intro-box" bgColor={"gray.900"}>
        <div className="left-info">
          <p className="work">
            Design {">>"} Build {">>>>"} Improve
          </p>
          <h1 className="intro-word">
            I create beautiful websites your users will love
          </h1>
          <button className="intro-contact">Discuss with expert</button>
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
          lg: "2rem 4rem"
        }}
        bgColor={"white"}
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
                  bgColor={"purple"}
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
