import React from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import "twin.macro";
import {
  Box,
  Input,
  Text,
  // FormLabel,
  FormControl,
  Button,
  Textarea,
  Flex,
  // ring,
} from "@chakra-ui/react";

export default function FormKontact() {
  return (
    <Box position="relative" bg="white" id="contact">
      <Box position="relative" inset="0">
        <Box position="relative" insetY="0" left="0" width="50%" bg="white" />
      </Box>
      <Box
        position="relative"
        mx="auto"
        display={["block", "block", "block", "grid"]}
        gridTemplateColumns="1"
      >
        <Box
          mx="auto"
          px={["4", "6", "6", "8"]}
          py={["16", null, null, "24"]}
          pl={[null, null, null, "12"]}
          w={["80%", "60%"]}
          bg="white"
          gridColumnStart="1"
          gridColumnEnd="6"
          
        >
          <Box mx="auto" maxW={["lg", null, null, "2xl"]}>
            <FormControl
              action="#"
              method="POST"
              display="grid"
              gridRowGap="6"
              gridColumn="1"
            >
              <Box>
                <Input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autoComplete="name"
                  _placeholder={{
                    color: "rgb(145, 145, 145)",
                  }}
                  px="4"
                  py="3"
                  w="full"
                  border="2px"
                  borderColor="gray.300"
                  _focus={{
                    borderColor: "indigo.500",
                    ring: "2",
                    ringColor: "indigo.500",
                  }}
                  borderWidth="1px"
                  boxShadow="sm"
                  placeholder="Full name"
                />
              </Box>
              <Box>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  _placeholder={{
                    color: "rgb(145, 145, 145)",
                  }}
                  px="4"
                  py="3"
                  w="full"
                  border="2px"
                  borderColor="gray.300"
                  _focus={{
                    borderColor: "indigo.500",
                    ring: "2",
                    ringColor: "indigo.500",
                  }}
                  borderWidth="1px"
                  boxShadow="sm"
                  placeholder="Email"
                />
              </Box>
              <Box>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  _placeholder={{
                    color: "rgb(145, 145, 145)",
                  }}
                  px="4"
                  py="3"
                  w="full"
                  border="2px"
                  borderColor="gray.300"
                  _focus={{
                    borderColor: "indigo.500",
                    ring: "2",
                    ringColor: "indigo.500",
                  }}
                  borderWidth="1px"
                  boxShadow="sm"
                  placeholder="Phone"
                />
              </Box>
              <Box>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  px="4"
                  py="3"
                  w="full"
                  border="1"
                  borderColor="gray.300"
                  borderRadius="6px"
                  boxShadow="sm"
                  _focus={{
                    ringColor: "indigo.500",
                    borderColor: "indigo.500",
                  }}
                  placeholder="Message"
                  defaultValue={""}
                />
              </Box>
              <Box>
                <Button
                  type="submit"
                  display="inline-flex"
                  ustifyItems="center"
                  justifyContent="center"
                  px="6"
                  py="3"
                  color="white"
                  fontSize="medium"
                  bgColor="gray.500"
                  _hover={{
                    bgColor: "gray.600",
                  }}
                  // border="1px"
                  border="transparent"
                  borderRadius="6px"
                  boxShadow="sm"
                  _focus={{
                    outline: "none",
                    // borderRadius : "3px",
                    ring: "2px",
                    ringColor: "gray.500",
                    ringOffset: "2",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </FormControl>
          </Box>
        </Box>
        <Box
          gridColumnStart="1"
          gridColumnEnd="6"
          px={["4", "6", "6", "8"]}
          py={["16", null, null, "24"]}
          bg="gray.50"
          pr={[null, null, null, null, "12"]}
        >
          <Box mx="auto">
            <Flex
              flexDir={["column", "column", "row"]}
              justify="space-around"
              w="full"
              alignItems="center"
              color="gray.500"
              experimental_spaceY={["4", "4", "0"]}
            >
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                justifyItems="center"
                mx="auto"
                w={["75%", null, "33.33%", "full"]}
              >
                <Box>
                  <Text display={["none", "none", "none", "block"]}>
                    742 Evergreen Terrace Springfield, OR 12345
                  </Text>
                  <Text display={["block", "block", "block", "none"]}>
                    742 Evergreen Terrace
                  </Text>
                  <Text display={["block", "block", "block", "none"]}>
                    Springfield, OR 12345
                  </Text>
                </Box>
              </Flex>
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                justifyItems="center"
                mx="auto"
                w={["75%", null, "33.33%", "80%"]}
              >
                <Text display="flex">
                  <PhoneIcon
                    style={{
                      flexShrink: "0",
                      width: "6",
                      height: "6",
                      color: "gray.400",
                    }}
                    aria-hidden="true"
                  />
                  <Text ml="3">+1 (555) 123-4567</Text>
                </Text>
              </Flex>
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                justifyItems="center"
                mx="auto"
                w={["75%", null, "33.33%", "80%"]}
              >
                <Text display="flex">
                  <MailIcon
                    style={{
                      flexShrink: "0",
                      width: "6",
                      height: "6",
                      color: "gray.400",
                    }}
                    aria-hidden="true"
                  />
                  <Text ml="3">support@example.com</Text>
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
