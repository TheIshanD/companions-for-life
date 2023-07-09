
import NextLink from 'next/link'

import { 
  Flex, Heading, Link, Box, Text, Grid, GridItem, Card, CardBody, Image, chakra, Icon
 } from "@chakra-ui/react"

import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin } from "react-icons/fa";

interface TeamCardProps {
    name: string,
    description: string,
    imageLink: string,
    imageAltText: string,
    linkedinLink: string,
    instaLink: string,
}

export default function TeamCard(props : TeamCardProps) {
    const { name, description, imageLink, imageAltText, linkedinLink, instaLink} = props;
    return (
        <Card maxW={["xs","xs","sm"]} bg="white" border="4px solid" borderColor="black">
            <CardBody>
                <Image
                src={imageLink}
                alt={imageAltText}
                borderRadius='lg'
                />
                <Flex direction="column" mt='6' gap='3'>
                    <Heading size='lg' fontWeight="900">{name}</Heading>
                    <Text>{description}</Text>
                    <Flex direction="row" gap="5">
                        <chakra.a href={linkedinLink} _hover={{color: "red.600"}} target='_blank'><Icon boxSize="40px" as={FaLinkedin}/></chakra.a>
                        <chakra.a href={instaLink} _hover={{color: "red.600"}} target='_blank'><Icon boxSize="40px" as={FaInstagram}/></chakra.a>
                    </Flex>
                </Flex>`
            </CardBody>
        </Card>
    )
}
