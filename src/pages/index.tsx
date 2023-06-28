import Image from 'next/image'
import NextLink from 'next/link'

import { 
  Flex, Heading, Link, Spacer,
 } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex direction="column" bg="red.100" minH="100vh">
      <Flex direction="row" bg="green.100" minW="100vw" h="75px" align="center" px="20px" color="black" justify="center">
        <Heading as="h1" size="2xl">
          Companions4Life
        </Heading>
      </Flex>

      <Flex direction="row" gap="50px" bg="orange.100" justify="center" py="3">
          <Link as={NextLink} href='/'>
            <Heading as="h1" size="md">
              Home
            </Heading>
          </Link>

          <Link as={NextLink} href='/about'>
            <Heading as="h1" size="md">
              About
            </Heading>
          </Link>

          <Link as={NextLink} href='/donate'>
            <Heading as="h1" size="md">
              Contact
            </Heading>
          </Link>

          <Link as={NextLink} href='/donate'>
            <Heading as="h1" size="md">
              Donate
            </Heading>
          </Link>
        </Flex>
    </Flex>
  )
}
