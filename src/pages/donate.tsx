
import NextLink from 'next/link'

import Header from "../components/Header"
import Footer from "../components/Footer"

import { 
  Flex, Heading, Link, Spacer, Image, Text, Box, Button, chakra, Divider, RadioGroup, Radio, Tabs, TabList, TabPanels, Tab, TabPanel, Input, NumberInput, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper, Icon, InputGroup, InputLeftElement, InputRightElement, FormControl, Checkbox
 } from "@chakra-ui/react"

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import ManAndDogAnimData from "../utils/dog-and-man.json";
import Lottie from "lottie-react";
import React from 'react';

const style = {
  height: 300,
};

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = React.useState(["1.00","1.00","100"]);
  const [currency, setCurrency] = React.useState("USD");
  const [donationPageIndex, setDonationPageIndex] = React.useState(0);
  const [customAmount, setCustomAmount] = React.useState(["0.00","0.00","0"])
  const [smallDonationError, SetSmallDonationError] = React.useState(false);

  const currencies = ["USD", "EUR", "INR"];
  const onCurrencyChange = (index : number)=>{
    setCurrency(currencies[index])
  }

  const OnCustomInputChanged = (event : any) => {

    const word : string = event.target.value;
    const value = (+word).toFixed(2);

    const tmpCustomVals = [...customAmount];
    tmpCustomVals[currencies.indexOf(currency)] = value;
    setCustomAmount(tmpCustomVals);
  }

  const computePaypalFee = (donation : number)=> {
    var percentFee = 0.0289
    var fixedFee = 0;
    //if international:
    if(currency!='USD') {
      percentFee += 0.015;
    }

    if(currency=="USD") {
      fixedFee=0.49;
    } else if (currency=="EUR") {
      fixedFee=0.39;
    }

    const totalFee = donation * percentFee + fixedFee;

    // return totalFee;
    return 0;
  } 

  const currencyInd = ()=>{return currencies.indexOf(currency)}
  const donationCode = ()=>{return donationAmount[currencyInd()]}
  const donationValue = ()=>{return donationCode()=="custom"?+customAmount[0]:+donationCode()}
  const currencySymbol = ()=>{return ["$","€","₹"][currencyInd()]}
  const totalPaymentVal = ()=>{return (computePaypalFee(donationValue()) + donationValue()).toFixed(2).toString()}

  const OnNextClicked = ()=> {
    const currVal = donationValue();

    if(currency=="USD" || currency=="EUR") {
      if(currVal < 1) {
        SetSmallDonationError(true);
      } else {
        setDonationPageIndex(donationPageIndex+1)
        SetSmallDonationError(false);
      }
    } else if (currency=="INR"){
      if(currVal < 100) {
        SetSmallDonationError(true);
      } else {
        setDonationPageIndex(donationPageIndex+1)
        SetSmallDonationError(false);
      }
    }
  }

  const onRadioChange = (val : string)=>{
    const tmpDonoAmt = [...donationAmount];
    tmpDonoAmt[currencyInd()] = val;
    setDonationAmount(tmpDonoAmt);
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
          minW="50vw" 
          p="10"
          borderRadius="25px"
          minH="65vh"
          >
            <Heading color="red.600">Donation Form</Heading>
            {/* <Text color="red.600" fontSize="xs">If donation options fail to load, try reloading the page</Text> */}
            <Divider mb="5"/>
            <Flex direction="column" mb="5" hidden={donationPageIndex!=0}>
              <Box>
                <Tabs variant='enclosed' onChange={onCurrencyChange} isFitted>
                  <TabList>
                    <Tab>USD $</Tab>
                    <Tab>EUR €</Tab>
                    {/* <Tab>INR ₹</Tab> */}
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Heading color="blue.600" size="md">Donation Amount: </Heading>
                      <RadioGroup onChange={(val)=>{onRadioChange(val)}} value={donationAmount[currencyInd()]}>
                        <Flex direction="column">
                          <Radio value="1.00">$1.00</Radio>
                          <Radio value="10.00">$10.00</Radio>
                          <Radio value="100.00">$100.00</Radio>
                          <Radio value="custom">Use Custom Donation:</Radio>

                          <InputGroup ml="5">
                          <InputLeftElement pointerEvents='none'>
                            <Icon color='gray.300' />
                          </InputLeftElement>

                            <Input
                              onChange={(event)=>{OnCustomInputChanged(event)}}
                              isDisabled={(donationCode() != "custom")}
                              defaultValue="0.00"
                              placeholder="Enter Donation Amount in US Dollars"
                              size="md"
                              type="number"  
                            />

                            <InputRightElement>
                              <Icon color='green.500' />
                            </InputRightElement>
                          </InputGroup>
                          {smallDonationError && <Text ml="5" fontSize="sm" color="red.600">Donation must be at least {currencySymbol()}1.00</Text>}
                        </Flex>

                      </RadioGroup>

                    </TabPanel>
                    {/* TODO: WORK ON THIS */}
                    <TabPanel>
                      <Heading color="blue.600" size="md">Donation Amount: </Heading>
                      <RadioGroup onChange={(val)=>{onRadioChange(val)}} value={donationAmount[currencyInd()]}>
                        <Flex direction='column'>
                          <Radio value="1.00">€1.00</Radio>
                          <Radio value="10.00">€10.00</Radio>
                          <Radio value="100.00">€100.00</Radio>
                          <Radio value="custom">Use Custom Donation:</Radio>

                          <InputGroup ml="5">
                          <InputLeftElement pointerEvents='none'>
                            <Icon color='gray.300' />
                          </InputLeftElement>

                            <Input
                              onChange={(event)=>{OnCustomInputChanged(event)}}
                              isDisabled={(donationCode() != "custom")}
                              defaultValue="0.00"
                              placeholder="Enter Donation Amount in Euros"
                              size="md"
                              type="number"  
                            />

                            <InputRightElement>
                              <Icon color='green.500' />
                            </InputRightElement>
                          </InputGroup>
                          {smallDonationError && <Text ml="5" fontSize="sm" color="red.600">Donation must be at least {currencySymbol()}1.00</Text>}

                        </Flex>
                      </RadioGroup>
                    </TabPanel>
                    <TabPanel>
                      <Heading color="blue.600" size="md">Donation Amount: </Heading>
                      <RadioGroup onChange={(val)=>{onRadioChange(val)}} value={donationAmount[currencyInd()]}>
                        <Flex direction='column'>
                          <Radio value="100">₹100</Radio>
                          <Radio value="1000">₹1000</Radio>
                          <Radio value="10000">₹10000</Radio>
                          <Radio value="custom">Use Custom Donation:</Radio>

                          <InputGroup ml="5">
                          <InputLeftElement pointerEvents='none'>
                            <Icon color='gray.300' />
                          </InputLeftElement>

                            <Input
                              onChange={(event)=>{OnCustomInputChanged(event)}}
                              isDisabled={(donationCode() != "custom")}
                              defaultValue="0.00"
                              placeholder="Enter Donation Amount in Indian Rupees"
                              size="md"
                              type="number"  
                            />

                            <InputRightElement>
                              <Icon color='green.500' />
                            </InputRightElement>
                          </InputGroup>
                          {smallDonationError && <Text ml="5" fontSize="sm" color="red.600">Donation must be at least {currencySymbol()}100</Text>}

                        </Flex>
                      </RadioGroup>
                    </TabPanel>
                  </TabPanels>
                </Tabs>

                <Checkbox defaultChecked>Cover Paypal's Donation Fee of ~{Intl.NumberFormat("en-US", {style: "currency", currency: currency}).format(computePaypalFee(donationValue()))} with
                       your {Intl.NumberFormat("en-US", {style: "currency", currency: currency}).format(donationValue())} donation</Checkbox>
              </Box>
            </Flex>

            <Flex direction="column" hidden={donationPageIndex!=1}>
              <Heading size="4xl" color="green" mb="5">{Intl.NumberFormat("en-US", {style: "currency", currency: currency}).format(+totalPaymentVal())}</Heading>
              <Heading size="lg">Pay Now</Heading>

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
                            value: totalPaymentVal(),
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

            <Spacer></Spacer>
            <Flex direction="row" gap="10"  mt="5">
              <Box width="50%" hidden={donationPageIndex!=0}/>
              <Button width="50%" colorScheme='yellow' hidden={donationPageIndex==0} onClick={()=>{setDonationPageIndex(donationPageIndex-1)}}>
                Back
              </Button>
              <Button width="50%" colorScheme='yellow' hidden={donationPageIndex==1} onClick={OnNextClicked}>
                Next
              </Button>
              <Box width="50%" hidden={donationPageIndex!=1}/>
            </Flex>
          </Flex>
        </Flex>
        <Footer/>
    </Flex>
  )
}
