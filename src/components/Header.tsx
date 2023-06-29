
import NextLink from 'next/link'

import { 
  Flex, Heading, Link, Box
 } from "@chakra-ui/react"

interface HeaderProps {
    isOnMission? : boolean,
    isOnAbout? : boolean,
    isOnContact? : boolean,
    isOnDonate? : boolean,
}

export default function Header(props : HeaderProps) {
    const { isOnMission, isOnAbout, isOnContact, isOnDonate } = props;

    return (
        <Box>
        <Flex direction="row" bg="green.100" minW="100vw" h="75px" align="center" px="20px" color="black" justify="center" py="50px">
            <Heading as="h1" size="4xl">
            Companions For Life
            </Heading>
        </Flex>

        <Flex direction="row" gap="50px" bg="orange.100" justify="center" py="3">
            {!isOnMission && 
            <Link 
                as={NextLink}
                href='/'
                _hover={{
                textDecoration: "none",
                color: "red.600"
                }}>
                <Heading as="h1" size="md">
                Mission
                </Heading>
            </Link>
            }
            {isOnMission && 
            <Link 
                as={NextLink}
                href='/'
                color="blue.600"
                _hover={{
                textDecoration: "none",
                color: "red.600"
                }}>
                <Heading as="h1" size="md">
                Mission
                </Heading>
            </Link>
            }

            {!isOnAbout && 
            <Link 
                as={NextLink}
                href='/about'
                _hover={{
                textDecoration: "none",
                color: "red.600"
                }}>
                <Heading as="h1" size="md">
                The Team
                </Heading>
            </Link>
            }
            {isOnAbout && 
            <Link 
                as={NextLink}
                href='/about'
                color="blue.600"
                _hover={{
                textDecoration: "none",
                color: "red.600"
                }}>
                <Heading as="h1" size="md">
                The Team
                </Heading>
            </Link>
            }

            {!isOnContact && 
            <Link 
                as={NextLink}
                href='/contact'
                _hover={{
                textDecoration: "none",
                color: "red.600"
                }}>
                <Heading as="h1" size="md">
                Contact
                </Heading>
            </Link>
            }
            {isOnContact && 
            <Link 
                as={NextLink}
                href='/contact'
                color="blue.600"
                _hover={{
                textDecoration: "none",
                color: "red.600"
                }}>
                <Heading as="h1" size="md">
                Contact
                </Heading>
            </Link>
            }

            {!isOnDonate && 
            <Link 
                as={NextLink}
                href='/donate'
                _hover={{
                textDecoration: "none",
                color: "red.600"
                }}>
                <Heading as="h1" size="md">
                Donate
                </Heading>
            </Link>
            }
            {isOnDonate && 
            <Link 
                as={NextLink}
                href='/donate'
                color="blue.600"
                _hover={{
                textDecoration: "none",
                color: "red.600"
                }}>
                <Heading as="h1" size="md">
                Donate
                </Heading>
            </Link>
            }
            </Flex>
        </Box>
    )
}
