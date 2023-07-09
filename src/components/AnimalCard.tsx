
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
        <Card maxW="xs" bg="white" border="4px solid" borderColor="black" _hover={{bg: "red.100"}}>
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
