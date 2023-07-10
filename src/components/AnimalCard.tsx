
import NextLink from 'next/link'

import { 
  Flex, Heading, Link, Box, Text, Grid, GridItem, Card, CardBody, Image, chakra, Icon, Spacer
 } from "@chakra-ui/react"

import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaLink } from "react-icons/fa";

interface AnimalCardProps {
    name: string,
    description: string,
    imageLink: string,
    imageAltText: string,
    link?: string,
}

export default function AnimalCard(props : AnimalCardProps) {
    const { name, description, imageLink, imageAltText, link} = props;
    return (
        <Card maxW="xs" bg="brand.100" border="4px solid" borderColor="black" transition="0.25s" _hover={{borderTopColor: "red.600", bg: "white", boxShadow: "5px 2px 2px black"}}>
            <chakra.a display="inline-block" href={link}>
            <CardBody>
                <Image 
                src={imageLink}
                alt={imageAltText}
                borderRadius='lg'
                />
                <Flex direction="column" mt='6' gap='3'>
                    <Heading size='lg' fontWeight="900">{name}</Heading>
                    <Text>{description}</Text>
                </Flex>
            </CardBody>
            </chakra.a>
        </Card>
    )
}
