import NextLink from 'next/link'

import Header from "../components/Header"
import Footer from "../components/Footer"

import rescues from "../utils/RescuesData"

import { 
  Flex, Heading, Link, Spacer, Image, Text, Box, Button, chakra, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Icon
 } from "@chakra-ui/react"

 import { FaPaw, FaInstagram, FaLink, FaLinkedin } from "react-icons/fa";
 import TeamCard from '@/components/TeamCard';
import PartnerCard from '@/components/PartnerCard';
import AnimalCard from '@/components/AnimalCard';

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

    return (
        <Flex direction="column" bg="red.100" minH="100vh">
            <Header isOnRescuesHome={true}/>

            <Flex direction="column" bg="white">
                <Flex direction="column" gap="5" bg="brand.300" p="10">
                    {rescuesData.length != 0 &&
                        <Heading size="3xl" fontWeight="900">Our Rescues</Heading>
                    }

                    <SimpleGrid minChildWidth='250px' spacing='40px'>
                        {
                            rescuesData.map((val : rescueStructure, ind)=>{
                                return (
                                <AnimalCard 
                                    key={ind}
                                    name={val.name}
                                    description={val.cardDesc}
                                    imageLink={val.imageLink}
                                    imageAltText={val.altImageText}
                                    link={"/rescues/"+encodeURIComponent(ind.toString())}
                                />
                                )
                            })
                        }
                    </SimpleGrid>

                    {rescuesData.length == 0 &&
                            <Flex direction="column" justify="center" align="center" mb="50vh">
                                <Heading size="4xl" fontWeight={"900"} color="red.600">Coming Soon!</Heading>
                            </Flex>
                    }
                </Flex>
            </Flex>

            <Footer/>
        </Flex>
    )
}
