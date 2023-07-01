
import NextLink from 'next/link'

import { 
  Flex, Heading, Link, Box, Text, Grid, GridItem
 } from "@chakra-ui/react"

interface FooterProps {
}

export default function Header(props : FooterProps) {

    return (
        <Box>
            <Flex direction="column">
                <Flex direction="row" bg="gray.600" color="white" minH="250px" p="20px" gap="20px">
                    <Flex direction="column" height="100%" width="50%"> 
                        <Flex direction="column" width="75%" gap="10px">
                            <Heading size="lg">Companions For Life</Heading>
                            <Text fontSize="md">A description of the organization</Text>
                        </Flex>
                    </Flex>
                    <Flex direction="column" height="100%" width="25%" gap="10px"> 
                        <Heading size="lg">Site Links</Heading>
                        <Link 
                            maxW="200px"
                            as={NextLink}
                            href='/'
                            _hover={{
                            textDecoration: "none",
                            color: "red.600"
                            }}>
                            <Text fontSize="md" width="100px">
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
                            <Text fontSize="md">
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
                            <Text fontSize="md">
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
                            <Text fontSize="md">
                            Donate Page
                            </Text>
                        </Link>
                    </Flex>
                    <Flex direction="column" height="100%" width="25%" gap="10px"> 
                        <Heading size="lg">Contact Us</Heading>
                        <Text fontSize="md">dummyemail@gmail.com</Text>
                        <Text fontSize="md">+1-512-555-555</Text>
                        <Text fontSize="md">Instagram Link</Text>
                        <Text fontSize="md">LinkedIn Link</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}
