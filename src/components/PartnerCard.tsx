
import NextLink from 'next/link'

import { 
  Flex, Heading, Link, Box, Text, Grid, GridItem, Card, CardBody, Image, chakra, Icon, Spacer
 } from "@chakra-ui/react"

import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaLink } from "react-icons/fa";

interface PartnerCardProps {
    name: string,
    description: string,
    imageLink: string,
    imageAltText: string,
    hasLink: boolean,
    link?: string,
}

export default function PartnerCard(props : PartnerCardProps) {
    const { name, description, imageLink, imageAltText, hasLink, link} = props;
    return (
        <Card maxW='xs' bg="white" border="4px solid" borderColor="black">
            <CardBody>
                <Image 
                src={imageLink}
                alt={imageAltText}
                borderRadius='lg'
                />
                <Flex direction="column" mt='6' gap='3'>
                    <Heading size='md' fontWeight="900">{name}</Heading>
                    <Text>{description}</Text>
                    <Flex direction="row" gap="5">
                        {hasLink &&
                            <chakra.a href={link} _hover={{color: "red.600"}} target='_blank'><Icon boxSize="40px" as={FaLink}/></chakra.a>
                        }
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    )
}
