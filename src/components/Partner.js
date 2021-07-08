import React from "react";
import { Grid, Box, Flex, Heading } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
// import {  GatsbyImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";
// import { graphql } from "gatsby";
// import PropTypes from "prop-types";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel } from "react-bootstrap";
// import "slick-carousel/slick/slick.css";



export default function Partner() {
  
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
      
      </>
  );
}

// Partner.propTypes = {
//   data: PropTypes.any,
// };

// export const pageQuery = graphql`
//   query {
//     slideShow: allFile(
//       filter: { relativeDirectory: { eq: "slideshow" } }
//       sort: { fields: base, order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           base
//           childImageSharp {
//             gatsbyImageData(
//               height: 600
//               width: 900
//               placeholder: BLURRED
//               quality: 70
//               blurredOptions: { width: 100 }
//               transformOptions: { cropFocus: CENTER, fit: COVER }
//             )
//           }
//         }
//       }
//     }
//   }
// `;
