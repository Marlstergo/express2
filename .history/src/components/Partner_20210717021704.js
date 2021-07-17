import * as React from "react";
import { Grid, Box, Flex, Heading } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import "twin.macro";

import Slider from "react-slick";

export default function Partner() {
  const pageQuery = useStaticQuery(graphql`
    query {
      slideShow: allFile(
        filter: { relativeDirectory: { eq: "slideshow" } }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                quality: 70
                blurredOptions: { width: 100 }
                transformOptions: { fit: CONTAIN }
              )
            }
          }
        }
      }
    }
  `);
  console.log(pageQuery);

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box id="partner">
      <Box display={["none", "none", "block", "block"]}>
        <Heading align="center" size="lg" my={16}>
          Unsere Partner
        </Heading>
        <Grid
          px={[null, null, 20, 40]}
          mx="auto"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={[null, 8, 8, 40]}
        >
          {pageQuery.slideShow.edges.map(({ node }) => (
            <AnimatePresence key={node.id}>
              <motion.Box tw="hover:opacity-70">
                <Flex
                  w="100%"
                  h="300"
                  _hover={{}}
                  my="auto"
                  align="center"
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 1 }}
                >
                  <GatsbyImage
                    image={node.childImageSharp?.gatsbyImageData}
                    alt={node.base.split("-").join(" ").split(".")[0]}
                  />
                </Flex>
              </motion.Box>
            </AnimatePresence>
          ))}
        </Grid>
      </Box>

      <Box>
        <Box p="10" tw="md:hidden">
          <Heading align="center" size="lg" my={8}>
            Unsere Partner
          </Heading>
          <Slider {...settings}>
            {pageQuery.slideShow.edges.map(({ node }) => (
              <AnimatePresence key={node.id}>
                <motion.Box
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                  // tw="hover:opacity-50"
                >
                  <Flex
                    tw="hover:opacity-70"
                    w="100%"
                    h="400"
                    _hover={{}}
                    my="auto"
                    align="center"
                    initial={{ opacity: 0.1 }}
                    animate={{ opacity: 1 }}
                  >
                    <Box tw="mx-auto object-contain">
                      <GatsbyImage
                        image={node.childImageSharp?.gatsbyImageData}
                        tw="h-[400px] mx-auto w-96"
                        alt={node.base.split("-").join(" ").split(".")[0]}
                      />
                    </Box>
                  </Flex>
                </motion.Box>
              </AnimatePresence>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}
