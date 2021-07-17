import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  // Image,
  // Stack,
  Text,
  // useColorModeValue,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

export default function Carousels() {
  // const image = "../images/ECM Logo Vektor_einfach.svg";
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "black",
    opacitry: "0.8",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const slides = [
    {
      img: "../images/Eureka_1920_Logo-rot.jpg",
    },
    {
      img: "../images/ECM Logo Vektor_einfach.svg",
    },
    {
      img: "../images/VBM-logo.png",
    },
    {
      img: "../images/Mahlkoenig Logo.svg",
    },
    {
      img: "../images/asc-Fabrik-Logo.png",
    },
    {
      img: "../images/DC_RGB_DALLA CORTE_GREY MARK_300DPI.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      w="full"
      p={10}
      alignItems="center"
      justifyContent="center"
      tw="md:hidden"
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="400px" w="full" {...carouselStyle}>
          {/* {slides.map((slide, sid) => ( */}
          <Box boxSize="full" shadow="md" tw="flex items-center">
            <StaticImage
              // height="36px"
              src="../images/DC_RGB_DALLA CORTE_GREY MARK_300DPI.png"
              // boxSize="full"
              // backgroundSize="cover"
              alt="Ascaso"
            />{" "}
          </Box>
          <Box boxSize="full" shadow="md" flex="none">
            <StaticImage
              // height="36px"
              src="../images/Mahlkoenig Logo.svg"
              // boxSize="full"
              // backgroundSize="cover"
              alt="Ascaso"
            />{" "}
          </Box>
          <Box boxSize="full" shadow="md" flex="none">
            <StaticImage
              // height="36px"
              src="../images/Eureka_1920_Logo-rot.jpg"
              // boxSize="full"
              // backgroundSize="cover"
              alt="Ascaso"
            />{" "}
          </Box>
          <Box boxSize="full" shadow="md" flex="none">
            <StaticImage
              // height="36px"
              src="../images/ECM Logo Vektor_einfach.svg"
              // boxSize="full"
              // backgroundSize="cover"
              alt="Ascaso"
            />{" "}
          </Box>
          <Box boxSize="full" shadow="md" flex="none">
            <StaticImage
              // height="36px"
              src="../images/VBM-logo.png"
              // boxSize="full"
              // backgroundSize="cover"
              alt="Ascaso"
            />{" "}
          </Box>
          <Box boxSize="full" shadow="md" flex="none">
            <StaticImage
              // height="36px"
              src="../images/asc-Fabrik-Logo.png"
              // boxSize="full"
              // backgroundSize="cover"
              alt="Ascaso"
            />{" "}
          </Box>
          {/* ))} */}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", "15px"]}
              m="0 2px"
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}
