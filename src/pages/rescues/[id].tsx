
import NextLink from 'next/link'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

import { 
  Flex, Heading, Link, Spacer, Image, Text, Box, Button, chakra, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Icon
 } from "@chakra-ui/react"

 import { FaPaw, FaInstagram, FaLink, FaLinkedin } from "react-icons/fa";
 import TeamCard from '@/components/TeamCard';
import PartnerCard from '@/components/PartnerCard';
import AnimalCard from '@/components/AnimalCard';
import { useRouter } from 'next/router';

import rescues from "../../utils/RescuesData"
import React, { useEffect } from 'react';

interface rescueStructure {
  name: string,
  cardDesc: string,
  bigDesc: string,
  imageLink: string,
  altImageText: string,
  goingText: string,
  foundText: string,
  breedText: string,
  learnedText: string,
}

export default function RescuesPage() {
  const rescuesData = rescues.rescues;
  const router = useRouter();

  const [loadContent, setLoadContent] = React.useState(false);
  
  var thisRescue : rescueStructure;

  if(typeof router.query.id === "string") {
    const index = parseInt(router.query.id!)
    if(!isNaN(index) && index < rescuesData.length) {
      thisRescue = rescuesData[parseInt(router.query.id!)];
      if(loadContent==false) {
        setLoadContent(true)
      }
    }
  }

  return (
    <Flex direction="column" bg="red.100" minH="100vh">
        <Header isOnRescuesPeripheral={true}/>

        <Flex direction="column" bg="white">
            {loadContent &&
              <Flex direction={["column","column","row"]} gap="5" bg="brand.300" p="10" >
                <Flex direction="column" width={["100%","100%","50%"]} bg="brand.200" align="center" px={["0","10px","20px"]} py={["0","10px","20px","140px"]} border="0px solid" borderColor="black" borderRadius="25px">
                  <Image display="block" width={["100%","100%","100%"]} height={["auto","auto","auto"]} src={thisRescue!.imageLink} border="4px solid" borderColor="black" borderRadius="25px"/>
                </Flex>
                <Flex direction="column" textAlign="center" width={["100%","100%","50%"]} bg="brand.100" p="20px" border="4px solid" borderColor="black" borderRadius="25px">
                  <Flex direction="row" align="baseline" gap="20px">
                    <Heading size="3xl" fontWeight="900" textAlign="center">{thisRescue!.name}</Heading>
                    <Icon as={FaPaw} boxSize="3rem"/>
                  </Flex>

                  <Flex direction="column" textAlign="left" gap="40px" mt="50px">
                    <Flex direction="column">
                      <Heading size="lg">Where Am I <chakra.span color="red.600">Going?</chakra.span></Heading>
                      <Text fontSize="xl">{thisRescue!.goingText}</Text>
                    </Flex>
                    <Flex direction="column">
                      <Heading size="lg">How Was I <chakra.span color="blue.600">Found?</chakra.span></Heading>
                      <Text fontSize="xl">{thisRescue!.foundText}</Text>
                    </Flex>
                    <Flex direction="column">
                      <Heading size="lg">Whats My <chakra.span color="green.600">Breed?</chakra.span></Heading>
                      <Text fontSize="xl">{thisRescue!.breedText}</Text>
                    </Flex>
                    <Flex direction="column">
                      <Heading size="lg">What Have I <chakra.span color="yellow.600">Learned?</chakra.span></Heading>
                      <Text fontSize="xl">{thisRescue!.learnedText}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            }
            {!loadContent && <Flex direction="column" gap="5" bg="brand.300" p="10" align="center" height="100vh" />}
        </Flex>

        <Footer/>
    </Flex>
  )
}
