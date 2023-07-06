
import NextLink from 'next/link'

import { 
  Flex, Heading, Link, Box
 } from "@chakra-ui/react"

 import Lottie from "lottie-react";


import animationData from "../utils/2113-dog.json";


interface HeaderProps {
    isOnMission? : boolean,
    isOnAbout? : boolean,
    isOnContact? : boolean,
    isOnDonate? : boolean,
}

const style = {
    height: 100,
};

export default function Header(props : HeaderProps) {
    const { isOnMission, isOnAbout, isOnContact, isOnDonate } = props;

    return (
        <Box>
        <Flex direction="row" bg="brand.200" h="75px" align="center" px="20px" color="black" justify="center" py="50px" border="4px solid" borderColor="black" borderBottom="none" borderX="none">
            <Lottie animationData={animationData} loop={true} style={style} />

            <Heading as="h1" size="4xl">
            Companions For Life
            </Heading>

            <Lottie animationData={animationData} loop={true} style={style} />
        </Flex>

        <Flex direction="row" gap="50px" bg="white" justify="center" py="3" border="4px solid" borderColor="black" borderX="none">
            {!isOnMission && 
            <Link 
                as={NextLink}
                href='/'
                _hover={{
                textDecoration: "none",
                color: "red.600",
                }}>
                <Heading as="h1" size="md">
                Mission
                </Heading>
            </Link>
            }
            {isOnMission && 
            <Link 
                color="blue.600"
                _hover={{
                textDecoration: "none",
                }}>
                <Heading as="h1" size="md" fontWeight="900">
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
                color="blue.600"
                _hover={{
                textDecoration: "none",
                }}>
                <Heading as="h1" size="md" fontWeight="900">
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
                color="blue.600"
                _hover={{
                textDecoration: "none",
                }}>
                <Heading as="h1" size="md" fontWeight="900">
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
                color="blue.600"
                _hover={{
                textDecoration: "none",
                }}>
                <Heading as="h1" size="md" fontWeight="900">
                Donate
                </Heading>
            </Link>
            }
            </Flex>
        </Box>
    )
}
