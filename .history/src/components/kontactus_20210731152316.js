import React from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import "twin.macro";
import {
  Box,
  Input,
  Text,
  FormLabel,
  FormControl,
  Button,
  Textarea,

} from "@chakra-ui/react";

export default function FormKontact() {
  return (
    <Box
      position="relative"
      bg="white"
      // tw="relative bg-white"
      id="contact"
    >
      <Box
        position="relative"
        inset="0"

        // tw="absolute inset-0"
      >
        <Box
          position="relative"
          insetY="0"
          left="0"
          width="50%"
          bg="white"
          // tw="absolute inset-y-0 left-0 w-1/2 bg-white"
        />
      </Box>
      <Box
        position="relative"
        mx="auto"
        maxW="7xl"
        display={["block", "block", "block", "grid"]}
        // gridColumn="5"
        gridTemplateColumns="1"
        // tw="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5"
      >
        <Box
          mx="auto"
          px={["4", "6", "6", "8"]}
          py={["16", null, null, "24"]}
          pl={[null, null, null, "12"]}
          w={["80%", "60%"]}
          bg="white"
          // gridColumn="5"
          gridColumnStart="1"
          gridColumnEnd="6"
          // tw="mx-auto px-4 py-16 w-4/5 bg-white sm:px-6 md:w-3/5 lg:col-span-5 lg:px-8 lg:py-24 xl:pl-12"
        >
          <Box tw="mx-auto max-w-lg lg:max-w-none">
            <FormControl action="#" method="POST" tw="grid gap-y-6 grid-cols-1">
              <Box>
                <FormLabel htmlFor="full_name" tw="sr-only">
                  Full name
                </FormLabel>
                <Input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autoComplete="name"
                  tw="placeholder-gray-500 block px-4 py-3 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500"
                  placeholder="Full name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="email" tw="sr-only">
                  Email
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  tw="placeholder-gray-500 block px-4 py-3 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500"
                  placeholder="Email"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="phone" tw="sr-only">
                  Phone
                </FormLabel>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  tw="placeholder-gray-500 block px-4 py-3 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500"
                  placeholder="Phone"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="message" tw="sr-only">
                  Message
                </FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  tw="placeholder-gray-500 block px-4 py-3 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500"
                  placeholder="Message"
                  defaultValue={""}
                />
              </Box>
              <Box>
                <Button
                  type="submit"
                  tw="inline-flex justify-center px-6 py-3 text-white text-base font-medium bg-gray-500 hover:bg-gray-600 border border-transparent rounded-md focus:outline-none shadow-sm focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Submit
                </Button>
              </Box>
            </FormControl>
          </Box>
        </Box>
        <Box tw="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-5 lg:px-8 lg:py-24 xl:pr-12">
          <Box tw="mx-auto max-w-4xl">
            <Box tw="flex flex-col items-center justify-around w-full text-gray-500 text-base space-y-4 md:flex-row md:space-y-0">
              <Box tw="flex flex-col items-center justify-center mx-auto w-3/4 md:w-1/3 lg:w-full">
                <Text tw="sr-only">Postal address</Text>
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
              </Box>
              <Box tw="flex flex-col items-center justify-center mx-auto w-3/4 md:w-1/3 lg:w-4/5">
                <Text tw="sr-only">Phone number</Text>
                <Text tw="flex">
                  <PhoneIcon
                    tw="flex-shrink-0 w-6 h-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <Text tw="ml-3">+1 (555) 123-4567</Text>
                </Text>
              </Box>
              <Box tw="flex flex-col items-center justify-center mx-auto w-3/4 md:w-1/3 lg:w-4/5">
                <Text tw="sr-only">Email</Text>
                <Text tw="flex">
                  <MailIcon
                    tw="flex-shrink-0 w-6 h-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <Text tw="ml-3">support@example.com</Text>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
