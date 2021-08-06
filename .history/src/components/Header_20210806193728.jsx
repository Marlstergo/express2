/* EXAMPLE */

import React from "react";

import { Box, Flex, Heading } from "@chakra-ui/react";
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
          fontSize={["small", "small", "md", "xl", "2xl"]}
          experimental_spaceX="6"

          h="12"
        >
          <Link
            
            to="/"
          >
            <Heading
              color="black"
              borderColor="blackAlpha.700"
              // borderBottom = "4px"
              _hover={{ borderBottom: "4px" }}
            >
              Home
            </Heading>
          </Link>
          <Link
            
            to="/#partner"
            style={{
              height: "38px",
            }}
          >
            <Heading
              color="black"
              borderColor="blackAlpha.700"
              // borderBottom = "4px"
              _hover={{ borderBottom: "4px" }}
            >
              Partner
            </Heading>
          </Link>
          <Link
      
            to="/#contact"
          >
            <Heading
              color="black"
              borderColor="blackAlpha.700"
             
              _hover={{ borderBottom: "4px" }}
            >
              Kontakt
            </Heading>
          </Link>
        </Flex>
      </Box>
    </header>
  );
}
