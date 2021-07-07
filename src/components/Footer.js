import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import PropTypes from "prop-types";

import Logo from "../images/logo.svg";

Footer.propTypes = {
  animate: PropTypes.func,
};

function Footer({ animate }) {
  console.log("animate", animate);
  return (
    <div>
      <Box p="20" h="60" className="">
        <Flex
          h="full"
          experimental_spaceX="7"
          className="footerlinks space-x-7"
        >
          <Link to="/">Datenschutz</Link>
          <Link to="/">Impressum</Link>
        </Flex>
        <Flex justify="center" overflow="hidden" className="">
          <p className="">Hello</p>
          <img src={Logo} className="ml-12 mt-6" animate={animate} />

          <motion.img src={Logo} className="mt-6" animate={animate} />
        </Flex>
      </Box>
    </div>
  );
}

export default Footer;
