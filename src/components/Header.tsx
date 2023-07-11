
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
    isOnRescuesHome? : boolean,
    isOnRescuesPeripheral? : boolean,
}

const style = {
    height: 100,
};

export default function Header(props : HeaderProps) {
    const { isOnMission, isOnAbout, isOnContact, isOnDonate, isOnRescuesHome, isOnRescuesPeripheral } = props;

    return (
        <Box>
        <Flex direction="row" gap="30px" bg="brand.200" h="75px" align="center" px="20px" color="black" justify="center" py="50px" border="4px solid" borderColor="black" borderBottom="none" borderX="none">
            <Lottie animationData={animationData} loop={true} style={style} />

            <Heading as="h1" size={["xl","xl","xl","2xl"]} textAlign="center" fontWeight="900">
            Companions For Life
            </Heading>

            <Lottie animationData={animationData} loop={true} style={style} />
        </Flex>

        <Flex direction="row" align="center" gap={["10px","30px","40px","50px"]} bg="brand.100" justify="center" py="3" border="4px solid" borderColor="black" borderX="none" textAlign="center">
            {!isOnMission && 
            <Link 
                as={NextLink}
                href='/'
                _hover={{
                textDecoration: "none",
                color: "red.600",
                }}>
                <Heading as="h1" fontSize={["lg","lg","2xl"]}>
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
                <Heading as="h1" fontSize={["lg","lg","2xl"]} fontWeight="900">
                Mission
                </Heading>
            </Link>
            }

            {(!isOnRescuesHome && !isOnRescuesPeripheral) && 
            <Link 
                as={NextLink}
                href='/rescues'
                _hover={{
                textDecoration: "none",
                color: "red.600"
                }}>
                <Heading as="h1" fontSize={["lg","lg","2xl"]}>
                Rescues
                </Heading>
            </Link>
            }
            {isOnRescuesHome && 
            <Link 
                color="blue.600"
                _hover={{
                textDecoration: "none", 
                }}>
                <Heading as="h1" fontSize={["lg","lg","2xl"]} fontWeight="900">
                Rescues
                </Heading>
            </Link>
            }
            {isOnRescuesPeripheral && 
            <Link 
                as={NextLink}
                color="blue.600"
                href='/rescues'
                _hover={{
                textDecoration: "none", 
                color: "red.600"
                }}>
                <Heading as="h1" fontSize={["lg","lg","2xl"]} fontWeight="900">
                Rescues
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
                <Heading as="h1" fontSize={["lg","lg","2xl"]}>
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
                <Heading as="h1" fontSize={["lg","lg","2xl"]} fontWeight="900">
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
                <Heading as="h1" fontSize={["lg","lg","2xl"]}>
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
                <Heading as="h1" fontSize={["lg","lg","2xl"]} fontWeight="900">
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
                <Heading as="h1" fontSize={["lg","lg","2xl"]}>
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
                <Heading as="h1" fontSize={["lg","lg","2xl"]} fontWeight="900">
                Donate
                </Heading>
            </Link>
            }
            </Flex>
        </Box>
    )
}
