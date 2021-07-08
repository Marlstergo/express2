/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import React from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import "twin.macro";
import { Link } from "gatsby";
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
    <Box tw="relative bg-white">
      <Box tw="absolute inset-0">
        <Box tw="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </Box>
      <Box tw="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <Box tw="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <Box tw="mx-auto max-w-lg">
            <Text tw="text-gray-900 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Get in touch
            </Text>
            <Text tw="mt-3 text-gray-500 text-lg leading-6">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </Text>
            <Box tw="mt-8 text-gray-500 text-base">
              <Box>
                <Text tw="sr-only">Postal address</Text>
                <Text>
                  <Text>742 Evergreen Terrace</Text>
                  <Text>Springfield, OR 12345</Text>
                </Text>
              </Box>
              <Box tw="mt-6">
                <Text tw="sr-only">Phone number</Text>
                <Text tw="flex">
                  <PhoneIcon
                    tw="flex-shrink-0 w-6 h-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <Text tw="ml-3">+1 (555) 123-4567</Text>
                </Text>
              </Box>
              <Box tw="mt-3">
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
            <Text tw="mt-6 text-gray-500 text-base">
              Looking for careers?{" "}
              <Link href="#" tw="text-gray-700 underline font-medium">
                View all job openings
              </Link>
              .
            </Text>
          </Box>
        </Box>
        <Box tw="px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
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
                  tw="inline-flex justify-center px-6 py-3 text-white text-base font-medium bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md focus:outline-none shadow-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </Button>
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
