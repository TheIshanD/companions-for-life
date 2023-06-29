
import NextLink from 'next/link'

import Header from "../components/Header"
import Footer from "../components/Footer"

import { 
  Flex, Heading, Link, Spacer, Image, Text, Box, Button, chakra, Divider
 } from "@chakra-ui/react"

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ButtonWrapper from "../components/PayPalButton";

import ManAndDogAnimData from "../utils/dog-and-man.json";
import Lottie from "lottie-react";

const style = {
  height: 300,
};

const initialOptions = {
  clientId: "teewfwefwst",
  currency: "USD",
  intent: "capture",
};

export default function DonatePage() {
  return (
    <Flex direction="column" bg="red.100" minH="100vh">
        <Header isOnDonate={true}/>

        <Flex direction="row" justify="center" color="blue.600"
          background="radial-gradient(circle at 25px 25px, #000 4%, lightgreen 0%), radial-gradient(circle at 75px 75px, lightgray 2%, white 0%)"
          backgroundSize="30px 30px"
          p="10"
          
        >
          <Flex direction="column" width="70vw" bg="white" p="10" borderLeftRadius="25px" borderRightWidth="5px" borderRightColor="black">
            <Heading size="xl" mb="2">Where Does Your Money Go?</Heading>

            <Text fontSize="2xl" mb="16">We bring <chakra.span color="pink.600" fontWeight="extrabold">shelter animals</chakra.span>, fated to be <chakra.span color="black" fontWeight="extrabold">euthanized</chakra.span>, to prisons, to be cared for by <chakra.span color="green.600" fontWeight="extrabold">approved prisoners</chakra.span></Text>

            <Heading size="xl" mb="2">Ok But What does it do?</Heading>
            <Text fontSize="2xl">We bring <chakra.span color="pink.600" fontWeight="extrabold">shelter animals</chakra.span>, fated to be <chakra.span color="black" fontWeight="extrabold">euthanized</chakra.span>, to prisons, to be cared for by <chakra.span color="green.600" fontWeight="extrabold">approved prisoners</chakra.span></Text>
          </Flex>

          <Flex direction="column" width="30vw" bg="white" p="10" borderRightRadius="25px" borderLeftWidth="5px" borderLeftColor="black" align="center" justify="center">
            <Lottie animationData={ManAndDogAnimData} loop={true} style={style} />
          </Flex>
        </Flex>

        <Flex 
        direction="column" 
        background="radial-gradient(circle at 25px 25px, #000 4%, lightblue 0%), radial-gradient(circle at 75px 75px, lightgray 2%, white 0%)"
        backgroundSize="30px 30px"
        align="center" 
        p="5">
          <Flex 
          direction="column" 
          bg="white" 
          width="50vw" 
          height="90vh"
          p="10"
          borderRadius="25px"
          >
            <Heading color="red.600">Donation Options</Heading>
            <Text color="red.600" fontSize="xs">If they fail to load, try reloading the page</Text>
            <Divider />
            <PayPalScriptProvider
                options={{
                    "clientId": "test",
                    components: "buttons",
                    currency: "USD"
                }}
            >
                <ButtonWrapper
                    currency={"USD"}
                />
            </PayPalScriptProvider>
          </Flex>
        </Flex>
        <Footer/>
    </Flex>
  )
}
