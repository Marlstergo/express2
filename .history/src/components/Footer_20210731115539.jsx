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
        <Flex h="full" experimental_spaceX="7" >
          <Link to="/datenschutz">Impressum</Link>
          <Link to="/impressum">Datenshutz</Link>
        </Flex>
        <Flex justify="center" overflow="hidden" >
          <motion.img src={Logo}  animate={animate} />
        </Flex>
      </Box>
    </footer>
  );
}

Footer.propTypes = {
  animate: PropTypes.func,
  reff: PropTypes.any,
};
