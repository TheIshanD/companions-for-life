
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
  smallDesc: string,
  bigDesc: string,
  imageLink: string,
  altImageText: string,
}

export default function RescuesPage() {
  const rescuesData = rescues.rescues;
  const router = useRouter();

  const [loadContent, setLoadContent] = React.useState(false);
  
  var thisRescue : rescueStructure;

  if(typeof router.query.id === "string") {
    thisRescue = rescuesData[parseInt(router.query.id!)];
    if(loadContent==false) {
      setLoadContent(true)
    }
  }

  return (
    <Flex direction="column" bg="red.100" minH="100vh">
        <Header isOnRescues={true}/>

        <Flex direction="column" bg="white">
            {loadContent &&
              <Flex direction="column" gap="5" bg="brand.300" p="10" align="center" >
                <Flex direction="column" bg="brand.200" width="70%" align="center" p="20px" border="0px solid" borderColor="black" borderRadius="25px">
                  <Image display="block" width={["100%","100%","100%","60%"]} height="auto" src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg?w=400&h=300&c=crop" border="4px solid" borderColor="black" borderRadius="25px"/>
                </Flex>
                <Heading size="4xl" fontWeight="900">{thisRescue!.name}</Heading>
              </Flex>
            }
        </Flex>

        <Footer/>
    </Flex>
  )
}
