
import NextLink from 'next/link'

import Header from "../components/Header"
import Footer from "../components/Footer"

import { FaCheck, FaPaw } from "react-icons/fa";

import { 
  Flex, Heading, Link, Spacer, Image, Text, Box, Button, chakra, List, ListItem, ListIcon, Icon
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
          bg="rgba(0,0,0,0.6)"

          width="100vw" 
          height="75vh" 
          backgroundSize="cover"

          color="white"

          align="center"
          justify="center"
          
          gap="2"
          
        >
          <Heading size="4xl" color="white" textAlign="center" fontWeight="900" textColor="brand.100">
            Transforming Lives
          </Heading>
          <Heading size="md" color="white" textAlign="center">
            One Animal, One Person, at a Time
          </Heading>
          <Text pb="10" fontSize="2xl">
            You can make a <chakra.span fontWeight="900" color="green.300">difference</chakra.span>
          </Text>

          <Flex direction={["column","column", "row"]} align="center" gap="5">
            <Link as={NextLink} href='/contact'>
              <Button colorScheme='blue' border="4px solid" borderColor="black" fontWeight="900">
                <Flex direction="row" gap="10px" align="end">
                  <Text>Partner With Us!</Text>
                  <Icon as={FaPaw} boxSize="20px"/>  
                </Flex>
              </Button>
            </Link>
            <Link as={NextLink} href='/contact'>
              <Button colorScheme='red' border="4px solid" borderColor="black" fontWeight="900">
                <Flex direction="row" gap="10px" align="end">
                  <Text>Join Our Team!</Text>
                  <Icon as={FaPaw} boxSize="20px"/>  
                </Flex>
              </Button>
            </Link>
            <Link as={NextLink} href='/donate'>
              <Button colorScheme="green" border="4px solid" borderColor="black" fontWeight="900">
                <Flex direction="row" gap="10px" align="end">
                  <Text>Donate Now!</Text>
                  <Icon as={FaPaw} boxSize="20px"/>  
                </Flex>
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>

      <Flex direction="row" bg="brand.100" justify="center" py="10" border="4px solid" borderColor="black" borderX="none">
        <Heading size="4xl" textAlign="center" fontWeight="900">
          Building a Community that Fosters <chakra.span color="red.600">Love</chakra.span>
        </Heading>
      </Flex>

      <Flex direction={["column","column","row"]} justify="center"
        bg="brand.200"
        backgroundSize="30px 30px"
        p={["0","0","0","40px"]}
        align="center"
      >
        <Flex direction={["column","column","column","row"]} justify="center"
        bg="brand.300"
        backgroundSize="30px 30px"
        align="center"
        borderRadius="25px"
        border={["none","none", "none", "4px solid"]}
        borderColor="black"
        >

          <Flex direction="column" width={["100vw","100vw","100vw", "60vw"]} minH={["0","0","0", "35vw"]} bg="brand.100" borderRadius={["0px","0px","0px", "25px"]} borderRightRadius={["0","0","0", "0"]} borderRight={["none","none","none", "4px solid"]} p="40px" borderColor="black">
            <Heading size="2xl" mb="2" fontWeight="900">A New Leash on Life</Heading>

            <Text fontSize="2xl" mb="8">We bring <chakra.span color="red.600" fontWeight="900">shelter animals</chakra.span>, fated to be <chakra.span color="black" fontWeight="900">euthanized</chakra.span>, to prisons, to be cared for by <chakra.span color="green.600" fontWeight="900">approved prisoners</chakra.span></Text>

            <List fontSize="2xl"  fontWeight="bold " spacing={5}>
              <ListItem>
                <ListIcon as={FaCheck} color="green.600"/>
                Improving Prison Quality of Life
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color="green.600"/>
                Saving Shelter Animals&apos; lives
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color="green.600"/>
                Reducing Recidivism Rates
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color="green.600"/>
                Teaching Valuable Pet Grooming Skills
              </ListItem>
            </List>
          </Flex>

          <Image
            borderY={["4px solid","4px solid","4px solid", "none"]}
            borderRightRadius={["0px","0px","0px", "25px"]}
            boxSize={["100vw","100vw","100vw", "35vw"]}
            objectFit='cover'
            src="https://www.petplace.com/static/2c824019fbf728abad6de08c599ae955/949d7/hero-1.png"
            alt='Dan Abramov'
          />

        </Flex>

      </Flex>

      <Footer />
    </Flex>
  )
}
