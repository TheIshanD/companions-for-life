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



export default function RescuesPage() {
    const rescuesData = rescues.rescues;

    return (
        <Flex direction="column" bg="red.100" minH="100vh">
            <Header isOnRescues={true}/>

            <Flex direction="column" bg="white">
                <Flex direction="column" gap="5" bg="brand.300" p="10">
                <Heading size="3xl" fontWeight="900">Our Rescues</Heading>

                <SimpleGrid minChildWidth='250px' spacing='40px'>
                    {
                        rescuesData.map((val, ind)=>{
                            return (
                            <AnimalCard 
                                key={ind}
                                name={val.name}
                                description={val.smallDesc}
                                imageLink={val.imageLink}
                                imageAltText={val.altImageText}
                                link={"/rescues/"+encodeURIComponent(ind.toString())}
                            />
                            )
                        })
                    }
                </SimpleGrid>
                </Flex>
            </Flex>

            <Footer/>
        </Flex>
    )
}
