
import NextLink from 'next/link'

import Header from "../components/Header"
import Footer from "../components/Footer"

import { 
  Flex, Heading, Link, Spacer, Image, Text, Box, Button, chakra
 } from "@chakra-ui/react"

export default function AboutPage() {
  return (
    <Flex direction="column" bg="red.100" minH="100vh">
        <Header isOnAbout={true}/>

        <Footer/>
    </Flex>
  )
}
