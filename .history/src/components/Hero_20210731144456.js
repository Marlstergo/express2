import { Box } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";


import Logo from "../images/logo.svg";

function Hero() {
  const { scrollYProgress } = useViewportScroll();
  const paddingTop = useTransform(scrollYProgress, [0, 0.1], [1, 0.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <>
      <Box position="relative" pt="96" h="100vh" overflow="hidden">
        <motion.div
          
          style={{
            paddingTop,
            display: "flex",
            flexDirection: "column",
            padding: "96px",
            paddingBottom: "0px",
            paddingRight: "0px",
            paddingLeft: "0px",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            height: "50%",
            zIndex: -10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center"
            }}
          // tw="z-0 flex items-center justify-center">
            <motion.img
              src={Logo}
              
              style={{
                opacity,
              }}
            />
          </div>
        </motion.div>
      </Box>
    </>
  );
}

export default Hero;
