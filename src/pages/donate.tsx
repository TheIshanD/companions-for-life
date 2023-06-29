
import NextLink from 'next/link'

import Header from "../components/Header"
import Footer from "../components/Footer"

import { 
  Flex, Heading, Link, Spacer, Image, Text, Box, Button, chakra, Divider, RadioGroup, Radio, Tabs, TabList, TabPanels, Tab, TabPanel
 } from "@chakra-ui/react"

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ButtonWrapper from "../components/PayPalButton";

import ManAndDogAnimData from "../utils/dog-and-man.json";
import Lottie from "lottie-react";
import React from 'react';

const style = {
  height: 300,
};

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = React.useState("1.00");
  const [currency, setCurrency] = React.useState("USD")
  const currencies = ["USD", "EUR", "INR"];
  const onCurrencyChange = (index : number)=>{
    setCurrency(currencies[index])
  }

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
          width="60vw" 
          p="10"
          borderRadius="25px"
          >
            <Heading color="red.600">Donation Options</Heading>
            {/* <Text color="red.600" fontSize="xs">If donation options fail to load, try reloading the page</Text> */}
            <Divider mb="5"/>
            <Flex direction="column" mb="5">
              <Box>
                <Tabs variant='enclosed' onChange={onCurrencyChange}>
                  <TabList>
                    <Tab>USD $</Tab>
                    <Tab>EUR €</Tab>
                    <Tab>INR ₹</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Heading color="blue.600" size="md">Donation Amount: </Heading>
                      <RadioGroup onChange={setDonationAmount} value={donationAmount}>
                        <Flex direction='column'>
                          <Radio value="1.00">$1.00</Radio>
                          <Radio value="10.00">$10.00</Radio>
                          <Radio value="100.00">$100.00</Radio>
                          <Radio value="0.00">Custom InputBox Goes Here</Radio>
                        </Flex>
                      </RadioGroup>
                    </TabPanel>
                    <TabPanel>
                      <Heading color="blue.600" size="md">Donation Amount: </Heading>
                      <RadioGroup onChange={setDonationAmount} value={donationAmount}>
                        <Flex direction='column'>
                          <Radio value="1.00">€1.00</Radio>
                          <Radio value="10.00">€10.00</Radio>
                          <Radio value="100.00">€100.00</Radio>
                          <Radio value="0.00">Custom InputBox Goes Here</Radio>
                        </Flex>
                      </RadioGroup>
                    </TabPanel>
                    <TabPanel>
                      <Heading color="blue.600" size="md">Donation Amount: </Heading>
                      <RadioGroup onChange={setDonationAmount} value={donationAmount}>
                        <Flex direction='column'>
                          <Radio value="1.00">₹100</Radio>
                          <Radio value="10.00">₹1000</Radio>
                          <Radio value="100.00">₹10000</Radio>
                          <Radio value="0.00">Custom InputBox Goes Here</Radio>
                        </Flex>
                      </RadioGroup>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Flex>

            <PayPalScriptProvider options={{ clientId:"test", currency: currency }}>
              <PayPalButtons 
                // TODO: try adding label: 'donate' to style later
                style={{layout: "horizontal"}} 
                createOrder={(data, actions)=>{
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          currency_code: currency,
                          value: donationAmount
                        }
                      }
                    ]
                  })
                }}

                onApprove={(data, actions)=>{
                  return actions.order?.capture().then(function (details){
                    alert(
                      "Transaction completed by " + details.payer.name?.given_name)
                  })!
                }}
              />
            </PayPalScriptProvider>
          </Flex>
        </Flex>
        <Footer/>
    </Flex>
  )
}
