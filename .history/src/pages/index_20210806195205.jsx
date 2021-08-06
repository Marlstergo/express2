/* EXAMPLE */

import React from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { Box, Flex } from "@chakra-ui/react";

import ScrollToTop from "react-scroll-to-top";
import "../styles/global.css";
import FormKontact from "../components/kontactus";

import {
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContentA from "../components/ContentA";
import ContentB from "../components/ContentB";
import ContentC from "../components/ContentC";
import ContentD from "../components/ContentD";
import Partner from "../components/Partner";

import Hero from "../components/Hero";
import Svg from "../components/Svg";
import Carousels from "../components/corusel";
// import SvgMobile from "../components/SvgMobile";


const IndexPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.17], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0.15999, 0.16], [0, 1]);
  const hide = useTransform(scrollYProgress, [0.7499999, 0.75], [1, 0]);
  const zIndex = useTransform(scrollYProgress, [0.69999, 0.7], [700, 400]);
  const logic = useTransform(scrollYProgress, [0, 0.7], [900, 300]);
  const opacity1 = useTransform(scrollYProgress, [0.78, 0.7850001], [0, 1]);


  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  console.log(ref);


  const animation = useAnimation();
  const removeAnimation = useAnimation();
 

  useEffect(() => {

    if (inView) {
      animation.start({
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });
      removeAnimation.start({
        y: "-25vh",
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "100vh",
      });
      removeAnimation.start({
        originY: -0.5,
        originX: 0.4,

        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });
    }
  }, [inView]);
  console.log(removeAnimation);

  return (
    <Layout refrence={ref} animation={animation}>
      <SEO title="My Amazing Gatsby App" />
      <ScrollToTop
        aria-label="scroll to top"
        style={{ backgroundColor: "" }}
        className="scroll-to-top"
        
        smooth
        top={0}
      />

  
      <main>
        <title>Home Page</title>
   
        <Box className="">
          <Flex w="full" className="image z-0 justify-center w-full">
            <Svg
              removeAnimation={removeAnimation}
              opacity={opacity}
              opacity1={opacity1}
              scale={scale}
              hide={hide}
              zIndex={zIndex}
              logic={logic}
            />
            {/* <SvgMobile
              removeAnimation={removeAnimation}
              opacity={opacity}
              opacity1={opacity1}
              scale={scale}
              hide={hide}
              zIndex={zIndex}
              logic={logic}
              
            /> */}
          </Flex>
          <Hero />
          <ContentA title="Espressomaschinen" number="01" />
          <ContentB title="Kaffeemühlen" number="02" />
          <ContentC title="Werkstatt" number="03" />
          <ContentD title="Ersatzteile" number="04" />
          <Partner />
          <Carousels />
          <FormKontact />
        </Box>
    
      </main>
    </Layout>
  );
};

export default IndexPage;
