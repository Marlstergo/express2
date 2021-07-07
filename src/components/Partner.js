import React from "react";
import { Grid, Box, Flex, Heading } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
// import {  GatsbyImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

export default function Partner({ data }) {
  console.log(data);
  return (
    <>
      <Box
          display={["none","none","block","block"]}

      >
        <Heading align="center" size="lg" my={16}>
          Unsere Partner
        </Heading>
        <Grid
          // h="200px"
          // maxW="960px"
          px={40}
          mx="auto"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={40}
        >
          <AnimatePresence>
            <motion.div
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <Flex
                w="100%"
                h="300"
                _hover={{}}
                my="auto"
                align="center"
                initial={{ opacity: 0.1 }}
                animate={{ opacity: 1 }}
              >
                <StaticImage
                height="36px"
                  src="../images/DC_RGB_DALLA CORTE_GREY MARK_300DPI.png"
                  alt="CORTE_GREY"
                />{" "}
              </Flex>
            </motion.div>
          </AnimatePresence>
          <motion.div
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
            w="100%"
            h="300"
            align="center"
          >
            <StaticImage src="../images/asc-Fabrik-Logo.png" alt="Ascaso" />{" "}
          </motion.div>
          <motion.div
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
            w="100%"
            h="300"
            align="center"
          >
            <StaticImage src="../images/Mahlkoenig Logo.svg" alt="Ascaso" />{" "}
          </motion.div>
          <motion.div
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
            w="100%"
            h="300"
            align="center"
          >
            <StaticImage
              src="../images/Eureka_1920_Logo-rot.jpg"
              alt="Ascaso"
            />{" "}
          </motion.div>
          <motion.div
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
            w="100%"
            h="300"
            align="center"
          >
            <StaticImage
              src="../images/ECM Logo Vektor_einfach.svg"
              alt="Ascaso"
            />{" "}
          </motion.div>
          <motion.div
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
            w="100%"
            h="300"
            align="center"
          >
            <StaticImage src="../images/VBM-logo.png" alt="Ascaso" />{" "}
          </motion.div>
        </Grid>
      </Box>
      <Box
        // display={["block","block","none","none"]}
        mt="12"
        // h="80"
        // w='80%'
        // mx='autopoo'
        tw=" md:hidden mt-12 flex items-center justify-center h-screen"
      >
        <div className="bg-yellow-500 h-96 overflow-hidden md:hidden">
        <Carousel tw=" md:hidden flex items-center justify-center h-full">
          
          <Carousel.Item>
            <StaticImage src="../images/asc-Fabrik-Logo.png" alt="Ascaso " />
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage
              src="../images/DC_RGB_DALLA CORTE_GREY MARK_300DPI.png"
              alt="CORTE_GREY"
            />{" "}
          </Carousel.Item>
          <Carousel.Item>
            <div className="flex items-center justify-center">
            <StaticImage
              src="../images/Eureka_1920_Logo-rot.jpg"

              alt="Ascaso"
            />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage src="../images/Mahlkoenig Logo.svg" alt="Ascaso" />
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage
              src="../images/ECM Logo Vektor_einfach.svg"
              alt="Ascaso"
            />
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage src="../images/VBM-logo.png" alt="Ascaso" />
          </Carousel.Item>
        </Carousel>
        </div>
        {/* <Carousel>;
      {data.slideShow.edges.map(({node}) => (
        // <Carousel.Item key={node.id}>
        //   <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base.split('-').join(' ').split('.')[0]} />
        // </Carousel.Item>
        // <p key={node.id} >
        //   {node.base}
          
        // </p>
        <p key={node.id}>ds</p>
      ))}
    </Carousel> */}
      </Box>
    </>
  );
}

Partner.propTypes = {
  data: PropTypes.any,
};

export const pageQuery = graphql`
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
              height: 600
              width: 900
              placeholder: BLURRED
              quality: 70
              blurredOptions: { width: 100 }
              transformOptions: { cropFocus: CENTER, fit: COVER }
            )
          }
        }
      }
    }
  }
`;
