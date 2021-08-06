import React, { useEffect, useState } from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import "twin.macro";

export default function Carousels() {
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

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  });

  return (
    <Flex
      w="full"
      p={2}
      alignItems="center"
      justifyContent="center"
      display={["block", "none", "none", "none"]}
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="400px" w="full" {...carouselStyle}>
          <Box boxSize="full" shadow="md" flex="none">
            <Flex alignItems="center" justifyContent="center" px={12} h="full">
              <StaticImage
                src="../images/DC_RGB_DALLA CORTE_GREY MARK_300DPI.png"
                alt="Ascaso"
              />{" "}
            </Flex>
          </Box>
          <Box boxSize="full" shadow="md" flex="none">
            <Flex alignItems="center" justifyContent="center" px={12} h="full">
              <StaticImage src="../images/Mahlkoenig Logo.svg" alt="Ascaso" />{" "}
            </Flex>
          </Box>
          <Box boxSize="full" shadow="md" flex="none">
            <Flex alignItems="center" justifyContent="center" px={12} h="full">
              <StaticImage
                src="../images/Eureka_1920_Logo-rot.jpg"
                alt="Ascaso"
              />{" "}
            </Flex>
          </Box>
          <Box boxSize="full" shadow="md" flex="none">
            <Flex alignItems="center" justifyContent="center" px={12} h="full">
              <StaticImage
                src="../images/ECM Logo Vektor_einfach.svg"
                alt="Ascaso"
              />{" "}
            </Flex>
          </Box>
          <Box boxSize="full" shadow="md" flex="none">
            <Flex alignItems="center" justifyContent="center" px={12} h="full">
              <StaticImage src="../images/VBM-logo.png" alt="Ascaso" />{" "}
            </Flex>
          </Box>
          <Box boxSize="full" shadow="md" flex="none">
            <Flex alignItems="center" justifyContent="center" px={12} h="full">
              <StaticImage src="../images/asc-Fabrik-Logo.png" alt="Ascaso" />{" "}
            </Flex>
          </Box>
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
              cursor=""
              boxSize={["7px", "15px"]}
              m="0 -2px"
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}

// function Carousels(){
//   const slides = [
//     {
//       img:
//         "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     },
//     {
//       img:
//         "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     },
//     {
//       img:
//         "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//     },
//     {
//       img:
//         "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     },
//     {
//       img:
//         "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     },
//   ];
// const [currentSlide, setCurrentSlide] = useState(0);

// const slidesCount = slides.length;

// const prevSlide = () => {
//   setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
// };
// const nextSlide = () => {
//   setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
// };
// const carouselStyle = {
//   transition: "all .5s",
//   ml: `-${currentSlide * 100}%`,
// };

//   const SLIDES_INTERVAL_TIME = 3000;
//   const ANIMATION_DIRECTION = "right";

//   useEffect(() => {
//     const automatedSlide = setInterval(() => {
//       ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
//     }, SLIDES_INTERVAL_TIME);
//     return () => clearInterval(automatedSlide);
//   }, []);

//   return (
//     <Flex
//       w="full"
//       bg={useColorModeValue("gray.200", "gray.600")}
//       p={10}
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Flex w="full" overflow="hidden">
//         <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
//           {slides.map((slide, sid) => (
//             <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
//               <Text
//                 color="white"
//                 fontSize="xs"
//                 p="8px 12px"
//                 pos="absolute"
//                 top="0"
//                 whiteSpace="nowrap"
//               >
//                 {sid + 1} / {slidesCount}
//               </Text>
//               <Image src={slide.img} boxSize="full" backgroundSize="cover" />
//             </Box>
//           ))}
//         </Flex>
//       </Flex>
//     </Flex>
//   );
// };
