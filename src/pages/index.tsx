
import NextLink from 'next/link'

import Header from "../components/Header"
import Footer from "../components/Footer"

import { 
  Flex, Heading, Link, Spacer, Image, Text, Box, Button, chakra, List, ListItem, ListIcon
 } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex direction="column" bg="brand.100" minH="100vh">
      <Header isOnMission={true}/>
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
          <Heading size="4xl" color="white  ">
            We Save Lives
          </Heading>
          <Text pb="10">
            Become the hero the community needs
          </Text>

          <Flex direction="row" gap="5">
            <Link as={NextLink} href='/contact'>
              <Button colorScheme='teal'>
                Partner With Us
              </Button>
            </Link>
            <Link as={NextLink} href='/contact'>
              <Button colorScheme='red'>
                Join Our Team
              </Button>
            </Link>
            <Link as={NextLink} href='/donate'>
              <Button colorScheme='yellow'>
                Donate Now
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>

      <Flex direction="row" bg="brand.100" justify="center" color="blue.600" py="10" border="4px solid" borderColor="black">
        <Heading size="4xl">
          Building a Community that Fosters <chakra.span color="red.600">Love</chakra.span>
        </Heading>
      </Flex>

      <Flex direction="row" justify="center" color="blue.600"
      // background="radial-gradient(circle at 25px 25px, #000 4%, lightgreen 0%), radial-gradient(circle at 75px 75px, lightgray 2%, white 0%)"
      bg="brand.200"
      backgroundSize="30px 30px"
      p="10"
      
      >
        <Flex direction="column" width="100vw" bg="brand.100" p="10" borderLeftRadius="25px"  border="4px solid" borderColor="black">
          <Heading size="4xl" mb="2">A New Leash on Life</Heading>

          <Text fontSize="2xl" mb="8">We bring <chakra.span color="pink.600" fontWeight="extrabold">shelter animals</chakra.span>, fated to be <chakra.span color="black" fontWeight="extrabold">euthanized</chakra.span>, to prisons, to be cared for by <chakra.span color="green.600" fontWeight="extrabold">approved prisoners</chakra.span></Text>

          <List fontSize="2xl"  fontWeight="bold " spacing={5}>
            <ListItem>
              <ListIcon />
              Improving Prison Quality of Life
            </ListItem>
            <ListItem>
              <ListIcon />
              Saving shelter animals' lives
            </ListItem>
            <ListItem>
              <ListIcon />
              Reducing Recidivism Rates
            </ListItem>
            <ListItem>
              <ListIcon />
              Teaching Valuable Pet Grooming Skills
            </ListItem>
          </List>
        </Flex>

        <Image
          border="4px solid" borderColor="black"
          borderRightRadius="25px"
          borderLeft="0px"
          boxSize='40vw'
          objectFit='cover'
          src="https://www.petplace.com/static/2c824019fbf728abad6de08c599ae955/949d7/hero-1.png"
          alt='Dan Abramov'
        />


      </Flex>

      <Footer />
    </Flex>
  )
}
