import * as React from "react";
import { Grid, Box, Flex, Heading } from "@chakra-ui/react";
// import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
// import PropTypes from "prop-types";

// import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel } from "react-bootstrap";
// import "slick-carousel/slick/slick.css";
import "twin.macro";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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

  // const settings = {
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <Box id="partner">
      <Box display={["none", "none", "block", "block"]}>
        <Heading align="center" size="lg" my={16}>
          Unsere Partner
        </Heading>
        <Grid
          // h="200px"
          // maxW="960px"
          px={[null, null, 20, 40]}
          mx="auto"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={[null, 8, 8, 40]}
        >
          {pageQuery.slideShow.edges.map(({ node }) => (
            <AnimatePresence key={node.id}>
              <motion.Box
                
                tw="hover:opacity-70"
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
                  <GatsbyImage
                    image={node.childImageSharp?.gatsbyImageData}
                    alt={node.base.split("-").join(" ").split(".")[0]}
                  />
                </Flex>
              </motion.Box>
            </AnimatePresence>
            // <p >
            //   {node.base.split('-').join(' ').split('.')[0]}

            // </p>
          ))}
        </Grid>
      </Box>
      {/* <Box display={["none", "none", "block", "block"]}>
        <Heading align="center" size="lg" my={16}>
          Unsere Partner
        </Heading>
        <Grid
          // h="200px"
          // maxW="960px"
          px={[null, null, 20, 40]}
          mx="auto"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={[null, 8, 8, 40]}
        >
          <AnimatePresence>
            <motion.Box
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
            </motion.Box>
          </AnimatePresence>
          <motion.Box
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
            w="100%"
            h="300"
            align="center"
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
              <StaticImage src="../images/asc-Fabrik-Logo.png" alt="Ascaso" />{" "}
            </Flex>
          </motion.Box>
          <motion.Box
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
            w="100%"
            h="300"
            align="center"
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
              <StaticImage src="../images/Mahlkoenig Logo.svg" alt="Ascaso" />{" "}
            </Flex>
          </motion.Box>
          <motion.Box
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
            w="100%"
            h="300"
            align="center"
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
                src="../images/Eureka_1920_Logo-rot.jpg"
                alt="Ascaso"
              />{" "}
            </Flex>
          </motion.Box>
          <motion.Box
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
            w="100%"
            h="300"
            align="center"
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
                src="../images/ECM Logo Vektor_einfach.svg"
                alt="Ascaso"
              />{" "}
            </Flex>
          </motion.Box>
          <motion.Box
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
            w="100%"
            h="300"
            align="center"
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
              <StaticImage src="../images/VBM-logo.png" alt="Ascaso" />{" "}
            </Flex>
          </motion.Box>
        </Grid>
      </Box> */}
      {/* <Box>
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
                    <Box tw="object-contain  mx-auto">
                    <GatsbyImage
                      image={node.childImageSharp?.gatsbyImageData}
                      
                      tw="h-[400px] w-96 mx-auto "
                      alt={node.base.split("-").join(" ").split(".")[0]}
                    />
                    </Box>
                  </Flex>
                </motion.Box>
              </AnimatePresence>
              // <p >
              //   {node.base.split('-').join(' ').split('.')[0]}

              // </p>
            ))}
          </Slider>
        </Box>
      </Box> */}
    </Box> 
  );
}
