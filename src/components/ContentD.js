import React from "react";
import { graphql, StaticQuery } from "gatsby";
import "twin.macro";
import PropTypes from "prop-types";


import { Box, Flex, Text } from "@chakra-ui/react";

import BackgroundImage from "gatsby-background-image";

const ContentD = ({ number, title }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "04.jpg" }) {
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
            tw="bg-fixed"
          >
            <Box>
              <Box h="100vh" w="full">
                <Flex w="full" tw="flex justify-center h-full">
                  <Flex
                    direction="column"
                    h="full"
                    w={["100vw", null, null, "50%"]}
                    pl={["2", null, null, "36"]}
                    pr={["2", null, null, "12"]}
                    tw="justify-center bg-black bg-opacity-50"
                  >
                    <Text
                      fontSize="5xl"
                      fontWeight="bold"
                      color="gray.300"
                      tw=""
                    >
                      {number}
                    </Text>
                    <Text
                      mb="10"
                      color="white"
                      fontSize="5xl"
                      fontWeight="bold"
                      tw=""
                    >
                      {title}
                    </Text>
                    <Text
                      fontSize={["lg", null, "xl", "2xl"]}
                      color="gray.300"
                      tw=""
                    >
                      Fast alle benötigten Ersatzteile der Partner-Marken
                      DallaCorte, ASCASO, Mahlkönig, EUREKA, ecm, VBM (Vibiemme)
                      Reneka und bwt water+more sind vorrätig
                      <br />
                      Viele Standard Ersatz- und Verschleißteile aller übrigen
                      Marken sind vorhanden oder können meist schnell besorgt
                      werden
                    </Text>
                  </Flex>
                  <Box
                    w="50%"
                    h="full"
                    display={["none", null, null, "block"]}
                    tw="hidden lg:block"
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

ContentD.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  image: PropTypes.string,
  component: PropTypes.number,
  cofee: PropTypes.any,
};

export default ContentD;
