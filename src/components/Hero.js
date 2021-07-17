import { Box } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import "twin.macro";

import Logo from "../images/logo.svg";

function Hero() {
  const { scrollYProgress } = useViewportScroll();
  const paddingTop = useTransform(scrollYProgress, [0, 0.1], [1, 0.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <>
      <Box position="relative" pt="96" h="100vh" overflow="hidden" tw="">
        <motion.div
          tw="flex flex-col items-center justify-center mx-auto pt-24 h-1/2"
          style={{
            paddingTop,

            zIndex: -10,
          }}
        >
          <div tw="z-0 flex items-center justify-center">
            <motion.img
              src={Logo}
              tw=""
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
