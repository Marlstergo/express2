/* EXAMPLE */

import React from "react";
import "twin.macro";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <header id="header">
      <Box className="">
        <Flex
          zIndex="900"
          // alignItems="center"
          justifyContent={["center", "center", "flex-end", "flex-end"]}
          mx={20}
          pt={5}
          fontSize={["medium", "medium", "xl", "xl", "2xl"]}
          experimental_spaceX="6"

          // tw="z-50 flex justify-center mx-20 pt-5 2xl:text-3xl text-base space-x-6 md:justify-end md:text-xl"
        >
          <Link
            // tw="text-black border-b-4 border-gray-700 border-opacity-0 hover:border-opacity-100"
            to="/"
          >
            <Text
              color= "black"
              borderColor= "blackAlpha.700"
              // borderBottom = "4px"
              _hover={{ borderBottom: '4px' }}
            >Home</Text>
          </Link>
          <Link
            // tw="text-black border-b-4 border-gray-700 border-opacity-0 hover:border-opacity-100"
            to="/"
          >
            <Text
              color= "black"
              borderColor= "blackAlpha.700"
              // borderBottom = "4px"
              _hover={{ borderBottom: '4px' }}
            >Partner</Text>
          </Link>
          <Link
            // tw="text-black border-b-4 border-gray-700 border-opacity-0 hover:border-opacity-100"
            to="/"
          >
            <Text
              color= "black"
              borderColor= "blackAlpha.700"
              // borderBottom = "4px"
              _hover={{ borderBottom: '4px' }}
            >Kontakt</Text>
          </Link>
          
        </Flex>
      </Box>
    </header>
  );
}
