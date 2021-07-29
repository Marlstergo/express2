import * as React from "react";
import { Grid, Box, Flex, Heading } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import "twin.macro";

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
          gap={[null, 8, 8, 20, 20]}
        >
          {pageQuery.slideShow.edges.map(({ node }) => (
            <AnimatePresence key={node.id}>
              <motion.Box tw="hover:opacity-70">
                <Flex
                  w="100%"
                  h={[null, 300, 300, 500]}
                  _hover={{}}
                  my="auto"
                  align="center"
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 1 }}
                >
                  <GatsbyImage
                    image={node.childImageSharp?.gatsbyImageData}
                    tw="xl:w-72 xl:h-full"
                    alt={node.base.split("-").join(" ").split(".")[0]}
                  />
                </Flex>
              </motion.Box>
            </AnimatePresence>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
