/* EXAMPLE */

import React from "react";

import { Box, Flex,  Text } from "@chakra-ui/react";
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
          fontSize={["md", "md", "md", "lg", "xl"]}
          experimental_spaceX="6"
          h="12"
        >
          <Link to="/">
            <Text
              color="black"
              borderColor="blackAlpha.700"
              // borderBottom = "4px"
              _hover={{ borderBottom: "4px" }}
            >
              Home
            </Text>
          </Link>
          <Link
            to="/#partner"
            style={{
              height: "38px",
            }}
          >
            <Text
              color="black"
              borderColor="blackAlpha.700"
              // borderBottom = "4px"
              _hover={{ borderBottom: "4px" }}
            >
              Partner
            </Text>
          </Link>
          <Link to="/#contact">
            <Text
              color="black"
              borderColor="blackAlpha.700"
              _hover={{ borderBottom: "4px" }}
            >
              Kontakt
            </Text>
          </Link>
        </Flex>
      </Box>
    </header>
  );
}
