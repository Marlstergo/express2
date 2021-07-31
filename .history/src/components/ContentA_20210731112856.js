import React from "react";
import { graphql, StaticQuery } from "gatsby";
import "twin.macro";
import PropTypes from "prop-types";

import { Box, Flex, Text } from "@chakra-ui/react";

import BackgroundImage from "gatsby-background-image";

const ContentA = ({ number, title }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "02.jpg" }) {
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
            preserveStackingContext={true}
            style={{
              backgroundAttachment: "fixed",
            }}
          >
            <Box>
              <Box h="100vh" w="full" tw="overflow-hidden">
                <Flex
                  w="full"
                  justifyItems="center"
                  h="full"
                  
                >
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
                    
                    <Text fontSize="5xl" fontWeight="bold" color="gray.300">
                      {number}
                    </Text>
                    <Text
                      mb="10"
                      color="white"
                      fontSize={["4xl", "4xl", "5xl", "5xl"]}
                      fontWeight="bold"
                      
                    >
                      {title}
                    </Text>
                    <Text
                      fontSize={["lg", null, "xl", "2xl"]}
                      color="gray.300"
                      
                    >
                      Beratung Reperatur Verkauf Wartung
                    </Text>
                   
                  </Flex>
                  <Box
                    w="50%"
                    h="full"
                    display={["none", null, null, "block"]}
                    // tw="hidden lg:block"
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

ContentA.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  image: PropTypes.string,
  component: PropTypes.number,
  cofee: PropTypes.any,
};

export default ContentA;
