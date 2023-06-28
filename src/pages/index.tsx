
import NextLink from 'next/link'

import { 
  Flex, Heading, Link, Spacer, Image, Text, Box, Button, chakra
 } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex direction="column" bg="red.100" minH="100vh">

      <Flex direction="row" bg="green.100" minW="100vw" h="75px" align="center" px="20px" color="black" justify="center" py="50px">
        <Heading as="h1" size="4xl">
          Companions For Life
        </Heading>
      </Flex>

      <Flex direction="row" gap="50px" bg="orange.100" justify="center" py="3">
          <Link as={NextLink} href='/'>
            <Heading as="h1" size="md">
              Mission
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

        <Box 
          backgroundImage={"url(https://ic.c4assets.com/brands/the-dog-house/5061c640-5174-451b-9798-0c11f6d56b4d.jpg?interpolation=progressive-bicubic&output-format=jpeg&output-quality=90&resize=1200px:*)"} 
          width="100vw" 
          height="75vh" 
          backgroundSize="cover"
        >
          <Flex
            direction="column" 
            bg="rgba(0,0,0,0.7)"

            width="100vw" 
            height="75vh" 
            backgroundSize="cover"

            color="white"

            align="center"
            justify="center"
            
            gap="2"
          >
            <Heading size="4xl">
              We Save Lives
            </Heading>
            <Text pb="10">
              Become the hero the community needs
            </Text>
            <Button colorScheme='yellow'>
              Donate Now
            </Button>

          </Flex>
        </Box>

        <Flex direction="row" bg="gray.200" justify="center" color="blue.600" py="10">
          <Heading size="4xl">
            Building a Community that Fosters <chakra.span color="red.600">Love</chakra.span>
          </Heading>
        </Flex>


    </Flex>
  )
}
