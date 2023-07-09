
import NextLink from 'next/link'

import { 
  Flex, Heading, Link, Box, Text, Grid, GridItem, chakra
 } from "@chakra-ui/react"

import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin } from "react-icons/fa";

interface FooterProps {
}

export default function Header(props : FooterProps) {

    return (
        <Box>
            <Flex direction="column" borderY="4px solid" borderColor="black">
                <Flex direction="row" bg="brand.600" color="#000000" minH="250px" p="20px" gap="20px" fontWeight="900">
                    <Flex direction="column" height="100%" width="50%"> 
                        <Flex direction="column" width="75%" gap="10px">
                            <Heading size={["sm","md","lg"]} fontWeight="900">Companions For Life</Heading>
                            <Text fontSize={["xs","sm","md"]}>A description of the organization</Text>
                        </Flex>
                    </Flex>
                    <Flex direction="column" height="100%" width="25%" gap="10px"> 
                        <Heading size={["sm","md","lg"]} fontWeight="900">Site Links</Heading>
                        <Link 
                            maxW="200px"
                            as={NextLink}
                            href='/'
                            _hover={{
                            textDecoration: "none",
                            color: "red.600"
                            }}>
                            <Text fontSize={["xs","sm","sm"]} width="100px">
                            Mission Page
                            </Text>
                        </Link>
                        <Link 
                            maxW="200px" 
                            as={NextLink}
                            href='/about'
                            _hover={{
                            textDecoration: "none",
                            color: "red.600"
                            }}>
                            <Text fontSize={["xs","sm","sm"]}>
                            The Team Page
                            </Text>
                        </Link>
                        <Link 
                            maxW="200px"
                            as={NextLink}
                            href='/contact'
                            _hover={{
                            textDecoration: "none",
                            color: "red.600"
                            }}>
                            <Text fontSize={["xs","sm","sm"]}>
                            Contact Us Page
                            </Text>
                        </Link>
                        <Link 
                            maxW="200px"
                            as={NextLink}
                            href='/donate'
                            _hover={{
                            textDecoration: "none",
                            color: "red.600"
                            }}>
                            <Text fontSize={["xs","sm","sm"]}>
                            Donate Page
                            </Text>
                        </Link>
                    </Flex>
                    <Flex direction="column" height="100%" width="25%" gap="10px"> 
                        <Heading size={["sm","md","lg"]} fontWeight="900">Contact Us</Heading>
                        <Flex direction="row" align="center" gap="10px">
                            <FaEnvelope />
                            <Text fontSize={["3xs","2xs","sm"]} overflowWrap="break-word">dummyemail@gmail.com</Text>
                        </Flex>
                        <Flex direction="row" align="center" gap="10px">
                            <FaPhone />
                            <Text fontSize={["xs","sm","sm"]}>1-512-555-555</Text>
                        </Flex>
                        <chakra.a href={"https://www.linkedin.com/"} _hover={{color: "red.600"}} target='_blank'>
                            <Flex direction="row" align="center" gap="10px">
                                <FaInstagram />
                                <Text fontSize={["xs","sm","sm"]}>Our Instagram</Text>
                            </Flex>
                        </chakra.a>
                        <chakra.a href={"https://www.instagram.com/"} _hover={{color: "red.600"}} target='_blank'>
                            <Flex direction="row" align="center" gap="10px">
                                <FaLinkedin />
                                <Text fontSize={["xs","sm","sm"]}>Our LinkedIn</Text>
                            </Flex>
                        </chakra.a>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}
