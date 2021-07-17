
import React from "react";
import "twin.macro";
import { Box, Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Logo from "../images/logo.svg";
import { Link } from "gatsby";

export default function Footer({ animate, reff }) {
  return (
    <footer ref={reff} id="footer">
      <Box p="20" h="60" className="">
        <Flex h="full" experimental_spaceX="7" className="">
          <Link to="/datenschutz">Impression</Link>
          <Link to="/impressum">Detenshutz</Link>
        </Flex>
        <Flex justify="center" overflow="hidden" className="">
          <motion.img src={Logo} className="mt-6" animate={animate} />
        </Flex>
      </Box>
    </footer>
  );
}

Footer.propTypes = {
  animate: PropTypes.func,
  reff: PropTypes.any,
};

