/* EXAMPLE */

import React from "react";
import "twin.macro";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <header id="header">
      <Box className="">
        <Flex tw="z-50 flex justify-center mx-20 pt-5 text-lg space-x-6 md:justify-end">
          <Link
            tw="text-black border-b-4 border-gray-700 hover:border-opacity-100 border-opacity-100"
            to="/"
          >
            Home
          </Link>
          <Link
            to="#partner"
            tw="text-black border-b-4 border-gray-700 border-opacity-0 hover:border-opacity-100"
          >
            Partner
          </Link>
          <Link
            to="#contact"
            tw="text-black border-b-4 border-gray-700 border-opacity-0 hover:border-opacity-100"
          >
            Kontakt
          </Link>
        </Flex>
      </Box>
    </header>
  );
}
