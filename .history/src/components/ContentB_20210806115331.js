import React from "react";
import { graphql, StaticQuery } from "gatsby";
import "twin.macro";
import PropTypes from "prop-types";

import { Box, Flex, Text } from "@chakra-ui/react";

import BackgroundImage from "gatsby-background-image";
import Header from "./Header";

const ContentB = ({ number, title, info }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "01.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <BackgroundImage
            Tag="section"
            fluid={data.desktop.childImageSharp.fluid}
            style={{
              backgroundAttachment: "fixed",
            }}
          >
            <Box>
              <Box h="100vh" w="full">
                <Flex w="full" justifyItems="center" h="full">
                  <Flex
                    direction="column"
                    h="full"
                    w={["100vw", null, null, "50%"]}
                    pl={["2", null, null, "36"]}
                    pr={["2", null, null, "12"]}
                    justifyItems="center"
                    // alignItems="center"
                    justifyContent="center"
                    background="black"
                    backgroundColor="rgba(0, 0, 0, 0.5)"
                  >
                    <Heading
                      fontSize="5xl"
                      fontWeight="bold"
                      color="gray.300"
                    >
                      {number}
                    </Heading>
                    <Text
                      mb="10"
                      color="white"
                      fontSize="5xl"
                      fontWeight="bold"
                    >
                      {title}
                    </Text>
                    <Text fontSize={["lg", null, "xl", "2xl"]} color="gray.300">
                      {info}
                    </Text>
                  </Flex>
                  <Box
                    w="50%"
                    h="full"
                    display={["none", null, null, "block"]}
                  ></Box>
                </Flex>
              </Box>
            </Box>
          </BackgroundImage>
        );
      }}
    />
  );
};

ContentB.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  image: PropTypes.string,
  component: PropTypes.number,
  cofee: PropTypes.any,
};

export default ContentB;
